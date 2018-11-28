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
         HtmlGetDocumentInfoFromContentRequest,
         HtmlGetDocumentInfoFromUrlRequest,
         HtmlGetDocumentInfoFromUrlWithOptionsRequest,
         HtmlGetDocumentInfoRequest,
         HtmlGetDocumentInfoWithOptionsRequest, 
         SlidesOptions, 
         ProjectOptions} from "../../src/model";

import * as TestContext from "../test_context";
import { TestFile } from "../test_file";

describe("html_document_info_api", () => {

    before(async () => {
        await TestContext.uploadTestFiles();
    });

    afterEach(async () => {
        await TestContext.cleanupTempFiles();
    });

    describe("test_html_get_document_info", () => {
        it("should return document information", () => {
            const file = TestFile.FourPagesDocx;

            const request = new HtmlGetDocumentInfoRequest(file.fileName);
            request.folder = file.folder;

            const viewerApi = TestContext.getViewerApi();
            return viewerApi.htmlGetDocumentInfo(request)
                .then((result) => {
                    expect(result.pages.length).equal(4);
                    expect(result.extension).equal(".docx");
                    expect(result.fileName).equal("four-pages.docx");
                });
        });

        it("should return document information with render hidden pages", () => {
            const file = TestFile.TwoHiddenPagesVsd;

            const request = new HtmlGetDocumentInfoRequest(file.fileName);
            request.folder = file.folder;
            request.renderHiddenPages = true;

            const viewerApi = TestContext.getViewerApi();
            return viewerApi.htmlGetDocumentInfo(request)
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

            const request = new HtmlGetDocumentInfoWithOptionsRequest(file.fileName);
            request.folder = file.folder;
            request.documentInfoOptions = documentInfoOptions;

            const viewerApi = TestContext.getViewerApi();
            return viewerApi.htmlGetDocumentInfoWithOptions(request)
                .then((result) => {
                    expect(result.pages.length).equal(1);
                    expect(result.extension).equal(".docx");
                    expect(result.fileName).equal("password-protected.docx");
                });
        });

        it("should throw when document not found", () => {
            const fileName = "file-not-found.docx";
            const request = new HtmlGetDocumentInfoRequest(fileName);

            const viewerApi = TestContext.getViewerApi();
            return viewerApi.htmlGetDocumentInfo(request)
                .catch((error) => {
                    expect(error.message).equal("Can't find file with given name 'file-not-found.docx' and folder ''.");
                });
        });

        it("should throw when password not provided", () => {
            const file = TestFile.PasswordProtectedDocx;

            const request = new HtmlGetDocumentInfoRequest(file.fileName);
            request.folder = file.folder;

            const viewerApi = TestContext.getViewerApi();
            return viewerApi.htmlGetDocumentInfo(request)
                .catch((error) => {
                    expect(error.message).equal("The password was not provided. The specified file 'password-protected.docx' is password-protected.");
                });
        });

        it("should throw when password not provided", () => {
            const file = TestFile.PasswordProtectedDocx;

            const request = new HtmlGetDocumentInfoRequest(file.fileName);
            request.folder = file.folder;
            request.password = "not a password";

            const viewerApi = TestContext.getViewerApi();
            return viewerApi.htmlGetDocumentInfo(request)
                .catch((error) => {
                    expect(error.message).equal("Password provided for file with name 'password-protected.docx' is incorrect.");
                });
        });

        it("should throw when file is corrupted", () => {
            const file = TestFile.CorruptedPdf;

            const request = new HtmlGetDocumentInfoRequest(file.fileName);
            request.folder = file.folder;

            const viewerApi = TestContext.getViewerApi();
            return viewerApi.htmlGetDocumentInfo(request)
                .catch((error) => {
                    expect(error.message).equal("Failed to read specified file 'corrupted.pdf'. File can be corrupted or damaged.");
                });
        });
    });

    describe("test_html_get_document_info_from_url", () => {
        it("should return document information from url", () => {
            const file = TestFile.FromUrlOnePageDocx;

            const request = new HtmlGetDocumentInfoFromUrlRequest(file.fileName);
            request.url = file.url;
            request.folder = "test\\from_url";

            const viewerApi = TestContext.getViewerApi();
            return viewerApi.htmlGetDocumentInfoFromUrl(request)
                .then((result) => {
                    expect(result.pages.length).equal(1);
                    expect(result.extension).equal(".docx");
                    expect(result.fileName).equal("one-page.docx");
                });
        });

        it("should throw when ulr is invalid", () => {
            const url = "invalid-url";
            const request = new HtmlGetDocumentInfoFromUrlRequest(url);

            const viewerApi = TestContext.getViewerApi();
            return viewerApi.htmlGetDocumentInfoFromUrl(request)
                .catch((error) => {
                    expect(error.message).equal("Can't parse specified URL 'invalid-url'.");
                });
        });

        it("should return document information from url with options", () => {
            const file = TestFile.FromUrlWithNotesPptx;

            const documentInfoOptions = new DocumentInfoOptions();
            documentInfoOptions.slidesOptions = new SlidesOptions();
            documentInfoOptions.slidesOptions.renderNotes = true;

            const request = new HtmlGetDocumentInfoFromUrlWithOptionsRequest(file.fileName);
            request.url = file.url;
            request.folder = "test\\from_url";
            request.documentInfoOptions = documentInfoOptions;

            const viewerApi = TestContext.getViewerApi();
            return viewerApi.htmlGetDocumentInfoFromUrlWithOptions(request)
                .then((result) => {
                    expect(result.pages.length).equal(1);
                    expect(result.extension).equal(".pptx");
                    expect(result.fileName).equal("with-notes.pptx");
                });
        });
    });

    describe("test_html_get_document_info_from_content", () => {
        it("should return document information from content", () => {
            const file = TestFile.PasswordProtectedDocx;

            const documentInfoOptions = new DocumentInfoOptions();
            documentInfoOptions.password = file.password;

            const fileBuffer = TestContext.getTestFileBuffer(file);
            const optionsBuffer = TestContext.serializeIntoBuffer(documentInfoOptions);

            const request = new HtmlGetDocumentInfoFromContentRequest(fileBuffer, optionsBuffer);
            request.fileName = file.fileName;
            request.folder = "test\\from_content";

            const viewerApi = TestContext.getViewerApi();
            return viewerApi.htmlGetDocumentInfoFromContent(request)
                .then((result) => {
                    expect(result.pages.length).equal(1);
                    expect(result.extension).equal(".docx");
                    expect(result.fileName).equal("password-protected.docx");
                });
        });
    });

    describe("test_html_get_document_info_with_project_options", () => {
        it("should return document information with project options", () => {
            const file = TestFile.ProjectMpp;

            const projectOptions = new ProjectOptions();
            projectOptions.pageSize = "Unknown";
            projectOptions.timeUnit = "Months";
            projectOptions.startDate = new Date("2008/07/01");
            projectOptions.endDate = new Date("2008/07/31");

            const documentInfoOptions = new DocumentInfoOptions();
            documentInfoOptions.projectOptions = projectOptions;

            const request = new HtmlGetDocumentInfoWithOptionsRequest(file.fileName);
            request.folder = file.folder;
            request.documentInfoOptions = documentInfoOptions;

            const viewerApi = TestContext.getViewerApi();
            return viewerApi.htmlGetDocumentInfoWithOptions(request)
                .then((result) => {
                    expect(result.pages.length).equal(2);
                    expect(result.extension).equal(".mpp");
                    expect(result.fileName).equal(file.fileName);
                    expect(result.startDate.getTime()).equal(Date.parse("2008/06/01"));
                    expect(result.endDate.getTime()).equal(Date.parse("2008/09/03")); 
                });
        });
    });    
});
