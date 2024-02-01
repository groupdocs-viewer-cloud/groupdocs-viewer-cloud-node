/*
* The MIT License (MIT)
*
* Copyright (c) 2003-2024 Aspose Pty Ltd
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
import { DeleteFileRequest, 
    ObjectExistsRequest,
    UploadFileRequest,    
    DownloadFileRequest,
    CreateFolderRequest,
    CopyFileRequest,
    MoveFileRequest,
    DeleteFolderRequest} from "../../src/model";
import * as TestContext from "../test_context";
import { TestFile } from "../test_file";

describe("file_api", () => {
    
    before(async () => {
        process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = "0"
        await TestContext.uploadTestFiles();
    });

    afterEach(async function() {
        await TestContext.cleanupTempFiles();
    });

    describe("test_file_api", () => {

        it("TestDeleteFile", async () => {  
            var testFile = TestFile.FourPagesDocx;
            var deleteRequest = new DeleteFileRequest(testFile.GetPath());
            var existsRequest = new ObjectExistsRequest(testFile.GetPath());
            var uploadRequest = new UploadFileRequest(testFile.GetPath(), TestContext.getTestFileBuffer(testFile));

            await TestContext.getFileApi().deleteFile(deleteRequest);
            var result = await TestContext.getStorageApi().objectExists(existsRequest);
            expect(result.exists).equal(false);
            await TestContext.getFileApi().uploadFile(uploadRequest);
            result = await TestContext.getStorageApi().objectExists(existsRequest);
            expect(result.exists).equal(true);
        });

        it("TestDownloadFile", async () => {  
            var testFile = TestFile.FourPagesDocx;
            var dlRequest = new DownloadFileRequest(testFile.GetPath());

            var result = await TestContext.getFileApi().downloadFile(dlRequest);
            expect(result.length).greaterThan(0);
        });

        it("TestCopyMoveFile", async () => {  
            var testFile = TestFile.FourPagesDocx;

            // Create temp folder
            var cRequest = new CreateFolderRequest("temp");
            await TestContext.getFolderApi().createFolder(cRequest);

            // Copy file
            var destPath = "temp/"+testFile.GetPath();
            var request = new CopyFileRequest(testFile.GetPath(), destPath);
            await TestContext.getFileApi().copyFile(request);

            // Check copied file
            var eRequest = new ObjectExistsRequest(destPath);
            var eResponse = await TestContext.getStorageApi().objectExists(eRequest);
            expect(eResponse.exists).equals(true);

            // Move file
            var newDestPath = "temp/" + testFile.GetPath().replace("four-pages", "four-pages_1");
            var mRequest = new MoveFileRequest(destPath, newDestPath);
            await TestContext.getFileApi().moveFile(mRequest);

            // Check moved file
            eRequest = new ObjectExistsRequest(newDestPath);
            eResponse = await TestContext.getStorageApi().objectExists(eRequest);
            expect(eResponse.exists).equals(true);

            // Delete temp folder
            var delRequest = new DeleteFolderRequest("temp", undefined, true);
            await TestContext.getFolderApi().deleteFolder(delRequest);
        });
    });
    
});
