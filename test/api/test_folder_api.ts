/*
* The MIT License (MIT)
*
* Copyright (c) Aspose Pty Ltd
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
    CreateFolderRequest,
    DeleteFolderRequest,
    GetFilesListRequest,
    CopyFolderRequest,
    MoveFolderRequest} from "../../src/model";
import * as TestContext from "../test_context";

describe("folder_api", () => {
    
    before(async () => {
        process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = "0"
        await TestContext.uploadTestFiles();
    });

    afterEach(async function() {
        await TestContext.cleanupTempFiles();
    });

    describe("test_folder_api", () => {

        it("TestGetFilesList", async () => {  
            var request = new GetFilesListRequest("cad");
            var response = await TestContext.getFolderApi().getFilesList(request);
            expect(response.value.length).greaterThan(0);
        });

        it("TestCopyMoveFolder", async () => {  

            // Create temp folder
            var cRequest = new CreateFolderRequest("temp");
            await TestContext.getFolderApi().createFolder(cRequest);

            // Copy folder
            var copyRequest = new CopyFolderRequest("temp", "temp1");
            await TestContext.getFolderApi().copyFolder(copyRequest);

            // Check copied folder
            var eRequest = new ObjectExistsRequest("temp1");
            var eResponse = await TestContext.getStorageApi().objectExists(eRequest);
            expect(eResponse.exists).equals(true);
            expect(eResponse.isFolder).equals(true);

            // Copy folder
            var moveRequest = new MoveFolderRequest("temp1", "temp2");
            await TestContext.getFolderApi().moveFolder(moveRequest);

            // Check moved folder
            eRequest = new ObjectExistsRequest("temp1");
            eResponse = await TestContext.getStorageApi().objectExists(eRequest);
            expect(eResponse.exists).equals(false);
            eRequest = new ObjectExistsRequest("temp2");
            eResponse = await TestContext.getStorageApi().objectExists(eRequest);
            expect(eResponse.exists).equals(true);

            // Delete temp and temp2 folders
            var delRequest = new DeleteFolderRequest("temp", undefined, true);
            await TestContext.getFolderApi().deleteFolder(delRequest);
            delRequest = new DeleteFolderRequest("temp2", undefined, true);
            await TestContext.getFolderApi().deleteFolder(delRequest);
        });
    });
    
});
