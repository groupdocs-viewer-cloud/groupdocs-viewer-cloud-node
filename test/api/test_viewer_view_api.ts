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

import { CreateViewRequest, 
         ViewOptions,
         RenderOptions,
         SpreadsheetOptions,
         CadOptions,
         ProjectManagementOptions,         
         DownloadFileRequest,
         HtmlOptions} from "../../src/model";

import * as TestContext from "../test_context";
import { TestFile } from "../test_file";

describe("viewer_create_view_api", () => {
    
    before(async () => {
        await TestContext.uploadTestFiles();
    });

    afterEach(async function() {
        await TestContext.cleanupTempFiles();
    });

    describe("TestCreateView", () => {

         it("TestCreateViewReturnsMissingFileInfo", () => {  
            const request = new CreateViewRequest(new ViewOptions());                      
            return TestContext.getViewerApi().createView(request).catch((error) => {
                expect(error.message).equal("Parameter \'FileInfo\' is not specified.");
            });
        });

        it("TestCreateViewReturnsFileNotFound", () => {  
            const viewOptions = new ViewOptions();
            viewOptions.fileInfo = TestFile.NotExist.ToFileInfo();
            const request = new CreateViewRequest(viewOptions);
            return TestContext.getViewerApi().createView(request).catch((error) => {
                expect(error.message).equal("Can\'t find file located at \'some-folder\\NotExist.docx\'.");
            });
        });        

        it("TestCreateViewWithMinimalViewOptions", () => {  
            const viewOptions = new ViewOptions();
            viewOptions.fileInfo = TestFile.PasswordProtectedDocx.ToFileInfo();
            const request = new CreateViewRequest(viewOptions);
            return TestContext.getViewerApi().createView(request)
                     .then((result) => {                         
                         expect(result.pages.length).equal(4);
                         expect(result.attachments.length).equal(0);
                         const dRequest = new DownloadFileRequest(result.pages[0].path);
                         TestContext.getFileApi().downloadFile(dRequest).then((dResult) => {
                                expect(dResult.length).greaterThan(0);
                         });
                     });
        });

        it("TestCreateViewWithDefaultViewFormat", () => {  
            const viewOptions = new ViewOptions();
            viewOptions.fileInfo = TestFile.OnePageDocx.ToFileInfo();
            const request = new CreateViewRequest(viewOptions);
            return TestContext.getViewerApi().createView(request)
                     .then((result) => {                         
                         expect(result.pages.length).equal(1);
                         expect(result.pages[0].number).equal(1);
                         expect(result.attachments.length).equal(0);
                     });
        });

        it("TestCreateViewWithHtmlViewFormat", () => {  
            const viewOptions = new ViewOptions();
            viewOptions.viewFormat = ViewOptions.ViewFormatEnum.HTML;
            viewOptions.fileInfo = TestFile.OnePageDocx.ToFileInfo();
            const request = new CreateViewRequest(viewOptions);
            return TestContext.getViewerApi().createView(request)
                     .then((result) => {                         
                         expect(result.pages.length).equal(1);
                         expect(result.pages[0].number).equal(1);
                         expect(result.attachments.length).equal(0);
                     });
        });

        it("TestCreateViewWithImageViewFormat", () => {  
            const viewOptions = new ViewOptions();
            viewOptions.viewFormat = ViewOptions.ViewFormatEnum.PNG;
            viewOptions.fileInfo = TestFile.OnePageDocx.ToFileInfo();
            const request = new CreateViewRequest(viewOptions);
            return TestContext.getViewerApi().createView(request)
                     .then((result) => {                         
                         expect(result.pages.length).equal(1);
                         expect(result.pages[0].number).equal(1);                         
                         expect(result.attachments.length).equal(0);
                     });
        });

        it("TestCreateViewWithRenderHiddenPages", () => {  
            const viewOptions = new ViewOptions();            
            viewOptions.fileInfo = TestFile.TwoHiddenPagesVsd.ToFileInfo();
            var renderOptions = new RenderOptions();
            renderOptions.renderHiddenPages = true;
            viewOptions.renderOptions = renderOptions;
            const request = new CreateViewRequest(viewOptions);
            return TestContext.getViewerApi().createView(request)
                     .then((result) => {                         
                         expect(result.pages.length).equal(3);
                     });
        });    
        
        it("TestCreateViewWithSpreadsheetPaginateSheetsOption", () => {  
            const viewOptions = new ViewOptions();            
            viewOptions.fileInfo = TestFile.WithHiddenRowsAndColumns.ToFileInfo();
            var spsOptions = new SpreadsheetOptions();
            spsOptions.paginateSheets = true;
            spsOptions.countRowsPerPage = 5;
            var renderOptions = new RenderOptions();
            renderOptions.spreadsheetOptions = spsOptions;
            viewOptions.renderOptions = renderOptions;
            const request = new CreateViewRequest(viewOptions);
            return TestContext.getViewerApi().createView(request)
                     .then((result) => {                         
                         expect(result.pages.length).equal(2);
                     });
        });        

        it("TestCreateViewWithSpreadsheetRenderHiddenRowsOption", () => {  
            const viewOptions = new ViewOptions();            
            viewOptions.fileInfo = TestFile.WithHiddenRowsAndColumns.ToFileInfo();
            var spsOptions = new SpreadsheetOptions();
            spsOptions.paginateSheets = true;
            spsOptions.countRowsPerPage = 5;
            spsOptions.renderHiddenRows = true;
            var renderOptions = new RenderOptions();
            renderOptions.spreadsheetOptions = spsOptions;
            viewOptions.renderOptions = renderOptions;
            const request = new CreateViewRequest(viewOptions);
            return TestContext.getViewerApi().createView(request)
                     .then((result) => {                         
                         expect(result.pages.length).equal(3);
                     });
        });        

        it("TestCreateViewWithCadOptions", () => {  
            const viewOptions = new ViewOptions();            
            viewOptions.fileInfo = TestFile.ThreeLayoutsDwf.ToFileInfo();
            var cadOptions = new CadOptions();
            cadOptions.width = 800;
            var renderOptions = new RenderOptions();
            renderOptions.cadOptions = cadOptions;
            viewOptions.renderOptions = renderOptions;
            const request = new CreateViewRequest(viewOptions);
            return TestContext.getViewerApi().createView(request)
                     .then((result) => {                         
                         expect(result.pages.length).equal(3);
                     });
        });

        it("TestCreateViewWithProjectOptions", () => {  
            const viewOptions = new ViewOptions();            
            viewOptions.fileInfo = TestFile.ProjectMpp.ToFileInfo();
            var projectOptions = new ProjectManagementOptions();
            projectOptions.pageSize = ProjectManagementOptions.PageSizeEnum.Unspecified;
            projectOptions.timeUnit = ProjectManagementOptions.TimeUnitEnum.Months;
            projectOptions.startDate = new Date(Date.UTC(2008, 7, 1, 0, 0, 0));
            projectOptions.endDate = new Date(Date.UTC(2008, 7, 31, 0, 0, 0));
            var renderOptions = new RenderOptions();
            renderOptions.projectManagementOptions = projectOptions;
            viewOptions.renderOptions = renderOptions;
            const request = new CreateViewRequest(viewOptions);
            return TestContext.getViewerApi().createView(request)
                     .then((result) => {                         
                         expect(result.pages.length).equal(1);
                     });
        });

        it("TestCreateViewWithFontsPathOption", () => {  
            const viewOptions = new ViewOptions();            
            viewOptions.fileInfo = TestFile.UsesCustomFontPptx.ToFileInfo();
            viewOptions.viewFormat = ViewOptions.ViewFormatEnum.PNG;
            viewOptions.fontsPath = "font/ttf";
            const request = new CreateViewRequest(viewOptions);
            return TestContext.getViewerApi().createView(request)
                     .then((result) => {                         
                         expect(result.pages.length).equal(1);
                     });
        });

        it("TestCreateViewWithStartPageAndCountPages", () => {  
            const viewOptions = new ViewOptions();            
            viewOptions.fileInfo = TestFile.FourPagesDocx.ToFileInfo();
            var renderOptions = new RenderOptions();
            renderOptions.startPageNumber = 2;
            renderOptions.countPagesToRender = 2;
            viewOptions.renderOptions = renderOptions;
            const request = new CreateViewRequest(viewOptions);
            return TestContext.getViewerApi().createView(request)
                     .then((result) => {                         
                         expect(result.pages.length).equal(2);
                         expect(result.pages[0].number).equal(2);
                     });
        });        

        it("TestCreateViewWithHtmlViewOptions", () => {  
            const viewOptions = new ViewOptions();            
            viewOptions.fileInfo = TestFile.OnePageDocx.ToFileInfo();
            var renderOptions = new HtmlOptions();
            renderOptions.externalResources = true;
            viewOptions.renderOptions = renderOptions;
            const request = new CreateViewRequest(viewOptions);
            return TestContext.getViewerApi().createView(request)
                     .then((result) => {                         
                         expect(result.pages.length).equal(1);
                         expect(result.pages[0].resources.length).greaterThan(0);
                     });
        });         
    });


    
});
