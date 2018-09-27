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

import { ImageGetAttachmentRequest,
         ImageGetAttachmentsRequest } from "../../src/model";

import * as TestContext from "../test_context";
import { TestFile } from "../test_file";

describe("image_get_attachment_api", () => {
   
    before(async () => {
        await TestContext.uploadTestFiles();
    });

    afterEach(async function() {
        await TestContext.cleanupTempFiles();
    });

    describe("test_image_get_attachment", () => {
        it("should return attachment for msg", () => {  
            const file = TestFile.WithAttachmentMsg;
           
            const request = new ImageGetAttachmentRequest(file.fileName, file.attachmentName);
            request.folder = file.folder;

            const viewerApi = TestContext.getViewerApi();
            return viewerApi.imageGetAttachment(request)
                    .then((result) => {
                        expect(result).to.be.not.equal(null);
                    });
        });

        it("should return attachment for pdf", () => {  
            const file = TestFile.WithAttachmentPdf;
           
            const request = new ImageGetAttachmentRequest(file.fileName, file.attachmentName);
            request.folder = file.folder;

            const viewerApi = TestContext.getViewerApi();
            return viewerApi.imageGetAttachment(request)
                    .then((result) => {
                        expect(result).to.be.not.equal(null);
                    });
        });
    });

    describe("test_image_get_attachments", () => {
        it("should return attachments for msg", () => {  
            const file = TestFile.WithAttachmentMsg;
           
            const request = new ImageGetAttachmentsRequest(file.fileName);
            request.folder = file.folder;

            const viewerApi = TestContext.getViewerApi();
            return viewerApi.imageGetAttachments(request)
                    .then((result) => {
                        expect(result.attachments.length).to.be.equal(1);
                        expect(result.attachments[0].name).to.be.equal("password-protected.docx");
                    });
        });

        it("should return attachments for pdf", () => {  
            const file = TestFile.WithAttachmentPdf;
           
            const request = new ImageGetAttachmentsRequest(file.fileName);
            request.folder = file.folder;

            const viewerApi = TestContext.getViewerApi();
            return viewerApi.imageGetAttachments(request)
                    .then((result) => {
                        expect(result.attachments.length).to.be.equal(1);
                        expect(result.attachments[0].name).to.be.equal("password-protected.docx");
                    });
        });
    });
    
});
