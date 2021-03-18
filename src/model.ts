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

/**
 * Provides options for rendering archive files
 */
export class ArchiveOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "folder",
            baseName: "folder",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ArchiveOptions.attributeTypeMap;
    }

    /**
     * The folder inside the archive to be rendered
     */
    public folder: string;
    
    public constructor(init?: Partial<ArchiveOptions>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Represents view information for archive file
 */
export class ArchiveViewInfo {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "folders",
            baseName: "folders",
            type: "Array<string>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ArchiveViewInfo.attributeTypeMap;
    }

    /**
     * The folders contained by the archive file
     */
    public folders: Array<string>;
    
    public constructor(init?: Partial<ArchiveViewInfo>) {
        
        Object.assign(this, init);
    }        
}

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
        },        
        {
            name: "tiles",
            baseName: "tiles",
            type: "Array<Tile>",
        },        
        {
            name: "renderLayouts",
            baseName: "renderLayouts",
            type: "boolean",
        },        
        {
            name: "layoutName",
            baseName: "layoutName",
            type: "string",
        },        
        {
            name: "layers",
            baseName: "layers",
            type: "Array<string>",
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
    
    /**
     * The drawing regions to render This option supported only for DWG and DWT file types The RenderLayouts and LayoutName options are ignored when rendering by tiles
     */
    public tiles: Array<Tile>;
    
    /**
     * Indicates whether layouts from CAD document should be rendered
     */
    public renderLayouts: boolean;
    
    /**
     * The name of the specific layout to render. Layout name is case-sensitive
     */
    public layoutName: string;
    
    /**
     * The CAD drawing layers to render By default all layers are rendered; Layer names are case-sensitive
     */
    public layers: Array<string>;
    
    public constructor(init?: Partial<CadOptions>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Represents view information for CAD drawing
 */
export class CadViewInfo {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "layers",
            baseName: "layers",
            type: "Array<Layer>",
        },        
        {
            name: "layouts",
            baseName: "layouts",
            type: "Array<Layout>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return CadViewInfo.attributeTypeMap;
    }

    /**
     * The list of layers contained by the CAD drawing
     */
    public layers: Array<Layer>;
    
    /**
     * The list of layouts contained by the CAD drawing
     */
    public layouts: Array<Layout>;
    
    public constructor(init?: Partial<CadViewInfo>) {
        
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
        },        
        {
            name: "outputPath",
            baseName: "outputPath",
            type: "string",
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
    
    /**
     * The output path Default value is 'viewer\\{input file path}_{file extension}\\'
     */
    public outputPath: string;
    
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
            type: "EmailOptions.PageSizeEnum",
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
     * The size of the output page when rendering as PDF or image.
     */
    public pageSize: EmailOptions.PageSizeEnum;
    
    /**
     * The list of supported email message field labels: 1. Field: \"Anniversary\" - default label is \"Anniversary\". 2. Field: \"Attachments\" - default label is \"Attachments\". 3. Field: \"Bcc\" - default label is \"Bcc\". 4. Field: \"Birthday\" - default label is \"Birthday\". 5. Field: \"Business\" - default label is \"Business\". 6. Field: \"BusinessAddress\" - default label is \"Business Address\". 7. Field: \"BusinessFax\" - default label is \"Business Fax\". 8. Field: \"BusinessHomepage\" - default label is \"BusinessHomePage\". 9. Field: \"Cc\" - default label is \"Cc\". 10. Field: \"Company\" - default label is \"Company\". 11. Field: \"Department\" - default label is \"Department\". 12. Field: \"Email\" - default label is \"Email\". 13. Field: \"EmailDisplayAs\" - default label is \"Email Display As\". 14. Field: \"Email2\" - default label is \"Email2\". 15. Field: \"Email2DisplayAs\" - default label is \"Email2 Display As\". 16. Field: \"Email3\" - default label is \"Email3\". 17. Field: \"Email3DisplayAs\" - default label is \"Email3 Display As\". 18. Field: \"End\" - default label is \"End\". 19. Field: \"FirstName\" - default label is \"First Name\". 20. Field: \"From\" - default label is \"From\". 21. Field: \"FullName\" - default label is \"Full Name\". 22. Field: \"Gender\" - default label is \"Gender\". 23. Field: \"Hobbies\" - default label is \"Hobbies\". 24. Field: \"Home\" - default label is \"Home\". 25. Field: \"HomeAddress\" - default label is \"Home Address\". 26. Field: \"Importance\" - default label is \"Importance\". 27. Field: \"JobTitle\" - default label is \"Job Title\". 28. Field: \"LastName\" - default label is \"Last Name\". 29. Field: \"Location\" - default label is \"Location\". 30. Field: \"MiddleName\" - default label is \"Middle Name\". 31. Field: \"Mobile\" - default label is \"Mobile\". 32. Field: \"Organizer\" - default label is \"Organizer\". 33. Field: \"OtherAddress\" - default label is \"Other Address\". 34. Field: \"PersonalHomepage\" - default label is \"PersonalHomePage\". 35. Field: \"Profession\" - default label is \"Profession\". 36. Field: \"Recurrence\" - default label is \"Recurrence\". 37. Field: \"RecurrencePattern\" - default label is \"Recurrence Pattern\". 38. Field: \"RequiredAttendees\" - default label is \"Required Attendees\". 39. Field: \"Sent\" - default label is \"Sent\". 40. Field: \"ShowTimeAs\" - default label is \"Show Time As\". 41. Field: \"SpousePartner\" - default label is \"Spouse/Partner\". 42. Field: \"Start\" - default label is \"Start\". 43. Field: \"Subject\" - default label is \"Subject\". 44. Field: \"To\" - default label is \"To\". 45. Field: \"UserField1\" - default label is \"User Field 1\". 46. Field: \"UserField2\" - default label is \"User Field 2\". 47. Field: \"UserField3\" - default label is \"User Field 3\". 48. Field: \"UserField4\" - default label is \"User Field 4\".
     */
    public fieldLabels: Array<FieldLabel>;
    
    public constructor(init?: Partial<EmailOptions>) {
        
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace EmailOptions {
    export enum PageSizeEnum {
        Unspecified = 'Unspecified' as any,
        Letter = 'Letter' as any,
        Ledger = 'Ledger' as any,
        A0 = 'A0' as any,
        A1 = 'A1' as any,
        A2 = 'A2' as any,
        A3 = 'A3' as any,
        A4 = 'A4' as any,
    }
}
// tslint:enable:quotemark
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
            name: "formatExtension",
            baseName: "formatExtension",
            type: "string",
        },        
        {
            name: "format",
            baseName: "format",
            type: "string",
        },        
        {
            name: "pages",
            baseName: "pages",
            type: "Array<PageInfo>",
        },        
        {
            name: "attachments",
            baseName: "attachments",
            type: "Array<AttachmentInfo>",
        },        
        {
            name: "archiveViewInfo",
            baseName: "archiveViewInfo",
            type: "ArchiveViewInfo",
        },        
        {
            name: "cadViewInfo",
            baseName: "cadViewInfo",
            type: "CadViewInfo",
        },        
        {
            name: "projectManagementViewInfo",
            baseName: "projectManagementViewInfo",
            type: "ProjectManagementViewInfo",
        },        
        {
            name: "outlookViewInfo",
            baseName: "outlookViewInfo",
            type: "OutlookViewInfo",
        },        
        {
            name: "pdfViewInfo",
            baseName: "pdfViewInfo",
            type: "PdfViewInfo",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return InfoResult.attributeTypeMap;
    }

    /**
     * File format extension
     */
    public formatExtension: string;
    
    /**
     * File format
     */
    public format: string;
    
    /**
     * View result pages
     */
    public pages: Array<PageInfo>;
    
    /**
     * Attachments
     */
    public attachments: Array<AttachmentInfo>;
    
    /**
     * Represents view information for archive file
     */
    public archiveViewInfo: ArchiveViewInfo;
    
    /**
     * Represents view information for CAD drawing
     */
    public cadViewInfo: CadViewInfo;
    
    /**
     * Represents view information for MS Project document
     */
    public projectManagementViewInfo: ProjectManagementViewInfo;
    
    /**
     * Represents view information for Outlook Data file
     */
    public outlookViewInfo: OutlookViewInfo;
    
    /**
     * Represents view information for PDF document
     */
    public pdfViewInfo: PdfViewInfo;
    
    public constructor(init?: Partial<InfoResult>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Represents layer contained by the CAD drawing
 */
export class Layer {

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
            name: "visible",
            baseName: "visible",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Layer.attributeTypeMap;
    }

    /**
     * The name of the layer
     */
    public name: string;
    
    /**
     * The layer visibility indicator
     */
    public visible: boolean;
    
    public constructor(init?: Partial<Layer>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Represents layout contained by the CAD drawing
 */
export class Layout {

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
        return Layout.attributeTypeMap;
    }

    /**
     * The name of the layout
     */
    public name: string;
    
    /**
     * The width of the layout
     */
    public width: number;
    
    /**
     * The height of the layout
     */
    public height: number;
    
    public constructor(init?: Partial<Layout>) {
        
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
 * Provides options for rendering Outlook data files
 */
export class OutlookOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "folder",
            baseName: "folder",
            type: "string",
        },        
        {
            name: "textFilter",
            baseName: "textFilter",
            type: "string",
        },        
        {
            name: "addressFilter",
            baseName: "addressFilter",
            type: "string",
        },        
        {
            name: "maxItemsInFolder",
            baseName: "maxItemsInFolder",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return OutlookOptions.attributeTypeMap;
    }

    /**
     * The name of the folder (e.g. Inbox, Sent Item or Deleted Items) to render
     */
    public folder: string;
    
    /**
     * The keywords used to filter messages
     */
    public textFilter: string;
    
    /**
     * The email-address used to filter messages by sender or recipient
     */
    public addressFilter: string;
    
    /**
     * The maximum number of messages or items, that can be rendered from one folder
     */
    public maxItemsInFolder: number;
    
    public constructor(init?: Partial<OutlookOptions>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Represents view information for Outlook Data file
 */
export class OutlookViewInfo {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "folders",
            baseName: "folders",
            type: "Array<string>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return OutlookViewInfo.attributeTypeMap;
    }

    /**
     * The list of folders contained by the Outlook Data file
     */
    public folders: Array<string>;
    
    public constructor(init?: Partial<OutlookViewInfo>) {
        
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
            name: "visible",
            baseName: "visible",
            type: "boolean",
        },        
        {
            name: "lines",
            baseName: "lines",
            type: "Array<Line>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return PageInfo.attributeTypeMap;
    }

    /**
     * The page number
     */
    public number: number;
    
    /**
     * The width of the page in pixels when viewing as JPG or PNG
     */
    public width: number;
    
    /**
     * The height of the page in pixels when viewing as JPG or PNG
     */
    public height: number;
    
    /**
     * The page visibility indicator
     */
    public visible: boolean;
    
    /**
     * The lines contained by the page when viewing as JPG or PNG with enabled Text Extraction
     */
    public lines: Array<Line>;
    
    public constructor(init?: Partial<PageInfo>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Clockwise page rotation 
 */
export class PageRotation {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "pageNumber",
            baseName: "pageNumber",
            type: "number",
        },        
        {
            name: "rotationAngle",
            baseName: "rotationAngle",
            type: "PageRotation.RotationAngleEnum",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return PageRotation.attributeTypeMap;
    }

    /**
     * Page number to rotate
     */
    public pageNumber: number;
    
    /**
     * Rotation angle
     */
    public rotationAngle: PageRotation.RotationAngleEnum;
    
    public constructor(init?: Partial<PageRotation>) {
        
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace PageRotation {
    export enum RotationAngleEnum {
        On90Degree = 'On90Degree' as any,
        On180Degree = 'On180Degree' as any,
        On270Degree = 'On270Degree' as any,
    }
}
// tslint:enable:quotemark
/**
 * Provides options for rendering PDF documents
 */
export class PdfDocumentOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "disableCharsGrouping",
            baseName: "disableCharsGrouping",
            type: "boolean",
        },        
        {
            name: "enableLayeredRendering",
            baseName: "enableLayeredRendering",
            type: "boolean",
        },        
        {
            name: "enableFontHinting",
            baseName: "enableFontHinting",
            type: "boolean",
        },        
        {
            name: "renderOriginalPageSize",
            baseName: "renderOriginalPageSize",
            type: "boolean",
        },        
        {
            name: "imageQuality",
            baseName: "imageQuality",
            type: "PdfDocumentOptions.ImageQualityEnum",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return PdfDocumentOptions.attributeTypeMap;
    }

    /**
     * Disables chars grouping to keep maximum precision during chars positioning when rendering the page
     */
    public disableCharsGrouping: boolean;
    
    /**
     * Enables rendering of text and graphics according to z-order in original PDF document  when rendering into HTML
     */
    public enableLayeredRendering: boolean;
    
    /**
     * Enables font hinting. The font hinting adjusts the display of an outline font. Supported only for TTF fonts when these fonts are used in source document.
     */
    public enableFontHinting: boolean;
    
    /**
     * When this option enabled the output pages will have the same size in pixels as page size in a source PDF document. By default GroupDocs.Viewer calculates output image page size for better rendering quality. This option is supported when rendering into PNG or JPG formats.
     */
    public renderOriginalPageSize: boolean;
    
    /**
     * Specifies output image quality for image resources when rendering into HTML. The default value is Low
     */
    public imageQuality: PdfDocumentOptions.ImageQualityEnum;
    
    public constructor(init?: Partial<PdfDocumentOptions>) {
        
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace PdfDocumentOptions {
    export enum ImageQualityEnum {
        Low = 'Low' as any,
        Medium = 'Medium' as any,
        High = 'High' as any,
    }
}
// tslint:enable:quotemark
/**
 * Represents view information for PDF document
 */
export class PdfViewInfo {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "printingAllowed",
            baseName: "printingAllowed",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return PdfViewInfo.attributeTypeMap;
    }

    /**
     * Indicates if printing of the document is allowed
     */
    public printingAllowed: boolean;
    
    public constructor(init?: Partial<PdfViewInfo>) {
        
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
            type: "ProjectManagementOptions.PageSizeEnum",
        },        
        {
            name: "timeUnit",
            baseName: "timeUnit",
            type: "ProjectManagementOptions.TimeUnitEnum",
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
     * The size of the page.
     */
    public pageSize: ProjectManagementOptions.PageSizeEnum;
    
    /**
     * The time unit to use as minimal point.
     */
    public timeUnit: ProjectManagementOptions.TimeUnitEnum;
    
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

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace ProjectManagementOptions {
    export enum PageSizeEnum {
        Unspecified = 'Unspecified' as any,
        Letter = 'Letter' as any,
        Ledger = 'Ledger' as any,
        A0 = 'A0' as any,
        A1 = 'A1' as any,
        A2 = 'A2' as any,
        A3 = 'A3' as any,
        A4 = 'A4' as any,
    }
    export enum TimeUnitEnum {
        Unspecified = 'Unspecified' as any,
        Days = 'Days' as any,
        ThirdsOfMonths = 'ThirdsOfMonths' as any,
        Months = 'Months' as any,
    }
}
// tslint:enable:quotemark
/**
 * Represents view information for MS Project document
 */
export class ProjectManagementViewInfo {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
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
        return ProjectManagementViewInfo.attributeTypeMap;
    }

    /**
     * The date time from which the project started
     */
    public startDate: Date;
    
    /**
     * The date time when the project is to be completed
     */
    public endDate: Date;
    
    public constructor(init?: Partial<ProjectManagementViewInfo>) {
        
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
            name: "pagesToRender",
            baseName: "pagesToRender",
            type: "Array<number>",
        },        
        {
            name: "pageRotations",
            baseName: "pageRotations",
            type: "Array<PageRotation>",
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
            name: "renderNotes",
            baseName: "renderNotes",
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
        },        
        {
            name: "pdfDocumentOptions",
            baseName: "pdfDocumentOptions",
            type: "PdfDocumentOptions",
        },        
        {
            name: "wordProcessingOptions",
            baseName: "wordProcessingOptions",
            type: "WordProcessingOptions",
        },        
        {
            name: "outlookOptions",
            baseName: "outlookOptions",
            type: "OutlookOptions",
        },        
        {
            name: "archiveOptions",
            baseName: "archiveOptions",
            type: "ArchiveOptions",
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
     * Pages list to render. Ignored, if StartPageNumber and CountPagesToRender are provided
     */
    public pagesToRender: Array<number>;
    
    /**
     * Page rotations
     */
    public pageRotations: Array<PageRotation>;
    
    /**
     * Default font name may be specified in following cases: - You want to generally specify the default font to fall back on, if particular font   in the document cannot be found during rendering. - Your document uses fonts, that contain non-English characters and you want to make sure   any missing font is replaced with one that has the same character set available.
     */
    public defaultFontName: string;
    
    /**
     * Default encoding for the plain text files such as .csv, .txt and .eml files when encoding is not specified in header
     */
    public defaultEncoding: string;
    
    /**
     * When enabled comments will be rendered to the output
     */
    public renderComments: boolean;
    
    /**
     * When enabled notes will be rendered to the output
     */
    public renderNotes: boolean;
    
    /**
     * When enabled hidden pages, sheets or slides will be rendered to the output
     */
    public renderHiddenPages: boolean;
    
    /**
     * Rendering options for Spreadsheet source file formats Spreadsheet file formats include files with extensions: .xls, .xlsx, .xlsm, .xlsb, .csv, .ods, .ots, .xltx, .xltm, .tsv 
     */
    public spreadsheetOptions: SpreadsheetOptions;
    
    /**
     * Rendering options for CAD source file formats CAD file formats include files with extensions: .dwg, .dxf, .dgn, .ifc, .stl
     */
    public cadOptions: CadOptions;
    
    /**
     * Rendering options for Email source file formats Email file formats include files with extensions: .msg, .eml, .emlx, .ifc, .stl
     */
    public emailOptions: EmailOptions;
    
    /**
     * Rendering options for MS Project source file formats Project file formats include files with extensions: .mpt, .mpp
     */
    public projectManagementOptions: ProjectManagementOptions;
    
    /**
     * Rendering options for PDF source file formats
     */
    public pdfDocumentOptions: PdfDocumentOptions;
    
    /**
     * Rendering options for WordProcessing source file formats
     */
    public wordProcessingOptions: WordProcessingOptions;
    
    /**
     * Rendering options for Outlook source file formats
     */
    public outlookOptions: OutlookOptions;
    
    /**
     * Rendering options for Archive source file formats
     */
    public archiveOptions: ArchiveOptions;
    
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
        },        
        {
            name: "textOverflowMode",
            baseName: "textOverflowMode",
            type: "SpreadsheetOptions.TextOverflowModeEnum",
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
    
    /**
     * The text overflow mode for rendering spreadsheet documents into HTML
     */
    public textOverflowMode: SpreadsheetOptions.TextOverflowModeEnum;
    
    public constructor(init?: Partial<SpreadsheetOptions>) {
        
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace SpreadsheetOptions {
    export enum TextOverflowModeEnum {
        Overlay = 'Overlay' as any,
        OverlayIfNextIsEmpty = 'OverlayIfNextIsEmpty' as any,
        AutoFitColumn = 'AutoFitColumn' as any,
        HideText = 'HideText' as any,
    }
}
// tslint:enable:quotemark
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
 * Text element
 */
export class TextElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "x",
            baseName: "x",
            type: "number",
        },        
        {
            name: "y",
            baseName: "y",
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
            name: "value",
            baseName: "value",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return TextElement.attributeTypeMap;
    }

    /**
     * The X coordinate of the highest left point on the page layout where the rectangle that contains element begins.             
     */
    public x: number;
    
    /**
     * The Y coordinate of the highest left point on the page layout where the rectangle that contains element begins.             
     */
    public y: number;
    
    /**
     * The width of the rectangle which contains the element (in pixels).              
     */
    public width: number;
    
    /**
     * The height of the rectangle which contains the element (in pixels).              
     */
    public height: number;
    
    /**
     * The element value
     */
    public value: string;
    
    public constructor(init?: Partial<TextElement>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Represents drawing region
 */
export class Tile {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "startPointX",
            baseName: "startPointX",
            type: "number",
        },        
        {
            name: "startPointY",
            baseName: "startPointY",
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
        return Tile.attributeTypeMap;
    }

    /**
     * The X coordinate of the lowest left point on the drawing where the tile begins
     */
    public startPointX: number;
    
    /**
     * The Y coordinate of the lowest left point on the drawing where the tile begins
     */
    public startPointY: number;
    
    /**
     * The width of the tile in pixels
     */
    public width: number;
    
    /**
     * The height of the tile in pixels
     */
    public height: number;
    
    public constructor(init?: Partial<Tile>) {
        
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
            name: "outputPath",
            baseName: "outputPath",
            type: "string",
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
     * View format (HTML, PNG, JPG, or PDF) Default value is HTML.
     */
    public viewFormat: ViewOptions.ViewFormatEnum;
    
    /**
     * The output path Default value is 'viewer\\{input file path}_{file extension}\\'
     */
    public outputPath: string;
    
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
            type: "Watermark.PositionEnum",
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
     * Watermark position. Default value is \"Diagonal\".
     */
    public position: Watermark.PositionEnum;
    
    /**
     * Watermark size in percents. Default value is 100.
     */
    public size: number;
    
    public constructor(init?: Partial<Watermark>) {
        
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace Watermark {
    export enum PositionEnum {
        Diagonal = 'Diagonal' as any,
        TopLeft = 'TopLeft' as any,
        TopCenter = 'TopCenter' as any,
        TopRight = 'TopRight' as any,
        BottomLeft = 'BottomLeft' as any,
        BottomCenter = 'BottomCenter' as any,
        BottomRight = 'BottomRight' as any,
    }
}
// tslint:enable:quotemark
/**
 * Provides options for rendering word processing documents
 */
export class WordProcessingOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "renderTrackedChanges",
            baseName: "renderTrackedChanges",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return WordProcessingOptions.attributeTypeMap;
    }

    /**
     * Enables tracked changes (revisions) rendering
     */
    public renderTrackedChanges: boolean;
    
    public constructor(init?: Partial<WordProcessingOptions>) {
        
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
 * Represents relatively positioned rectangle which contains single character
 */
export class Character extends TextElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(Character.attributeTypeMap);
    }

    public constructor(init?: Partial<Character>) {
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
        },        
        {
            name: "minify",
            baseName: "minify",
            type: "boolean",
        },        
        {
            name: "excludeFonts",
            baseName: "excludeFonts",
            type: "boolean",
        },        
        {
            name: "fontsToExclude",
            baseName: "fontsToExclude",
            type: "Array<string>",
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
    
    /**
     * Enables HTML content and HTML resources minification
     */
    public minify: boolean;
    
    /**
     * When enabled prevents adding any fonts into HTML document             
     */
    public excludeFonts: boolean;
    
    /**
     * This option is supported for presentations only. The list of font names, to exclude from HTML document             
     */
    public fontsToExclude: Array<string>;
    
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
 * Represents relatively positioned rectangle which contains single line
 */
export class Line extends TextElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "words",
            baseName: "words",
            type: "Array<Word>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(Line.attributeTypeMap);
    }

    /**
     * The words contained by the line
     */
    public words: Array<Word>;
    
    public constructor(init?: Partial<Line>) {
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

/**
 * Options for rendering document into PDF
 */
export class PdfOptions extends RenderOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "jpgQuality",
            baseName: "jpgQuality",
            type: "number",
        },        
        {
            name: "documentOpenPassword",
            baseName: "documentOpenPassword",
            type: "string",
        },        
        {
            name: "permissionsPassword",
            baseName: "permissionsPassword",
            type: "string",
        },        
        {
            name: "permissions",
            baseName: "permissions",
            type: "Array<string>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PdfOptions.attributeTypeMap);
    }

    /**
     * The quality of the JPG images contained by output PDF document; Valid values are between 1 and 100; Default value is 90
     */
    public jpgQuality: number;
    
    /**
     * The password required to open the PDF document
     */
    public documentOpenPassword: string;
    
    /**
     * The password required to change permission settings; Using a permissions password  you can restrict printing, modification and data extraction
     */
    public permissionsPassword: string;
    
    /**
     * The array of PDF document permissions. Allowed values are: AllowAll, DenyPrinting, DenyModification, DenyDataExtraction, DenyAll Default value is AllowAll, if now permissions are set.
     */
    public permissions: Array<string>;
    
    public constructor(init?: Partial<PdfOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Represents relatively positioned rectangle which contains single word
 */
export class Word extends TextElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "characters",
            baseName: "characters",
            type: "Array<Character>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(Word.attributeTypeMap);
    }

    /**
     * The characters contained by the word
     */
    public characters: Array<Character>;
    
    public constructor(init?: Partial<Word>) {
        super(init);
        Object.assign(this, init);
    }        
}

const enumsMap = {
    "EmailOptions.PageSizeEnum": EmailOptions.PageSizeEnum,
    "PageRotation.RotationAngleEnum": PageRotation.RotationAngleEnum,
    "PdfDocumentOptions.ImageQualityEnum": PdfDocumentOptions.ImageQualityEnum,
    "ProjectManagementOptions.PageSizeEnum": ProjectManagementOptions.PageSizeEnum,
    "ProjectManagementOptions.TimeUnitEnum": ProjectManagementOptions.TimeUnitEnum,
    "SpreadsheetOptions.TextOverflowModeEnum": SpreadsheetOptions.TextOverflowModeEnum,
    "ViewOptions.ViewFormatEnum": ViewOptions.ViewFormatEnum,
    "Watermark.PositionEnum": Watermark.PositionEnum,
};

const typeMap = {
            ArchiveOptions,
            ArchiveViewInfo,
            AttachmentInfo,
            CadOptions,
            CadViewInfo,
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
            Layer,
            Layout,
            ModelError,
            ObjectExist,
            OutlookOptions,
            OutlookViewInfo,
            PageInfo,
            PageRotation,
            PdfDocumentOptions,
            PdfViewInfo,
            ProjectManagementOptions,
            ProjectManagementViewInfo,
            RenderOptions,
            Resource,
            SpreadsheetOptions,
            StorageExist,
            StorageFile,
            TextElement,
            Tile,
            ViewOptions,
            ViewResult,
            Watermark,
            WordProcessingOptions,
            AttachmentView,
            Character,
            FileVersion,
            HtmlOptions,
            HtmlResource,
            ImageOptions,
            Line,
            PageView,
            PdfOptions,
            Word,
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
