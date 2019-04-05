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

/**
 * Attachment information
 */
export class AttachmentInfo {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "name",
            baseName: "name",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return AttachmentInfo.attributeTypeMap;
    }

    /**
     * Attachment name
     */
    public name: string;
    
    public constructor(init?: Partial<AttachmentInfo>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Rendering options for CAD file formats. CAD file formats include files with extensions: .dwg, .dxf, .dgn, .ifc, .stl
 */
export class CadOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "scaleFactor",
            baseName: "scaleFactor",
            type: "number",
        },        
        {
            name: "width",
            baseName: "width",
            type: "number",
        },        
        {
            name: "height",
            baseName: "height",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return CadOptions.attributeTypeMap;
    }

    /**
     * Scale factor allows to change the size of the output document. Values higher than 1 will enlarge output result and values between 0 and 1 will make output result smaller. This option is ignored when either Height or Width options are set. 
     */
    public scaleFactor: number;
    
    /**
     * Width of the output result in pixels        
     */
    public width: number;
    
    /**
     * Height of the output result in pixels     
     */
    public height: number;
    
    public constructor(init?: Partial<CadOptions>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Delete view options
 */
export class DeleteViewOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "fileInfo",
            baseName: "fileInfo",
            type: "FileInfo",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return DeleteViewOptions.attributeTypeMap;
    }

    /**
     * File info
     */
    public fileInfo: FileInfo;
    
    public constructor(init?: Partial<DeleteViewOptions>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Class for disc space information.
 */
export class DiscUsage {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "usedSize",
            baseName: "usedSize",
            type: "number",
        },        
        {
            name: "totalSize",
            baseName: "totalSize",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return DiscUsage.attributeTypeMap;
    }

    /**
     * Application used disc space.
     */
    public usedSize: number;
    
    /**
     * Total disc space.
     */
    public totalSize: number;
    
    public constructor(init?: Partial<DiscUsage>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Rendering options for Email file formats. Email file formats include files with extensions: .msg, .eml, .emlx, .ifc, .stl
 */
export class EmailOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "pageSize",
            baseName: "pageSize",
            type: "string",
        },        
        {
            name: "fieldLabels",
            baseName: "fieldLabels",
            type: "Array<FieldLabel>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return EmailOptions.attributeTypeMap;
    }

    /**
     * The size of the output page when rendering as PDF or image. Supported values {Unknown|Letter|Ledger|A0|A1|A2|A3}: 1. Unknown - the default, unspecified page size. 2. Letter - the size of the Letter page in points is 792x612. 3. Ledger - the size of the Letter page in points is 1224x792. 4. A0 - the size of the A0 page in points is 3371x2384. 5. A1 - the size of the A1 page in points is 2384x1685. 6. A2 - the size of the A2 page in points is 1684x1190. 7. A3 - the size of the A3 page in points is 1190x842. 8. A4 - the size of the A4 page in points is 842x595.
     */
    public pageSize: string;
    
    /**
     * The list of supported email message field labels: 1. Field: \"Anniversary\" - default label is \"Anniversary\". 2. Field: \"Attachments\" - default label is \"Attachments\". 3. Field: \"Bcc\" - default label is \"Bcc\". 4. Field: \"Birthday\" - default label is \"Birthday\". 5. Field: \"Business\" - default label is \"Business\". 6. Field: \"BusinessAddress\" - default label is \"Business Address\". 7. Field: \"BusinessFax\" - default label is \"Business Fax\". 8. Field: \"BusinessHomepage\" - default label is \"BusinessHomePage\". 9. Field: \"Cc\" - default label is \"Cc\". 10. Field: \"Company\" - default label is \"Company\". 11. Field: \"Department\" - default label is \"Department\". 12. Field: \"Email\" - default label is \"Email\". 13. Field: \"EmailDisplayAs\" - default label is \"Email Display As\". 14. Field: \"Email2\" - default label is \"Email2\". 15. Field: \"Email2DisplayAs\" - default label is \"Email2 Display As\". 16. Field: \"Email3\" - default label is \"Email3\". 17. Field: \"Email3DisplayAs\" - default label is \"Email3 Display As\". 18. Field: \"End\" - default label is \"End\". 19. Field: \"FirstName\" - default label is \"First Name\". 20. Field: \"From\" - default label is \"From\". 21. Field: \"FullName\" - default label is \"Full Name\". 22. Field: \"Gender\" - default label is \"Gender\". 23. Field: \"Hobbies\" - default label is \"Hobbies\". 24. Field: \"Home\" - default label is \"Home\". 25. Field: \"HomeAddress\" - default label is \"Home Address\". 26. Field: \"Importance\" - default label is \"Importance\". 27. Field: \"JobTitle\" - default label is \"Job Title\". 28. Field: \"LastName\" - default label is \"Last Name\". 29. Field: \"Location\" - default label is \"Location\". 30. Field: \"MiddleName\" - default label is \"Middle Name\". 31. Field: \"Mobile\" - default label is \"Mobile\". 32. Field: \"Organizer\" - default label is \"Organizer\". 33. Field: \"OtherAddress\" - default label is \"Other Address\". 34. Field: \"PersonalHomepage\" - default label is \"PersonalHomePage\". 35. Field: \"Profession\" - default label is \"Profession\". 36. Field: \"Recurrence\" - default label is \"Recurrence\". 37. Field: \"RecurrencePattern\" - default label is \"Recurrence Pattern\". 38. Field: \"RequiredAttendees\" - default label is \"Required Attendees\". 39. Field: \"Sent\" - default label is \"Sent\". 40. Field: \"ShowTimeAs\" - default label is \"Show Time As\". 41. Field: \"SpousePartner\" - default label is \"Spouse/Partner\". 42. Field: \"Start\" - default label is \"Start\". 43. Field: \"Subject\" - default label is \"Subject\". 44. Field: \"To\" - default label is \"To\". 45. Field: \"UserField1\" - default label is \"User Field 1\". 46. Field: \"UserField2\" - default label is \"User Field 2\". 47. Field: \"UserField3\" - default label is \"User Field 3\". 48. Field: \"UserField4\" - default label is \"User Field 4\".
     */
    public fieldLabels: Array<FieldLabel>;
    
    public constructor(init?: Partial<EmailOptions>) {
        
        Object.assign(this, init);
    }        
}

/**
 * The error details
 */
export class ErrorDetails {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "requestId",
            baseName: "requestId",
            type: "string",
        },        
        {
            name: "date",
            baseName: "date",
            type: "Date",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ErrorDetails.attributeTypeMap;
    }

    /**
     * The request id
     */
    public requestId: string;
    
    /**
     * Date
     */
    public date: Date;
    
    public constructor(init?: Partial<ErrorDetails>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Represents field label 
 */
export class FieldLabel {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "field",
            baseName: "field",
            type: "string",
        },        
        {
            name: "label",
            baseName: "label",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FieldLabel.attributeTypeMap;
    }

    /**
     * The field name e.g. \"From\"
     */
    public field: string;
    
    /**
     * The label e.g. \"Sender\"
     */
    public label: string;
    
    public constructor(init?: Partial<FieldLabel>) {
        
        Object.assign(this, init);
    }        
}

/**
 * File info
 */
export class FileInfo {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "filePath",
            baseName: "filePath",
            type: "string",
        },        
        {
            name: "storageName",
            baseName: "storageName",
            type: "string",
        },        
        {
            name: "versionId",
            baseName: "versionId",
            type: "string",
        },        
        {
            name: "password",
            baseName: "password",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FileInfo.attributeTypeMap;
    }

    /**
     * File path in storage
     */
    public filePath: string;
    
    /**
     * Storage name
     */
    public storageName: string;
    
    /**
     * Version ID
     */
    public versionId: string;
    
    /**
     * Password to open file
     */
    public password: string;
    
    public constructor(init?: Partial<FileInfo>) {
        
        Object.assign(this, init);
    }        
}

/**
 * File versions FileVersion.
 */
export class FileVersions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "value",
            baseName: "value",
            type: "Array<FileVersion>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FileVersions.attributeTypeMap;
    }

    /**
     * File versions FileVersion.
     */
    public value: Array<FileVersion>;
    
    public constructor(init?: Partial<FileVersions>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Files list
 */
export class FilesList {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "value",
            baseName: "value",
            type: "Array<StorageFile>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FilesList.attributeTypeMap;
    }

    /**
     * Files and folders contained by folder StorageFile.
     */
    public value: Array<StorageFile>;
    
    public constructor(init?: Partial<FilesList>) {
        
        Object.assign(this, init);
    }        
}

/**
 * File upload result
 */
export class FilesUploadResult {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "uploaded",
            baseName: "uploaded",
            type: "Array<string>",
        },        
        {
            name: "errors",
            baseName: "errors",
            type: "Array<Error>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FilesUploadResult.attributeTypeMap;
    }

    /**
     * List of uploaded file names
     */
    public uploaded: Array<string>;
    
    /**
     * List of errors.
     */
    public errors: Array<Error>;
    
    public constructor(init?: Partial<FilesUploadResult>) {
        
        Object.assign(this, init);
    }        
}

/**
 * File-format
 */
export class Format {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "extension",
            baseName: "extension",
            type: "string",
        },        
        {
            name: "fileFormat",
            baseName: "fileFormat",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Format.attributeTypeMap;
    }

    /**
     * File extension
     */
    public extension: string;
    
    /**
     * File format
     */
    public fileFormat: string;
    
    public constructor(init?: Partial<Format>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Describes object which contains list of supported file formats.
 */
export class FormatsResult {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "formats",
            baseName: "formats",
            type: "Array<Format>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FormatsResult.attributeTypeMap;
    }

    /**
     * Supported file formats.
     */
    public formats: Array<Format>;
    
    public constructor(init?: Partial<FormatsResult>) {
        
        Object.assign(this, init);
    }        
}

/**
 * View result information
 */
export class InfoResult {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "pages",
            baseName: "pages",
            type: "Array<PageInfo>",
        },        
        {
            name: "attachments",
            baseName: "attachments",
            type: "Array<AttachmentInfo>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return InfoResult.attributeTypeMap;
    }

    /**
     * View result pages
     */
    public pages: Array<PageInfo>;
    
    /**
     * Attachments
     */
    public attachments: Array<AttachmentInfo>;
    
    public constructor(init?: Partial<InfoResult>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Error
 */
export class ModelError {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "code",
            baseName: "code",
            type: "string",
        },        
        {
            name: "message",
            baseName: "message",
            type: "string",
        },        
        {
            name: "description",
            baseName: "description",
            type: "string",
        },        
        {
            name: "innerError",
            baseName: "innerError",
            type: "ErrorDetails",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ModelError.attributeTypeMap;
    }

    /**
     * Code             
     */
    public code: string;
    
    /**
     * Message             
     */
    public message: string;
    
    /**
     * Description             
     */
    public description: string;
    
    /**
     * Inner Error             
     */
    public innerError: ErrorDetails;
    
    public constructor(init?: Partial<ModelError>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Object exists
 */
export class ObjectExist {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "exists",
            baseName: "exists",
            type: "boolean",
        },        
        {
            name: "isFolder",
            baseName: "isFolder",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ObjectExist.attributeTypeMap;
    }

    /**
     * Indicates that the file or folder exists.
     */
    public exists: boolean;
    
    /**
     * True if it is a folder, false if it is a file.
     */
    public isFolder: boolean;
    
    public constructor(init?: Partial<ObjectExist>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Page information
 */
export class PageInfo {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "number",
            baseName: "number",
            type: "number",
        },        
        {
            name: "width",
            baseName: "width",
            type: "number",
        },        
        {
            name: "height",
            baseName: "height",
            type: "number",
        },        
        {
            name: "rows",
            baseName: "rows",
            type: "Array<Row>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return PageInfo.attributeTypeMap;
    }

    /**
     * Page number
     */
    public number: number;
    
    /**
     * Image Page width
     */
    public width: number;
    
    /**
     * Image Page height
     */
    public height: number;
    
    /**
     * Image Page rows
     */
    public rows: Array<Row>;
    
    public constructor(init?: Partial<PageInfo>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Rendering options for Project file formats. Project file formats include files with extensions: .mpt, .mpp
 */
export class ProjectManagementOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "pageSize",
            baseName: "pageSize",
            type: "string",
        },        
        {
            name: "timeUnit",
            baseName: "timeUnit",
            type: "string",
        },        
        {
            name: "startDate",
            baseName: "startDate",
            type: "Date",
        },        
        {
            name: "endDate",
            baseName: "endDate",
            type: "Date",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ProjectManagementOptions.attributeTypeMap;
    }

    /**
     * The size of the page. Supported values {Unknown|Letter|Ledger|A0|A1|A2|A3}: 1. Unknown - the default, unspecified page size. 2. Letter - the size of the Letter page in points is 792x612. 3. Ledger - the size of the Letter page in points is 1224x792. 4. A0 - the size of the A0 page in points is 3371x2384. 5. A1 - the size of the A1 page in points is 2384x1685. 6. A2 - the size of the A2 page in points is 1684x1190. 7. A3 - the size of the A3 page in points is 1190x842. 8. A4 - the size of the A4 page in points is 842x595.
     */
    public pageSize: string;
    
    /**
     * The time unit to use as minimal point. Supported values {Unknown|Days|ThirdsOfMonths|Months}: 1. Unknown - unknown, unspecified time scale. 2. Days - one day interval. 3. ThirdsOfMonths - one third of the month. 4. Months - one month interval.
     */
    public timeUnit: string;
    
    /**
     * The start date of a Gantt Chart View to render.        
     */
    public startDate: Date;
    
    /**
     * The end date of a Gantt Chart View to render.
     */
    public endDate: Date;
    
    public constructor(init?: Partial<ProjectManagementOptions>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Rendering options
 */
export class RenderOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "startPageNumber",
            baseName: "startPageNumber",
            type: "number",
        },        
        {
            name: "countPagesToRender",
            baseName: "countPagesToRender",
            type: "number",
        },        
        {
            name: "defaultFontName",
            baseName: "defaultFontName",
            type: "string",
        },        
        {
            name: "defaultEncoding",
            baseName: "defaultEncoding",
            type: "string",
        },        
        {
            name: "renderComments",
            baseName: "renderComments",
            type: "boolean",
        },        
        {
            name: "renderHiddenPages",
            baseName: "renderHiddenPages",
            type: "boolean",
        },        
        {
            name: "spreadsheetOptions",
            baseName: "spreadsheetOptions",
            type: "SpreadsheetOptions",
        },        
        {
            name: "cadOptions",
            baseName: "cadOptions",
            type: "CadOptions",
        },        
        {
            name: "emailOptions",
            baseName: "emailOptions",
            type: "EmailOptions",
        },        
        {
            name: "projectManagementOptions",
            baseName: "projectManagementOptions",
            type: "ProjectManagementOptions",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return RenderOptions.attributeTypeMap;
    }

    /**
     * Page number from which rendering should be started
     */
    public startPageNumber: number;
    
    /**
     * Count pages which should be rendered
     */
    public countPagesToRender: number;
    
    /**
     * Default font name may be specified in following cases: - You want to generally specify the default font to fall back on, if particular font   in the document cannot be found during rendering. - Your document uses fonts, that contain non-English characters and you want to make sure   any missing font is replaced with one that has the same character set available.
     */
    public defaultFontName: string;
    
    /**
     * Default encoding for the plain text files such as .csv, .txt and .eml files when encoding is not specified in header
     */
    public defaultEncoding: string;
    
    /**
     * When enabled comments will be rendered to the output.
     */
    public renderComments: boolean;
    
    /**
     * When enabled hidden pages, sheets or slides will be rendered to the output
     */
    public renderHiddenPages: boolean;
    
    /**
     * Rendering options for Spreadsheet file formats. Spreadsheet file formats include files with extensions: .xls, .xlsx, .xlsm, .xlsb, .csv, .ods, .ots, .xltx, .xltm, .tsv 
     */
    public spreadsheetOptions: SpreadsheetOptions;
    
    /**
     * Rendering options for CAD file formats. CAD file formats include files with extensions: .dwg, .dxf, .dgn, .ifc, .stl
     */
    public cadOptions: CadOptions;
    
    /**
     * Rendering options for Email file formats. Email file formats include files with extensions: .msg, .eml, .emlx, .ifc, .stl
     */
    public emailOptions: EmailOptions;
    
    /**
     * Rendering options for Project file formats. Project file formats include files with extensions: .mpt, .mpp
     */
    public projectManagementOptions: ProjectManagementOptions;
    
    public constructor(init?: Partial<RenderOptions>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Reference to resource
 */
export class Resource {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "path",
            baseName: "path",
            type: "string",
        },        
        {
            name: "downloadUrl",
            baseName: "downloadUrl",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Resource.attributeTypeMap;
    }

    /**
     * Path of resource file in storage
     */
    public path: string;
    
    /**
     * ULR to retrieve resource.
     */
    public downloadUrl: string;
    
    public constructor(init?: Partial<Resource>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Page row with text
 */
export class Row {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "text",
            baseName: "text",
            type: "string",
        },        
        {
            name: "rowLeft",
            baseName: "rowLeft",
            type: "number",
        },        
        {
            name: "rowTop",
            baseName: "rowTop",
            type: "number",
        },        
        {
            name: "rowWidth",
            baseName: "rowWidth",
            type: "number",
        },        
        {
            name: "rowHeight",
            baseName: "rowHeight",
            type: "number",
        },        
        {
            name: "textCoordinates",
            baseName: "textCoordinates",
            type: "Array<number>",
        },        
        {
            name: "characterCoordinates",
            baseName: "characterCoordinates",
            type: "Array<number>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Row.attributeTypeMap;
    }

    /**
     * Row text
     */
    public text: string;
    
    /**
     * Row left coordinate
     */
    public rowLeft: number;
    
    /**
     * Row top coordinate
     */
    public rowTop: number;
    
    /**
     * Row width
     */
    public rowWidth: number;
    
    /**
     * Row height
     */
    public rowHeight: number;
    
    /**
     * Text coordinates
     */
    public textCoordinates: Array<number>;
    
    /**
     * Characters coordinates
     */
    public characterCoordinates: Array<number>;
    
    public constructor(init?: Partial<Row>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Rendering options for Spreadsheet file formats. Spreadsheet file formats include files with extensions: .xls, .xlsx, .xlsm, .xlsb, .csv, .ods, .ots, .xltx, .xltm, .tsv 
 */
export class SpreadsheetOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "paginateSheets",
            baseName: "paginateSheets",
            type: "boolean",
        },        
        {
            name: "countRowsPerPage",
            baseName: "countRowsPerPage",
            type: "number",
        },        
        {
            name: "renderGridLines",
            baseName: "renderGridLines",
            type: "boolean",
        },        
        {
            name: "renderEmptyRows",
            baseName: "renderEmptyRows",
            type: "boolean",
        },        
        {
            name: "renderEmptyColumns",
            baseName: "renderEmptyColumns",
            type: "boolean",
        },        
        {
            name: "renderHiddenRows",
            baseName: "renderHiddenRows",
            type: "boolean",
        },        
        {
            name: "renderHiddenColumns",
            baseName: "renderHiddenColumns",
            type: "boolean",
        },        
        {
            name: "renderPrintAreaOnly",
            baseName: "renderPrintAreaOnly",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return SpreadsheetOptions.attributeTypeMap;
    }

    /**
     * Allows to enable worksheets pagination. By default one worksheet is rendered into one page.
     */
    public paginateSheets: boolean;
    
    /**
     * The number of rows rendered into one page when PaginateSheets is enabled. Default value is 50.
     */
    public countRowsPerPage: number;
    
    /**
     * Indicates whether to render grid lines
     */
    public renderGridLines: boolean;
    
    /**
     * By default empty rows are skipped. Enable this option in case you want to render empty rows.
     */
    public renderEmptyRows: boolean;
    
    /**
     * By default empty columns are skipped. Enable this option in case you want to render empty columns.
     */
    public renderEmptyColumns: boolean;
    
    /**
     * Enables rendering of hidden rows.
     */
    public renderHiddenRows: boolean;
    
    /**
     * Enables rendering of hidden columns.
     */
    public renderHiddenColumns: boolean;
    
    /**
     * Enables rendering worksheet(s) sections which is defined as print area. Renders each print area in a worksheet as a separate page.
     */
    public renderPrintAreaOnly: boolean;
    
    public constructor(init?: Partial<SpreadsheetOptions>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Storage exists
 */
export class StorageExist {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "exists",
            baseName: "exists",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return StorageExist.attributeTypeMap;
    }

    /**
     * Shows that the storage exists.             
     */
    public exists: boolean;
    
    public constructor(init?: Partial<StorageExist>) {
        
        Object.assign(this, init);
    }        
}

/**
 * File or folder information
 */
export class StorageFile {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "name",
            baseName: "name",
            type: "string",
        },        
        {
            name: "isFolder",
            baseName: "isFolder",
            type: "boolean",
        },        
        {
            name: "modifiedDate",
            baseName: "modifiedDate",
            type: "Date",
        },        
        {
            name: "size",
            baseName: "size",
            type: "number",
        },        
        {
            name: "path",
            baseName: "path",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return StorageFile.attributeTypeMap;
    }

    /**
     * File or folder name.
     */
    public name: string;
    
    /**
     * True if it is a folder.
     */
    public isFolder: boolean;
    
    /**
     * File or folder last modified DateTime.
     */
    public modifiedDate: Date;
    
    /**
     * File or folder size.
     */
    public size: number;
    
    /**
     * File or folder path.
     */
    public path: string;
    
    public constructor(init?: Partial<StorageFile>) {
        
        Object.assign(this, init);
    }        
}

/**
 * View options
 */
export class ViewOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "fileInfo",
            baseName: "fileInfo",
            type: "FileInfo",
        },        
        {
            name: "viewFormat",
            baseName: "viewFormat",
            type: "ViewOptions.ViewFormatEnum",
        },        
        {
            name: "fontsPath",
            baseName: "fontsPath",
            type: "string",
        },        
        {
            name: "watermark",
            baseName: "watermark",
            type: "Watermark",
        },        
        {
            name: "renderOptions",
            baseName: "renderOptions",
            type: "RenderOptions",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ViewOptions.attributeTypeMap;
    }

    /**
     * File info
     */
    public fileInfo: FileInfo;
    
    /**
     * View format (HTML, PNG, JPG, BMP or PDF) Default value is HTML.
     */
    public viewFormat: ViewOptions.ViewFormatEnum;
    
    /**
     * The path to directory containing custom fonts in storage
     */
    public fontsPath: string;
    
    /**
     * Text watermark
     */
    public watermark: Watermark;
    
    /**
     * Rendering options
     */
    public renderOptions: RenderOptions;
    
    public constructor(init?: Partial<ViewOptions>) {
        
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace ViewOptions {
    export enum ViewFormatEnum {
        HTML = 'HTML' as any,
        PNG = 'PNG' as any,
        JPG = 'JPG' as any,
        BMP = 'BMP' as any,
        PDF = 'PDF' as any,
    }
}
// tslint:enable:quotemark
/**
 * View result information
 */
export class ViewResult {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "pages",
            baseName: "pages",
            type: "Array<PageView>",
        },        
        {
            name: "attachments",
            baseName: "attachments",
            type: "Array<AttachmentView>",
        },        
        {
            name: "file",
            baseName: "file",
            type: "Resource",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ViewResult.attributeTypeMap;
    }

    /**
     * View result pages
     */
    public pages: Array<PageView>;
    
    /**
     * Attachments
     */
    public attachments: Array<AttachmentView>;
    
    /**
     * ULR to retrieve file.
     */
    public file: Resource;
    
    public constructor(init?: Partial<ViewResult>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Text watermark
 */
export class Watermark {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "text",
            baseName: "text",
            type: "string",
        },        
        {
            name: "color",
            baseName: "color",
            type: "string",
        },        
        {
            name: "position",
            baseName: "position",
            type: "string",
        },        
        {
            name: "size",
            baseName: "size",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Watermark.attributeTypeMap;
    }

    /**
     * Watermark text.
     */
    public text: string;
    
    /**
     * Watermark color. Supported formats {Magenta|(112,222,11)|(50,112,222,11)}. Default value is \"Red\".
     */
    public color: string;
    
    /**
     * Watermark position. Supported positions {Diagonal|TopLeft|TopCenter|TopRight|BottomLeft|BottomCenter|BottomRight}. Default value is \"Diagonal\".
     */
    public position: string;
    
    /**
     * Watermark size in percents. Default value is 100.
     */
    public size: number;
    
    public constructor(init?: Partial<Watermark>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Attachment
 */
export class AttachmentView extends Resource {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "name",
            baseName: "name",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(AttachmentView.attributeTypeMap);
    }

    /**
     * Attachment name
     */
    public name: string;
    
    public constructor(init?: Partial<AttachmentView>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * File Version
 */
export class FileVersion extends StorageFile {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "versionId",
            baseName: "versionId",
            type: "string",
        },        
        {
            name: "isLatest",
            baseName: "isLatest",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(FileVersion.attributeTypeMap);
    }

    /**
     * File Version ID.
     */
    public versionId: string;
    
    /**
     * Specifies whether the file is (true) or is not (false) the latest version of an file.
     */
    public isLatest: boolean;
    
    public constructor(init?: Partial<FileVersion>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Options for rendering document into HTML
 */
export class HtmlOptions extends RenderOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "externalResources",
            baseName: "externalResources",
            type: "boolean",
        },        
        {
            name: "resourcePath",
            baseName: "resourcePath",
            type: "string",
        },        
        {
            name: "isResponsive",
            baseName: "isResponsive",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(HtmlOptions.attributeTypeMap);
    }

    /**
     * Controls output HTML document resources (styles, images and fonts) linking. By default this option is disabled and all the resources are embedded into HTML document.
     */
    public externalResources: boolean;
    
    /**
     * Path for the HTML resources (styles, images and fonts). For example when resource path is http://example.com/api/pages/{page-number}/resources/{resource-name} the {page-number} and {resource-name} templates will be replaced with page number and resource name accordingly. This option is ignored when ExternalResources option is disabled.
     */
    public resourcePath: string;
    
    /**
     * Indicates whether rendering will provide responsive web pages, that look well on different device types. Default value is false.
     */
    public isResponsive: boolean;
    
    public constructor(init?: Partial<HtmlOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * HTML page resource (images, css)
 */
export class HtmlResource extends Resource {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "name",
            baseName: "name",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(HtmlResource.attributeTypeMap);
    }

    /**
     * HTML resource (image, style, graphics or font) file name.
     */
    public name: string;
    
    public constructor(init?: Partial<HtmlResource>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Options for rendering document into image
 */
export class ImageOptions extends RenderOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "width",
            baseName: "width",
            type: "number",
        },        
        {
            name: "height",
            baseName: "height",
            type: "number",
        },        
        {
            name: "extractText",
            baseName: "extractText",
            type: "boolean",
        },        
        {
            name: "jpegQuality",
            baseName: "jpegQuality",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ImageOptions.attributeTypeMap);
    }

    /**
     * Allows to specify output image width.  Specify image width in case when you want to change output image dimensions. When Width has value and Height value is 0 then Height value will be calculated  to save image proportions. 
     */
    public width: number;
    
    /**
     * Allows to specify output image height.  Specify image height in case when you want to change output image dimensions. When Height has value and Width value is 0 then Width value will be calculated  to save image proportions.
     */
    public height: number;
    
    /**
     * When enabled Viewer will extract text when it's possible (e.g. raster formats don't have text layer) and return it in the viewing result. This option might be useful when you want to add selectable text layer over the image. 
     */
    public extractText: boolean;
    
    /**
     * Allows to specify quality when rendering as JPG. Valid values are between 1 and 100.  Default value is 90.
     */
    public jpegQuality: number;
    
    public constructor(init?: Partial<ImageOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Page information
 */
export class PageView extends Resource {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "number",
            baseName: "number",
            type: "number",
        },        
        {
            name: "resources",
            baseName: "resources",
            type: "Array<HtmlResource>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PageView.attributeTypeMap);
    }

    /**
     * Page number
     */
    public number: number;
    
    /**
     * HTML resources.
     */
    public resources: Array<HtmlResource>;
    
    public constructor(init?: Partial<PageView>) {
        super(init);
        Object.assign(this, init);
    }        
}

const enumsMap = {
    "ViewOptions.ViewFormatEnum": ViewOptions.ViewFormatEnum,
};

const typeMap = {
            AttachmentInfo,
            CadOptions,
            DeleteViewOptions,
            DiscUsage,
            EmailOptions,
            ErrorDetails,
            FieldLabel,
            FileInfo,
            FileVersions,
            FilesList,
            FilesUploadResult,
            Format,
            FormatsResult,
            InfoResult,
            ModelError,
            ObjectExist,
            PageInfo,
            ProjectManagementOptions,
            RenderOptions,
            Resource,
            Row,
            SpreadsheetOptions,
            StorageExist,
            StorageFile,
            ViewOptions,
            ViewResult,
            Watermark,
            AttachmentView,
            FileVersion,
            HtmlOptions,
            HtmlResource,
            ImageOptions,
            PageView,
};

export {enumsMap, typeMap};

/**
 * Request model for CopyFile operation.
 */
export class CopyFileRequest {
    /**
     * Source file path e.g. '/folder/file.ext'
     */
    public srcPath: string;

    /**
     * Destination file path
     */
    public destPath: string;

    /**
     * Source storage name
     */
    public srcStorageName: string;

    /**
     * Destination storage name
     */
    public destStorageName: string;

    /**
     * File version ID to copy
     */
    public versionId: string;
    
    public constructor(srcPath: string, destPath: string, srcStorageName?: string, destStorageName?: string, versionId?: string) {        
        this.srcPath = srcPath;
        this.destPath = destPath;
        this.srcStorageName = srcStorageName;
        this.destStorageName = destStorageName;
        this.versionId = versionId;
    }
}

/**
 * Request model for DeleteFile operation.
 */
export class DeleteFileRequest {
    /**
     * File path e.g. '/folder/file.ext'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;

    /**
     * File version ID to delete
     */
    public versionId: string;
    
    public constructor(path: string, storageName?: string, versionId?: string) {        
        this.path = path;
        this.storageName = storageName;
        this.versionId = versionId;
    }
}

/**
 * Request model for DownloadFile operation.
 */
export class DownloadFileRequest {
    /**
     * File path e.g. '/folder/file.ext'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;

    /**
     * File version ID to download
     */
    public versionId: string;
    
    public constructor(path: string, storageName?: string, versionId?: string) {        
        this.path = path;
        this.storageName = storageName;
        this.versionId = versionId;
    }
}

/**
 * Request model for MoveFile operation.
 */
export class MoveFileRequest {
    /**
     * Source file path e.g. '/src.ext'
     */
    public srcPath: string;

    /**
     * Destination file path e.g. '/dest.ext'
     */
    public destPath: string;

    /**
     * Source storage name
     */
    public srcStorageName: string;

    /**
     * Destination storage name
     */
    public destStorageName: string;

    /**
     * File version ID to move
     */
    public versionId: string;
    
    public constructor(srcPath: string, destPath: string, srcStorageName?: string, destStorageName?: string, versionId?: string) {        
        this.srcPath = srcPath;
        this.destPath = destPath;
        this.srcStorageName = srcStorageName;
        this.destStorageName = destStorageName;
        this.versionId = versionId;
    }
}

/**
 * Request model for UploadFile operation.
 */
export class UploadFileRequest {
    /**
     * Path where to upload including filename and extension e.g. /file.ext or /Folder 1/file.ext             If the content is multipart and path does not contains the file name it tries to get them from filename parameter             from Content-Disposition header.             
     */
    public path: string;

    /**
     * File to upload
     */
    public file: Buffer;

    /**
     * Storage name
     */
    public storageName: string;
    
    public constructor(path: string, file: Buffer, storageName?: string) {        
        this.path = path;
        this.file = file;
        this.storageName = storageName;
    }
}

/**
 * Request model for CopyFolder operation.
 */
export class CopyFolderRequest {
    /**
     * Source folder path e.g. '/src'
     */
    public srcPath: string;

    /**
     * Destination folder path e.g. '/dst'
     */
    public destPath: string;

    /**
     * Source storage name
     */
    public srcStorageName: string;

    /**
     * Destination storage name
     */
    public destStorageName: string;
    
    public constructor(srcPath: string, destPath: string, srcStorageName?: string, destStorageName?: string) {        
        this.srcPath = srcPath;
        this.destPath = destPath;
        this.srcStorageName = srcStorageName;
        this.destStorageName = destStorageName;
    }
}

/**
 * Request model for CreateFolder operation.
 */
export class CreateFolderRequest {
    /**
     * Folder path to create e.g. 'folder_1/folder_2/'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;
    
    public constructor(path: string, storageName?: string) {        
        this.path = path;
        this.storageName = storageName;
    }
}

/**
 * Request model for DeleteFolder operation.
 */
export class DeleteFolderRequest {
    /**
     * Folder path e.g. '/folder'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;

    /**
     * Enable to delete folders, subfolders and files
     */
    public recursive: boolean;
    
    public constructor(path: string, storageName?: string, recursive?: boolean) {        
        this.path = path;
        this.storageName = storageName;
        this.recursive = recursive;
    }
}

/**
 * Request model for GetFilesList operation.
 */
export class GetFilesListRequest {
    /**
     * Folder path e.g. '/folder'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;
    
    public constructor(path: string, storageName?: string) {        
        this.path = path;
        this.storageName = storageName;
    }
}

/**
 * Request model for MoveFolder operation.
 */
export class MoveFolderRequest {
    /**
     * Folder path to move e.g. '/folder'
     */
    public srcPath: string;

    /**
     * Destination folder path to move to e.g '/dst'
     */
    public destPath: string;

    /**
     * Source storage name
     */
    public srcStorageName: string;

    /**
     * Destination storage name
     */
    public destStorageName: string;
    
    public constructor(srcPath: string, destPath: string, srcStorageName?: string, destStorageName?: string) {        
        this.srcPath = srcPath;
        this.destPath = destPath;
        this.srcStorageName = srcStorageName;
        this.destStorageName = destStorageName;
    }
}

/**
 * Request model for GetDiscUsage operation.
 */
export class GetDiscUsageRequest {
    /**
     * Storage name
     */
    public storageName: string;
    
    public constructor(storageName?: string) {        
        this.storageName = storageName;
    }
}

/**
 * Request model for GetFileVersions operation.
 */
export class GetFileVersionsRequest {
    /**
     * File path e.g. '/file.ext'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;
    
    public constructor(path: string, storageName?: string) {        
        this.path = path;
        this.storageName = storageName;
    }
}

/**
 * Request model for ObjectExists operation.
 */
export class ObjectExistsRequest {
    /**
     * File or folder path e.g. '/file.ext' or '/folder'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;

    /**
     * File version ID
     */
    public versionId: string;
    
    public constructor(path: string, storageName?: string, versionId?: string) {        
        this.path = path;
        this.storageName = storageName;
        this.versionId = versionId;
    }
}

/**
 * Request model for StorageExists operation.
 */
export class StorageExistsRequest {
    /**
     * Storage name
     */
    public storageName: string;
    
    public constructor(storageName: string) {        
        this.storageName = storageName;
    }
}

/**
 * Request model for CreateView operation.
 */
export class CreateViewRequest {
    /**
     * View options
     */
    public viewOptions: ViewOptions;
    
    public constructor(viewOptions: ViewOptions) {        
        this.viewOptions = viewOptions;
    }
}

/**
 * Request model for DeleteView operation.
 */
export class DeleteViewRequest {
    /**
     * Delete options
     */
    public deleteViewOptions: DeleteViewOptions;
    
    public constructor(deleteViewOptions: DeleteViewOptions) {        
        this.deleteViewOptions = deleteViewOptions;
    }
}

/**
 * Request model for GetInfo operation.
 */
export class GetInfoRequest {
    /**
     * View options
     */
    public viewOptions: ViewOptions;
    
    public constructor(viewOptions: ViewOptions) {        
        this.viewOptions = viewOptions;
    }
}
