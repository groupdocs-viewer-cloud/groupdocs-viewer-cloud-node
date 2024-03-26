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

import { ConvertAndDownloadRequest} from "../../src/model";

import * as TestContext from "../test_context";
import { TestFile } from "../test_file";

describe("test_convert_and_download_api", () => {
    
    before(async () => {
    });

    afterEach(async function() {
    });

    describe("TestConvertAndDownload", () => {

         it("TestConvertAndDownloadJpg", () => {  

            const api = TestContext.getViewerApi();
            var format = "jpg";
            let filebuf = TestContext.getTestFileBuffer(TestFile.OnePageDocx);

            var request = new ConvertAndDownloadRequest(format, filebuf);
            return api.convertAndDownload(request)
                .then((result) => {     
                    expect(result.length).greaterThan(0);
                });
        });
    });    
});
