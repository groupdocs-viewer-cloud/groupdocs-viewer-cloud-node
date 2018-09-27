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

import { HtmlCreatePdfFileFromContentRequest,
         HtmlCreatePdfFileFromUrlRequest,
         HtmlCreatePdfFileRequest,
         HtmlGetPdfFileFromUrlRequest,
         HtmlGetPdfFileRequest,
         PdfFileOptions,
         SlidesOptions } from "../../src/model";

import * as TestContext from "../test_context";
import { TestFile } from "../test_file";

describe("html_document_pdf_api", () => {
    
    before(async () => {
        await TestContext.uploadTestFiles();
    });

    afterEach(async function() {
        await TestContext.cleanupTempFiles();
    });

    describe("test_html_get_pdf_file", () => {
        it("should download pdf file", () => {  
            const file = TestFile.FourPagesDocx;
           
            const request = new HtmlGetPdfFileRequest(file.fileName);
            request.folder = file.folder;

            const viewerApi = TestContext.getViewerApi();
            return viewerApi.htmlGetPdfFile(request)
                    .then((result) => {
                        expect(result).to.be.not.equal(null);
                    });
        });

        it("should download pdf file from url", () => {  
            const file = TestFile.FromUrlOnePageDocx;
           
            const request = new HtmlGetPdfFileFromUrlRequest(file.url);
            request.fileName = file.fileName;
            request.folder = "test\\from_url";

            const viewerApi = TestContext.getViewerApi();
            return viewerApi.htmlGetPdfFileFromUrl(request)
                    .then((result) => {
                        expect(result).to.be.not.equal(null);
                    });
        });
    });

    describe("test_html_create_pdf_file", () => {
        it("should create pdf file", () => {  
            const file = TestFile.PasswordProtectedDocx;
            
            const pdfFileOptions = new PdfFileOptions();
            pdfFileOptions.password = file.password;

            const request = new HtmlCreatePdfFileRequest(file.fileName);
            request.folder = file.folder;
            request.pdfFileOptions = pdfFileOptions;

            const viewerApi = TestContext.getViewerApi();
            return viewerApi.htmlCreatePdfFile(request)
                    .then((result) => {
                        expect(result.fileName).not.to.equal("");
                        expect(result.folder).not.to.equal("");
                        expect(result.pdfFileName).not.to.equal("");
                    });
        });

        it("should create pdf file from content", () => {  
            const file = TestFile.PasswordProtectedDocx;
            
            const pdfFileOptions = new PdfFileOptions();
            pdfFileOptions.password = file.password;

            const fileBuffer = TestContext.getTestFileBuffer(file);
            const optionsBuffer = TestContext.serializeIntoBuffer(pdfFileOptions);

            const request = new HtmlCreatePdfFileFromContentRequest(fileBuffer, optionsBuffer);
            request.fileName = file.fileName;
            request.folder = "test\\from_content";

            const viewerApi = TestContext.getViewerApi();
            return viewerApi.htmlCreatePdfFileFromContent(request)
                    .then((result) => {
                        expect(result.fileName).not.to.equal("");
                        expect(result.folder).not.to.equal("");
                        expect(result.pdfFileName).not.to.equal("");
                    });
        });

        it("should create pdf file from url", () => {  
            const file = TestFile.FromUrlWithNotesPptx;
            
            const pdfFileOptions = new PdfFileOptions();
            pdfFileOptions.slidesOptions = new SlidesOptions();
            pdfFileOptions.slidesOptions.renderNotes = true;

            const request = new HtmlCreatePdfFileFromUrlRequest(file.url);
            request.fileName = file.fileName;
            request.folder = "test\\from_url";
            request.pdfFileOptions = pdfFileOptions;

            const viewerApi = TestContext.getViewerApi();
            return viewerApi.htmlCreatePdfFileFromUrl(request)
                    .then((result) => {
                        expect(result.fileName).not.to.equal("");
                        expect(result.folder).not.to.equal("");
                        expect(result.pdfFileName).not.to.equal("");
                    });
        });
    });
    
});
