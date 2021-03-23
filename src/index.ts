import ApiBuilder from 'claudia-api-builder';
import { Api, RequestDetail, RotiroMiddleware, SendResponse } from 'rotiro';
import { replaceVariables } from './utils';

export function addRoutes(apiBuilder: ApiBuilder, api: Api) {
  const routesAndMethods = api.endpoints.getRoutesAndMethods();
  for (const item of routesAndMethods) {
    const endpoint = api.endpoints.get(item.routeName);
    for (const method of item.methods) {
      let apiBuildAction: any;
      switch (method.toLowerCase()) {
        case 'put':
          apiBuildAction = apiBuilder.put;
          break;
        case 'patch':
          apiBuildAction = apiBuilder.patch;
          break;
        case 'post':
          apiBuildAction = apiBuilder.post;
          break;
        case 'delete':
          apiBuildAction = apiBuilder.delete;
          break;
        default:
          apiBuildAction = apiBuilder.get;
          break;
      }

      apiBuildAction.call(
        undefined,
        replaceVariables(endpoint.path),
        async (request: any) => {
          let apiResponse: any;

          const sendResponse: SendResponse = (
            body: any,
            status?: number,
            contentType?: string
          ) => {
            apiResponse = new ApiBuilder.ApiResponse(
              body,
              { 'X-Version': `${status}`, 'Content-Type': contentType },
              status
            );
          };
          const middleware: RotiroMiddleware = new ClaudiaMiddleware(
            sendResponse,
            request
          );

          await Api.handleRequest(api, middleware);
          return (
            apiResponse ||
            new ApiBuilder.ApiResponse(
              'Server Error',
              { 'X-Version': `500`, 'Content-Type': 'text/plain' },
              500
            )
          );
        }
      );
    }
  }
}

class ClaudiaMiddleware implements RotiroMiddleware {
  private readonly _requestDetail: RequestDetail;

  constructor(private readonly createResponse: SendResponse, request: any) {
    this._requestDetail = {
      body: request.rawBody,
      headers: request.headers || {},
      method: request.context.method,
      url: request.context.path,
      meta: { claudiaRequest: request }
    };
  }

  public get requestDetail(): RequestDetail {
    return this._requestDetail;
  }

  sendResponse(body: any, status?: number, contentType?: string): void {
    this.createResponse(body, status, contentType);
  }
}
