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

import { ImageCreatePagesCacheFromContentRequest, 
         ImageCreatePagesCacheFromUrlRequest, 
         ImageCreatePagesCacheRequest,
         ImageDeletePagesCacheRequest,
         ImageGetPageRequest,
         ImageGetPagesFromUrlRequest, 
         ImageGetPagesRequest,
         ImageGetZipWithPagesRequest,
         ImageOptions,
         ImageTransformPagesRequest,
         ReorderOptions, 
         RotateOptions} from "../../src/model";

import * as TestContext from "../test_context";
import { TestFile } from "../test_file";

describe("image_get_document_page_api", () => {
    
    before(async () => {
        await TestContext.uploadTestFiles();
    });

    afterEach(async function() {
        await TestContext.cleanupTempFiles();
    });

    describe("test_image_get_document_page", () => {
        it("should download document page", () => {  
            const file = TestFile.OnePageDocx;
            const pageNumber = 1;
           
            const request = new ImageGetPageRequest(file.fileName, pageNumber);
            request.folder = file.folder;

            const viewerApi = TestContext.getViewerApi();
            return viewerApi.imageGetPage(request)
                    .then((result) => {
                        expect(result).to.be.not.equal(null);
                    });
        });

        it("should download document page with extract text option", () => {  
            const file = TestFile.OnePageDocx;
            const pageNumber = 1;
           
            const request = new ImageGetPageRequest(file.fileName, pageNumber);
            request.folder = file.folder;
            request.extractText = true;

            const viewerApi = TestContext.getViewerApi();
            return viewerApi.imageGetPage(request)
                    .then((result) => {
                        expect(result).to.be.not.equal(null);
                    });
        });

        it("should download document page with custom font", () => {  
            const file = TestFile.UsesCustomFontPptx;
            const pageNumber = 1;
           
            const request = new ImageGetPageRequest(file.fileName, pageNumber);
            request.folder = file.folder;
            request.fontsFolder = "fonts";

            const viewerApi = TestContext.getViewerApi();
            return viewerApi.imageGetPage(request)
                    .then((result) => {
                        expect(result).to.be.not.equal(null);
                    });
        });
    });

    describe("test_image_get_document_pages", () => {
        it("should retrieve list of document pages", () => {  
            const file = TestFile.FourPagesDocx;
           
            const request = new ImageGetPagesRequest(file.fileName);
            request.folder = file.folder;

            const viewerApi = TestContext.getViewerApi();
            return viewerApi.imageGetPages(request)
                    .then((result) => {
                        expect(result.pages.length).to.be.equal(4);
                        expect(result.fileName).to.be.equal("four-pages.docx");
                        expect(result.folder).to.be.equal("words\\docx");
                    });
        });

        it("should retrieve list of document pages from url", () => {  
            const file = TestFile.FromUrlOnePageDocx;
           
            const request = new ImageGetPagesFromUrlRequest(file.url);
            request.fileName = file.fileName;
            request.folder = "test\\from_url";

            const viewerApi = TestContext.getViewerApi();
            return viewerApi.imageGetPagesFromUrl(request)
                    .then((result) => {
                        expect(result.pages.length).to.be.equal(1);
                        expect(result.fileName).to.be.equal("one-page.docx");
                    });
        });

        it("should download zip with document pages", () => {  
            const file = TestFile.FourPagesDocx;
           
            const request = new ImageGetZipWithPagesRequest(file.fileName);
            request.folder = file.folder;
            request.format = "jpg";

            const viewerApi = TestContext.getViewerApi();
            return viewerApi.imageGetZipWithPages(request)
                    .then((result) => {
                        expect(result).to.be.not.equal(null);
                    });
        });
    });

    describe("test_image_create_document_pages_cache", () => {
        it("should create document pages cache", () => {  
            const file = TestFile.FourPagesDocx;
           
            const imageOptions = new ImageOptions();
            imageOptions.format = "jpg";

            const request = new ImageCreatePagesCacheRequest(file.fileName);
            request.folder = file.folder;
            request.imageOptions = imageOptions;
          
            const viewerApi = TestContext.getViewerApi();
            return viewerApi.imageCreatePagesCache(request)
                    .then((result) => {
                        expect(result.pages.length).to.be.equal(4);
                        expect(result.fileName).to.be.equal("four-pages.docx");
                        expect(result.folder).to.be.equal("words\\docx");
                    });
        });

        it("should create document pages cache from content", () => {  
            const file = TestFile.PasswordProtectedDocx;
           
            const imageOptions = new ImageOptions();
            imageOptions.format = "jpg";
            imageOptions.password = file.password;

            const fileBuffer = TestContext.getTestFileBuffer(file);
            const optionsBuffer = TestContext.serializeIntoBuffer(imageOptions);

            const request = new ImageCreatePagesCacheFromContentRequest(fileBuffer, optionsBuffer);
            request.fileName = file.fileName;
            request.folder = "test\\from_content";
          
            const viewerApi = TestContext.getViewerApi();
            return viewerApi.imageCreatePagesCacheFromContent(request)
                    .then((result) => {
                        expect(result.fileName).contains(".docx");
                    });
        });

        it("should create document pages cache from url", () => {  
            const file = TestFile.FromUrlWithNotesPptx;
           
            const imageOptions = new ImageOptions();
            imageOptions.format = "jpg";

            const request = new ImageCreatePagesCacheFromUrlRequest(file.url);
            request.fileName = file.fileName;
            request.folder = "test\\from_url";
            request.imageOptions = imageOptions;
          
            const viewerApi = TestContext.getViewerApi();
            return viewerApi.imageCreatePagesCacheFromUrl(request)
                    .then((result) => {
                        expect(result.pages.length).equal(1);
                        expect(result.fileName).equal("with-notes.pptx");
                    });
        });
    });

    describe("test_image_transform_document_pages", () => {
        it("should rotate document pages", () => {  
            const file = TestFile.FourPagesDocx;
           
            const transformOptions = new RotateOptions();
            transformOptions.pageNumber = 1;
            transformOptions.angle = 90;

            const request = new ImageTransformPagesRequest(file.fileName);
            request.folder = file.folder;
            request.transformOptions = transformOptions;
          
            const viewerApi = TestContext.getViewerApi();
            return viewerApi.imageTransformPages(request)
                    .then((result) => {
                        expect(result.pages[0].angle).to.be.equal(90);
                    });
        });

        it("should reorder document pages", () => {  
            const file = TestFile.FourPagesDocx;
           
            const transformOptions = new ReorderOptions();
            transformOptions.pageNumber = 1;
            transformOptions.newPosition = 2;

            const request = new ImageTransformPagesRequest(file.fileName);
            request.folder = file.folder;
            request.transformOptions = transformOptions;
          
            const viewerApi = TestContext.getViewerApi();
            return viewerApi.imageTransformPages(request)
                    .then((result) => {
                        expect(result.pages[0].number).to.be.equal(2);
                        expect(result.pages[1].number).to.be.equal(1);
                    });
        });
    });

    describe("test_image_delete_document_pages_cache", () => {
        it("should delete document pages cache", () => {  
            const file = TestFile.OnePageDocx;
           
            const request = new ImageDeletePagesCacheRequest(file.fileName);
            request.folder = file.folder;
          
            const viewerApi = TestContext.getViewerApi();
            return viewerApi.imageDeletePagesCache(request)
                    .then((response) => {
                        expect(response.statusCode).to.be.equal(204);
                    });
        });
    });

    describe("test_image_create_documents_pages_cache", () => {
        it("should create document pages cache for file formats", () => { 
            
            return Promise.all(TestFile.Supported().map((file) => {
                const imageOptions = new ImageOptions();
                imageOptions.format = "jpg";

                const request = new ImageCreatePagesCacheRequest(file.fileName);
                request.folder = file.folder;
                request.imageOptions = imageOptions;
            
                const viewerApi = TestContext.getViewerApi();                
                return viewerApi.imageCreatePagesCache(request)
                                .then((result) => {
                                    expect(result.pages.length).to.be.greaterThan(0);
                                    expect(result.fileName).to.be.equal(file.fileName); 
                                    expect(result.folder).to.be.equal(file.folder);                           
                                });
            }));
        });
  
    });    
    
});
