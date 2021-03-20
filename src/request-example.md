# Example Request Received

The following request is passed from API Gateway via Claudia to the middleware function.

```JSON
{
    "v": 3,
    "rawBody": "",
    "normalizedHeaders": {
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "en-GB,en-US;q=0.9,en;q=0.8,pt;q=0.7",
        "cloudfront-forwarded-proto": "https",
        "cloudfront-is-desktop-viewer": "true",
        "cloudfront-is-mobile-viewer": "false",
        "cloudfront-is-smarttv-viewer": "false",
        "cloudfront-is-tablet-viewer": "false",
        "cloudfront-viewer-country": "GB",
        "host": "3cjka.execute-api.eu-west-1.amazonaws.com",
        "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
        "sec-ch-ua-mobile": "?0",
        "sec-fetch-dest": "document",
        "sec-fetch-mode": "navigate",
        "sec-fetch-site": "none",
        "sec-fetch-user": "?1",
        "upgrade-insecure-requests": "1",
        "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36",
        "via": "2.0 0015e7de850ab8064c13ee17fa.cloudfront.net (CloudFront)",
        "x-amz-cf-id": "MYMKW6oq6C4AX0-ALN5EzUiKBjme1OqqEty1TURdgjeQ==",
        "x-amzn-trace-id": "Root=1-6055ff5a-4e19288a4d3950a202",
        "x-forwarded-for": "86.9.71.74, 130.176.6.151",
        "x-forwarded-port": "443",
        "x-forwarded-proto": "https"
    },
    "lambdaContext": {
        "callbackWaitsForEmptyEventLoop": false,
        "functionVersion": "$LATEST",
        "functionName": "demo",
        "memoryLimitInMB": "256",
        "logGroupName": "/aws/lambda/demo",
        "logStreamName": "2021/03/20/[$LATEST]0995fadc384823b25f54d6f0657694",
        "invokedFunctionArn": "arn:aws:lambda:eu-west-1:5689208:function:demo:latest",
        "awsRequestId": "efdf8116-6a4e-4927-bba2-f173471cd"
    },
    "proxyRequest": {
        "resource": "/ping",
        "path": "/ping",
        "httpMethod": "GET",
        "headers": {
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8,pt;q=0.7",
            "CloudFront-Forwarded-Proto": "https",
            "CloudFront-Is-Desktop-Viewer": "true",
            "CloudFront-Is-Mobile-Viewer": "false",
            "CloudFront-Is-SmartTV-Viewer": "false",
            "CloudFront-Is-Tablet-Viewer": "false",
            "CloudFront-Viewer-Country": "GB",
            "Host": "3cjkd0maea.execute-api.eu-west-1.amazonaws.com",
            "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "none",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1",
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36",
            "Via": "2.0 0015e7de11b197850ab8064c13ee17fa.cloudfront.net (CloudFront)",
            "X-Amz-Cf-Id": "MYMKW6oq6Czsqb04AX0-ALN5EzUiKBjmedPeqt1OqqEty1TURdgjeQ==",
            "X-Amzn-Trace-Id": "Root=1-6055ff5a-474d083e19288a4d3950a202",
            "X-Forwarded-For": "86.9.71.74, 130.176.6.151",
            "X-Forwarded-Port": "443",
            "X-Forwarded-Proto": "https"
        },
        "multiValueHeaders": {
            "Accept": [
                "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9"
            ],
            "Accept-Encoding": [
                "gzip, deflate, br"
            ],
            "Accept-Language": [
                "en-GB,en-US;q=0.9,en;q=0.8,pt;q=0.7"
            ],
            "CloudFront-Forwarded-Proto": [
                "https"
            ],
            "CloudFront-Is-Desktop-Viewer": [
                "true"
            ],
            "CloudFront-Is-Mobile-Viewer": [
                "false"
            ],
            "CloudFront-Is-SmartTV-Viewer": [
                "false"
            ],
            "CloudFront-Is-Tablet-Viewer": [
                "false"
            ],
            "CloudFront-Viewer-Country": [
                "GB"
            ],
            "Host": [
                "3cjkd0maea.execute-api.eu-west-1.amazonaws.com"
            ],
            "sec-ch-ua": [
                "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\""
            ],
            "sec-ch-ua-mobile": [
                "?0"
            ],
            "sec-fetch-dest": [
                "document"
            ],
            "sec-fetch-mode": [
                "navigate"
            ],
            "sec-fetch-site": [
                "none"
            ],
            "sec-fetch-user": [
                "?1"
            ],
            "upgrade-insecure-requests": [
                "1"
            ],
            "User-Agent": [
                "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36"
            ],
            "Via": [
                "2.0 0015e7de11b197850ab8064c13ee17fa.cloudfront.net (CloudFront)"
            ],
            "X-Amz-Cf-Id": [
                "MYMKW6oq6Czsqb04AX0-ALN5EzUiKBjmedPeqt1OqqEty1TURdgjeQ=="
            ],
            "X-Amzn-Trace-Id": [
                "Root=1-6055ff5a-474d083e19288a4d3950a202"
            ],
            "X-Forwarded-For": [
                "86.9.71.74, 130.176.6.151"
            ],
            "X-Forwarded-Port": [
                "443"
            ],
            "X-Forwarded-Proto": [
                "https"
            ]
        },
        "queryStringParameters": null,
        "multiValueQueryStringParameters": null,
        "pathParameters": null,
        "stageVariables": {
            "true": "LqxA3OOHcP/afpAAIFymQwC2-tBJaYDMUXipVSC7cUQ=",
            "lambdaVersion": "latest"
        },
        "requestContext": {
            "resourceId": "yjb17i",
            "resourcePath": "/ping",
            "httpMethod": "GET",
            "extendedRequestId": "cfTWOEnIjoEFzIQ=",
            "requestTime": "20/Mar/2021:13:57:46 +0000",
            "path": "/latest/ping",
            "accountId": "562072892068",
            "protocol": "HTTP/1.1",
            "stage": "latest",
            "domainPrefix": "3cjkd0maea",
            "requestTimeEpoch": 1616248666934,
            "requestId": "a2f6a669-4e59-409f-b2dd-12abb1c86f64",
            "identity": {
                "cognitoIdentityPoolId": null,
                "accountId": null,
                "cognitoIdentityId": null,
                "caller": null,
                "sourceIp": "86.9.71.74",
                "principalOrgId": null,
                "accessKey": null,
                "cognitoAuthenticationType": null,
                "cognitoAuthenticationProvider": null,
                "userArn": null,
                "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36",
                "user": null
            },
            "domainName": "3cjkd0maea.execute-api.eu-west-1.amazonaws.com",
            "apiId": "3cjkd0maea"
        },
        "body": null,
        "isBase64Encoded": false
    },
    "queryString": {},
    "env": {
        "true": "LqxA3HcP/afpmQwC2-tBJaYDipVSC7cUQ=",
        "lambdaVersion": "latest"
    },
    "headers": {
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8,pt;q=0.7",
        "CloudFront-Forwarded-Proto": "https",
        "CloudFront-Is-Desktop-Viewer": "true",
        "CloudFront-Is-Mobile-Viewer": "false",
        "CloudFront-Is-SmartTV-Viewer": "false",
        "CloudFront-Is-Tablet-Viewer": "false",
        "CloudFront-Viewer-Country": "GB",
        "Host": "3cjkd0maea.execute-api.eu-west-1.amazonaws.com",
        "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
        "sec-ch-ua-mobile": "?0",
        "sec-fetch-dest": "document",
        "sec-fetch-mode": "navigate",
        "sec-fetch-site": "none",
        "sec-fetch-user": "?1",
        "upgrade-insecure-requests": "1",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36",
        "Via": "2.0 0015e7de11b197850ab8064c13ee17fa.cloudfront.net (CloudFront)",
        "X-Amz-Cf-Id": "MYMKW6Czsqb04AX0-ALN5EzUiKBPeqt1Oqty1TURdgjeQ==",
        "X-Amzn-Trace-Id": "Root=1-6055ff5a-474d083e19288a4d3950a202",
        "X-Forwarded-For": "86.9.71.74, 130.176.6.151",
        "X-Forwarded-Port": "443",
        "X-Forwarded-Proto": "https"
    },
    "pathParams": {},
    "body": "",
    "context": {
        "method": "GET",
        "path": "/ping",
        "stage": "latest",
        "sourceIp": "86.9.71.74",
        "accountId": null,
        "user": null,
        "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36",
        "userArn": null,
        "caller": null,
        "authorizerPrincipalId": null,
        "cognitoAuthenticationProvider": null,
        "cognitoAuthenticationType": null,
        "cognitoIdentityId": null,
        "cognitoIdentityPoolId": null
    }
}
```
