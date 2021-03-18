/*
* The MIT License (MIT)
*
* Copyright (c) 2003-2021 Aspose Pty Ltd
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
import { FileInfo } from "../src/model";
/**
 * Describes test file
 */
export class TestFile {

    /**
     * DOCX file with one page
     */
    public static OnePageDocx: TestFile =
        new TestFile("one-page.docx", "words\\docx\\");

    /**
     * DOCX file that should not exists in storage
     */
    public static NotExist: TestFile =
        new TestFile("NotExist.docx", "some-folder\\");
    
    /**
     * Password-protected DOCX file
     */
    public static PasswordProtectedDocx: TestFile =
        new TestFile("password-protected.docx", "words\\docx\\", "password");

    /**
     * VSD file with two hidden pages
     */
    public static TwoHiddenPagesVsd: TestFile =
        new TestFile("two-hidden-pages.vsd", "diagram\\vsd\\");

    /**
     * XLSX file with hidden rown and columns
     */
    public static WithHiddenRowsAndColumns: TestFile =
        new TestFile("with-hidden-rows-and-columns.xlsx", "cells\\xlsx\\");

    /**
     * DWF file
     */
    public static ThreeLayoutsDwf: TestFile =
        new TestFile("three-layouts.dwf", "cad\\dwf\\");

    /**
     * MPP
     */
    public static ProjectMpp: TestFile =
        new TestFile("sample.mpp", "project\\mpp\\");

    /**
     * PPTX which uses custom font
     */
    public static UsesCustomFontPptx: TestFile =
        new TestFile("uses-custom-font.pptx", "slides\\pptx\\");

    /**
     * TTF font
     */
    public static FontTtf: TestFile =
        new TestFile("foo.ttf", "font\\ttf\\");

    /**
     * DOCX file with four pages
     */
    public static FourPagesDocx: TestFile =
        new TestFile("four-pages.docx", "words\\docx\\");

    /**
     * File name
     */
    public fileName: string;
    
    /**
     * Folder where file is located
     */
    public folder: string;

    /**
     * File password
     */
    public password: string;

    /**
     * Returns test file path
     */
    public GetPath() {
        return this.folder + this.fileName;
    }

    /**
     *  Returns FileInfo
     */
    public ToFileInfo()
    {
        let fileInfo = new FileInfo();
        fileInfo.filePath = this.GetPath();
        fileInfo.password = this.password;
        return fileInfo;
    }

    /**
     * Attachment password
     */
    public attachmentPassword: string;

    private constructor(fileName: string, folder: string, password?: string) {
        this.fileName = fileName;
        this.folder = folder;
        this.password = password;
    }

    public static GetTestFiles() {
        return [
            TestFile.OnePageDocx,
            TestFile.PasswordProtectedDocx,
            TestFile.TwoHiddenPagesVsd,
            TestFile.WithHiddenRowsAndColumns,
            TestFile.ThreeLayoutsDwf,
            TestFile.ProjectMpp,
            TestFile.UsesCustomFontPptx,
            TestFile.FontTtf,
            TestFile.FourPagesDocx
        ];
    }
}
