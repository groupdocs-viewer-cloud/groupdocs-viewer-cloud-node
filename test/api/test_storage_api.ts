/*
* The MIT License (MIT)
*
* Copyright (c) 2003-2020 Aspose Pty Ltd
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
import {
    ObjectExistsRequest,
    GetDiscUsageRequest,
    StorageExistsRequest,
    GetFileVersionsRequest} from "../../src/model";
import * as TestContext from "../test_context";
import { TestFile } from "../test_file";

describe("storage_api", () => {
    
    before(async () => {
        process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = "0"
        await TestContext.uploadTestFiles();
    });

    afterEach(async function() {
        await TestContext.cleanupTempFiles();
    });

    describe("test_storage_api", () => {

        it("TestGetDiscUsage", async () => {              
            var request = new GetDiscUsageRequest();
            var response = await TestContext.getStorageApi().getDiscUsage(request);            
            expect(response.totalSize).greaterThan(0);
            expect(response.usedSize).greaterThan(0);
        });

        it("TestStorageExist", async () => {              
            var request = new StorageExistsRequest("First Storage");            
            var response = await TestContext.getStorageApi().storageExists(request);
            expect(response.exists).equals(true);
        });

        it("TestGetFileVersions", async () => {                          
            var testFile = TestFile.OnePageDocx;
            var request = new GetFileVersionsRequest(testFile.GetPath());            
            var response = await TestContext.getStorageApi().getFileVersions(request);
            expect(response.value.length).greaterThan(0);
        });

        it("TestObjectExists", async () => {                          
            var testFile = TestFile.OnePageDocx;
            var request = new ObjectExistsRequest(testFile.GetPath());            
            var eResponse = await TestContext.getStorageApi().objectExists(request);
            expect(eResponse.exists).equals(true);
            expect(eResponse.isFolder).equals(false);
        });        
    });    
});
