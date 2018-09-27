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

import { HtmlCreateAttachmentPagesCacheRequest, 
         HtmlDeleteAttachmentPagesCacheRequest, 
         HtmlGetAttachmentPageRequest,
         HtmlGetAttachmentPagesRequest,
         HtmlGetZipWithAttachmentPagesRequest,
         HtmlOptions } from "../../src/model";

import * as TestContext from "../test_context";
import { TestFile } from "../test_file";

describe("html_get_attachment_page_api", () => {
    
    before(async () => {
        await TestContext.uploadTestFiles();
    });

    afterEach(async function() {
        await TestContext.cleanupTempFiles();
    });

    describe("test_html_get_attachment_page", () => {
        it("should return attachment page", () => {  
            const file = TestFile.WithAttachmentMsg;
            const pageNumber = 1;
           
            const request = new HtmlGetAttachmentPageRequest(
                file.fileName, file.attachmentName, pageNumber);
            request.folder = file.folder;
            request.attachmentPassword = file.attachmentPassword;

            const viewerApi = TestContext.getViewerApi();
            return viewerApi.htmlGetAttachmentPage(request)
                    .then((result) => {
                        expect(result).to.be.not.equal(null);
                    });
        });
    });

    describe("test_html_get_attachment_pages", () => {
        it("should return attachment pages", () => {  
            const file = TestFile.WithAttachmentMsg;
           
            const request = new HtmlGetAttachmentPagesRequest(file.fileName, file.attachmentName);
            request.folder = file.folder;
            request.attachmentPassword = file.attachmentPassword;

            const viewerApi = TestContext.getViewerApi();
            return viewerApi.htmlGetAttachmentPages(request)
                    .then((result) => {
                        expect(result.pages.length).to.be.equal(1);
                        expect(result.fileName).to.be.equal("with-attachment.msg");
                        expect(result.attachmentName).to.be.equal("password-protected.docx");
                        expect(result.folder).to.be.equal("email\\msg");
                    });
        });

        it("should return zip with attachment pages", () => {  
            const file = TestFile.WithAttachmentMsg;
           
            const request = new HtmlGetZipWithAttachmentPagesRequest(file.fileName, file.attachmentName);
            request.folder = file.folder;
            request.attachmentPassword = file.attachmentPassword;
            request.resourcePath = "./r{page-number}/{resource-name}";

            const viewerApi = TestContext.getViewerApi();
            return viewerApi.htmlGetZipWithAttachmentPages(request)
                    .then((result) => {
                        expect(result).to.be.not.equal(null);
                    });
        });
    });

    describe("test_html_create_attachment_pages_cache", () => {
        it("should return attachment pages cache", () => {  
            const file = TestFile.WithAttachmentPdf;
           
            const htmlOptions = new HtmlOptions();
            htmlOptions.attachmentPassword = file.attachmentPassword;

            const request = new HtmlCreateAttachmentPagesCacheRequest(file.fileName, file.attachmentName);
            request.folder = file.folder;
            request.htmlOptions = htmlOptions;
          
            const viewerApi = TestContext.getViewerApi();
            return viewerApi.htmlCreateAttachmentPagesCache(request)
                    .then((result) => {
                        expect(result.pages.length).to.be.equal(1);
                        expect(result.fileName).to.be.equal("with-attachment.pdf");
                        expect(result.attachmentName).to.be.equal("password-protected.docx");
                        expect(result.folder).to.be.equal("pdf\\pdf");
                    });
        });
    });

    describe("test_html_delete_attachment_pages_cache", () => {
        it("should delete attachment pages cache", () => {  
            const file = TestFile.WithAttachmentPdf;
           
            const request = new HtmlDeleteAttachmentPagesCacheRequest(file.fileName, file.attachmentName);
            request.folder = file.folder;
          
            const viewerApi = TestContext.getViewerApi();
            return viewerApi.htmlDeleteAttachmentPagesCache(request)
                    .then((response) => {
                        expect(response.statusCode).to.be.equal(204);
                    });
        });
    });
});
