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

import { HtmlCreatePagesCacheFromContentRequest, 
         HtmlCreatePagesCacheFromUrlRequest, 
         HtmlCreatePagesCacheRequest,
         HtmlDeletePagesCacheRequest,
         HtmlGetPageRequest,
         HtmlGetPagesFromUrlRequest, 
         HtmlGetPagesRequest,
         HtmlGetZipWithPagesRequest,
         HtmlOptions,
         HtmlTransformPagesRequest,
         ReorderOptions, 
         RotateOptions, 
         ProjectOptions,
         OutlookOptions} from "../../src/model";

import * as TestContext from "../test_context";
import { TestFile } from "../test_file";

describe("html_get_document_page_api", () => {
    
    before(async () => {
        await TestContext.uploadTestFiles();
    });

    afterEach(async function() {
        await TestContext.cleanupTempFiles();
    });

    describe("test_html_get_document_page", () => {
        it("should download document page", () => {  
            const file = TestFile.OnePageDocx;
            const pageNumber = 1;
           
            const request = new HtmlGetPageRequest(file.fileName, pageNumber);
            request.folder = file.folder;

            const viewerApi = TestContext.getViewerApi();
            return viewerApi.htmlGetPage(request)
                    .then((result) => {
                        expect(result).to.be.not.equal(null);
                    });
        });

        it("should download document page with custom font", () => {  
            const file = TestFile.UsesCustomFontPptx;
            const pageNumber = 1;

            const request = new HtmlGetPageRequest(file.fileName, pageNumber);
            request.folder = file.folder;
            request.fontsFolder = "fonts";

            const viewerApi = TestContext.getViewerApi();
            return viewerApi.htmlGetPage(request)
                    .then((result) => {
                        expect(result).to.be.not.equal(null);
                    });
        });
    });

    describe("test_html_get_document_pages", () => {
        it("should retrieve list of document pages", () => {  
            const file = TestFile.FourPagesDocx;
           
            const request = new HtmlGetPagesRequest(file.fileName);
            request.folder = file.folder;

            const viewerApi = TestContext.getViewerApi();
            return viewerApi.htmlGetPages(request)
                    .then((result) => {
                        expect(result.pages.length).to.be.equal(4);
                        expect(result.fileName).to.be.equal("four-pages.docx");
                        expect(result.folder).to.be.equal("words\\docx");
                    });
        });

        it("should retrieve list of document pages from url", () => {  
            const file = TestFile.FromUrlOnePageDocx;
           
            const request = new HtmlGetPagesFromUrlRequest(file.url);
            request.fileName = file.fileName;
            request.folder = "test\\from_url";

            const viewerApi = TestContext.getViewerApi();
            return viewerApi.htmlGetPagesFromUrl(request)
                    .then((result) => {
                        expect(result.pages.length).to.be.equal(1);
                        expect(result.fileName).to.be.equal("one-page.docx");
                    });
        });

        it("should download zip with document pages", () => {  
            const file = TestFile.FourPagesDocx;
           
            const request = new HtmlGetZipWithPagesRequest(file.fileName);
            request.folder = file.folder;
            request.resourcePath = "./r{page-number}/{resource-name}";

            const viewerApi = TestContext.getViewerApi();
            return viewerApi.htmlGetZipWithPages(request)
                    .then((result) => {
                        expect(result).to.be.not.equal(null);
                    });
        });
    });

    describe("test_html_create_document_pages_cache", () => {
        it("should create document pages cache", () => {  
            const file = TestFile.FourPagesDocx;
           
            const htmlOptions = new HtmlOptions();
            htmlOptions.embedResources = true;

            const request = new HtmlCreatePagesCacheRequest(file.fileName);
            request.folder = file.folder;
            request.htmlOptions = htmlOptions;
          
            const viewerApi = TestContext.getViewerApi();
            return viewerApi.htmlCreatePagesCache(request)
                    .then((result) => {
                        expect(result.pages.length).to.be.equal(4);
                        expect(result.fileName).to.be.equal("four-pages.docx");
                        expect(result.folder).to.be.equal("words\\docx");
                    });
        });

        it("should create document pages cache from content", () => {  
            const file = TestFile.PasswordProtectedDocx;
           
            const htmlOptions = new HtmlOptions();
            htmlOptions.embedResources = true;
            htmlOptions.password = file.password;

            const fileBuffer = TestContext.getTestFileBuffer(file);
            const optionsBuffer = TestContext.serializeIntoBuffer(htmlOptions);

            const request = new HtmlCreatePagesCacheFromContentRequest(fileBuffer, optionsBuffer);
            request.fileName = file.fileName;
            request.folder = "test\\from_content";
          
            const viewerApi = TestContext.getViewerApi();
            return viewerApi.htmlCreatePagesCacheFromContent(request)
                    .then((result) => {
                        expect(result.fileName).contains(".docx");
                    });
        });

        it("should create document pages cache from url", () => {  
            const file = TestFile.FromUrlWithNotesPptx;
           
            const htmlOptions = new HtmlOptions();
            htmlOptions.embedResources = true;

            const request = new HtmlCreatePagesCacheFromUrlRequest(file.url);
            request.fileName = file.fileName;
            request.folder = "test\\from_url";
            request.htmlOptions = htmlOptions;
          
            const viewerApi = TestContext.getViewerApi();
            return viewerApi.htmlCreatePagesCacheFromUrl(request)
                    .then((result) => {
                        expect(result.pages.length).equal(1);
                        expect(result.fileName).equal("with-notes.pptx");
                    });
        });
    });

    describe("test_html_transform_document_pages", () => {
        it("should rotate document pages", () => {  
            const file = TestFile.FourPagesDocx;
           
            const transformOptions = new RotateOptions();
            transformOptions.pageNumber = 1;
            transformOptions.angle = 90;

            const request = new HtmlTransformPagesRequest(file.fileName);
            request.folder = file.folder;
            request.transformOptions = transformOptions;
          
            const viewerApi = TestContext.getViewerApi();
            return viewerApi.htmlTransformPages(request)
                    .then((result) => {
                        expect(result.pages[0].angle).to.be.equal(90);
                    });
        });

        it("should reorder document pages", () => {  
            const file = TestFile.FourPagesDocx;
           
            const transformOptions = new ReorderOptions();
            transformOptions.pageNumber = 1;
            transformOptions.newPosition = 2;

            const request = new HtmlTransformPagesRequest(file.fileName);
            request.folder = file.folder;
            request.transformOptions = transformOptions;
          
            const viewerApi = TestContext.getViewerApi();
            return viewerApi.htmlTransformPages(request)
                    .then((result) => {
                        expect(result.pages[0].number).to.be.equal(2);
                        expect(result.pages[1].number).to.be.equal(1);
                    });
        });
    });

    describe("test_html_delete_document_pages_cache", () => {
        it("should delete document pages cache", () => {  
            const file = TestFile.OnePageDocx;
           
            const request = new HtmlDeletePagesCacheRequest(file.fileName);
            request.folder = file.folder;
          
            const viewerApi = TestContext.getViewerApi();
            return viewerApi.htmlDeletePagesCache(request)
                    .then((response) => {
                        expect(response.statusCode).to.be.equal(204);
                    });
        });
    });

    describe("test_html_create_document_pages_cache_w_opts", () => {
        it("should create document pages cache with project options", () => {  
            const file = TestFile.ProjectMpp;
           
            const projectOptions = new ProjectOptions();
            projectOptions.timeUnit = "Days";
            projectOptions.startDate = new Date("2008/07/01");
            projectOptions.endDate = new Date("2008/07/31");

            const htmlOptions = new HtmlOptions();
            htmlOptions.embedResources = true;
            htmlOptions.projectOptions = projectOptions;

            const request = new HtmlCreatePagesCacheRequest(file.fileName);
            request.folder = file.folder;
            request.htmlOptions = htmlOptions;
          
            const viewerApi = TestContext.getViewerApi();
            return viewerApi.htmlCreatePagesCache(request)
                    .then((result) => {
                        expect(result.pages.length).to.be.equal(1);
                        expect(result.fileName).to.be.equal(file.fileName);
                        expect(result.folder).to.be.equal(file.folder);
                    });
        });    

        it("should create document pages cache with outlook options", () => {  
            const file = TestFile.OutlookPst;
           
            const outlookOptions = new OutlookOptions();
            outlookOptions.maxItemsInFolder = 5;

            const htmlOptions = new HtmlOptions();
            htmlOptions.embedResources = true;
            htmlOptions.outlookOptions = outlookOptions;

            const request = new HtmlCreatePagesCacheRequest(file.fileName);
            request.folder = file.folder;
            request.htmlOptions = htmlOptions;
          
            const viewerApi = TestContext.getViewerApi();
            return viewerApi.htmlCreatePagesCache(request)
                    .then((result) => {
                        expect(result.pages.length).to.be.greaterThan(0);
                        expect(result.fileName).to.be.equal(file.fileName);
                        expect(result.folder).to.be.equal(file.folder);
                    });
        });         
    });  
});
