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

import { GetInfoRequest, 
         ViewOptions,
         RenderOptions,
         SpreadsheetOptions,
         CadOptions,
         ProjectManagementOptions,
         ImageOptions} from "../../src/model";

import * as TestContext from "../test_context";
import { TestFile } from "../test_file";

describe("viewer_get_info_api", () => {
    
    before(async () => {
        await TestContext.uploadTestFiles();
    });

    afterEach(async function() {
        await TestContext.cleanupTempFiles();
    });

    describe("TestGetInfo", () => {

         it("TestGetInfoReturnsMissingFileInfo", () => {  
            const request = new GetInfoRequest(new ViewOptions());                      
            return TestContext.getViewerApi().getInfo(request).catch((error) => {
                expect(error.message).equal("Parameter \'FileInfo\' is not specified.");
            });
        });

        it("TestGetInfoReturnsFileNotFound", () => {  
            const viewOptions = new ViewOptions();
            viewOptions.fileInfo = TestFile.NotExist.ToFileInfo();
            const request = new GetInfoRequest(viewOptions);
            return TestContext.getViewerApi().getInfo(request).catch((error) => {
                expect(error.message).equal("Can\'t find file located at \'some-folder\\NotExist.docx\'.");
            });
        });        

        it("TestGetInfoWithMinimalViewOptions", () => {  
            const viewOptions = new ViewOptions();
            viewOptions.fileInfo = TestFile.PasswordProtectedDocx.ToFileInfo();
            const request = new GetInfoRequest(viewOptions);
            return TestContext.getViewerApi().getInfo(request)
                     .then((result) => {                         
                         expect(result.pages.length).equal(4);
                         expect(result.attachments.length).equal(0);
                     });
        });

        it("TestGetInfoWithDefaultViewFormat", () => {  
            const viewOptions = new ViewOptions();
            viewOptions.fileInfo = TestFile.OnePageDocx.ToFileInfo();
            const request = new GetInfoRequest(viewOptions);
            return TestContext.getViewerApi().getInfo(request)
                     .then((result) => {                         
                         expect(result.pages.length).equal(1);
                         expect(result.pages[0].number).equal(1);
                         expect(result.attachments.length).equal(0);
                     });
        });

        it("TestGetInfoWithHtmlViewFormat", () => {  
            const viewOptions = new ViewOptions();
            viewOptions.viewFormat = ViewOptions.ViewFormatEnum.HTML;
            viewOptions.fileInfo = TestFile.OnePageDocx.ToFileInfo();
            const request = new GetInfoRequest(viewOptions);
            return TestContext.getViewerApi().getInfo(request)
                     .then((result) => {                         
                         expect(result.pages.length).equal(1);
                         expect(result.pages[0].number).equal(1);
                         expect(result.pages[0].width).equal(0);
                         expect(result.attachments.length).equal(0);
                     });
        });

        it("TestGetInfoWithImageViewFormat", () => {  
            const viewOptions = new ViewOptions();
            viewOptions.viewFormat = ViewOptions.ViewFormatEnum.BMP;
            viewOptions.fileInfo = TestFile.OnePageDocx.ToFileInfo();
            const request = new GetInfoRequest(viewOptions);
            return TestContext.getViewerApi().getInfo(request)
                     .then((result) => {                         
                         expect(result.pages.length).equal(1);
                         expect(result.pages[0].number).equal(1);
                         expect(result.pages[0].width).greaterThan(0);
                         expect(result.attachments.length).equal(0);
                     });
        });

        it("TestGetInfoWithRenderHiddenPages", () => {  
            const viewOptions = new ViewOptions();            
            viewOptions.fileInfo = TestFile.TwoHiddenPagesVsd.ToFileInfo();
            var renderOptions = new RenderOptions();
            renderOptions.renderHiddenPages = true;
            viewOptions.renderOptions = renderOptions;
            const request = new GetInfoRequest(viewOptions);
            return TestContext.getViewerApi().getInfo(request)
                     .then((result) => {                         
                         expect(result.pages.length).equal(3);
                     });
        });    
        
        it("TestGetInfoWithSpreadsheetPaginateSheetsOption", () => {  
            const viewOptions = new ViewOptions();            
            viewOptions.fileInfo = TestFile.WithHiddenRowsAndColumns.ToFileInfo();
            var spsOptions = new SpreadsheetOptions();
            spsOptions.paginateSheets = true;
            spsOptions.countRowsPerPage = 5;
            var renderOptions = new RenderOptions();
            renderOptions.spreadsheetOptions = spsOptions;
            viewOptions.renderOptions = renderOptions;
            const request = new GetInfoRequest(viewOptions);
            return TestContext.getViewerApi().getInfo(request)
                     .then((result) => {                         
                         expect(result.pages.length).equal(2);
                     });
        });        

        it("TestGetInfoWithSpreadsheetRenderHiddenRowsOption", () => {  
            const viewOptions = new ViewOptions();            
            viewOptions.fileInfo = TestFile.WithHiddenRowsAndColumns.ToFileInfo();
            var spsOptions = new SpreadsheetOptions();
            spsOptions.paginateSheets = true;
            spsOptions.countRowsPerPage = 5;
            spsOptions.renderHiddenRows = true;
            var renderOptions = new RenderOptions();
            renderOptions.spreadsheetOptions = spsOptions;
            viewOptions.renderOptions = renderOptions;
            const request = new GetInfoRequest(viewOptions);
            return TestContext.getViewerApi().getInfo(request)
                     .then((result) => {                         
                         expect(result.pages.length).equal(3);
                     });
        });        

        it("TestGetInfoWithCadOptions", () => {  
            const viewOptions = new ViewOptions();            
            viewOptions.fileInfo = TestFile.ThreeLayoutsDwf.ToFileInfo();
            var cadOptions = new CadOptions();
            cadOptions.scaleFactor = 5.0;
            var renderOptions = new RenderOptions();
            renderOptions.cadOptions = cadOptions;
            viewOptions.renderOptions = renderOptions;
            const request = new GetInfoRequest(viewOptions);
            return TestContext.getViewerApi().getInfo(request)
                     .then((result) => {                         
                         expect(result.pages.length).equal(3);
                     });
        });

        it("TestGetInfoWithProjectOptions", () => {  
            const viewOptions = new ViewOptions();            
            viewOptions.fileInfo = TestFile.ProjectMpp.ToFileInfo();
            var projectOptions = new ProjectManagementOptions();
            projectOptions.pageSize = "Unknown";
            projectOptions.timeUnit = "Months";
            projectOptions.startDate = new Date("2008/07/01");
            projectOptions.endDate = new Date("2008/07/31");
            var renderOptions = new RenderOptions();
            renderOptions.projectManagementOptions = projectOptions;
            viewOptions.renderOptions = renderOptions;
            const request = new GetInfoRequest(viewOptions);
            return TestContext.getViewerApi().getInfo(request)
                     .then((result) => {                         
                         expect(result.pages.length).equal(2);
                     });
        });
 
        it("TestGetInfoWithImageViewOptions", () => {  
            const viewOptions = new ViewOptions();
            viewOptions.viewFormat = ViewOptions.ViewFormatEnum.PNG;
            viewOptions.fileInfo = TestFile.OnePageDocx.ToFileInfo();
            var imgOptions = new ImageOptions();
            imgOptions.extractText = true;
            viewOptions.renderOptions = imgOptions;            
            const request = new GetInfoRequest(viewOptions);
            return TestContext.getViewerApi().getInfo(request)
                     .then((result) => {                         
                         expect(result.pages.length).equal(1);
                         expect(result.pages[0].number).equal(1);                         
                         expect(result.pages[0].rows.length).greaterThan(0);
                         expect(result.attachments.length).equal(0);
                     });
        });        
    });


    
});
