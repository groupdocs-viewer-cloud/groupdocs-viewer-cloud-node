/*
* The MIT License (MIT)
*
* Copyright (c) 2003-2021 Aspose Pty Ltd
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

import { IAuthentication, OAuth  } from "./auth";

/**
 * Words API configuration
 */
export class Configuration {
    /**
     * Authentication
     */
    public authentication: IAuthentication;

    /**
     * Application identifier (App SID)
     */
    public appSid: string;

    /**
     * Application private key (App Key)
     */
    public appKey: string;

    /**
     * API base URL, default is 'https://api.groupdocs.cloud'
     */
    public apiBaseUrl: string = "https://api.groupdocs.cloud";

    /**
     * Gets or sets the API version
     */
    public apiVersion: string = "/v2.0";

    /**
     *  When enabled all requests and responses are logged to console
     */
    public debugging: boolean;

    /**
     * @param appSid Application identifier (App SID)
     * @param appKey Application private key (App Key)
     */
    constructor(appSid: string, appKey: string) {
      
        this.appSid = appSid;
        this.appKey = appKey;

        this.authentication = new OAuth();
    }

    /**
     * Returns server url e.g "https://api.groupdocs.cloud/2.0"
     */ 
    public getServerUrl(): string {
        return this.apiBaseUrl + this.apiVersion;
    }
}
