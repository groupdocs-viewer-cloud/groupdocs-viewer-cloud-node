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

import { HtmlGetPageResourceRequest, 
         HtmlGetPagesRequest } from "../../src/model";

import * as TestContext from "../test_context";
import { TestFile } from "../test_file";

describe("html_document_page_resource_api", () => {
   
    before(async () => {
        await TestContext.uploadTestFiles();
    });

    afterEach(async function() {
        await TestContext.cleanupTempFiles();
    });

    describe("test_html_get_document_page_resource", async () => {
        it("should return document page resources", async () => {  
            const file = TestFile.OnePageDocx;
            const viewerApi = TestContext.getViewerApi();
        
            const getFirstPage = async () => {
                const getPagesRequest = new HtmlGetPagesRequest(file.fileName);
                getPagesRequest.folder = file.folder;
    
                const getPagesResult = await viewerApi.htmlGetPages(getPagesRequest);
                return getPagesResult.pages[0];
            }; 

            const getPageResource = (p, r) => {
                const getPageResourceRequest = new HtmlGetPageResourceRequest(file.fileName, p.number, r.name);
                getPageResourceRequest.folder = file.folder;
    
                return viewerApi.htmlGetPageResource(getPageResourceRequest);
            };

            const page = await getFirstPage();

            return Promise.all(page.resources.map((resource) => {
                return getPageResource(page, resource)
                    .then((result) => { 
                        expect(result).not.equal(null); 
                    });
            }));
        });
    });
    
});
