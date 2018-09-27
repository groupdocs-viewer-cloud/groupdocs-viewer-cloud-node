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

import { expect } from "chai";
import "mocha";

import { DocumentInfoOptions,
         HtmlGetAttachmentInfoRequest,
         HtmlGetAttachmentInfoWithOptionsRequest } from "../../src/model";

import * as TestContext from "../test_context";
import { TestFile } from "../test_file";

describe("html_attachment_info_api", () => {
   
    before(async () => {
        await TestContext.uploadTestFiles();
    });

    afterEach(async function() {
        await TestContext.cleanupTempFiles();
    });

    describe("test_html_get_attachment_info", () => {
        it("should return attachment information", () => {  
            const file = TestFile.WithAttachmentMsg;
        
            const request = new HtmlGetAttachmentInfoRequest(file.fileName, file.attachmentName);
            request.folder = file.folder;
            request.attachmentPassword = file.attachmentPassword;

            const viewerApi = TestContext.getViewerApi();
            return viewerApi.htmlGetAttachmentInfo(request)
                .then((result) => {
                    expect(result.pages.length).equal(1);
                    expect(result.extension).equal(".docx");
                    expect(result.fileName).equal("password-protected.docx");
                });
        });

        it("should throw when attachment not found", () => {  
            const file = TestFile.WithAttachmentMsg;
            const attachmentName = "not-found.pdf";
            
            const request = new HtmlGetAttachmentInfoRequest(file.fileName, attachmentName);
            request.folder = file.folder;

            const viewerApi = TestContext.getViewerApi();
            return viewerApi.htmlGetAttachmentInfo(request)
                .catch((error) => {
                    expect(error.message).equal("Can't find attachment with given name 'not-found.pdf'.");
                });
        });

        it("should throw when password not provided", () => {  
            const file = TestFile.WithAttachmentMsg;
        
            const request = new HtmlGetAttachmentInfoRequest(file.fileName, file.attachmentName);
            request.folder = file.folder;

            const viewerApi = TestContext.getViewerApi();
            return viewerApi.htmlGetAttachmentInfo(request)
                .catch((error) => {
                    expect(error.message).equal("The password was not provided. The specified file 'password-protected.docx' is password-protected.");
                });
        });

        it("should throw when password not provided", () => {  
            const file = TestFile.WithAttachmentMsg;
        
            const request = new HtmlGetAttachmentInfoRequest(file.fileName, file.attachmentName);
            request.folder = file.folder;

            const viewerApi = TestContext.getViewerApi();
            return viewerApi.htmlGetAttachmentInfo(request)
                .catch((error) => {
                    expect(error.message).equal("The password was not provided. The specified file 'password-protected.docx' is password-protected.");
                });
        });

        it("should throw when password is incorrect", () => {  
            const file = TestFile.WithAttachmentMsg;
        
            const request = new HtmlGetAttachmentInfoRequest(file.fileName, file.attachmentName);
            request.folder = file.folder;
            request.attachmentPassword = "not a password";

            const viewerApi = TestContext.getViewerApi();

            return viewerApi.htmlGetAttachmentInfo(request)
                .catch((error) => {
                    expect(error.message).equal("Password provided for file with name 'password-protected.docx' is incorrect.");
                });
        });
    });

    describe("test_html_get_attachment_info_with_options", () => {
        it("should return attachment information", () => {  
            const file = TestFile.WithAttachmentMsg;
        
            const documentInfoOptions = new DocumentInfoOptions();
            documentInfoOptions.attachmentPassword = file.attachmentPassword;

            const request = new HtmlGetAttachmentInfoWithOptionsRequest(file.fileName, file.attachmentName);
            request.folder = file.folder;
            request.documentInfoOptions = documentInfoOptions;

            const viewerApi = TestContext.getViewerApi();
            return viewerApi.htmlGetAttachmentInfoWithOptions(request)
                .then((result) => {
                    expect(result.pages.length).equal(1);
                    expect(result.extension).equal(".docx");
                    expect(result.fileName).equal("password-protected.docx");
                });
        });
    });
    
});
