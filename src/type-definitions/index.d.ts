/* tslint:disable:max-classes-per-file */
declare module 'claudia-api-builder' {
    class ApiResponse {
        public constructor(response: any, headers: any, code?: any);
    }
    export default class ApiBuilder {
        public static ApiResponse: typeof ApiResponse;
        public get(uri: string, callback: (request:any) => void, options?: any): void;
        public put(uri: string, callback: (request:any) => void): void;
        public post(uri: string, callback: (request:any) => void): void;
        public patch(uri: string, callback: (request:any) => void): void;
        public delete(uri: string, callback: (request:any) => void): void;
    }
}
