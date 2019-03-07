/*
* The MIT License (MIT)
*
* Copyright (c) 2003-2019 Aspose Pty Ltd
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/

import request = require("request");
import requestDebug = require("request-debug");
import { Configuration } from "./configuration";
import { PackageVersion } from "./package_version";

/**
 * Invoke api method
 * @param requestOptions Request parameters
 * @param config Configuration
 * @param skipAuth If enabled, auth is not applied to request
 */
export async function invokeApiMethod(requestOptions: request.Options, config: Configuration, skipAuth?: boolean): Promise<request.RequestResponse> {
        return await invokeApiMethodInternal(requestOptions, config, skipAuth);
}

/**
 * Add parameter to query
 * @param url url
 * @param queryParameters queryParameters
 * @param parameterName parameterName
 * @param parameterValue parameterValue
 */
export function addQueryParameterToUrl(url, queryParameters, parameterName, parameterValue) {
    if (parameterValue !== undefined) {
        if (url.indexOf("{" + parameterName + "}") >= 0) {
            url = url.replace("{" + parameterName + "}", String(parameterValue));
        } else {
            queryParameters[parameterName] = String(parameterValue);
        }
    } else {
        url = url.replace("/{" + parameterName + "}", "");
    }

    return url;
}

/**
 * Invoke api method
 * @param requestOptions request parameters
 * @param config Configuration
 * @param skipAuth If enabled, auth is not applied to request
 */
async function invokeApiMethodInternal(requestOptions: request.Options, config: Configuration, skipAuth?: boolean): Promise<request.RequestResponse> {
    if (config.debugging === true) {
        requestDebug(request, (type, data) => {
            const toLog = {};
            toLog[type] = data;
            console.log(JSON.stringify(toLog, undefined, 2));
        });
    }

    if (!requestOptions.headers) {
        requestOptions.headers = {};
    }

    requestOptions.headers["x-groupdocs-client"] = "node.js sdk";
    requestOptions.headers["x-groupdocs-client-version"] = PackageVersion;

    const auth = config.authentication;
    if (!skipAuth) {
        await auth.applyToRequest(requestOptions, config);
    }

    return new Promise<request.RequestResponse>((resolve, reject) => {
        request(requestOptions, async (error, response) => {
            if (error) {
                reject(error);
            } else {
                if (response.statusCode >= 200 && response.statusCode <= 299) {
                    resolve(response);
                } else {
                    try {
                        let bodyContent = response.body;
                        if (bodyContent instanceof Buffer) {
                            bodyContent = JSON.parse(bodyContent.toString("utf8"));
                        }
                        if (bodyContent.error) {
                            reject({ message: bodyContent.error, code: response.statusCode });
                        } else if (bodyContent.Error) {
                            reject({ message: bodyContent.Error.Message, code: response.statusCode });
                        }
                    } catch (error) {
                        reject({ message: "Error while parse server error: " + error });
                    }
                }
            }
        });
    });
}
