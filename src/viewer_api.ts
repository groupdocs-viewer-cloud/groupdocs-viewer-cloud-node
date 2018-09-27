/*
* The MIT License (MIT)
*
* Copyright (c) 2003-2018 Aspose Pty Ltd
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

import http = require("http");
import request = require("request");

import { addQueryParameterToUrl, invokeApiMethod } from "./api_client";
import { Configuration } from "./configuration";
import * as model from "./model";
import { Serializer } from "./serializer";

export * from "./model";
export * from "./configuration";

/**
 * GroupDocs.Viewer Cloud API 
 */
export class ViewerApi {
    
    /**
     * Creates new instance of ViewerApi
     * @param appSid Application identifier (App SID).
     * @param appKey Application private key (App Key).
     */
    public static fromKeys(appSid: string, appKey: string) {
        const config = new Configuration(appSid, appKey);
        return new ViewerApi(config);
    }

    /**
     * Creates new instance of ViewerApi
     * @param config API configuration.
     */
    public static fromConfig(config: Configuration) {
        return new ViewerApi(config);
    }

    /**
     * Configuration
     */
    private configuration: Configuration;

    /**
     * @param config Configuration.
     */
    private constructor(config: Configuration) {
        this.configuration = config;
    }

    /**
     * Removes fonts cache.
     * @param requestObj contains request parameters
     */
    public async deleteFontsCache(): Promise<http.ClientResponse> {

        const localVarPath = this.configuration.getServerUrl() + "/viewer/fonts/cache";
        const queryParameters: any = {};
        
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * List installed fonts.
     * @param requestObj contains request parameters
     */
    public async getFonts(): Promise<model.FontCollection> {

        const localVarPath = this.configuration.getServerUrl() + "/viewer/fonts";
        const queryParameters: any = {};
        
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.body, "FontCollection");
        return Promise.resolve(result);
    }

    /**
     * Retrieves list of supported file formats.
     * @param requestObj contains request parameters
     */
    public async getSupportedFileFormats(): Promise<model.FormatCollection> {

        const localVarPath = this.configuration.getServerUrl() + "/viewer/formats";
        const queryParameters: any = {};
        
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.body, "FormatCollection");
        return Promise.resolve(result);
    }

    /**
     * Creates attachment cache. 
     * @param requestObj contains request parameters
     */
    public async htmlCreateAttachmentPagesCache(requestObj: model.HtmlCreateAttachmentPagesCacheRequest): Promise<model.HtmlAttachmentPageCollection> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling htmlCreateAttachmentPagesCache.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/viewer/{fileName}/html/attachments/{attachmentName}/pages"
            .replace("{" + "fileName" + "}", String(requestObj.fileName))
            .replace("{" + "attachmentName" + "}", String(requestObj.attachmentName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.fileName' is not null or undefined
        if (requestObj.fileName === null || requestObj.fileName === undefined) {
            throw new Error('Required parameter "requestObj.fileName" was null or undefined when calling htmlCreateAttachmentPagesCache.');
        }

        // verify required parameter 'requestObj.attachmentName' is not null or undefined
        if (requestObj.attachmentName === null || requestObj.attachmentName === undefined) {
            throw new Error('Required parameter "requestObj.attachmentName" was null or undefined when calling htmlCreateAttachmentPagesCache.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", requestObj.fontsFolder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: Serializer.serialize(requestObj.htmlOptions, requestObj.htmlOptions.constructor.name === "Object" ? "HtmlOptions" : requestObj.htmlOptions.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.body, "HtmlAttachmentPageCollection");
        return Promise.resolve(result);
    }

    /**
     * Creates document pages as HTML and saves them in cache. Pages created before will be removed from cache.
     * @param requestObj contains request parameters
     */
    public async htmlCreatePagesCache(requestObj: model.HtmlCreatePagesCacheRequest): Promise<model.HtmlPageCollection> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling htmlCreatePagesCache.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/viewer/{fileName}/html/pages"
            .replace("{" + "fileName" + "}", String(requestObj.fileName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.fileName' is not null or undefined
        if (requestObj.fileName === null || requestObj.fileName === undefined) {
            throw new Error('Required parameter "requestObj.fileName" was null or undefined when calling htmlCreatePagesCache.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", requestObj.fontsFolder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: Serializer.serialize(requestObj.htmlOptions, requestObj.htmlOptions.constructor.name === "Object" ? "HtmlOptions" : requestObj.htmlOptions.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.body, "HtmlPageCollection");
        return Promise.resolve(result);
    }

    /**
     * Creates posted document pages as HTML and saves them in cache. Content with document or multipart content is expected where first part is document and second is HtmlOptions. Saves retrieved file in storage. Use fileName and folder parameters to specify desired file name and folder to save file. When file with specified name already exists in storage new unique file name will be used for file.
     * @param requestObj contains request parameters
     */
    public async htmlCreatePagesCacheFromContent(requestObj: model.HtmlCreatePagesCacheFromContentRequest): Promise<model.HtmlPageCollection> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling htmlCreatePagesCacheFromContent.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/viewer/html/pages";
        const queryParameters: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.file' is not null or undefined
        if (requestObj.file === null || requestObj.file === undefined) {
            throw new Error('Required parameter "requestObj.file" was null or undefined when calling htmlCreatePagesCacheFromContent.');
        }

        // verify required parameter 'requestObj.htmlOptions' is not null or undefined
        if (requestObj.htmlOptions === null || requestObj.htmlOptions === undefined) {
            throw new Error('Required parameter "requestObj.htmlOptions" was null or undefined when calling htmlCreatePagesCacheFromContent.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fileName", requestObj.fileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", requestObj.fontsFolder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        if (requestObj.file !== undefined) {
            formParams.File = requestObj.file;
        }

        if (requestObj.htmlOptions !== undefined) {
            formParams.HtmlOptions = requestObj.htmlOptions;
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        (requestOptions as any).formData = formParams;        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.body, "HtmlPageCollection");
        return Promise.resolve(result);
    }

    /**
     * Creates pages as HTML and saves them in cache for document at provided URL. Retrieves file from specified URL and tries to detect file type when fileName parameter is not specified. Saves retrieved file in storage. Use fileName and folder parameters to specify desired file name and folder to save file. When file with specified name already exists in storage new unique file name will be used for file.
     * @param requestObj contains request parameters
     */
    public async htmlCreatePagesCacheFromUrl(requestObj: model.HtmlCreatePagesCacheFromUrlRequest): Promise<model.HtmlPageCollection> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling htmlCreatePagesCacheFromUrl.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/viewer/html/pages";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.url' is not null or undefined
        if (requestObj.url === null || requestObj.url === undefined) {
            throw new Error('Required parameter "requestObj.url" was null or undefined when calling htmlCreatePagesCacheFromUrl.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "url", requestObj.url);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fileName", requestObj.fileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", requestObj.fontsFolder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: Serializer.serialize(requestObj.htmlOptions, requestObj.htmlOptions.constructor.name === "Object" ? "HtmlOptions" : requestObj.htmlOptions.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.body, "HtmlPageCollection");
        return Promise.resolve(result);
    }

    /**
     * Creates PDF document.  Removes PDF document if it was created before.
     * @param requestObj contains request parameters
     */
    public async htmlCreatePdfFile(requestObj: model.HtmlCreatePdfFileRequest): Promise<model.PdfFileInfo> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling htmlCreatePdfFile.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/viewer/{fileName}/html/pdf"
            .replace("{" + "fileName" + "}", String(requestObj.fileName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.fileName' is not null or undefined
        if (requestObj.fileName === null || requestObj.fileName === undefined) {
            throw new Error('Required parameter "requestObj.fileName" was null or undefined when calling htmlCreatePdfFile.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", requestObj.fontsFolder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: Serializer.serialize(requestObj.pdfFileOptions, requestObj.pdfFileOptions.constructor.name === "Object" ? "PdfFileOptions" : requestObj.pdfFileOptions.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.body, "PdfFileInfo");
        return Promise.resolve(result);
    }

    /**
     * Creates PDF document from document passed in request body and saves it in cache. Content with document or multipart content is expected where first part is document and second is PdfFileOptions. Saves retrieved file in storage. Use fileName and folder parameters to specify desired file name and folder to save file. When file with specified name already exists in storage new unique file name will be used for file.
     * @param requestObj contains request parameters
     */
    public async htmlCreatePdfFileFromContent(requestObj: model.HtmlCreatePdfFileFromContentRequest): Promise<model.PdfFileInfo> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling htmlCreatePdfFileFromContent.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/viewer/html/pdf";
        const queryParameters: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.file' is not null or undefined
        if (requestObj.file === null || requestObj.file === undefined) {
            throw new Error('Required parameter "requestObj.file" was null or undefined when calling htmlCreatePdfFileFromContent.');
        }

        // verify required parameter 'requestObj.pdfFileOptions' is not null or undefined
        if (requestObj.pdfFileOptions === null || requestObj.pdfFileOptions === undefined) {
            throw new Error('Required parameter "requestObj.pdfFileOptions" was null or undefined when calling htmlCreatePdfFileFromContent.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fileName", requestObj.fileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", requestObj.fontsFolder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        if (requestObj.file !== undefined) {
            formParams.File = requestObj.file;
        }

        if (requestObj.pdfFileOptions !== undefined) {
            formParams.PdfFileOptions = requestObj.pdfFileOptions;
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        (requestOptions as any).formData = formParams;        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.body, "PdfFileInfo");
        return Promise.resolve(result);
    }

    /**
     * Creates PDF document for document at provided URL and saves it in cache.  Retrieves file from specified URL and tries to detect file type when fileName parameter is not specified. Saves retrieved file in storage. Use fileName and folder parameters to specify desired file name and folder to save file. When file with specified name already exists in storage new unique file name will be used for file. Expects PdfFileOptions object data in request body.
     * @param requestObj contains request parameters
     */
    public async htmlCreatePdfFileFromUrl(requestObj: model.HtmlCreatePdfFileFromUrlRequest): Promise<model.PdfFileInfo> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling htmlCreatePdfFileFromUrl.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/viewer/html/pdf";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.url' is not null or undefined
        if (requestObj.url === null || requestObj.url === undefined) {
            throw new Error('Required parameter "requestObj.url" was null or undefined when calling htmlCreatePdfFileFromUrl.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "url", requestObj.url);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fileName", requestObj.fileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", requestObj.fontsFolder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: Serializer.serialize(requestObj.pdfFileOptions, requestObj.pdfFileOptions.constructor.name === "Object" ? "PdfFileOptions" : requestObj.pdfFileOptions.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.body, "PdfFileInfo");
        return Promise.resolve(result);
    }

    /**
     * Removes attachment cache.
     * @param requestObj contains request parameters
     */
    public async htmlDeleteAttachmentPagesCache(requestObj: model.HtmlDeleteAttachmentPagesCacheRequest): Promise<http.ClientResponse> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling htmlDeleteAttachmentPagesCache.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/viewer/{fileName}/html/attachments/{attachmentName}/pages/cache"
            .replace("{" + "fileName" + "}", String(requestObj.fileName))
            .replace("{" + "attachmentName" + "}", String(requestObj.attachmentName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.fileName' is not null or undefined
        if (requestObj.fileName === null || requestObj.fileName === undefined) {
            throw new Error('Required parameter "requestObj.fileName" was null or undefined when calling htmlDeleteAttachmentPagesCache.');
        }

        // verify required parameter 'requestObj.attachmentName' is not null or undefined
        if (requestObj.attachmentName === null || requestObj.attachmentName === undefined) {
            throw new Error('Required parameter "requestObj.attachmentName" was null or undefined when calling htmlDeleteAttachmentPagesCache.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Removes document cache.
     * @param requestObj contains request parameters
     */
    public async htmlDeletePagesCache(requestObj: model.HtmlDeletePagesCacheRequest): Promise<http.ClientResponse> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling htmlDeletePagesCache.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/viewer/{fileName}/html/pages/cache"
            .replace("{" + "fileName" + "}", String(requestObj.fileName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.fileName' is not null or undefined
        if (requestObj.fileName === null || requestObj.fileName === undefined) {
            throw new Error('Required parameter "requestObj.fileName" was null or undefined when calling htmlDeletePagesCache.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Downloads attachment.
     * @param requestObj contains request parameters
     */
    public async htmlGetAttachment(requestObj: model.HtmlGetAttachmentRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling htmlGetAttachment.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/viewer/{fileName}/html/attachments/{attachmentName}"
            .replace("{" + "fileName" + "}", String(requestObj.fileName))
            .replace("{" + "attachmentName" + "}", String(requestObj.attachmentName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.fileName' is not null or undefined
        if (requestObj.fileName === null || requestObj.fileName === undefined) {
            throw new Error('Required parameter "requestObj.fileName" was null or undefined when calling htmlGetAttachment.');
        }

        // verify required parameter 'requestObj.attachmentName' is not null or undefined
        if (requestObj.attachmentName === null || requestObj.attachmentName === undefined) {
            throw new Error('Required parameter "requestObj.attachmentName" was null or undefined when calling htmlGetAttachment.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.body, "Buffer");
        return Promise.resolve(result);
    }

    /**
     * Retrieves attachment information.
     * @param requestObj contains request parameters
     */
    public async htmlGetAttachmentInfo(requestObj: model.HtmlGetAttachmentInfoRequest): Promise<model.DocumentInfo> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling htmlGetAttachmentInfo.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/viewer/{fileName}/html/attachments/{attachmentName}/info"
            .replace("{" + "fileName" + "}", String(requestObj.fileName))
            .replace("{" + "attachmentName" + "}", String(requestObj.attachmentName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.fileName' is not null or undefined
        if (requestObj.fileName === null || requestObj.fileName === undefined) {
            throw new Error('Required parameter "requestObj.fileName" was null or undefined when calling htmlGetAttachmentInfo.');
        }

        // verify required parameter 'requestObj.attachmentName' is not null or undefined
        if (requestObj.attachmentName === null || requestObj.attachmentName === undefined) {
            throw new Error('Required parameter "requestObj.attachmentName" was null or undefined when calling htmlGetAttachmentInfo.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "attachmentPassword", requestObj.attachmentPassword);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.body, "DocumentInfo");
        return Promise.resolve(result);
    }

    /**
     * Retrieves attachment information with specified DocumentInfoOptions. Expects DocumentInfoOptions object data in request body.
     * @param requestObj contains request parameters
     */
    public async htmlGetAttachmentInfoWithOptions(requestObj: model.HtmlGetAttachmentInfoWithOptionsRequest): Promise<model.DocumentInfo> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling htmlGetAttachmentInfoWithOptions.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/viewer/{fileName}/html/attachments/{attachmentName}/info"
            .replace("{" + "fileName" + "}", String(requestObj.fileName))
            .replace("{" + "attachmentName" + "}", String(requestObj.attachmentName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.fileName' is not null or undefined
        if (requestObj.fileName === null || requestObj.fileName === undefined) {
            throw new Error('Required parameter "requestObj.fileName" was null or undefined when calling htmlGetAttachmentInfoWithOptions.');
        }

        // verify required parameter 'requestObj.attachmentName' is not null or undefined
        if (requestObj.attachmentName === null || requestObj.attachmentName === undefined) {
            throw new Error('Required parameter "requestObj.attachmentName" was null or undefined when calling htmlGetAttachmentInfoWithOptions.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: Serializer.serialize(requestObj.documentInfoOptions, requestObj.documentInfoOptions.constructor.name === "Object" ? "DocumentInfoOptions" : requestObj.documentInfoOptions.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.body, "DocumentInfo");
        return Promise.resolve(result);
    }

    /**
     * Downloads attachment page as HTML.
     * @param requestObj contains request parameters
     */
    public async htmlGetAttachmentPage(requestObj: model.HtmlGetAttachmentPageRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling htmlGetAttachmentPage.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/viewer/{fileName}/html/attachments/{attachmentName}/pages/{pageNumber}"
            .replace("{" + "fileName" + "}", String(requestObj.fileName))
            .replace("{" + "attachmentName" + "}", String(requestObj.attachmentName))
            .replace("{" + "pageNumber" + "}", String(requestObj.pageNumber));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.fileName' is not null or undefined
        if (requestObj.fileName === null || requestObj.fileName === undefined) {
            throw new Error('Required parameter "requestObj.fileName" was null or undefined when calling htmlGetAttachmentPage.');
        }

        // verify required parameter 'requestObj.attachmentName' is not null or undefined
        if (requestObj.attachmentName === null || requestObj.attachmentName === undefined) {
            throw new Error('Required parameter "requestObj.attachmentName" was null or undefined when calling htmlGetAttachmentPage.');
        }

        // verify required parameter 'requestObj.pageNumber' is not null or undefined
        if (requestObj.pageNumber === null || requestObj.pageNumber === undefined) {
            throw new Error('Required parameter "requestObj.pageNumber" was null or undefined when calling htmlGetAttachmentPage.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "resourcePath", requestObj.resourcePath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "ignoreResourcePathInResources", requestObj.ignoreResourcePathInResources);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "embedResources", requestObj.embedResources);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "enableMinification", requestObj.enableMinification);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "enableResponsiveRendering", requestObj.enableResponsiveRendering);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "excludeFonts", requestObj.excludeFonts);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "renderComments", requestObj.renderComments);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "renderHiddenPages", requestObj.renderHiddenPages);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "attachmentPassword", requestObj.attachmentPassword);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "defaultFontName", requestObj.defaultFontName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", requestObj.fontsFolder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.body, "Buffer");
        return Promise.resolve(result);
    }

    /**
     * Downloads HTML page resource (image, style, graphics or font).
     * @param requestObj contains request parameters
     */
    public async htmlGetAttachmentPageResource(requestObj: model.HtmlGetAttachmentPageResourceRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling htmlGetAttachmentPageResource.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/viewer/{fileName}/html/attachments/{attachmentName}/pages/{pageNumber}/resources/{resourceName}"
            .replace("{" + "fileName" + "}", String(requestObj.fileName))
            .replace("{" + "attachmentName" + "}", String(requestObj.attachmentName))
            .replace("{" + "pageNumber" + "}", String(requestObj.pageNumber))
            .replace("{" + "resourceName" + "}", String(requestObj.resourceName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.fileName' is not null or undefined
        if (requestObj.fileName === null || requestObj.fileName === undefined) {
            throw new Error('Required parameter "requestObj.fileName" was null or undefined when calling htmlGetAttachmentPageResource.');
        }

        // verify required parameter 'requestObj.attachmentName' is not null or undefined
        if (requestObj.attachmentName === null || requestObj.attachmentName === undefined) {
            throw new Error('Required parameter "requestObj.attachmentName" was null or undefined when calling htmlGetAttachmentPageResource.');
        }

        // verify required parameter 'requestObj.pageNumber' is not null or undefined
        if (requestObj.pageNumber === null || requestObj.pageNumber === undefined) {
            throw new Error('Required parameter "requestObj.pageNumber" was null or undefined when calling htmlGetAttachmentPageResource.');
        }

        // verify required parameter 'requestObj.resourceName' is not null or undefined
        if (requestObj.resourceName === null || requestObj.resourceName === undefined) {
            throw new Error('Required parameter "requestObj.resourceName" was null or undefined when calling htmlGetAttachmentPageResource.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.body, "Buffer");
        return Promise.resolve(result);
    }

    /**
     * Retrieves attachment pages as HTML.
     * @param requestObj contains request parameters
     */
    public async htmlGetAttachmentPages(requestObj: model.HtmlGetAttachmentPagesRequest): Promise<model.HtmlAttachmentPageCollection> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling htmlGetAttachmentPages.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/viewer/{fileName}/html/attachments/{attachmentName}/pages"
            .replace("{" + "fileName" + "}", String(requestObj.fileName))
            .replace("{" + "attachmentName" + "}", String(requestObj.attachmentName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.fileName' is not null or undefined
        if (requestObj.fileName === null || requestObj.fileName === undefined) {
            throw new Error('Required parameter "requestObj.fileName" was null or undefined when calling htmlGetAttachmentPages.');
        }

        // verify required parameter 'requestObj.attachmentName' is not null or undefined
        if (requestObj.attachmentName === null || requestObj.attachmentName === undefined) {
            throw new Error('Required parameter "requestObj.attachmentName" was null or undefined when calling htmlGetAttachmentPages.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "resourcePath", requestObj.resourcePath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "ignoreResourcePathInResources", requestObj.ignoreResourcePathInResources);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "embedResources", requestObj.embedResources);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "enableMinification", requestObj.enableMinification);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "enableResponsiveRendering", requestObj.enableResponsiveRendering);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "excludeFonts", requestObj.excludeFonts);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "startPageNumber", requestObj.startPageNumber);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "countPages", requestObj.countPages);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "renderComments", requestObj.renderComments);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "renderHiddenPages", requestObj.renderHiddenPages);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "attachmentPassword", requestObj.attachmentPassword);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "defaultFontName", requestObj.defaultFontName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", requestObj.fontsFolder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.body, "HtmlAttachmentPageCollection");
        return Promise.resolve(result);
    }

    /**
     * Retrieves list of document attachments.
     * @param requestObj contains request parameters
     */
    public async htmlGetAttachments(requestObj: model.HtmlGetAttachmentsRequest): Promise<model.AttachmentCollection> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling htmlGetAttachments.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/viewer/{fileName}/html/attachments"
            .replace("{" + "fileName" + "}", String(requestObj.fileName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.fileName' is not null or undefined
        if (requestObj.fileName === null || requestObj.fileName === undefined) {
            throw new Error('Required parameter "requestObj.fileName" was null or undefined when calling htmlGetAttachments.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.body, "AttachmentCollection");
        return Promise.resolve(result);
    }

    /**
     * Retrieves document information.
     * @param requestObj contains request parameters
     */
    public async htmlGetDocumentInfo(requestObj: model.HtmlGetDocumentInfoRequest): Promise<model.DocumentInfo> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling htmlGetDocumentInfo.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/viewer/{fileName}/html/info"
            .replace("{" + "fileName" + "}", String(requestObj.fileName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.fileName' is not null or undefined
        if (requestObj.fileName === null || requestObj.fileName === undefined) {
            throw new Error('Required parameter "requestObj.fileName" was null or undefined when calling htmlGetDocumentInfo.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "renderComments", requestObj.renderComments);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "renderHiddenPages", requestObj.renderHiddenPages);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.body, "DocumentInfo");
        return Promise.resolve(result);
    }

    /**
     * Retrieves document information for posted document. Content with document or multipart content is expected where first part is document and second is DocumentInfoOptions. Saves file in storage. Use fileName and folder parameters to specify desired file name and folder to save file. When file with specified name already exists in storage new unique file name will be used for file.
     * @param requestObj contains request parameters
     */
    public async htmlGetDocumentInfoFromContent(requestObj: model.HtmlGetDocumentInfoFromContentRequest): Promise<model.DocumentInfo> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling htmlGetDocumentInfoFromContent.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/viewer/html/info";
        const queryParameters: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.file' is not null or undefined
        if (requestObj.file === null || requestObj.file === undefined) {
            throw new Error('Required parameter "requestObj.file" was null or undefined when calling htmlGetDocumentInfoFromContent.');
        }

        // verify required parameter 'requestObj.documentInfoOptions' is not null or undefined
        if (requestObj.documentInfoOptions === null || requestObj.documentInfoOptions === undefined) {
            throw new Error('Required parameter "requestObj.documentInfoOptions" was null or undefined when calling htmlGetDocumentInfoFromContent.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fileName", requestObj.fileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        if (requestObj.file !== undefined) {
            formParams.File = requestObj.file;
        }

        if (requestObj.documentInfoOptions !== undefined) {
            formParams.DocumentInfoOptions = requestObj.documentInfoOptions;
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        (requestOptions as any).formData = formParams;        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.body, "DocumentInfo");
        return Promise.resolve(result);
    }

    /**
     * Retrieves document information for document at provided URL. Retrieves file from specified URL and tries to detect file type when fileName parameter is not specified. Saves retrieved file in storage. Use fileName and folder parameters to specify desired file name and folder to save file. When file with specified name already exists in storage new unique file name will be used for file.
     * @param requestObj contains request parameters
     */
    public async htmlGetDocumentInfoFromUrl(requestObj: model.HtmlGetDocumentInfoFromUrlRequest): Promise<model.DocumentInfo> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling htmlGetDocumentInfoFromUrl.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/viewer/html/info";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.url' is not null or undefined
        if (requestObj.url === null || requestObj.url === undefined) {
            throw new Error('Required parameter "requestObj.url" was null or undefined when calling htmlGetDocumentInfoFromUrl.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "url", requestObj.url);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fileName", requestObj.fileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "renderComments", requestObj.renderComments);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "renderHiddenPages", requestObj.renderHiddenPages);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.body, "DocumentInfo");
        return Promise.resolve(result);
    }

    /**
     * Retrieves document information for document at provided URL. Retrieves file from specified URL and tries to detect file type when fileName parameter is not specified. Saves retrieved file in storage. Use fileName and folder parameters to specify desired file name and folder to save file. When file with specified name already exists in storage new unique file name will be used for file.
     * @param requestObj contains request parameters
     */
    public async htmlGetDocumentInfoFromUrlWithOptions(requestObj: model.HtmlGetDocumentInfoFromUrlWithOptionsRequest): Promise<model.DocumentInfo> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling htmlGetDocumentInfoFromUrlWithOptions.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/viewer/html/info";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.url' is not null or undefined
        if (requestObj.url === null || requestObj.url === undefined) {
            throw new Error('Required parameter "requestObj.url" was null or undefined when calling htmlGetDocumentInfoFromUrlWithOptions.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "url", requestObj.url);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fileName", requestObj.fileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: Serializer.serialize(requestObj.documentInfoOptions, requestObj.documentInfoOptions.constructor.name === "Object" ? "DocumentInfoOptions" : requestObj.documentInfoOptions.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.body, "DocumentInfo");
        return Promise.resolve(result);
    }

    /**
     * Retrieves document information with specified DocumentInfoOptions. Expects DocumentInfoOptions object data in request body.
     * @param requestObj contains request parameters
     */
    public async htmlGetDocumentInfoWithOptions(requestObj: model.HtmlGetDocumentInfoWithOptionsRequest): Promise<model.DocumentInfo> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling htmlGetDocumentInfoWithOptions.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/viewer/{fileName}/html/info"
            .replace("{" + "fileName" + "}", String(requestObj.fileName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.fileName' is not null or undefined
        if (requestObj.fileName === null || requestObj.fileName === undefined) {
            throw new Error('Required parameter "requestObj.fileName" was null or undefined when calling htmlGetDocumentInfoWithOptions.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: Serializer.serialize(requestObj.documentInfoOptions, requestObj.documentInfoOptions.constructor.name === "Object" ? "DocumentInfoOptions" : requestObj.documentInfoOptions.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.body, "DocumentInfo");
        return Promise.resolve(result);
    }

    /**
     * Downloads document page as HTML.
     * @param requestObj contains request parameters
     */
    public async htmlGetPage(requestObj: model.HtmlGetPageRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling htmlGetPage.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/viewer/{fileName}/html/pages/{pageNumber}"
            .replace("{" + "fileName" + "}", String(requestObj.fileName))
            .replace("{" + "pageNumber" + "}", String(requestObj.pageNumber));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.fileName' is not null or undefined
        if (requestObj.fileName === null || requestObj.fileName === undefined) {
            throw new Error('Required parameter "requestObj.fileName" was null or undefined when calling htmlGetPage.');
        }

        // verify required parameter 'requestObj.pageNumber' is not null or undefined
        if (requestObj.pageNumber === null || requestObj.pageNumber === undefined) {
            throw new Error('Required parameter "requestObj.pageNumber" was null or undefined when calling htmlGetPage.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "resourcePath", requestObj.resourcePath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "ignoreResourcePathInResources", requestObj.ignoreResourcePathInResources);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "embedResources", requestObj.embedResources);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "enableMinification", requestObj.enableMinification);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "enableResponsiveRendering", requestObj.enableResponsiveRendering);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "excludeFonts", requestObj.excludeFonts);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "renderComments", requestObj.renderComments);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "renderHiddenPages", requestObj.renderHiddenPages);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "defaultFontName", requestObj.defaultFontName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", requestObj.fontsFolder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.body, "Buffer");
        return Promise.resolve(result);
    }

    /**
     * Downloads HTML page resource (image, style, graphics or font).
     * @param requestObj contains request parameters
     */
    public async htmlGetPageResource(requestObj: model.HtmlGetPageResourceRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling htmlGetPageResource.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/viewer/{fileName}/html/pages/{pageNumber}/resources/{resourceName}"
            .replace("{" + "fileName" + "}", String(requestObj.fileName))
            .replace("{" + "pageNumber" + "}", String(requestObj.pageNumber))
            .replace("{" + "resourceName" + "}", String(requestObj.resourceName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.fileName' is not null or undefined
        if (requestObj.fileName === null || requestObj.fileName === undefined) {
            throw new Error('Required parameter "requestObj.fileName" was null or undefined when calling htmlGetPageResource.');
        }

        // verify required parameter 'requestObj.pageNumber' is not null or undefined
        if (requestObj.pageNumber === null || requestObj.pageNumber === undefined) {
            throw new Error('Required parameter "requestObj.pageNumber" was null or undefined when calling htmlGetPageResource.');
        }

        // verify required parameter 'requestObj.resourceName' is not null or undefined
        if (requestObj.resourceName === null || requestObj.resourceName === undefined) {
            throw new Error('Required parameter "requestObj.resourceName" was null or undefined when calling htmlGetPageResource.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.body, "Buffer");
        return Promise.resolve(result);
    }

    /**
     * Retrieves list of document pages as HTML.
     * @param requestObj contains request parameters
     */
    public async htmlGetPages(requestObj: model.HtmlGetPagesRequest): Promise<model.HtmlPageCollection> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling htmlGetPages.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/viewer/{fileName}/html/pages"
            .replace("{" + "fileName" + "}", String(requestObj.fileName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.fileName' is not null or undefined
        if (requestObj.fileName === null || requestObj.fileName === undefined) {
            throw new Error('Required parameter "requestObj.fileName" was null or undefined when calling htmlGetPages.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "resourcePath", requestObj.resourcePath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "ignoreResourcePathInResources", requestObj.ignoreResourcePathInResources);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "embedResources", requestObj.embedResources);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "enableMinification", requestObj.enableMinification);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "enableResponsiveRendering", requestObj.enableResponsiveRendering);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "excludeFonts", requestObj.excludeFonts);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "startPageNumber", requestObj.startPageNumber);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "countPages", requestObj.countPages);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "renderComments", requestObj.renderComments);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "renderHiddenPages", requestObj.renderHiddenPages);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "defaultFontName", requestObj.defaultFontName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", requestObj.fontsFolder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.body, "HtmlPageCollection");
        return Promise.resolve(result);
    }

    /**
     * Retrieves list of document pages as HTML.
     * @param requestObj contains request parameters
     */
    public async htmlGetPagesFromUrl(requestObj: model.HtmlGetPagesFromUrlRequest): Promise<model.HtmlPageCollection> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling htmlGetPagesFromUrl.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/viewer/html/pages";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.url' is not null or undefined
        if (requestObj.url === null || requestObj.url === undefined) {
            throw new Error('Required parameter "requestObj.url" was null or undefined when calling htmlGetPagesFromUrl.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "url", requestObj.url);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fileName", requestObj.fileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "resourcePath", requestObj.resourcePath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "ignoreResourcePathInResources", requestObj.ignoreResourcePathInResources);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "embedResources", requestObj.embedResources);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "enableMinification", requestObj.enableMinification);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "enableResponsiveRendering", requestObj.enableResponsiveRendering);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "excludeFonts", requestObj.excludeFonts);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "startPageNumber", requestObj.startPageNumber);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "countPages", requestObj.countPages);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "renderComments", requestObj.renderComments);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "renderHiddenPages", requestObj.renderHiddenPages);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "defaultFontName", requestObj.defaultFontName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", requestObj.fontsFolder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.body, "HtmlPageCollection");
        return Promise.resolve(result);
    }

    /**
     * Downloads document as PDF.
     * @param requestObj contains request parameters
     */
    public async htmlGetPdfFile(requestObj: model.HtmlGetPdfFileRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling htmlGetPdfFile.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/viewer/{fileName}/html/pdf"
            .replace("{" + "fileName" + "}", String(requestObj.fileName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.fileName' is not null or undefined
        if (requestObj.fileName === null || requestObj.fileName === undefined) {
            throw new Error('Required parameter "requestObj.fileName" was null or undefined when calling htmlGetPdfFile.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "renderComments", requestObj.renderComments);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "renderHiddenPages", requestObj.renderHiddenPages);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "defaultFontName", requestObj.defaultFontName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", requestObj.fontsFolder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.body, "Buffer");
        return Promise.resolve(result);
    }

    /**
     * Downloads document at provided URL as PDF.  Document will be retrieved from the passed URL and added to Storage.
     * @param requestObj contains request parameters
     */
    public async htmlGetPdfFileFromUrl(requestObj: model.HtmlGetPdfFileFromUrlRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling htmlGetPdfFileFromUrl.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/viewer/html/pdf";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.url' is not null or undefined
        if (requestObj.url === null || requestObj.url === undefined) {
            throw new Error('Required parameter "requestObj.url" was null or undefined when calling htmlGetPdfFileFromUrl.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "url", requestObj.url);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fileName", requestObj.fileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "renderComments", requestObj.renderComments);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "renderHiddenPages", requestObj.renderHiddenPages);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "defaultFontName", requestObj.defaultFontName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", requestObj.fontsFolder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.body, "Buffer");
        return Promise.resolve(result);
    }

    /**
     * Retrieves attachment pages as HTML.
     * @param requestObj contains request parameters
     */
    public async htmlGetZipWithAttachmentPages(requestObj: model.HtmlGetZipWithAttachmentPagesRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling htmlGetZipWithAttachmentPages.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/viewer/{fileName}/html/attachments/{attachmentName}/pages/zip"
            .replace("{" + "fileName" + "}", String(requestObj.fileName))
            .replace("{" + "attachmentName" + "}", String(requestObj.attachmentName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.fileName' is not null or undefined
        if (requestObj.fileName === null || requestObj.fileName === undefined) {
            throw new Error('Required parameter "requestObj.fileName" was null or undefined when calling htmlGetZipWithAttachmentPages.');
        }

        // verify required parameter 'requestObj.attachmentName' is not null or undefined
        if (requestObj.attachmentName === null || requestObj.attachmentName === undefined) {
            throw new Error('Required parameter "requestObj.attachmentName" was null or undefined when calling htmlGetZipWithAttachmentPages.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "resourcePath", requestObj.resourcePath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "ignoreResourcePathInResources", requestObj.ignoreResourcePathInResources);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "embedResources", requestObj.embedResources);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "enableMinification", requestObj.enableMinification);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "enableResponsiveRendering", requestObj.enableResponsiveRendering);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "excludeFonts", requestObj.excludeFonts);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "startPageNumber", requestObj.startPageNumber);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "countPages", requestObj.countPages);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "renderComments", requestObj.renderComments);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "renderHiddenPages", requestObj.renderHiddenPages);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "attachmentPassword", requestObj.attachmentPassword);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "defaultFontName", requestObj.defaultFontName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", requestObj.fontsFolder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.body, "Buffer");
        return Promise.resolve(result);
    }

    /**
     * Retrieves list of document pages as HTML.
     * @param requestObj contains request parameters
     */
    public async htmlGetZipWithPages(requestObj: model.HtmlGetZipWithPagesRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling htmlGetZipWithPages.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/viewer/{fileName}/html/pages/zip"
            .replace("{" + "fileName" + "}", String(requestObj.fileName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.fileName' is not null or undefined
        if (requestObj.fileName === null || requestObj.fileName === undefined) {
            throw new Error('Required parameter "requestObj.fileName" was null or undefined when calling htmlGetZipWithPages.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "resourcePath", requestObj.resourcePath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "ignoreResourcePathInResources", requestObj.ignoreResourcePathInResources);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "embedResources", requestObj.embedResources);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "enableMinification", requestObj.enableMinification);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "enableResponsiveRendering", requestObj.enableResponsiveRendering);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "excludeFonts", requestObj.excludeFonts);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "startPageNumber", requestObj.startPageNumber);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "countPages", requestObj.countPages);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "renderComments", requestObj.renderComments);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "renderHiddenPages", requestObj.renderHiddenPages);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "defaultFontName", requestObj.defaultFontName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", requestObj.fontsFolder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.body, "Buffer");
        return Promise.resolve(result);
    }

    /**
     * Rotates or reorders document page(s).
     * @param requestObj contains request parameters
     */
    public async htmlTransformPages(requestObj: model.HtmlTransformPagesRequest): Promise<model.PageInfoCollection> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling htmlTransformPages.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/viewer/{fileName}/html/pages"
            .replace("{" + "fileName" + "}", String(requestObj.fileName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.fileName' is not null or undefined
        if (requestObj.fileName === null || requestObj.fileName === undefined) {
            throw new Error('Required parameter "requestObj.fileName" was null or undefined when calling htmlTransformPages.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: Serializer.serialize(requestObj.transformOptions, requestObj.transformOptions.constructor.name === "Object" ? "TransformOptionsBase" : requestObj.transformOptions.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.body, "PageInfoCollection");
        return Promise.resolve(result);
    }

    /**
     * Creates attachment cache.
     * @param requestObj contains request parameters
     */
    public async imageCreateAttachmentPagesCache(requestObj: model.ImageCreateAttachmentPagesCacheRequest): Promise<model.ImageAttachmentPageCollection> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling imageCreateAttachmentPagesCache.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/viewer/{fileName}/image/attachments/{attachmentName}/pages"
            .replace("{" + "fileName" + "}", String(requestObj.fileName))
            .replace("{" + "attachmentName" + "}", String(requestObj.attachmentName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.fileName' is not null or undefined
        if (requestObj.fileName === null || requestObj.fileName === undefined) {
            throw new Error('Required parameter "requestObj.fileName" was null or undefined when calling imageCreateAttachmentPagesCache.');
        }

        // verify required parameter 'requestObj.attachmentName' is not null or undefined
        if (requestObj.attachmentName === null || requestObj.attachmentName === undefined) {
            throw new Error('Required parameter "requestObj.attachmentName" was null or undefined when calling imageCreateAttachmentPagesCache.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", requestObj.fontsFolder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: Serializer.serialize(requestObj.imageOptions, requestObj.imageOptions.constructor.name === "Object" ? "ImageOptions" : requestObj.imageOptions.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.body, "ImageAttachmentPageCollection");
        return Promise.resolve(result);
    }

    /**
     * Creates document pages as image and saves them in cache.  Pages created before will be removed from cache.
     * @param requestObj contains request parameters
     */
    public async imageCreatePagesCache(requestObj: model.ImageCreatePagesCacheRequest): Promise<model.ImagePageCollection> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling imageCreatePagesCache.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/viewer/{fileName}/image/pages"
            .replace("{" + "fileName" + "}", String(requestObj.fileName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.fileName' is not null or undefined
        if (requestObj.fileName === null || requestObj.fileName === undefined) {
            throw new Error('Required parameter "requestObj.fileName" was null or undefined when calling imageCreatePagesCache.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", requestObj.fontsFolder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: Serializer.serialize(requestObj.imageOptions, requestObj.imageOptions.constructor.name === "Object" ? "ImageOptions" : requestObj.imageOptions.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.body, "ImagePageCollection");
        return Promise.resolve(result);
    }

    /**
     * Creates posted document pages as image and saves them in cache. Content with document or multipart content is expected where first part is document and second is HtmlOptions. Saves retrieved file in storage. Use fileName and folder parameters to specify desired file name and folder to save file. When file with specified name already exists in storage new unique file name will be used for file.
     * @param requestObj contains request parameters
     */
    public async imageCreatePagesCacheFromContent(requestObj: model.ImageCreatePagesCacheFromContentRequest): Promise<model.ImagePageCollection> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling imageCreatePagesCacheFromContent.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/viewer/image/pages";
        const queryParameters: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.file' is not null or undefined
        if (requestObj.file === null || requestObj.file === undefined) {
            throw new Error('Required parameter "requestObj.file" was null or undefined when calling imageCreatePagesCacheFromContent.');
        }

        // verify required parameter 'requestObj.imageOptions' is not null or undefined
        if (requestObj.imageOptions === null || requestObj.imageOptions === undefined) {
            throw new Error('Required parameter "requestObj.imageOptions" was null or undefined when calling imageCreatePagesCacheFromContent.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fileName", requestObj.fileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", requestObj.fontsFolder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        if (requestObj.file !== undefined) {
            formParams.File = requestObj.file;
        }

        if (requestObj.imageOptions !== undefined) {
            formParams.ImageOptions = requestObj.imageOptions;
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        (requestOptions as any).formData = formParams;        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.body, "ImagePageCollection");
        return Promise.resolve(result);
    }

    /**
     * Creates pages as image and saves them in cache for document at provided URL. Retrieves file from specified URL and tries to detect file type when fileName parameter is not specified. Saves retrieved file in storage. Use fileName and folder parameters to specify desired file name and folder to save file. When file with specified name already exists in storage new unique file name will be used for file.
     * @param requestObj contains request parameters
     */
    public async imageCreatePagesCacheFromUrl(requestObj: model.ImageCreatePagesCacheFromUrlRequest): Promise<model.ImagePageCollection> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling imageCreatePagesCacheFromUrl.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/viewer/image/pages";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.url' is not null or undefined
        if (requestObj.url === null || requestObj.url === undefined) {
            throw new Error('Required parameter "requestObj.url" was null or undefined when calling imageCreatePagesCacheFromUrl.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "url", requestObj.url);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fileName", requestObj.fileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", requestObj.fontsFolder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: Serializer.serialize(requestObj.imageOptions, requestObj.imageOptions.constructor.name === "Object" ? "ImageOptions" : requestObj.imageOptions.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.body, "ImagePageCollection");
        return Promise.resolve(result);
    }

    /**
     * Creates PDF document.  Removes PDF document if it was created before.
     * @param requestObj contains request parameters
     */
    public async imageCreatePdfFile(requestObj: model.ImageCreatePdfFileRequest): Promise<model.PdfFileInfo> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling imageCreatePdfFile.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/viewer/{fileName}/image/pdf"
            .replace("{" + "fileName" + "}", String(requestObj.fileName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.fileName' is not null or undefined
        if (requestObj.fileName === null || requestObj.fileName === undefined) {
            throw new Error('Required parameter "requestObj.fileName" was null or undefined when calling imageCreatePdfFile.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", requestObj.fontsFolder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: Serializer.serialize(requestObj.pdfFileOptions, requestObj.pdfFileOptions.constructor.name === "Object" ? "PdfFileOptions" : requestObj.pdfFileOptions.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.body, "PdfFileInfo");
        return Promise.resolve(result);
    }

    /**
     * Creates PDF document from document passed in request body and saves it in cache. Content with document or multipart content is expected where first part is document and second is PdfFileOptions. Saves retrieved file in storage. Use fileName and folder parameters to specify desired file name and folder to save file. When file with specified name already exists in storage new unique file name will be used for file.
     * @param requestObj contains request parameters
     */
    public async imageCreatePdfFileFromContent(requestObj: model.ImageCreatePdfFileFromContentRequest): Promise<model.PdfFileInfo> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling imageCreatePdfFileFromContent.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/viewer/image/pdf";
        const queryParameters: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.file' is not null or undefined
        if (requestObj.file === null || requestObj.file === undefined) {
            throw new Error('Required parameter "requestObj.file" was null or undefined when calling imageCreatePdfFileFromContent.');
        }

        // verify required parameter 'requestObj.pdfFileOptions' is not null or undefined
        if (requestObj.pdfFileOptions === null || requestObj.pdfFileOptions === undefined) {
            throw new Error('Required parameter "requestObj.pdfFileOptions" was null or undefined when calling imageCreatePdfFileFromContent.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fileName", requestObj.fileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", requestObj.fontsFolder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        if (requestObj.file !== undefined) {
            formParams.File = requestObj.file;
        }

        if (requestObj.pdfFileOptions !== undefined) {
            formParams.PdfFileOptions = requestObj.pdfFileOptions;
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        (requestOptions as any).formData = formParams;        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.body, "PdfFileInfo");
        return Promise.resolve(result);
    }

    /**
     * Creates PDF document for document at provided URL and saves it in cache.  Retrieves file from specified URL and tries to detect file type when fileName parameter is not specified. Saves retrieved file in storage. Use fileName and folder parameters to specify desired file name and folder to save file. When file with specified name already exists in storage new unique file name will be used for file. Expects PdfFileOptions object data in request body.
     * @param requestObj contains request parameters
     */
    public async imageCreatePdfFileFromUrl(requestObj: model.ImageCreatePdfFileFromUrlRequest): Promise<model.PdfFileInfo> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling imageCreatePdfFileFromUrl.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/viewer/image/pdf";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.url' is not null or undefined
        if (requestObj.url === null || requestObj.url === undefined) {
            throw new Error('Required parameter "requestObj.url" was null or undefined when calling imageCreatePdfFileFromUrl.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "url", requestObj.url);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fileName", requestObj.fileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", requestObj.fontsFolder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: Serializer.serialize(requestObj.pdfFileOptions, requestObj.pdfFileOptions.constructor.name === "Object" ? "PdfFileOptions" : requestObj.pdfFileOptions.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.body, "PdfFileInfo");
        return Promise.resolve(result);
    }

    /**
     * Removes attachment cache.
     * @param requestObj contains request parameters
     */
    public async imageDeleteAttachmentPagesCache(requestObj: model.ImageDeleteAttachmentPagesCacheRequest): Promise<http.ClientResponse> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling imageDeleteAttachmentPagesCache.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/viewer/{fileName}/image/attachments/{attachmentName}/pages/cache"
            .replace("{" + "fileName" + "}", String(requestObj.fileName))
            .replace("{" + "attachmentName" + "}", String(requestObj.attachmentName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.fileName' is not null or undefined
        if (requestObj.fileName === null || requestObj.fileName === undefined) {
            throw new Error('Required parameter "requestObj.fileName" was null or undefined when calling imageDeleteAttachmentPagesCache.');
        }

        // verify required parameter 'requestObj.attachmentName' is not null or undefined
        if (requestObj.attachmentName === null || requestObj.attachmentName === undefined) {
            throw new Error('Required parameter "requestObj.attachmentName" was null or undefined when calling imageDeleteAttachmentPagesCache.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Removes document cache.
     * @param requestObj contains request parameters
     */
    public async imageDeletePagesCache(requestObj: model.ImageDeletePagesCacheRequest): Promise<http.ClientResponse> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling imageDeletePagesCache.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/viewer/{fileName}/image/pages/cache"
            .replace("{" + "fileName" + "}", String(requestObj.fileName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.fileName' is not null or undefined
        if (requestObj.fileName === null || requestObj.fileName === undefined) {
            throw new Error('Required parameter "requestObj.fileName" was null or undefined when calling imageDeletePagesCache.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Downloads attachment.
     * @param requestObj contains request parameters
     */
    public async imageGetAttachment(requestObj: model.ImageGetAttachmentRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling imageGetAttachment.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/viewer/{fileName}/image/attachments/{attachmentName}"
            .replace("{" + "fileName" + "}", String(requestObj.fileName))
            .replace("{" + "attachmentName" + "}", String(requestObj.attachmentName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.fileName' is not null or undefined
        if (requestObj.fileName === null || requestObj.fileName === undefined) {
            throw new Error('Required parameter "requestObj.fileName" was null or undefined when calling imageGetAttachment.');
        }

        // verify required parameter 'requestObj.attachmentName' is not null or undefined
        if (requestObj.attachmentName === null || requestObj.attachmentName === undefined) {
            throw new Error('Required parameter "requestObj.attachmentName" was null or undefined when calling imageGetAttachment.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.body, "Buffer");
        return Promise.resolve(result);
    }

    /**
     * Retrieves attachment information.
     * @param requestObj contains request parameters
     */
    public async imageGetAttachmentInfo(requestObj: model.ImageGetAttachmentInfoRequest): Promise<model.DocumentInfo> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling imageGetAttachmentInfo.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/viewer/{fileName}/image/attachments/{attachmentName}/info"
            .replace("{" + "fileName" + "}", String(requestObj.fileName))
            .replace("{" + "attachmentName" + "}", String(requestObj.attachmentName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.fileName' is not null or undefined
        if (requestObj.fileName === null || requestObj.fileName === undefined) {
            throw new Error('Required parameter "requestObj.fileName" was null or undefined when calling imageGetAttachmentInfo.');
        }

        // verify required parameter 'requestObj.attachmentName' is not null or undefined
        if (requestObj.attachmentName === null || requestObj.attachmentName === undefined) {
            throw new Error('Required parameter "requestObj.attachmentName" was null or undefined when calling imageGetAttachmentInfo.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "extractText", requestObj.extractText);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "attachmentPassword", requestObj.attachmentPassword);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.body, "DocumentInfo");
        return Promise.resolve(result);
    }

    /**
     * Retrieves attachment information with specified DocumentInfoOptions. Expects DocumentInfoOptions object data in request body.
     * @param requestObj contains request parameters
     */
    public async imageGetAttachmentInfoWithOptions(requestObj: model.ImageGetAttachmentInfoWithOptionsRequest): Promise<model.DocumentInfo> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling imageGetAttachmentInfoWithOptions.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/viewer/{fileName}/image/attachments/{attachmentName}/info"
            .replace("{" + "fileName" + "}", String(requestObj.fileName))
            .replace("{" + "attachmentName" + "}", String(requestObj.attachmentName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.fileName' is not null or undefined
        if (requestObj.fileName === null || requestObj.fileName === undefined) {
            throw new Error('Required parameter "requestObj.fileName" was null or undefined when calling imageGetAttachmentInfoWithOptions.');
        }

        // verify required parameter 'requestObj.attachmentName' is not null or undefined
        if (requestObj.attachmentName === null || requestObj.attachmentName === undefined) {
            throw new Error('Required parameter "requestObj.attachmentName" was null or undefined when calling imageGetAttachmentInfoWithOptions.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: Serializer.serialize(requestObj.documentInfoOptions, requestObj.documentInfoOptions.constructor.name === "Object" ? "DocumentInfoOptions" : requestObj.documentInfoOptions.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.body, "DocumentInfo");
        return Promise.resolve(result);
    }

    /**
     * Downloads attachment page as image.
     * @param requestObj contains request parameters
     */
    public async imageGetAttachmentPage(requestObj: model.ImageGetAttachmentPageRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling imageGetAttachmentPage.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/viewer/{fileName}/image/attachments/{attachmentName}/pages/{pageNumber}"
            .replace("{" + "fileName" + "}", String(requestObj.fileName))
            .replace("{" + "attachmentName" + "}", String(requestObj.attachmentName))
            .replace("{" + "pageNumber" + "}", String(requestObj.pageNumber));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.fileName' is not null or undefined
        if (requestObj.fileName === null || requestObj.fileName === undefined) {
            throw new Error('Required parameter "requestObj.fileName" was null or undefined when calling imageGetAttachmentPage.');
        }

        // verify required parameter 'requestObj.attachmentName' is not null or undefined
        if (requestObj.attachmentName === null || requestObj.attachmentName === undefined) {
            throw new Error('Required parameter "requestObj.attachmentName" was null or undefined when calling imageGetAttachmentPage.');
        }

        // verify required parameter 'requestObj.pageNumber' is not null or undefined
        if (requestObj.pageNumber === null || requestObj.pageNumber === undefined) {
            throw new Error('Required parameter "requestObj.pageNumber" was null or undefined when calling imageGetAttachmentPage.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "width", requestObj.width);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "height", requestObj.height);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "quality", requestObj.quality);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "attachmentPassword", requestObj.attachmentPassword);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "extractText", requestObj.extractText);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "renderComments", requestObj.renderComments);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "renderHiddenPages", requestObj.renderHiddenPages);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "defaultFontName", requestObj.defaultFontName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", requestObj.fontsFolder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.body, "Buffer");
        return Promise.resolve(result);
    }

    /**
     * Retrieves attachment pages as images.
     * @param requestObj contains request parameters
     */
    public async imageGetAttachmentPages(requestObj: model.ImageGetAttachmentPagesRequest): Promise<model.ImageAttachmentPageCollection> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling imageGetAttachmentPages.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/viewer/{fileName}/image/attachments/{attachmentName}/pages"
            .replace("{" + "fileName" + "}", String(requestObj.fileName))
            .replace("{" + "attachmentName" + "}", String(requestObj.attachmentName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.fileName' is not null or undefined
        if (requestObj.fileName === null || requestObj.fileName === undefined) {
            throw new Error('Required parameter "requestObj.fileName" was null or undefined when calling imageGetAttachmentPages.');
        }

        // verify required parameter 'requestObj.attachmentName' is not null or undefined
        if (requestObj.attachmentName === null || requestObj.attachmentName === undefined) {
            throw new Error('Required parameter "requestObj.attachmentName" was null or undefined when calling imageGetAttachmentPages.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "width", requestObj.width);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "height", requestObj.height);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "quality", requestObj.quality);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "startPageNumber", requestObj.startPageNumber);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "countPages", requestObj.countPages);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "renderComments", requestObj.renderComments);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "renderHiddenPages", requestObj.renderHiddenPages);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "attachmentPassword", requestObj.attachmentPassword);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "extractText", requestObj.extractText);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "defaultFontName", requestObj.defaultFontName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", requestObj.fontsFolder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.body, "ImageAttachmentPageCollection");
        return Promise.resolve(result);
    }

    /**
     * Retrieves list of document attachments.
     * @param requestObj contains request parameters
     */
    public async imageGetAttachments(requestObj: model.ImageGetAttachmentsRequest): Promise<model.AttachmentCollection> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling imageGetAttachments.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/viewer/{fileName}/image/attachments"
            .replace("{" + "fileName" + "}", String(requestObj.fileName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.fileName' is not null or undefined
        if (requestObj.fileName === null || requestObj.fileName === undefined) {
            throw new Error('Required parameter "requestObj.fileName" was null or undefined when calling imageGetAttachments.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.body, "AttachmentCollection");
        return Promise.resolve(result);
    }

    /**
     * Retrieves document information.
     * @param requestObj contains request parameters
     */
    public async imageGetDocumentInfo(requestObj: model.ImageGetDocumentInfoRequest): Promise<model.DocumentInfo> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling imageGetDocumentInfo.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/viewer/{fileName}/image/info"
            .replace("{" + "fileName" + "}", String(requestObj.fileName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.fileName' is not null or undefined
        if (requestObj.fileName === null || requestObj.fileName === undefined) {
            throw new Error('Required parameter "requestObj.fileName" was null or undefined when calling imageGetDocumentInfo.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "extractText", requestObj.extractText);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "renderComments", requestObj.renderComments);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "renderHiddenPages", requestObj.renderHiddenPages);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.body, "DocumentInfo");
        return Promise.resolve(result);
    }

    /**
     * Retrieves document information for posted document. Content with document or multipart content is expected where first part is document and second is DocumentInfoOptions. Saves file in storage. Use fileName and folder parameters to specify desired file name and folder to save file. When file with specified name already exists in storage new unique file name will be used for file.
     * @param requestObj contains request parameters
     */
    public async imageGetDocumentInfoFromContent(requestObj: model.ImageGetDocumentInfoFromContentRequest): Promise<model.DocumentInfo> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling imageGetDocumentInfoFromContent.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/viewer/image/info";
        const queryParameters: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.file' is not null or undefined
        if (requestObj.file === null || requestObj.file === undefined) {
            throw new Error('Required parameter "requestObj.file" was null or undefined when calling imageGetDocumentInfoFromContent.');
        }

        // verify required parameter 'requestObj.documentInfoOptions' is not null or undefined
        if (requestObj.documentInfoOptions === null || requestObj.documentInfoOptions === undefined) {
            throw new Error('Required parameter "requestObj.documentInfoOptions" was null or undefined when calling imageGetDocumentInfoFromContent.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fileName", requestObj.fileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        if (requestObj.file !== undefined) {
            formParams.File = requestObj.file;
        }

        if (requestObj.documentInfoOptions !== undefined) {
            formParams.DocumentInfoOptions = requestObj.documentInfoOptions;
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        (requestOptions as any).formData = formParams;        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.body, "DocumentInfo");
        return Promise.resolve(result);
    }

    /**
     * Retrieves document information for document at provided URL. Retrieves file from specified URL and tries to detect file type when fileName parameter is not specified. Saves retrieved file in storage. Use fileName and folder parameters to specify desired file name and folder to save file. When file with specified name already exists in storage new unique file name will be used for file.
     * @param requestObj contains request parameters
     */
    public async imageGetDocumentInfoFromUrl(requestObj: model.ImageGetDocumentInfoFromUrlRequest): Promise<model.DocumentInfo> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling imageGetDocumentInfoFromUrl.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/viewer/image/info";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.url' is not null or undefined
        if (requestObj.url === null || requestObj.url === undefined) {
            throw new Error('Required parameter "requestObj.url" was null or undefined when calling imageGetDocumentInfoFromUrl.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "url", requestObj.url);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fileName", requestObj.fileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "extractText", requestObj.extractText);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "renderComments", requestObj.renderComments);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "renderHiddenPages", requestObj.renderHiddenPages);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.body, "DocumentInfo");
        return Promise.resolve(result);
    }

    /**
     * Retrieves document information for document at provided URL. Retrieves file from specified URL and tries to detect file type when fileName parameter is not specified. Saves retrieved file in storage. Use fileName and folder parameters to specify desired file name and folder to save file. When file with specified name already exists in storage new unique file name will be used for file.
     * @param requestObj contains request parameters
     */
    public async imageGetDocumentInfoFromUrlWithOptions(requestObj: model.ImageGetDocumentInfoFromUrlWithOptionsRequest): Promise<model.DocumentInfo> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling imageGetDocumentInfoFromUrlWithOptions.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/viewer/image/info";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.url' is not null or undefined
        if (requestObj.url === null || requestObj.url === undefined) {
            throw new Error('Required parameter "requestObj.url" was null or undefined when calling imageGetDocumentInfoFromUrlWithOptions.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "url", requestObj.url);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fileName", requestObj.fileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: Serializer.serialize(requestObj.documentInfoOptions, requestObj.documentInfoOptions.constructor.name === "Object" ? "DocumentInfoOptions" : requestObj.documentInfoOptions.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.body, "DocumentInfo");
        return Promise.resolve(result);
    }

    /**
     * Retrieves document information with specified options. Expects DocumentInfoOptions object data in request body.
     * @param requestObj contains request parameters
     */
    public async imageGetDocumentInfoWithOptions(requestObj: model.ImageGetDocumentInfoWithOptionsRequest): Promise<model.DocumentInfo> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling imageGetDocumentInfoWithOptions.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/viewer/{fileName}/image/info"
            .replace("{" + "fileName" + "}", String(requestObj.fileName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.fileName' is not null or undefined
        if (requestObj.fileName === null || requestObj.fileName === undefined) {
            throw new Error('Required parameter "requestObj.fileName" was null or undefined when calling imageGetDocumentInfoWithOptions.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: Serializer.serialize(requestObj.documentInfoOptions, requestObj.documentInfoOptions.constructor.name === "Object" ? "DocumentInfoOptions" : requestObj.documentInfoOptions.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.body, "DocumentInfo");
        return Promise.resolve(result);
    }

    /**
     * Downloads document page as image.
     * @param requestObj contains request parameters
     */
    public async imageGetPage(requestObj: model.ImageGetPageRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling imageGetPage.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/viewer/{fileName}/image/pages/{pageNumber}"
            .replace("{" + "fileName" + "}", String(requestObj.fileName))
            .replace("{" + "pageNumber" + "}", String(requestObj.pageNumber));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.fileName' is not null or undefined
        if (requestObj.fileName === null || requestObj.fileName === undefined) {
            throw new Error('Required parameter "requestObj.fileName" was null or undefined when calling imageGetPage.');
        }

        // verify required parameter 'requestObj.pageNumber' is not null or undefined
        if (requestObj.pageNumber === null || requestObj.pageNumber === undefined) {
            throw new Error('Required parameter "requestObj.pageNumber" was null or undefined when calling imageGetPage.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "width", requestObj.width);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "height", requestObj.height);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "quality", requestObj.quality);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "extractText", requestObj.extractText);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "renderComments", requestObj.renderComments);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "renderHiddenPages", requestObj.renderHiddenPages);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "defaultFontName", requestObj.defaultFontName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", requestObj.fontsFolder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.body, "Buffer");
        return Promise.resolve(result);
    }

    /**
     * Retrieves list of document pages as image.
     * @param requestObj contains request parameters
     */
    public async imageGetPages(requestObj: model.ImageGetPagesRequest): Promise<model.ImagePageCollection> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling imageGetPages.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/viewer/{fileName}/image/pages"
            .replace("{" + "fileName" + "}", String(requestObj.fileName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.fileName' is not null or undefined
        if (requestObj.fileName === null || requestObj.fileName === undefined) {
            throw new Error('Required parameter "requestObj.fileName" was null or undefined when calling imageGetPages.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "width", requestObj.width);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "height", requestObj.height);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "quality", requestObj.quality);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "startPageNumber", requestObj.startPageNumber);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "countPages", requestObj.countPages);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "extractText", requestObj.extractText);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "renderComments", requestObj.renderComments);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "renderHiddenPages", requestObj.renderHiddenPages);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "defaultFontName", requestObj.defaultFontName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", requestObj.fontsFolder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.body, "ImagePageCollection");
        return Promise.resolve(result);
    }

    /**
     * Retrieves list of document pages as image.
     * @param requestObj contains request parameters
     */
    public async imageGetPagesFromUrl(requestObj: model.ImageGetPagesFromUrlRequest): Promise<model.ImagePageCollection> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling imageGetPagesFromUrl.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/viewer/image/pages";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.url' is not null or undefined
        if (requestObj.url === null || requestObj.url === undefined) {
            throw new Error('Required parameter "requestObj.url" was null or undefined when calling imageGetPagesFromUrl.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "url", requestObj.url);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fileName", requestObj.fileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "width", requestObj.width);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "height", requestObj.height);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "quality", requestObj.quality);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "startPageNumber", requestObj.startPageNumber);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "countPages", requestObj.countPages);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "extractText", requestObj.extractText);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "renderComments", requestObj.renderComments);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "renderHiddenPages", requestObj.renderHiddenPages);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "defaultFontName", requestObj.defaultFontName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", requestObj.fontsFolder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.body, "ImagePageCollection");
        return Promise.resolve(result);
    }

    /**
     * Downloads document as PDF.
     * @param requestObj contains request parameters
     */
    public async imageGetPdfFile(requestObj: model.ImageGetPdfFileRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling imageGetPdfFile.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/viewer/{fileName}/image/pdf"
            .replace("{" + "fileName" + "}", String(requestObj.fileName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.fileName' is not null or undefined
        if (requestObj.fileName === null || requestObj.fileName === undefined) {
            throw new Error('Required parameter "requestObj.fileName" was null or undefined when calling imageGetPdfFile.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "renderComments", requestObj.renderComments);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "renderHiddenPages", requestObj.renderHiddenPages);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "defaultFontName", requestObj.defaultFontName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", requestObj.fontsFolder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.body, "Buffer");
        return Promise.resolve(result);
    }

    /**
     * Downloads document at provided URL as PDF.  Document will be retrieved from the passed URL and added to Storage.
     * @param requestObj contains request parameters
     */
    public async imageGetPdfFileFromUrl(requestObj: model.ImageGetPdfFileFromUrlRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling imageGetPdfFileFromUrl.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/viewer/image/pdf";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.url' is not null or undefined
        if (requestObj.url === null || requestObj.url === undefined) {
            throw new Error('Required parameter "requestObj.url" was null or undefined when calling imageGetPdfFileFromUrl.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "url", requestObj.url);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fileName", requestObj.fileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "renderComments", requestObj.renderComments);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "renderHiddenPages", requestObj.renderHiddenPages);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "defaultFontName", requestObj.defaultFontName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", requestObj.fontsFolder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.body, "Buffer");
        return Promise.resolve(result);
    }

    /**
     * Retrieves attachment pages as images.
     * @param requestObj contains request parameters
     */
    public async imageGetZipWithAttachmentPages(requestObj: model.ImageGetZipWithAttachmentPagesRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling imageGetZipWithAttachmentPages.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/viewer/{fileName}/image/attachments/{attachmentName}/pages/zip"
            .replace("{" + "fileName" + "}", String(requestObj.fileName))
            .replace("{" + "attachmentName" + "}", String(requestObj.attachmentName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.fileName' is not null or undefined
        if (requestObj.fileName === null || requestObj.fileName === undefined) {
            throw new Error('Required parameter "requestObj.fileName" was null or undefined when calling imageGetZipWithAttachmentPages.');
        }

        // verify required parameter 'requestObj.attachmentName' is not null or undefined
        if (requestObj.attachmentName === null || requestObj.attachmentName === undefined) {
            throw new Error('Required parameter "requestObj.attachmentName" was null or undefined when calling imageGetZipWithAttachmentPages.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "width", requestObj.width);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "height", requestObj.height);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "quality", requestObj.quality);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "startPageNumber", requestObj.startPageNumber);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "countPages", requestObj.countPages);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "renderComments", requestObj.renderComments);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "renderHiddenPages", requestObj.renderHiddenPages);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "attachmentPassword", requestObj.attachmentPassword);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "extractText", requestObj.extractText);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "defaultFontName", requestObj.defaultFontName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", requestObj.fontsFolder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.body, "Buffer");
        return Promise.resolve(result);
    }

    /**
     * Retrieves list of document pages as image.
     * @param requestObj contains request parameters
     */
    public async imageGetZipWithPages(requestObj: model.ImageGetZipWithPagesRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling imageGetZipWithPages.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/viewer/{fileName}/image/pages/zip"
            .replace("{" + "fileName" + "}", String(requestObj.fileName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.fileName' is not null or undefined
        if (requestObj.fileName === null || requestObj.fileName === undefined) {
            throw new Error('Required parameter "requestObj.fileName" was null or undefined when calling imageGetZipWithPages.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "width", requestObj.width);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "height", requestObj.height);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "quality", requestObj.quality);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "startPageNumber", requestObj.startPageNumber);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "countPages", requestObj.countPages);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "extractText", requestObj.extractText);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "renderComments", requestObj.renderComments);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "renderHiddenPages", requestObj.renderHiddenPages);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "defaultFontName", requestObj.defaultFontName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsFolder", requestObj.fontsFolder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.body, "Buffer");
        return Promise.resolve(result);
    }

    /**
     * Rotates or reorders document page(s).
     * @param requestObj contains request parameters
     */
    public async imageTransformPages(requestObj: model.ImageTransformPagesRequest): Promise<model.PageInfoCollection> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling imageTransformPages.');
        }

        let localVarPath = this.configuration.getServerUrl() + "/viewer/{fileName}/image/pages"
            .replace("{" + "fileName" + "}", String(requestObj.fileName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.fileName' is not null or undefined
        if (requestObj.fileName === null || requestObj.fileName === undefined) {
            throw new Error('Required parameter "requestObj.fileName" was null or undefined when calling imageTransformPages.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: Serializer.serialize(requestObj.transformOptions, requestObj.transformOptions.constructor.name === "Object" ? "TransformOptionsBase" : requestObj.transformOptions.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.body, "PageInfoCollection");
        return Promise.resolve(result);
    }

}
