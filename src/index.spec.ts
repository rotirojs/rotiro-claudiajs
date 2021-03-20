import { Api, ApiRequest } from 'rotiro';
import {addRoutes} from './index';

describe('Claudia Middleware', () => {
  let api: Api;
  beforeEach(() => {
    api = new Api();
    api.routes.add('ping', '/ping', {
      methods: {
        GET: {
          controller: (apiRequest: ApiRequest) => {
            apiRequest.send('Ping a ling');
          }
        }
      }
    });
  });
  it('Should just work ;-)', () => {
    addRoutes;
  });
});
