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
         ImageGetDocumentInfoFromContentRequest,
         ImageGetDocumentInfoFromUrlRequest,
         ImageGetDocumentInfoFromUrlWithOptionsRequest,
         ImageGetDocumentInfoRequest,
         ImageGetDocumentInfoWithOptionsRequest, 
         SlidesOptions } from "../../src/model";

import * as TestContext from "../test_context";
import { TestFile } from "../test_file";

describe("image_document_info_api", () => {
   
    before(async () => {
        await TestContext.uploadTestFiles();
    });

    afterEach(async function() {
        await TestContext.cleanupTempFiles();
    });

    describe("test_image_get_document_info", () => {
        it("should return document information", () => {  
            const file = TestFile.FourPagesDocx;
        
            const request = new ImageGetDocumentInfoRequest(file.fileName);
            request.folder = file.folder;

            const viewerApi = TestContext.getViewerApi();
            return viewerApi.imageGetDocumentInfo(request)
                .then((result) => {
                    expect(result.pages.length).equal(4);
                    expect(result.extension).equal(".docx");
                    expect(result.fileName).equal("four-pages.docx");
                });
        });

        it("should return document information with render hidden pages", () => {  
            const file = TestFile.TwoHiddenPagesVsd;
        
            const request = new ImageGetDocumentInfoRequest(file.fileName);
            request.folder = file.folder;
            request.renderHiddenPages = true;

            const viewerApi = TestContext.getViewerApi();
            return viewerApi.imageGetDocumentInfo(request)
                .then((result) => {
                    expect(result.pages.length).equal(3);
                    expect(result.extension).equal(".vsd");
                    expect(result.fileName).equal("two-hidden-pages.vsd");
                });
        });

        it("should return document information with options", () => {
            const file = TestFile.PasswordProtectedDocx;

            const documentInfoOptions = new DocumentInfoOptions();
            documentInfoOptions.password = file.password;

            const request = new ImageGetDocumentInfoWithOptionsRequest(file.fileName);
            request.folder = file.folder;
            request.documentInfoOptions = documentInfoOptions;

            const viewerApi = TestContext.getViewerApi();
            return viewerApi.imageGetDocumentInfoWithOptions(request)
                .then((result) => {
                    expect(result.pages.length).equal(1);
                    expect(result.extension).equal(".docx");
                    expect(result.fileName).equal("password-protected.docx");
                });
        });

        it("should throw when document not found", () => {  
            const fileName = "file-not-found.docx";
            const request = new ImageGetDocumentInfoRequest(fileName);

            const viewerApi = TestContext.getViewerApi();
            return viewerApi.imageGetDocumentInfo(request)
                .catch((error) => {
                    expect(error.message).equal("Can't find file with given name 'file-not-found.docx' and folder ''.");
                });
        });

        it("should throw when password not provided", () => {  
            const file = TestFile.PasswordProtectedDocx;

            const request = new ImageGetDocumentInfoRequest(file.fileName);
            request.folder = file.folder;

            const viewerApi = TestContext.getViewerApi();
            return viewerApi.imageGetDocumentInfo(request)
                .catch((error) => {
                    expect(error.message).equal("The password was not provided. The specified file 'password-protected.docx' is password-protected.");
                });
        });

        it("should throw when password not provided", () => {  
            const file = TestFile.PasswordProtectedDocx;

            const request = new ImageGetDocumentInfoRequest(file.fileName);
            request.folder = file.folder;
            request.password = "not a password";

            const viewerApi = TestContext.getViewerApi();
            return viewerApi.imageGetDocumentInfo(request)
                .catch((error) => {
                    expect(error.message).equal("Password provided for file with name 'password-protected.docx' is incorrect.");
                });
        });

        it("should throw when file is corrupted", () => {  
            const file = TestFile.CorruptedPdf;

            const request = new ImageGetDocumentInfoRequest(file.fileName);
            request.folder = file.folder;

            const viewerApi = TestContext.getViewerApi();
            return viewerApi.imageGetDocumentInfo(request)
                .catch((error) => {
                    expect(error.message).equal("Failed to read specified file 'corrupted.pdf'. File can be corrupted or damaged.");
                });
        });
    });

    describe("test_image_get_document_info_from_url", () => {
        it("should return document information from url", () => {  
            const file = TestFile.FromUrlOnePageDocx;
        
            const request = new ImageGetDocumentInfoFromUrlRequest(file.url);
            request.fileName = file.fileName;
            request.folder = "test\\from_url";

            const viewerApi = TestContext.getViewerApi();
            return viewerApi.imageGetDocumentInfoFromUrl(request)
                .then((result) => {
                    expect(result.pages.length).equal(1);
                    expect(result.extension).equal(".docx");
                    expect(result.fileName).equal("one-page.docx");
                });
        });

        it("should throw when ulr is invalid", () => {  
            const url = "invalid-url";
            const request = new ImageGetDocumentInfoFromUrlRequest(url);

            const viewerApi = TestContext.getViewerApi();
            return viewerApi.imageGetDocumentInfoFromUrl(request)
                .catch((error) => {
                    expect(error.message).equal("Can't parse specified URL 'invalid-url'.");
                });
        });

        it("should return document information from url with options", () => {  
            const file = TestFile.FromUrlWithNotesPptx;
        
            const documentInfoOptions = new DocumentInfoOptions();
            documentInfoOptions.slidesOptions = new SlidesOptions();
            documentInfoOptions.slidesOptions.renderNotes = true;

            const request = new ImageGetDocumentInfoFromUrlWithOptionsRequest(file.url);
            request.fileName = file.fileName;
            request.folder = "test\\from_url";
            request.documentInfoOptions = documentInfoOptions;

            const viewerApi = TestContext.getViewerApi();
            return viewerApi.imageGetDocumentInfoFromUrlWithOptions(request)
                .then((result) => {
                    expect(result.pages.length).equal(1);
                    expect(result.extension).equal(".pptx");
                    expect(result.fileName).equal("with-notes.pptx");
                });
        });
    });

    describe("test_image_get_document_info_from_content", () => {
        it("should return document information from content", () => {  
            const file = TestFile.PasswordProtectedDocx;
        
            const documentInfoOptions = new DocumentInfoOptions();
            documentInfoOptions.password = file.password;

            const fileBuffer = TestContext.getTestFileBuffer(file);
            const optionsBuffer = TestContext.serializeIntoBuffer(documentInfoOptions);

            const request = new ImageGetDocumentInfoFromContentRequest(fileBuffer, optionsBuffer);
            request.fileName = file.fileName;
            request.folder = "test\\from_content";

            const viewerApi = TestContext.getViewerApi();
            return viewerApi.imageGetDocumentInfoFromContent(request)
                .then((result) => {
                    expect(result.pages.length).equal(1);
                    expect(result.extension).equal(".docx");
                    expect(result.fileName).equal("password-protected.docx");
                });
        });
    });
    
});
