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

/**
 * Describes test file
 */
export class TestFile {

    /**
     * MSG file with attachment
     */
    public static WithAttachmentMsg: TestFile =
        new TestFile(
            "with-attachment.msg",
            "email\\msg",
            null,
            null,
            "password-protected.docx",
            "password");

    /**
     * PDF file with attachment
     */
    public static WithAttachmentPdf: TestFile =
        new TestFile(
            "with-attachment.pdf",
            "pdf\\pdf",
            null,
            null,
            "password-protected.docx",
            "password");

    /**
     * Corrupted PDF file
     */
    public static CorruptedPdf: TestFile =
        new TestFile("corrupted.pdf", "pdf\\pdf");

    /**
     * DOCX file with one page
     */
    public static OnePageDocx: TestFile =
        new TestFile("one-page.docx", "words\\docx");
    /**
     * DOCX file with four pages
     */
    public static FourPagesDocx: TestFile =
        new TestFile("four-pages.docx", "words\\docx");
    /**
     * VSD file with two hidden pages
     */
    public static TwoHiddenPagesVsd: TestFile =
        new TestFile("two-hidden-pages.vsd", "diagram\\vsd");
    
    /**
     * Password-protected DOCX file
     */
    public static PasswordProtectedDocx: TestFile =
        new TestFile("password-protected.docx", "words\\docx", "password");

    /**
     * DOCX with one page which located at DropBox storage
     */
    public static FromUrlOnePageDocx: TestFile =
        new TestFile("one-page.docx", null, null, "https://www.dropbox.com/s/j260ve4f90h1p41/one-page.docx?dl=1");

    /**
     * PPTX with one page which located at DropBox storage
     */
    public static FromUrlWithNotesPptx: TestFile =
        new TestFile("with-notes.pptx", null, null, "https://www.dropbox.com/s/r2eioe2atushqcf/with-notes.pptx?dl=1");

    /**
     * PPTX which uses custom font
     */
    public static UsesCustomFontPptx: TestFile =
        new TestFile("uses-custom-font.pptx", "slides\\pptx");

    /**
     * MPP
     */
    public static ProjectMpp: TestFile =
        new TestFile("sample.mpp", "project\\mpp");

    /**
     * PST
     */
    public static OutlookPst: TestFile =
        new TestFile("sample.pst", "email\\outlook");

    /**
     * CGM
     */
    public static ImageCgm: TestFile =
        new TestFile("nasa.cgm", "image");

    /**
     * PS
     */
    public static PrintPs: TestFile =
        new TestFile("sample.ps", "print");

    /**
     * PCL
     */
    public static PrintPcl: TestFile =
        new TestFile("print.pcl", "print");

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
     * Location of remote file
     */
    public url: string;

    /**
     * Attachment name
     */
    public attachmentName: string;

    /**
     * Attachment password
     */
    public attachmentPassword: string;

    private constructor(fileName: string, folder: string, password?: string, url?: string, attachmentName?: string, attachmentPassword?: string) {
        this.fileName = fileName;
        this.folder = folder;
        this.password = password;
        this.url = url;
        this.attachmentName = attachmentName;
        this.attachmentPassword = attachmentPassword;
    }

    public static Supported() {
        return [
            TestFile.WithAttachmentMsg,
            TestFile.WithAttachmentPdf,
            TestFile.TwoHiddenPagesVsd,
            TestFile.ProjectMpp,
            TestFile.OutlookPst,
            TestFile.ImageCgm,
            TestFile.PrintPs,
            TestFile.PrintPcl
        ];
    }
}
