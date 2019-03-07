/*
* The MIT License (MIT)
*
* Copyright (c) 2003-2019 Aspose Pty Ltd
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
import { CreateViewRequest, 
    ViewOptions,
    DeleteViewRequest,
    DeleteViewOptions} from "../../src/model";
import * as TestContext from "../test_context";
import { TestFile } from "../test_file";

describe("viewer_delete_api", () => {
    
    before(async () => {
        process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = "0"
        await TestContext.uploadTestFiles();
    });

    afterEach(async function() {
        await TestContext.cleanupTempFiles();
    });

    describe("test_viewer_delete_api", () => {
        it("TestDeleteViewWithDefaultViewFormat", async () => {            
            const viewOptions = new ViewOptions();
            viewOptions.fileInfo = TestFile.OnePageDocx.ToFileInfo();
            const request = new CreateViewRequest(viewOptions);
            var result = await TestContext.getViewerApi().createView(request);
            expect(result.pages.length).equal(1);
            const dvOptions = new DeleteViewOptions();
            dvOptions.fileInfo = TestFile.OnePageDocx.ToFileInfo();
            const delRequest = new DeleteViewRequest(dvOptions);
            await TestContext.getViewerApi().deleteView(delRequest);
        });
    });
    
});
