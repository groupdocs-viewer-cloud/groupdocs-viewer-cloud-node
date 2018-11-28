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
 * Describes attachments.
 */
export class AttachmentCollection {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "fileName",
            baseName: "fileName",
            type: "string",
        },        
        {
            name: "folder",
            baseName: "folder",
            type: "string",
        },        
        {
            name: "attachments",
            baseName: "attachments",
            type: "Array<Attachment>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return AttachmentCollection.attributeTypeMap;
    }

    /**
     * File name.
     */
    public fileName: string;
    
    /**
     * File folder.
     */
    public folder: string;
    
    /**
     * Attachments list.
     */
    public attachments: Array<Attachment>;
    
    public constructor(init?: Partial<AttachmentCollection>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Describes attachment information
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
        },        
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
        return AttachmentInfo.attributeTypeMap;
    }

    /**
     * Attachment name.
     */
    public name: string;
    
    /**
     * Attachment extension.
     */
    public extension: string;
    
    /**
     * File format.
     */
    public fileFormat: string;
    
    public constructor(init?: Partial<AttachmentInfo>) {
        
        Object.assign(this, init);
    }        
}

/**
 * The CAD documents rendering options. Rendering of CAD file formats is not supported at the moment.
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
        },        
        {
            name: "tiles",
            baseName: "tiles",
            type: "Array<Tile>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return CadOptions.attributeTypeMap;
    }

    /**
     * The scale factor affects the size of an output document.        
     */
    public scaleFactor: number;
    
    /**
     * The width of the render result in pixels.        
     */
    public width: number;
    
    /**
     * The height of the render result in pixels.        
     */
    public height: number;
    
    /**
     * Indicates whether layouts from CAD document should be rendered.
     */
    public renderLayouts: boolean;
    
    /**
     * The name of the specific layout to render.
     */
    public layoutName: string;
    
    /**
     * The list of document layers to render. By default all layers will be rendered. Layer names are case sensitive.
     */
    public layers: Array<string>;
    
    /**
     * The coordinates of the drawing regions, that should be rendered. Please note, that this option works only for DWG format. When the list is empty, then whole drawing is rendered. When the list contains at least one tile, then ScaleFactor, Width, Height, RenderLayouts and LayoutName properties are ignored. 
     */
    public tiles: Array<Tile>;
    
    public constructor(init?: Partial<CadOptions>) {
        
        Object.assign(this, init);
    }        
}

/**
 * The Spreadsheet documents rendering options.
 */
export class CellsOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "renderGridLines",
            baseName: "renderGridLines",
            type: "boolean",
        },        
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
            name: "ignoreEmptyRows",
            baseName: "ignoreEmptyRows",
            type: "boolean",
        },        
        {
            name: "encoding",
            baseName: "encoding",
            type: "string",
        },        
        {
            name: "internalHyperlinkPrefix",
            baseName: "internalHyperlinkPrefix",
            type: "string",
        },        
        {
            name: "textOverflowMode",
            baseName: "textOverflowMode",
            type: "string",
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
        return CellsOptions.attributeTypeMap;
    }

    /**
     * Indicates whether to render grid lines.
     */
    public renderGridLines: boolean;
    
    /**
     * Allows to enable worksheets pagination. By default one worksheet is rendered into one page.
     */
    public paginateSheets: boolean;
    
    /**
     * The number of rows rendered into one page when PaginateSheets = true. Default value is 50.
     */
    public countRowsPerPage: number;
    
    /**
     * Indicates whether empty rows should be ignored.
     */
    public ignoreEmptyRows: boolean;
    
    /**
     * The text (*.csv) document encoding.
     */
    public encoding: string;
    
    /**
     * Prefix for hyper-link that references worksheet inside the same document. For rendering document as HTML only.
     */
    public internalHyperlinkPrefix: string;
    
    /**
     * Text overflow mode applied when the text is too big to fit into the cell. Supported values {Overlay|OverlayIfNextIsEmpty|HideText|AutoFitColumn}: 1. Overlay - overlay next cells even they are not empty. 2. OverlayIfNextIsEmpty - overlay next cells only if they are not empty (default). 3. HideText - hide overflow text. 4. AutoFitColumn - expand cell width to fit overflowed text.
     */
    public textOverflowMode: string;
    
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
    
    public constructor(init?: Partial<CellsOptions>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Describes document information.
 */
export class DocumentInfo {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "fileName",
            baseName: "fileName",
            type: "string",
        },        
        {
            name: "extension",
            baseName: "extension",
            type: "string",
        },        
        {
            name: "fileFormat",
            baseName: "fileFormat",
            type: "string",
        },        
        {
            name: "size",
            baseName: "size",
            type: "number",
        },        
        {
            name: "dateModified",
            baseName: "dateModified",
            type: "Date",
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
            name: "layers",
            baseName: "layers",
            type: "Array<string>",
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
        return DocumentInfo.attributeTypeMap;
    }

    /**
     * File name.
     */
    public fileName: string;
    
    /**
     * Extension
     */
    public extension: string;
    
    /**
     * File format.
     */
    public fileFormat: string;
    
    /**
     * Size in bytes.
     */
    public size: number;
    
    /**
     * Modification date.
     */
    public dateModified: Date;
    
    /**
     * Pages information.
     */
    public pages: Array<PageInfo>;
    
    /**
     * List of attachments.
     */
    public attachments: Array<AttachmentInfo>;
    
    /**
     * The list of layers contained in a CAD document.
     */
    public layers: Array<string>;
    
    /**
     * For MS Project documents, The date time from which the project started.
     */
    public startDate: Date;
    
    /**
     * For MS Project documents, the date time when the project is to be completed.
     */
    public endDate: Date;
    
    public constructor(init?: Partial<DocumentInfo>) {
        
        Object.assign(this, init);
    }        
}

/**
 * The Email documents rendering options.
 */
export class EmailOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "encoding",
            baseName: "encoding",
            type: "string",
        },        
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
     * The document encoding e.g. \"utf-8\".
     */
    public encoding: string;
    
    /**
     * The size of the output page when rendering as PDF or image. Supported values {Unknown|Letter|Ledger|A0|A1|A2|A3}: 1. Unknown - the default, unspecified page size. 2. Letter - the size of the Letter page in points is 792x612. 3. Ledger - the size of the Letter page in points is 1224x792. 4. A0 - the size of the A0 page in points is 3371x2384. 5. A1 - the size of the A1 page in points is 2384x1685. 6. A2 - the size of the A2 page in points is 1684x1190. 7. A3 - the size of the A3 page in points is 1190x842. 8. A4 - the size of the A4 page in points is 842x595.
     */
    public pageSize: string;
    
    /**
     * The list of supported email message field labels: 1. Field: \"Anniversary\" - default value is \"Anniversary\". 2. Field: \"Attachments\" - default value is \"Attachments\". 3. Field: \"Bcc\" - default value is \"Bcc\". 4. Field: \"Birthday\" - default value is \"Birthday\". 5. Field: \"Business\" - default value is \"Business\". 6. Field: \"BusinessAddress\" - default value is \"Business Address\". 7. Field: \"BusinessFax\" - default value is \"Business Fax\". 8. Field: \"BusinessHomepage\" - default value is \"BusinessHomePage\". 9. Field: \"Cc\" - default value is \"Cc\". 10. Field: \"Company\" - default value is \"Company\". 11. Field: \"Department\" - default value is \"Department\". 12. Field: \"Email\" - default value is \"Email\". 13. Field: \"EmailDisplayAs\" - default value is \"Email Display As\". 14. Field: \"Email2\" - default value is \"Email2\". 15. Field: \"Email2DisplayAs\" - default value is \"Email2 Display As\". 16. Field: \"Email3\" - default value is \"Email3\". 17. Field: \"Email3DisplayAs\" - default value is \"Email3 Display As\". 18. Field: \"End\" - default value is \"End\". 19. Field: \"FirstName\" - default value is \"First Name\". 20. Field: \"From\" - default value is \"From\". 21. Field: \"FullName\" - default value is \"Full Name\". 22. Field: \"Gender\" - default value is \"Gender\". 23. Field: \"Hobbies\" - default value is \"Hobbies\". 24. Field: \"Home\" - default value is \"Home\". 25. Field: \"HomeAddress\" - default value is \"Home Address\". 26. Field: \"Importance\" - default value is \"Importance\". 27. Field: \"JobTitle\" - default value is \"Job Title\". 28. Field: \"LastName\" - default value is \"Last Name\". 29. Field: \"Location\" - default value is \"Location\". 30. Field: \"MiddleName\" - default value is \"Middle Name\". 31. Field: \"Mobile\" - default value is \"Mobile\". 32. Field: \"Organizer\" - default value is \"Organizer\". 33. Field: \"OtherAddress\" - default value is \"Other Address\". 34. Field: \"PersonalHomepage\" - default value is \"PersonalHomePage\". 35. Field: \"Profession\" - default value is \"Profession\". 36. Field: \"Recurrence\" - default value is \"Recurrence\". 37. Field: \"RecurrencePattern\" - default value is \"Recurrence Pattern\". 38. Field: \"RequiredAttendees\" - default value is \"Required Attendees\". 39. Field: \"Sent\" - default value is \"Sent\". 40. Field: \"ShowTimeAs\" - default value is \"Show Time As\". 41. Field: \"SpousePartner\" - default value is \"Spouse/Partner\". 42. Field: \"Start\" - default value is \"Start\". 43. Field: \"Subject\" - default value is \"Subject\". 44. Field: \"To\" - default value is \"To\". 45. Field: \"UserField1\" - default value is \"User Field 1\". 46. Field: \"UserField2\" - default value is \"User Field 2\". 47. Field: \"UserField3\" - default value is \"User Field 3\". 48. Field: \"UserField4\" - default value is \"User Field 4\".
     */
    public fieldLabels: Array<FieldLabel>;
    
    public constructor(init?: Partial<EmailOptions>) {
        
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
 * The empty type used as a flag.
 */
export class FileResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FileResponse.attributeTypeMap;
    }

    public constructor(init?: Partial<FileResponse>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Describes collection of font families.
 */
export class FontCollection {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "families",
            baseName: "families",
            type: "Array<FontFamily>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FontCollection.attributeTypeMap;
    }

    /**
     * Font families.
     */
    public families: Array<FontFamily>;
    
    public constructor(init?: Partial<FontCollection>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Describes font family.
 */
export class FontFamily {

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
        return FontFamily.attributeTypeMap;
    }

    /**
     * Font family name.
     */
    public name: string;
    
    public constructor(init?: Partial<FontFamily>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Format description.
 */
export class Format {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "fileFormat",
            baseName: "fileFormat",
            type: "string",
        },        
        {
            name: "extension",
            baseName: "extension",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Format.attributeTypeMap;
    }

    /**
     * File format.
     */
    public fileFormat: string;
    
    /**
     * File extension.
     */
    public extension: string;
    
    public constructor(init?: Partial<Format>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Describes object which contains list of supported file formats.
 */
export class FormatCollection {

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
        return FormatCollection.attributeTypeMap;
    }

    /**
     * Supported file formats.
     */
    public formats: Array<Format>;
    
    public constructor(init?: Partial<FormatCollection>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Describes attachment pages.
 */
export class HtmlAttachmentPageCollection {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "fileName",
            baseName: "fileName",
            type: "string",
        },        
        {
            name: "folder",
            baseName: "folder",
            type: "string",
        },        
        {
            name: "attachmentName",
            baseName: "attachmentName",
            type: "string",
        },        
        {
            name: "pages",
            baseName: "pages",
            type: "Array<HtmlPage>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return HtmlAttachmentPageCollection.attributeTypeMap;
    }

    /**
     * The file name.
     */
    public fileName: string;
    
    /**
     * File folder.
     */
    public folder: string;
    
    /**
     * Attachment name.
     */
    public attachmentName: string;
    
    /**
     * Pages list.
     */
    public pages: Array<HtmlPage>;
    
    public constructor(init?: Partial<HtmlAttachmentPageCollection>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Describes collection of HTML pages.
 */
export class HtmlPageCollection {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "fileName",
            baseName: "fileName",
            type: "string",
        },        
        {
            name: "folder",
            baseName: "folder",
            type: "string",
        },        
        {
            name: "pages",
            baseName: "pages",
            type: "Array<HtmlPage>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return HtmlPageCollection.attributeTypeMap;
    }

    /**
     * The name of the file.
     */
    public fileName: string;
    
    /**
     * The file folder.
     */
    public folder: string;
    
    /**
     * Pages list.
     */
    public pages: Array<HtmlPage>;
    
    public constructor(init?: Partial<HtmlPageCollection>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Describes attachment pages.
 */
export class ImageAttachmentPageCollection {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "fileName",
            baseName: "fileName",
            type: "string",
        },        
        {
            name: "folder",
            baseName: "folder",
            type: "string",
        },        
        {
            name: "attachmentName",
            baseName: "attachmentName",
            type: "string",
        },        
        {
            name: "pages",
            baseName: "pages",
            type: "Array<ImagePage>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ImageAttachmentPageCollection.attributeTypeMap;
    }

    /**
     * File name.
     */
    public fileName: string;
    
    /**
     * File folder.
     */
    public folder: string;
    
    /**
     * Name of the attachment.
     */
    public attachmentName: string;
    
    /**
     * Pages list.
     */
    public pages: Array<ImagePage>;
    
    public constructor(init?: Partial<ImageAttachmentPageCollection>) {
        
        Object.assign(this, init);
    }        
}

/**
 * The Outlook data files rendering options.
 */
export class OutlookOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
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
     * The limit of items to render in mailbox folders
     */
    public maxItemsInFolder: number;
    
    public constructor(init?: Partial<OutlookOptions>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Page information.
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
        },        
        {
            name: "angle",
            baseName: "angle",
            type: "number",
        },        
        {
            name: "visible",
            baseName: "visible",
            type: "boolean",
        },        
        {
            name: "rows",
            baseName: "rows",
            type: "Array<RowInfo>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return PageInfo.attributeTypeMap;
    }

    /**
     * Page number.
     */
    public number: number;
    
    /**
     * Page name.
     */
    public name: string;
    
    /**
     * Page width.
     */
    public width: number;
    
    /**
     * Page height.
     */
    public height: number;
    
    /**
     * Page angle.
     */
    public angle: number;
    
    /**
     * Page visibility.
     */
    public visible: boolean;
    
    /**
     * Page rows.
     */
    public rows: Array<RowInfo>;
    
    public constructor(init?: Partial<PageInfo>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Describes pages information.
 */
export class PageInfoCollection {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "pages",
            baseName: "pages",
            type: "Array<PageInfo>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return PageInfoCollection.attributeTypeMap;
    }

    /**
     * Pages list.
     */
    public pages: Array<PageInfo>;
    
    public constructor(init?: Partial<PageInfoCollection>) {
        
        Object.assign(this, init);
    }        
}

/**
 * The PDF documents rendering options.
 */
export class PdfOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "enablePreciseRendering",
            baseName: "enablePreciseRendering",
            type: "boolean",
        },        
        {
            name: "enableInitialContentOrdering",
            baseName: "enableInitialContentOrdering",
            type: "boolean",
        },        
        {
            name: "renderLayersSeparately",
            baseName: "renderLayersSeparately",
            type: "boolean",
        },        
        {
            name: "imageQuality",
            baseName: "imageQuality",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return PdfOptions.attributeTypeMap;
    }

    /**
     * Indicates whether the PDF document is rendered in a precise mode or not. It is recommended to enable this option when rendering documents with complex content e.g. documents which contains hieroglyphs or any kind o glyphs which should be rendered separately from each other.
     */
    public enablePreciseRendering: boolean;
    
    /**
     * When this option is enabled content (graphics and text) will be added to HTML document accordingly Z-order in original PDF document. When this option is disabled content (graphics and text) will be added to a single layer.
     */
    public enableInitialContentOrdering: boolean;
    
    /**
     * When this option is enabled layers will be separated from each other in the HTML document.
     */
    public renderLayersSeparately: boolean;
    
    /**
     * Specifies output image quality for image resources when rendering as HTML. The default value is Low. Supported values {Low|Medium|High}: 1. Low - satisfying image quality and smallest image size. 2. Medium - better image quality and larger image size. 3. High - best image quality with largest image size.
     */
    public imageQuality: string;
    
    public constructor(init?: Partial<PdfOptions>) {
        
        Object.assign(this, init);
    }        
}

/**
 * The Microsoft Project documents rendering options.
 */
export class ProjectOptions {

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
        return ProjectOptions.attributeTypeMap;
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
    
    public constructor(init?: Partial<ProjectOptions>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Base render options.
 */
export class RenderOptionsBase {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "password",
            baseName: "password",
            type: "string",
        },        
        {
            name: "attachmentPassword",
            baseName: "attachmentPassword",
            type: "string",
        },        
        {
            name: "extractText",
            baseName: "extractText",
            type: "boolean",
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
            name: "transforms",
            baseName: "transforms",
            type: "Array<string>",
        },        
        {
            name: "defaultFontName",
            baseName: "defaultFontName",
            type: "string",
        },        
        {
            name: "watermark",
            baseName: "watermark",
            type: "Watermark",
        },        
        {
            name: "cellsOptions",
            baseName: "cellsOptions",
            type: "CellsOptions",
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
            name: "wordsOptions",
            baseName: "wordsOptions",
            type: "WordsOptions",
        },        
        {
            name: "pdfOptions",
            baseName: "pdfOptions",
            type: "PdfOptions",
        },        
        {
            name: "slidesOptions",
            baseName: "slidesOptions",
            type: "SlidesOptions",
        },        
        {
            name: "projectOptions",
            baseName: "projectOptions",
            type: "ProjectOptions",
        },        
        {
            name: "outlookOptions",
            baseName: "outlookOptions",
            type: "OutlookOptions",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return RenderOptionsBase.attributeTypeMap;
    }

    /**
     * Allows to specify document password in case when document is password-protected.
     */
    public password: string;
    
    /**
     * Allows to specify attachment password in case when attachment is password-protected.
     */
    public attachmentPassword: string;
    
    /**
     * Enables document text extraction. For rendering document as image only.
     */
    public extractText: boolean;
    
    /**
     * Enables document comments rendering.
     */
    public renderComments: boolean;
    
    /**
     * Enables rendering of document hidden pages, sheets or slides.
     */
    public renderHiddenPages: boolean;
    
    /**
     * Transforms to apply. Available transforms [\"Rotate\",\"Reorder\",\"AddPrintAction\"]. 1. Rotate - pages will be rotated on angle if angle was set before. 2. Reorder - for rendering document as PDF only. Pages will be ordered according to rearrangements made before. 3. AddPrintAction - for rendering document as PDF only. An JavaScript action will be added which opens print dialog when PDF document is opened.   
     */
    public transforms: Array<string>;
    
    /**
     * The name of the default font. Default font name may be specified in following cases: - You want to generally specify the default font to fall back on, if particular font   in the document cannot be found during rendering. - Your document uses fonts, that contain non-English characters and you want to make sure   any missing font is replaced with one that has the same character set available.
     */
    public defaultFontName: string;
    
    /**
     * Allows to specify watermark.
     */
    public watermark: Watermark;
    
    /**
     * The Spreadsheet documents rendering options.
     */
    public cellsOptions: CellsOptions;
    
    /**
     * The CAD documents rendering options.
     */
    public cadOptions: CadOptions;
    
    /**
     * The Email documents rendering options.
     */
    public emailOptions: EmailOptions;
    
    /**
     * The Text documents rendering options.
     */
    public wordsOptions: WordsOptions;
    
    /**
     * The PDF documents rendering options.
     */
    public pdfOptions: PdfOptions;
    
    /**
     * The Presentation documents rendering options.
     */
    public slidesOptions: SlidesOptions;
    
    /**
     * The Microsoft Project documents rendering options.
     */
    public projectOptions: ProjectOptions;
    
    /**
     * The Outlook Data File document (PST/OST) rendering options.
     */
    public outlookOptions: OutlookOptions;
    
    public constructor(init?: Partial<RenderOptionsBase>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Reference to resource.
 */
export class ResourceUrl {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "url",
            baseName: "url",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ResourceUrl.attributeTypeMap;
    }

    /**
     * ULR to retrieve resource.
     */
    public url: string;
    
    public constructor(init?: Partial<ResourceUrl>) {
        
        Object.assign(this, init);
    }        
}

/**
 * The page text row information.
 */
export class RowInfo {

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
        return RowInfo.attributeTypeMap;
    }

    /**
     * Row text.
     */
    public text: string;
    
    /**
     * Row left coordinate.
     */
    public rowLeft: number;
    
    /**
     * Row top coordinate.
     */
    public rowTop: number;
    
    /**
     * Row width.
     */
    public rowWidth: number;
    
    /**
     * Row height.
     */
    public rowHeight: number;
    
    /**
     * Text coordinates.
     */
    public textCoordinates: Array<number>;
    
    /**
     * Characters coordinates.
     */
    public characterCoordinates: Array<number>;
    
    public constructor(init?: Partial<RowInfo>) {
        
        Object.assign(this, init);
    }        
}

/**
 * The Presentation documents rendering options.
 */
export class SlidesOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "renderNotes",
            baseName: "renderNotes",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return SlidesOptions.attributeTypeMap;
    }

    /**
     * Indicates whether slide notes should be rendered.
     */
    public renderNotes: boolean;
    
    public constructor(init?: Partial<SlidesOptions>) {
        
        Object.assign(this, init);
    }        
}

/**
 * The tile represents the region on the CAD drawing, that should be rendered.
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
     * The X coordinate of the lowest left point on the drawing where the tile begins.
     */
    public startPointX: number;
    
    /**
     * The Y coordinate of the lowest left point on the drawing where the tile begins.
     */
    public startPointY: number;
    
    /**
     * The width of the tile.
     */
    public width: number;
    
    /**
     * The height of the tile.
     */
    public height: number;
    
    public constructor(init?: Partial<Tile>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Base transformation options.
 */
export class TransformOptionsBase {

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
            name: "password",
            baseName: "password",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return TransformOptionsBase.attributeTypeMap;
    }

    /**
     * The page number to transform.
     */
    public pageNumber: number;
    
    /**
     * Allows to specify document password in case when document is password-protected.
     */
    public password: string;
    
    public constructor(init?: Partial<TransformOptionsBase>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Provides options to configure watermark appearance. 
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
     * The watermark text.
     */
    public text: string;
    
    /**
     * The watermark color. Supported formats {Magenta|(112,222,11)|(50,112,222,11)}. Default value is \"Red\".
     */
    public color: string;
    
    /**
     * The watermark position. Supported positions {Diagonal|TopLeft|TopCenter|TopRight|BottomLeft|BottomCenter|BottomRight}. Default value is \"Diagonal\".
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
 * The Text documents rendering options.
 */
export class WordsOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "encoding",
            baseName: "encoding",
            type: "string",
        },        
        {
            name: "renderTrackedChanges",
            baseName: "renderTrackedChanges",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return WordsOptions.attributeTypeMap;
    }

    /**
     * The document encoding e.g. \"utf-8\".
     */
    public encoding: string;
    
    /**
     * Indicates whether Tracked Changes (Revisions) should be rendered or not.
     */
    public renderTrackedChanges: boolean;
    
    public constructor(init?: Partial<WordsOptions>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Describes attachment.
 */
export class Attachment extends ResourceUrl {

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
        return super.getAttributeTypeMap().concat(Attachment.attributeTypeMap);
    }

    /**
     * Attachment name.
     */
    public name: string;
    
    public constructor(init?: Partial<Attachment>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Provides options for retrieving document information.
 */
export class DocumentInfoOptions extends RenderOptionsBase {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DocumentInfoOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<DocumentInfoOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Describes HTML page.
 */
export class HtmlPage extends ResourceUrl {

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
            type: "Array<Resource>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(HtmlPage.attributeTypeMap);
    }

    /**
     * Page number.
     */
    public number: number;
    
    /**
     * HTML resources.
     */
    public resources: Array<Resource>;
    
    public constructor(init?: Partial<HtmlPage>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Describes image page.
 */
export class ImagePage extends ResourceUrl {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "number",
            baseName: "number",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ImagePage.attributeTypeMap);
    }

    /**
     * Page number.
     */
    public number: number;
    
    public constructor(init?: Partial<ImagePage>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Describes image pages.
 */
export class ImagePageCollection extends ResourceUrl {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "fileName",
            baseName: "fileName",
            type: "string",
        },        
        {
            name: "folder",
            baseName: "folder",
            type: "string",
        },        
        {
            name: "pages",
            baseName: "pages",
            type: "Array<ImagePage>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ImagePageCollection.attributeTypeMap);
    }

    /**
     * File name.
     */
    public fileName: string;
    
    /**
     * File folder.
     */
    public folder: string;
    
    /**
     * Images list.
     */
    public pages: Array<ImagePage>;
    
    public constructor(init?: Partial<ImagePageCollection>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Describes PDF file information.
 */
export class PdfFileInfo extends ResourceUrl {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "fileName",
            baseName: "fileName",
            type: "string",
        },        
        {
            name: "folder",
            baseName: "folder",
            type: "string",
        },        
        {
            name: "pdfFileName",
            baseName: "pdfFileName",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PdfFileInfo.attributeTypeMap);
    }

    /**
     * File name.
     */
    public fileName: string;
    
    /**
     * File folder.
     */
    public folder: string;
    
    /**
     * PDF file name.
     */
    public pdfFileName: string;
    
    public constructor(init?: Partial<PdfFileInfo>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Provides options for rendering document as PDF.
 */
export class PdfFileOptions extends RenderOptionsBase {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PdfFileOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<PdfFileOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Base render options.
 */
export class RenderOptions extends RenderOptionsBase {

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
            name: "countPages",
            baseName: "countPages",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(RenderOptions.attributeTypeMap);
    }

    /**
     * Allows to specify document page number as starting page to render. 
     */
    public startPageNumber: number;
    
    /**
     * Allows to specify count of document pages to render.
     */
    public countPages: number;
    
    public constructor(init?: Partial<RenderOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Provides options for reordering document pages.
 */
export class ReorderOptions extends TransformOptionsBase {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "newPosition",
            baseName: "newPosition",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ReorderOptions.attributeTypeMap);
    }

    /**
     * The position where page should be placed.
     */
    public newPosition: number;
    
    public constructor(init?: Partial<ReorderOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Describes resource.
 */
export class Resource extends ResourceUrl {

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
        return super.getAttributeTypeMap().concat(Resource.attributeTypeMap);
    }

    /**
     * HTML resource (image, style, graphics or font) file name.
     */
    public name: string;
    
    public constructor(init?: Partial<Resource>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Provides options for rotating document pages.
 */
export class RotateOptions extends TransformOptionsBase {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "angle",
            baseName: "angle",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(RotateOptions.attributeTypeMap);
    }

    /**
     * The angle in degrees to which the page should be rotated.
     */
    public angle: number;
    
    public constructor(init?: Partial<RotateOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Provides options for rendering document pages as HTML.
 */
export class HtmlOptions extends RenderOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "resourcePath",
            baseName: "resourcePath",
            type: "string",
        },        
        {
            name: "ignoreResourcePathInResources",
            baseName: "ignoreResourcePathInResources",
            type: "boolean",
        },        
        {
            name: "embedResources",
            baseName: "embedResources",
            type: "boolean",
        },        
        {
            name: "enableMinification",
            baseName: "enableMinification",
            type: "boolean",
        },        
        {
            name: "enableResponsiveRendering",
            baseName: "enableResponsiveRendering",
            type: "boolean",
        },        
        {
            name: "excludeFonts",
            baseName: "excludeFonts",
            type: "boolean",
        },        
        {
            name: "excludeFontsList",
            baseName: "excludeFontsList",
            type: "Array<string>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(HtmlOptions.attributeTypeMap);
    }

    /**
     * Allows to specify HTML resources (styles, images and fonts) path. For example when resource path is http://example.com/api/pages/{page-number}/resources/{resource-name} the {page-number} and {resource-name} templates will be replaced with page number and resource name accordingly. Ignored when EmbedResources option is set to true.
     */
    public resourcePath: string;
    
    /**
     * Allows to ignore ResourcePath when processing *.css files.  When this options is enabled ResourcePath won't be added to resource references in *.css file.
     */
    public ignoreResourcePathInResources: boolean;
    
    /**
     * Controls output HTML document resources (styles, images and fonts) saving. When this options set to true all resources will be embedded into HTML document and ResourcePath option value will be ignored.
     */
    public embedResources: boolean;
    
    /**
     * Enables content (HTML, CSS and SVG) minification.
     */
    public enableMinification: boolean;
    
    /**
     * Indicates whether rendering will provide responsive web pages, that look well on different device types.
     */
    public enableResponsiveRendering: boolean;
    
    /**
     * Prevents adding fonts to the output HTML document.  
     */
    public excludeFonts: boolean;
    
    /**
     * The list of font names, that will be excluded from HTML.
     */
    public excludeFontsList: Array<string>;
    
    public constructor(init?: Partial<HtmlOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Provides options for rendering document as image.
 */
export class ImageOptions extends RenderOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "format",
            baseName: "format",
            type: "string",
        },        
        {
            name: "quality",
            baseName: "quality",
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
        return super.getAttributeTypeMap().concat(ImageOptions.attributeTypeMap);
    }

    /**
     * Allows to set image format (png, jpg, bmp). Default value is png.
     */
    public format: string;
    
    /**
     * Allows to specify quality when rendering as JPG. Valid values are between 1 and 100.  Default value is 90.
     */
    public quality: number;
    
    /**
     * Allows to specify output image width.  Specify image width in case when you want to change output image dimensions. When Width has value and Height value is 0 then Height value will be calculated  to save image proportions. 
     */
    public width: number;
    
    /**
     * Allows to specify output image height.  Specify image height in case when you want to change output image dimensions. When Height has value and Width value is 0 then Width value will be calculated  to save image proportions.
     */
    public height: number;
    
    public constructor(init?: Partial<ImageOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

const enumsMap = {
};

const typeMap = {
            AttachmentCollection,
            AttachmentInfo,
            CadOptions,
            CellsOptions,
            DocumentInfo,
            EmailOptions,
            FieldLabel,
            FileResponse,
            FontCollection,
            FontFamily,
            Format,
            FormatCollection,
            HtmlAttachmentPageCollection,
            HtmlPageCollection,
            ImageAttachmentPageCollection,
            OutlookOptions,
            PageInfo,
            PageInfoCollection,
            PdfOptions,
            ProjectOptions,
            RenderOptionsBase,
            ResourceUrl,
            RowInfo,
            SlidesOptions,
            Tile,
            TransformOptionsBase,
            Watermark,
            WordsOptions,
            Attachment,
            DocumentInfoOptions,
            HtmlPage,
            ImagePage,
            ImagePageCollection,
            PdfFileInfo,
            PdfFileOptions,
            RenderOptions,
            ReorderOptions,
            Resource,
            RotateOptions,
            HtmlOptions,
            ImageOptions,
};

export {enumsMap, typeMap};

/**
 * Request model for HtmlCreateAttachmentPagesCache operation.
 */
export class HtmlCreateAttachmentPagesCacheRequest {
    /**
     * The file name.
     */
    public fileName: string;

    /**
     * The attachment name.
     */
    public attachmentName: string;

    /**
     * The HTML rendering options.
     */
    public htmlOptions: HtmlOptions;

    /**
     * The folder with custom fonts in storage.
     */
    public fontsFolder: string;

    /**
     * The folder which contains specified file in storage.
     */
    public folder: string;

    /**
     * The file storage which have to be used.
     */
    public storage: string;
    
    public constructor(fileName: string, attachmentName: string, htmlOptions?: HtmlOptions, fontsFolder?: string, folder?: string, storage?: string) {        
        this.fileName = fileName;
        this.attachmentName = attachmentName;
        this.htmlOptions = htmlOptions;
        this.fontsFolder = fontsFolder;
        this.folder = folder;
        this.storage = storage;
    }
}

/**
 * Request model for HtmlCreatePagesCache operation.
 */
export class HtmlCreatePagesCacheRequest {
    /**
     * The file name.
     */
    public fileName: string;

    /**
     * The HTML rendering options.
     */
    public htmlOptions: HtmlOptions;

    /**
     * The folder with custom fonts in storage.
     */
    public fontsFolder: string;

    /**
     * The folder which contains specified file in storage.
     */
    public folder: string;

    /**
     * The file storage which have to be used.
     */
    public storage: string;
    
    public constructor(fileName: string, htmlOptions?: HtmlOptions, fontsFolder?: string, folder?: string, storage?: string) {        
        this.fileName = fileName;
        this.htmlOptions = htmlOptions;
        this.fontsFolder = fontsFolder;
        this.folder = folder;
        this.storage = storage;
    }
}

/**
 * Request model for HtmlCreatePagesCacheFromContent operation.
 */
export class HtmlCreatePagesCacheFromContentRequest {
    /**
     * File contents.
     */
    public file: Buffer;

    /**
     * HTML rendering options 'HtmlOptions' as JSON or XML.
     */
    public htmlOptions: Buffer;

    /**
     * The file name.
     */
    public fileName: string;

    /**
     * The folder with custom fonts in storage.
     */
    public fontsFolder: string;

    /**
     * The folder which contains specified file in storage.
     */
    public folder: string;

    /**
     * The file storage which have to be used.
     */
    public storage: string;
    
    public constructor(file: Buffer, htmlOptions: Buffer, fileName?: string, fontsFolder?: string, folder?: string, storage?: string) {        
        this.file = file;
        this.htmlOptions = htmlOptions;
        this.fileName = fileName;
        this.fontsFolder = fontsFolder;
        this.folder = folder;
        this.storage = storage;
    }
}

/**
 * Request model for HtmlCreatePagesCacheFromUrl operation.
 */
export class HtmlCreatePagesCacheFromUrlRequest {
    /**
     * The URL to retrieve document.
     */
    public url: string;

    /**
     * The HTML rendering options.
     */
    public htmlOptions: HtmlOptions;

    /**
     * The file name.
     */
    public fileName: string;

    /**
     * The folder with custom fonts in storage.
     */
    public fontsFolder: string;

    /**
     * The folder which contains specified file in storage.
     */
    public folder: string;

    /**
     * The file storage which have to be used.
     */
    public storage: string;
    
    public constructor(url: string, htmlOptions?: HtmlOptions, fileName?: string, fontsFolder?: string, folder?: string, storage?: string) {        
        this.url = url;
        this.htmlOptions = htmlOptions;
        this.fileName = fileName;
        this.fontsFolder = fontsFolder;
        this.folder = folder;
        this.storage = storage;
    }
}

/**
 * Request model for HtmlCreatePdfFile operation.
 */
export class HtmlCreatePdfFileRequest {
    /**
     * The document name.
     */
    public fileName: string;

    /**
     * The PDF file rendering options.
     */
    public pdfFileOptions: PdfFileOptions;

    /**
     * The folder with custom fonts in storage.
     */
    public fontsFolder: string;

    /**
     * The folder which contains specified file in storage.
     */
    public folder: string;

    /**
     * The file storage which have to be used.
     */
    public storage: string;
    
    public constructor(fileName: string, pdfFileOptions?: PdfFileOptions, fontsFolder?: string, folder?: string, storage?: string) {        
        this.fileName = fileName;
        this.pdfFileOptions = pdfFileOptions;
        this.fontsFolder = fontsFolder;
        this.folder = folder;
        this.storage = storage;
    }
}

/**
 * Request model for HtmlCreatePdfFileFromContent operation.
 */
export class HtmlCreatePdfFileFromContentRequest {
    /**
     * File contents.
     */
    public file: Buffer;

    /**
     * PDF rendering options 'PdfFileOptions' as JSON or XML.
     */
    public pdfFileOptions: Buffer;

    /**
     * The file name.
     */
    public fileName: string;

    /**
     * The folder with custom fonts in storage.
     */
    public fontsFolder: string;

    /**
     * The folder which contains specified file in storage.
     */
    public folder: string;

    /**
     * The file storage which have to be used.
     */
    public storage: string;
    
    public constructor(file: Buffer, pdfFileOptions: Buffer, fileName?: string, fontsFolder?: string, folder?: string, storage?: string) {        
        this.file = file;
        this.pdfFileOptions = pdfFileOptions;
        this.fileName = fileName;
        this.fontsFolder = fontsFolder;
        this.folder = folder;
        this.storage = storage;
    }
}

/**
 * Request model for HtmlCreatePdfFileFromUrl operation.
 */
export class HtmlCreatePdfFileFromUrlRequest {
    /**
     * The URL to retrieve document.
     */
    public url: string;

    /**
     * The PDF file rendering.
     */
    public pdfFileOptions: PdfFileOptions;

    /**
     * The file name.
     */
    public fileName: string;

    /**
     * The folder with custom fonts in storage.
     */
    public fontsFolder: string;

    /**
     * The folder which contains specified file in storage.
     */
    public folder: string;

    /**
     * The file storage which have to be used.
     */
    public storage: string;
    
    public constructor(url: string, pdfFileOptions?: PdfFileOptions, fileName?: string, fontsFolder?: string, folder?: string, storage?: string) {        
        this.url = url;
        this.pdfFileOptions = pdfFileOptions;
        this.fileName = fileName;
        this.fontsFolder = fontsFolder;
        this.folder = folder;
        this.storage = storage;
    }
}

/**
 * Request model for HtmlDeleteAttachmentPagesCache operation.
 */
export class HtmlDeleteAttachmentPagesCacheRequest {
    /**
     * The file name.
     */
    public fileName: string;

    /**
     * Name of the attachment.
     */
    public attachmentName: string;

    /**
     * The folder which contains specified file in storage.
     */
    public folder: string;

    /**
     * The file storage which have to be used.
     */
    public storage: string;
    
    public constructor(fileName: string, attachmentName: string, folder?: string, storage?: string) {        
        this.fileName = fileName;
        this.attachmentName = attachmentName;
        this.folder = folder;
        this.storage = storage;
    }
}

/**
 * Request model for HtmlDeletePagesCache operation.
 */
export class HtmlDeletePagesCacheRequest {
    /**
     * The file name.
     */
    public fileName: string;

    /**
     * The folder which contains specified file in storage.
     */
    public folder: string;

    /**
     * The file storage which have to be used.
     */
    public storage: string;
    
    public constructor(fileName: string, folder?: string, storage?: string) {        
        this.fileName = fileName;
        this.folder = folder;
        this.storage = storage;
    }
}

/**
 * Request model for HtmlGetAttachment operation.
 */
export class HtmlGetAttachmentRequest {
    /**
     * The file name.
     */
    public fileName: string;

    /**
     * Name of the attachment.
     */
    public attachmentName: string;

    /**
     * The document password.
     */
    public password: string;

    /**
     * The folder which contains specified file in storage.
     */
    public folder: string;

    /**
     * The file storage which have to be used.
     */
    public storage: string;
    
    public constructor(fileName: string, attachmentName: string, password?: string, folder?: string, storage?: string) {        
        this.fileName = fileName;
        this.attachmentName = attachmentName;
        this.password = password;
        this.folder = folder;
        this.storage = storage;
    }
}

/**
 * Request model for HtmlGetAttachmentInfo operation.
 */
export class HtmlGetAttachmentInfoRequest {
    /**
     * The file name.
     */
    public fileName: string;

    /**
     * The attachment name.
     */
    public attachmentName: string;

    /**
     * The document password.
     */
    public password: string;

    /**
     * The attachment password.
     */
    public attachmentPassword: string;

    /**
     * The folder which contains specified file in storage.
     */
    public folder: string;

    /**
     * The file storage which have to be used.
     */
    public storage: string;
    
    public constructor(fileName: string, attachmentName: string, password?: string, attachmentPassword?: string, folder?: string, storage?: string) {        
        this.fileName = fileName;
        this.attachmentName = attachmentName;
        this.password = password;
        this.attachmentPassword = attachmentPassword;
        this.folder = folder;
        this.storage = storage;
    }
}

/**
 * Request model for HtmlGetAttachmentInfoWithOptions operation.
 */
export class HtmlGetAttachmentInfoWithOptionsRequest {
    /**
     * The file name.
     */
    public fileName: string;

    /**
     * The attachment name.
     */
    public attachmentName: string;

    /**
     * The rendering options.
     */
    public documentInfoOptions: DocumentInfoOptions;

    /**
     * The folder which contains specified file in storage.
     */
    public folder: string;

    /**
     * The file storage which have to be used.
     */
    public storage: string;
    
    public constructor(fileName: string, attachmentName: string, documentInfoOptions?: DocumentInfoOptions, folder?: string, storage?: string) {        
        this.fileName = fileName;
        this.attachmentName = attachmentName;
        this.documentInfoOptions = documentInfoOptions;
        this.folder = folder;
        this.storage = storage;
    }
}

/**
 * Request model for HtmlGetAttachmentPage operation.
 */
export class HtmlGetAttachmentPageRequest {
    /**
     * The document name.
     */
    public fileName: string;

    /**
     * Name of the attachment.
     */
    public attachmentName: string;

    /**
     * The attachment page number.
     */
    public pageNumber: number;

    /**
     * The attachment page HTML resource path.
     */
    public resourcePath: string;

    /**
     * When this option enabled ResourcePath won't be added to resource reference in *.css and *.svg files.
     */
    public ignoreResourcePathInResources: boolean;

    /**
     * Whether to embed HTML resources or save them separate.
     */
    public embedResources: boolean;

    /**
     * Enables content (HTML, CSS and SVG) minification.
     */
    public enableMinification: boolean;

    /**
     * Indicates whether rendering will provide responsive web pages, that look well on different device types.
     */
    public enableResponsiveRendering: boolean;

    /**
     * Prevents adding fonts to the output HTML document.
     */
    public excludeFonts: boolean;

    /**
     * Allows to render document comments.
     */
    public renderComments: boolean;

    /**
     * Enables rendering of document hidden pages, sheets or slides.
     */
    public renderHiddenPages: boolean;

    /**
     * The document password.
     */
    public password: string;

    /**
     * The attachment password.
     */
    public attachmentPassword: string;

    /**
     * The name of the default font.
     */
    public defaultFontName: string;

    /**
     * The folder with custom fonts in storage.
     */
    public fontsFolder: string;

    /**
     * The folder which contains specified file in storage.
     */
    public folder: string;

    /**
     * The file storage which have to be used.
     */
    public storage: string;
    
    public constructor(fileName: string, attachmentName: string, pageNumber: number, resourcePath?: string, ignoreResourcePathInResources?: boolean, embedResources?: boolean, enableMinification?: boolean, enableResponsiveRendering?: boolean, excludeFonts?: boolean, renderComments?: boolean, renderHiddenPages?: boolean, password?: string, attachmentPassword?: string, defaultFontName?: string, fontsFolder?: string, folder?: string, storage?: string) {        
        this.fileName = fileName;
        this.attachmentName = attachmentName;
        this.pageNumber = pageNumber;
        this.resourcePath = resourcePath;
        this.ignoreResourcePathInResources = ignoreResourcePathInResources;
        this.embedResources = embedResources;
        this.enableMinification = enableMinification;
        this.enableResponsiveRendering = enableResponsiveRendering;
        this.excludeFonts = excludeFonts;
        this.renderComments = renderComments;
        this.renderHiddenPages = renderHiddenPages;
        this.password = password;
        this.attachmentPassword = attachmentPassword;
        this.defaultFontName = defaultFontName;
        this.fontsFolder = fontsFolder;
        this.folder = folder;
        this.storage = storage;
    }
}

/**
 * Request model for HtmlGetAttachmentPageResource operation.
 */
export class HtmlGetAttachmentPageResourceRequest {
    /**
     * The file name.
     */
    public fileName: string;

    /**
     * The attachment name.
     */
    public attachmentName: string;

    /**
     * The page number.
     */
    public pageNumber: number;

    /**
     * Name of the resource.
     */
    public resourceName: string;

    /**
     * The folder which contains specified file in storage.
     */
    public folder: string;

    /**
     * The file storage which have to be used.
     */
    public storage: string;
    
    public constructor(fileName: string, attachmentName: string, pageNumber: number, resourceName: string, folder?: string, storage?: string) {        
        this.fileName = fileName;
        this.attachmentName = attachmentName;
        this.pageNumber = pageNumber;
        this.resourceName = resourceName;
        this.folder = folder;
        this.storage = storage;
    }
}

/**
 * Request model for HtmlGetAttachmentPages operation.
 */
export class HtmlGetAttachmentPagesRequest {
    /**
     * The file name.
     */
    public fileName: string;

    /**
     * The attachment name.
     */
    public attachmentName: string;

    /**
     * The attachment page HTML resource path.
     */
    public resourcePath: string;

    /**
     * When this option enabled ResourcePath won't be added to resource reference in *.css and *.svg files.
     */
    public ignoreResourcePathInResources: boolean;

    /**
     * Whether to embed HTML resources or save them separate.
     */
    public embedResources: boolean;

    /**
     * Enables content (HTML, CSS and SVG) minification.
     */
    public enableMinification: boolean;

    /**
     * Indicates whether rendering will provide responsive web pages, that look well on different device types.
     */
    public enableResponsiveRendering: boolean;

    /**
     * Prevents adding fonts to the output HTML document.
     */
    public excludeFonts: boolean;

    /**
     * The starting document page number to render.
     */
    public startPageNumber: number;

    /**
     * The count of document pages to render.
     */
    public countPages: number;

    /**
     * Allows to render document comments.
     */
    public renderComments: boolean;

    /**
     * Enables rendering of document hidden pages, sheets or slides.
     */
    public renderHiddenPages: boolean;

    /**
     * The document password.
     */
    public password: string;

    /**
     * The attachment password.
     */
    public attachmentPassword: string;

    /**
     * The name of the default font.
     */
    public defaultFontName: string;

    /**
     * The folder with custom fonts in storage.
     */
    public fontsFolder: string;

    /**
     * The folder which contains specified file in storage.
     */
    public folder: string;

    /**
     * The file storage which have to be used.
     */
    public storage: string;
    
    public constructor(fileName: string, attachmentName: string, resourcePath?: string, ignoreResourcePathInResources?: boolean, embedResources?: boolean, enableMinification?: boolean, enableResponsiveRendering?: boolean, excludeFonts?: boolean, startPageNumber?: number, countPages?: number, renderComments?: boolean, renderHiddenPages?: boolean, password?: string, attachmentPassword?: string, defaultFontName?: string, fontsFolder?: string, folder?: string, storage?: string) {        
        this.fileName = fileName;
        this.attachmentName = attachmentName;
        this.resourcePath = resourcePath;
        this.ignoreResourcePathInResources = ignoreResourcePathInResources;
        this.embedResources = embedResources;
        this.enableMinification = enableMinification;
        this.enableResponsiveRendering = enableResponsiveRendering;
        this.excludeFonts = excludeFonts;
        this.startPageNumber = startPageNumber;
        this.countPages = countPages;
        this.renderComments = renderComments;
        this.renderHiddenPages = renderHiddenPages;
        this.password = password;
        this.attachmentPassword = attachmentPassword;
        this.defaultFontName = defaultFontName;
        this.fontsFolder = fontsFolder;
        this.folder = folder;
        this.storage = storage;
    }
}

/**
 * Request model for HtmlGetAttachments operation.
 */
export class HtmlGetAttachmentsRequest {
    /**
     * The file name.
     */
    public fileName: string;

    /**
     * The document password.
     */
    public password: string;

    /**
     * The folder which contains specified file in storage.
     */
    public folder: string;

    /**
     * The file storage which have to be used.
     */
    public storage: string;
    
    public constructor(fileName: string, password?: string, folder?: string, storage?: string) {        
        this.fileName = fileName;
        this.password = password;
        this.folder = folder;
        this.storage = storage;
    }
}

/**
 * Request model for HtmlGetDocumentInfo operation.
 */
export class HtmlGetDocumentInfoRequest {
    /**
     * The file name.
     */
    public fileName: string;

    /**
     * The document password.
     */
    public password: string;

    /**
     * Allows to render document comments. Not required if PDF document was created before.
     */
    public renderComments: boolean;

    /**
     * Enables rendering of document hidden pages, sheets or slides.
     */
    public renderHiddenPages: boolean;

    /**
     * The folder which contains specified file in storage.
     */
    public folder: string;

    /**
     * The file storage which have to be used.
     */
    public storage: string;
    
    public constructor(fileName: string, password?: string, renderComments?: boolean, renderHiddenPages?: boolean, folder?: string, storage?: string) {        
        this.fileName = fileName;
        this.password = password;
        this.renderComments = renderComments;
        this.renderHiddenPages = renderHiddenPages;
        this.folder = folder;
        this.storage = storage;
    }
}

/**
 * Request model for HtmlGetDocumentInfoFromContent operation.
 */
export class HtmlGetDocumentInfoFromContentRequest {
    /**
     * File contents.
     */
    public file: Buffer;

    /**
     * Document info options 'DocumentInfoOptions' as JSON or XML.
     */
    public documentInfoOptions: Buffer;

    /**
     * The file name.
     */
    public fileName: string;

    /**
     * The folder which contains specified file in storage.
     */
    public folder: string;

    /**
     * The file storage which have to be used.
     */
    public storage: string;
    
    public constructor(file: Buffer, documentInfoOptions: Buffer, fileName?: string, folder?: string, storage?: string) {        
        this.file = file;
        this.documentInfoOptions = documentInfoOptions;
        this.fileName = fileName;
        this.folder = folder;
        this.storage = storage;
    }
}

/**
 * Request model for HtmlGetDocumentInfoFromUrl operation.
 */
export class HtmlGetDocumentInfoFromUrlRequest {
    /**
     * The URL to retrieve document.
     */
    public url: string;

    /**
     * The file name.
     */
    public fileName: string;

    /**
     * The document password.
     */
    public password: string;

    /**
     * Allows to render document comments. Not required if PDF document was created before.
     */
    public renderComments: boolean;

    /**
     * Enables rendering of document hidden pages, sheets or slides.
     */
    public renderHiddenPages: boolean;

    /**
     * The folder which contains specified file in storage.
     */
    public folder: string;

    /**
     * The file storage which have to be used.
     */
    public storage: string;
    
    public constructor(url: string, fileName?: string, password?: string, renderComments?: boolean, renderHiddenPages?: boolean, folder?: string, storage?: string) {        
        this.url = url;
        this.fileName = fileName;
        this.password = password;
        this.renderComments = renderComments;
        this.renderHiddenPages = renderHiddenPages;
        this.folder = folder;
        this.storage = storage;
    }
}

/**
 * Request model for HtmlGetDocumentInfoFromUrlWithOptions operation.
 */
export class HtmlGetDocumentInfoFromUrlWithOptionsRequest {
    /**
     * The URL to retrieve document.
     */
    public url: string;

    /**
     * The rendering options.
     */
    public documentInfoOptions: DocumentInfoOptions;

    /**
     * The document name.
     */
    public fileName: string;

    /**
     * The folder which contains specified file in storage.
     */
    public folder: string;

    /**
     * The file storage which have to be used.
     */
    public storage: string;
    
    public constructor(url: string, documentInfoOptions?: DocumentInfoOptions, fileName?: string, folder?: string, storage?: string) {        
        this.url = url;
        this.documentInfoOptions = documentInfoOptions;
        this.fileName = fileName;
        this.folder = folder;
        this.storage = storage;
    }
}

/**
 * Request model for HtmlGetDocumentInfoWithOptions operation.
 */
export class HtmlGetDocumentInfoWithOptionsRequest {
    /**
     * The file name.
     */
    public fileName: string;

    /**
     * The rendering options.
     */
    public documentInfoOptions: DocumentInfoOptions;

    /**
     * The folder which contains specified file in storage.
     */
    public folder: string;

    /**
     * The file storage which have to be used.
     */
    public storage: string;
    
    public constructor(fileName: string, documentInfoOptions?: DocumentInfoOptions, folder?: string, storage?: string) {        
        this.fileName = fileName;
        this.documentInfoOptions = documentInfoOptions;
        this.folder = folder;
        this.storage = storage;
    }
}

/**
 * Request model for HtmlGetPage operation.
 */
export class HtmlGetPageRequest {
    /**
     * The file name.
     */
    public fileName: string;

    /**
     * The page number.
     */
    public pageNumber: number;

    /**
     * The HTML resource path.
     */
    public resourcePath: string;

    /**
     * When this option enabled ResourcePath won't be added to resource reference in *.css and *.svg files.
     */
    public ignoreResourcePathInResources: boolean;

    /**
     * Whether to embed HTML resources or save them separate.
     */
    public embedResources: boolean;

    /**
     * Enables content (HTML, CSS and SVG) minification.
     */
    public enableMinification: boolean;

    /**
     * Indicates whether rendering will provide responsive web pages, that look well on different device types.
     */
    public enableResponsiveRendering: boolean;

    /**
     * Prevents adding fonts to the output HTML document.
     */
    public excludeFonts: boolean;

    /**
     * The document password.
     */
    public password: string;

    /**
     * Allows to render document comments.
     */
    public renderComments: boolean;

    /**
     * Enables rendering of document hidden pages, sheets or slides.
     */
    public renderHiddenPages: boolean;

    /**
     * The name of the default font.
     */
    public defaultFontName: string;

    /**
     * The folder with custom fonts in storage.
     */
    public fontsFolder: string;

    /**
     * The folder which contains specified file in storage.
     */
    public folder: string;

    /**
     * The file storage which have to be used.
     */
    public storage: string;
    
    public constructor(fileName: string, pageNumber: number, resourcePath?: string, ignoreResourcePathInResources?: boolean, embedResources?: boolean, enableMinification?: boolean, enableResponsiveRendering?: boolean, excludeFonts?: boolean, password?: string, renderComments?: boolean, renderHiddenPages?: boolean, defaultFontName?: string, fontsFolder?: string, folder?: string, storage?: string) {        
        this.fileName = fileName;
        this.pageNumber = pageNumber;
        this.resourcePath = resourcePath;
        this.ignoreResourcePathInResources = ignoreResourcePathInResources;
        this.embedResources = embedResources;
        this.enableMinification = enableMinification;
        this.enableResponsiveRendering = enableResponsiveRendering;
        this.excludeFonts = excludeFonts;
        this.password = password;
        this.renderComments = renderComments;
        this.renderHiddenPages = renderHiddenPages;
        this.defaultFontName = defaultFontName;
        this.fontsFolder = fontsFolder;
        this.folder = folder;
        this.storage = storage;
    }
}

/**
 * Request model for HtmlGetPageResource operation.
 */
export class HtmlGetPageResourceRequest {
    /**
     * The file name.
     */
    public fileName: string;

    /**
     * The page number.
     */
    public pageNumber: number;

    /**
     * Name of the resource.
     */
    public resourceName: string;

    /**
     * The folder which contains specified file in storage.
     */
    public folder: string;

    /**
     * The file storage which have to be used.
     */
    public storage: string;
    
    public constructor(fileName: string, pageNumber: number, resourceName: string, folder?: string, storage?: string) {        
        this.fileName = fileName;
        this.pageNumber = pageNumber;
        this.resourceName = resourceName;
        this.folder = folder;
        this.storage = storage;
    }
}

/**
 * Request model for HtmlGetPages operation.
 */
export class HtmlGetPagesRequest {
    /**
     * The file name.
     */
    public fileName: string;

    /**
     * The HTML resource path.
     */
    public resourcePath: string;

    /**
     * When this option enabled ResourcePath won't be added to resource reference in *.css and *.svg files.
     */
    public ignoreResourcePathInResources: boolean;

    /**
     * Whether to embed HTML resources or save them separate.
     */
    public embedResources: boolean;

    /**
     * Enables content (HTML, CSS and SVG) minification.
     */
    public enableMinification: boolean;

    /**
     * Indicates whether rendering will provide responsive web pages, that look well on different device types.
     */
    public enableResponsiveRendering: boolean;

    /**
     * Prevents adding fonts to the output HTML document.
     */
    public excludeFonts: boolean;

    /**
     * The starting document page number to render.
     */
    public startPageNumber: number;

    /**
     * The count of document pages to render.
     */
    public countPages: number;

    /**
     * The document password.
     */
    public password: string;

    /**
     * Allows to render document comments.
     */
    public renderComments: boolean;

    /**
     * Enables rendering of document hidden pages, sheets or slides.
     */
    public renderHiddenPages: boolean;

    /**
     * The name of the default font.
     */
    public defaultFontName: string;

    /**
     * The folder with custom fonts in storage.
     */
    public fontsFolder: string;

    /**
     * The folder which contains specified file in storage.
     */
    public folder: string;

    /**
     * The file storage which have to be used.
     */
    public storage: string;
    
    public constructor(fileName: string, resourcePath?: string, ignoreResourcePathInResources?: boolean, embedResources?: boolean, enableMinification?: boolean, enableResponsiveRendering?: boolean, excludeFonts?: boolean, startPageNumber?: number, countPages?: number, password?: string, renderComments?: boolean, renderHiddenPages?: boolean, defaultFontName?: string, fontsFolder?: string, folder?: string, storage?: string) {        
        this.fileName = fileName;
        this.resourcePath = resourcePath;
        this.ignoreResourcePathInResources = ignoreResourcePathInResources;
        this.embedResources = embedResources;
        this.enableMinification = enableMinification;
        this.enableResponsiveRendering = enableResponsiveRendering;
        this.excludeFonts = excludeFonts;
        this.startPageNumber = startPageNumber;
        this.countPages = countPages;
        this.password = password;
        this.renderComments = renderComments;
        this.renderHiddenPages = renderHiddenPages;
        this.defaultFontName = defaultFontName;
        this.fontsFolder = fontsFolder;
        this.folder = folder;
        this.storage = storage;
    }
}

/**
 * Request model for HtmlGetPagesFromUrl operation.
 */
export class HtmlGetPagesFromUrlRequest {
    /**
     * The URL to retrieve document.
     */
    public url: string;

    /**
     * The file name.
     */
    public fileName: string;

    /**
     * The HTML resource path.
     */
    public resourcePath: string;

    /**
     * When this option enabled ResourcePath won't be added to resource reference in *.css and *.svg files.
     */
    public ignoreResourcePathInResources: boolean;

    /**
     * Whether to embed HTML resources or save them separate.
     */
    public embedResources: boolean;

    /**
     * Enables content (HTML, CSS and SVG) minification.
     */
    public enableMinification: boolean;

    /**
     * Indicates whether rendering will provide responsive web pages, that look well on different device types.
     */
    public enableResponsiveRendering: boolean;

    /**
     * Prevents adding fonts to the output HTML document.
     */
    public excludeFonts: boolean;

    /**
     * The starting document page number to render.
     */
    public startPageNumber: number;

    /**
     * The count of document pages to render.
     */
    public countPages: number;

    /**
     * The document password.
     */
    public password: string;

    /**
     * Allows to render document comments.
     */
    public renderComments: boolean;

    /**
     * Enables rendering of document hidden pages, sheets or slides.
     */
    public renderHiddenPages: boolean;

    /**
     * The name of the default font.
     */
    public defaultFontName: string;

    /**
     * The folder with custom fonts in storage.
     */
    public fontsFolder: string;

    /**
     * The folder which contains specified file in storage.
     */
    public folder: string;

    /**
     * The file storage which have to be used.
     */
    public storage: string;
    
    public constructor(url: string, fileName?: string, resourcePath?: string, ignoreResourcePathInResources?: boolean, embedResources?: boolean, enableMinification?: boolean, enableResponsiveRendering?: boolean, excludeFonts?: boolean, startPageNumber?: number, countPages?: number, password?: string, renderComments?: boolean, renderHiddenPages?: boolean, defaultFontName?: string, fontsFolder?: string, folder?: string, storage?: string) {        
        this.url = url;
        this.fileName = fileName;
        this.resourcePath = resourcePath;
        this.ignoreResourcePathInResources = ignoreResourcePathInResources;
        this.embedResources = embedResources;
        this.enableMinification = enableMinification;
        this.enableResponsiveRendering = enableResponsiveRendering;
        this.excludeFonts = excludeFonts;
        this.startPageNumber = startPageNumber;
        this.countPages = countPages;
        this.password = password;
        this.renderComments = renderComments;
        this.renderHiddenPages = renderHiddenPages;
        this.defaultFontName = defaultFontName;
        this.fontsFolder = fontsFolder;
        this.folder = folder;
        this.storage = storage;
    }
}

/**
 * Request model for HtmlGetPdfFile operation.
 */
export class HtmlGetPdfFileRequest {
    /**
     * The file name.
     */
    public fileName: string;

    /**
     * Allows to render document comments. Not required if PDF document was created before.
     */
    public renderComments: boolean;

    /**
     * Enables rendering of document hidden pages, sheets or slides.
     */
    public renderHiddenPages: boolean;

    /**
     * The document password. Not required if PDF document was created before.
     */
    public password: string;

    /**
     * The name of the default font.
     */
    public defaultFontName: string;

    /**
     * The folder with custom fonts in storage.
     */
    public fontsFolder: string;

    /**
     * The folder which contains specified file in storage.
     */
    public folder: string;

    /**
     * The file storage which have to be used.
     */
    public storage: string;
    
    public constructor(fileName: string, renderComments?: boolean, renderHiddenPages?: boolean, password?: string, defaultFontName?: string, fontsFolder?: string, folder?: string, storage?: string) {        
        this.fileName = fileName;
        this.renderComments = renderComments;
        this.renderHiddenPages = renderHiddenPages;
        this.password = password;
        this.defaultFontName = defaultFontName;
        this.fontsFolder = fontsFolder;
        this.folder = folder;
        this.storage = storage;
    }
}

/**
 * Request model for HtmlGetPdfFileFromUrl operation.
 */
export class HtmlGetPdfFileFromUrlRequest {
    /**
     * The URL to retrieve document.
     */
    public url: string;

    /**
     * The file name.
     */
    public fileName: string;

    /**
     * The document password. Not required if PDF document was created before.
     */
    public password: string;

    /**
     * Allows to render document comments. Not required if PDF document was created before.
     */
    public renderComments: boolean;

    /**
     * Enables rendering of document hidden pages, sheets or slides.
     */
    public renderHiddenPages: boolean;

    /**
     * The name of the default font.
     */
    public defaultFontName: string;

    /**
     * The folder with custom fonts in storage.
     */
    public fontsFolder: string;

    /**
     * The folder which contains specified file in storage.
     */
    public folder: string;

    /**
     * The file storage which have to be used.
     */
    public storage: string;
    
    public constructor(url: string, fileName?: string, password?: string, renderComments?: boolean, renderHiddenPages?: boolean, defaultFontName?: string, fontsFolder?: string, folder?: string, storage?: string) {        
        this.url = url;
        this.fileName = fileName;
        this.password = password;
        this.renderComments = renderComments;
        this.renderHiddenPages = renderHiddenPages;
        this.defaultFontName = defaultFontName;
        this.fontsFolder = fontsFolder;
        this.folder = folder;
        this.storage = storage;
    }
}

/**
 * Request model for HtmlGetZipWithAttachmentPages operation.
 */
export class HtmlGetZipWithAttachmentPagesRequest {
    /**
     * The file name.
     */
    public fileName: string;

    /**
     * The attachment name.
     */
    public attachmentName: string;

    /**
     * The attachment page HTML resource path.
     */
    public resourcePath: string;

    /**
     * When this option enabled ResourcePath won't be added to resource reference in *.css and *.svg files.
     */
    public ignoreResourcePathInResources: boolean;

    /**
     * Whether to embed HTML resources or save them separate.
     */
    public embedResources: boolean;

    /**
     * Enables content (HTML, CSS and SVG) minification.
     */
    public enableMinification: boolean;

    /**
     * Indicates whether rendering will provide responsive web pages, that look well on different device types.
     */
    public enableResponsiveRendering: boolean;

    /**
     * Prevents adding fonts to the output HTML document.
     */
    public excludeFonts: boolean;

    /**
     * The starting document page number to render.
     */
    public startPageNumber: number;

    /**
     * The count of document pages to render.
     */
    public countPages: number;

    /**
     * Allows to render document comments.
     */
    public renderComments: boolean;

    /**
     * Enables rendering of document hidden pages, sheets or slides.
     */
    public renderHiddenPages: boolean;

    /**
     * The document password.
     */
    public password: string;

    /**
     * The attachment password.
     */
    public attachmentPassword: string;

    /**
     * The name of the default font.
     */
    public defaultFontName: string;

    /**
     * The folder with custom fonts in storage.
     */
    public fontsFolder: string;

    /**
     * The folder which contains specified file in storage.
     */
    public folder: string;

    /**
     * The file storage which have to be used.
     */
    public storage: string;
    
    public constructor(fileName: string, attachmentName: string, resourcePath?: string, ignoreResourcePathInResources?: boolean, embedResources?: boolean, enableMinification?: boolean, enableResponsiveRendering?: boolean, excludeFonts?: boolean, startPageNumber?: number, countPages?: number, renderComments?: boolean, renderHiddenPages?: boolean, password?: string, attachmentPassword?: string, defaultFontName?: string, fontsFolder?: string, folder?: string, storage?: string) {        
        this.fileName = fileName;
        this.attachmentName = attachmentName;
        this.resourcePath = resourcePath;
        this.ignoreResourcePathInResources = ignoreResourcePathInResources;
        this.embedResources = embedResources;
        this.enableMinification = enableMinification;
        this.enableResponsiveRendering = enableResponsiveRendering;
        this.excludeFonts = excludeFonts;
        this.startPageNumber = startPageNumber;
        this.countPages = countPages;
        this.renderComments = renderComments;
        this.renderHiddenPages = renderHiddenPages;
        this.password = password;
        this.attachmentPassword = attachmentPassword;
        this.defaultFontName = defaultFontName;
        this.fontsFolder = fontsFolder;
        this.folder = folder;
        this.storage = storage;
    }
}

/**
 * Request model for HtmlGetZipWithPages operation.
 */
export class HtmlGetZipWithPagesRequest {
    /**
     * The file name.
     */
    public fileName: string;

    /**
     * The HTML resource path.
     */
    public resourcePath: string;

    /**
     * When this option enabled ResourcePath won't be added to resource reference in *.css and *.svg files.
     */
    public ignoreResourcePathInResources: boolean;

    /**
     * Whether to embed HTML resources or save them separate.
     */
    public embedResources: boolean;

    /**
     * Enables content (HTML, CSS and SVG) minification.
     */
    public enableMinification: boolean;

    /**
     * Indicates whether rendering will provide responsive web pages, that look well on different device types.
     */
    public enableResponsiveRendering: boolean;

    /**
     * Prevents adding fonts to the output HTML document.
     */
    public excludeFonts: boolean;

    /**
     * The starting document page number to render.
     */
    public startPageNumber: number;

    /**
     * The count of document pages to render.
     */
    public countPages: number;

    /**
     * The document password.
     */
    public password: string;

    /**
     * Allows to render document comments.
     */
    public renderComments: boolean;

    /**
     * Enables rendering of document hidden pages, sheets or slides.
     */
    public renderHiddenPages: boolean;

    /**
     * The name of the default font.
     */
    public defaultFontName: string;

    /**
     * The folder with custom fonts in storage.
     */
    public fontsFolder: string;

    /**
     * The folder which contains specified file in storage.
     */
    public folder: string;

    /**
     * The file storage which have to be used.
     */
    public storage: string;
    
    public constructor(fileName: string, resourcePath?: string, ignoreResourcePathInResources?: boolean, embedResources?: boolean, enableMinification?: boolean, enableResponsiveRendering?: boolean, excludeFonts?: boolean, startPageNumber?: number, countPages?: number, password?: string, renderComments?: boolean, renderHiddenPages?: boolean, defaultFontName?: string, fontsFolder?: string, folder?: string, storage?: string) {        
        this.fileName = fileName;
        this.resourcePath = resourcePath;
        this.ignoreResourcePathInResources = ignoreResourcePathInResources;
        this.embedResources = embedResources;
        this.enableMinification = enableMinification;
        this.enableResponsiveRendering = enableResponsiveRendering;
        this.excludeFonts = excludeFonts;
        this.startPageNumber = startPageNumber;
        this.countPages = countPages;
        this.password = password;
        this.renderComments = renderComments;
        this.renderHiddenPages = renderHiddenPages;
        this.defaultFontName = defaultFontName;
        this.fontsFolder = fontsFolder;
        this.folder = folder;
        this.storage = storage;
    }
}

/**
 * Request model for HtmlTransformPages operation.
 */
export class HtmlTransformPagesRequest {
    /**
     * The file name.
     */
    public fileName: string;

    /**
     * The transformation options.
     */
    public transformOptions: TransformOptionsBase;

    /**
     * The folder which contains specified file in storage.
     */
    public folder: string;

    /**
     * The file storage which have to be used.
     */
    public storage: string;
    
    public constructor(fileName: string, transformOptions?: TransformOptionsBase, folder?: string, storage?: string) {        
        this.fileName = fileName;
        this.transformOptions = transformOptions;
        this.folder = folder;
        this.storage = storage;
    }
}

/**
 * Request model for ImageCreateAttachmentPagesCache operation.
 */
export class ImageCreateAttachmentPagesCacheRequest {
    /**
     * The file name.
     */
    public fileName: string;

    /**
     * The attachment name.
     */
    public attachmentName: string;

    /**
     * The image rendering options.
     */
    public imageOptions: ImageOptions;

    /**
     * The folder with custom fonts in storage.
     */
    public fontsFolder: string;

    /**
     * The folder which contains specified file in storage.
     */
    public folder: string;

    /**
     * The file storage which have to be used.
     */
    public storage: string;
    
    public constructor(fileName: string, attachmentName: string, imageOptions?: ImageOptions, fontsFolder?: string, folder?: string, storage?: string) {        
        this.fileName = fileName;
        this.attachmentName = attachmentName;
        this.imageOptions = imageOptions;
        this.fontsFolder = fontsFolder;
        this.folder = folder;
        this.storage = storage;
    }
}

/**
 * Request model for ImageCreatePagesCache operation.
 */
export class ImageCreatePagesCacheRequest {
    /**
     * The file name.
     */
    public fileName: string;

    /**
     * The image render options.
     */
    public imageOptions: ImageOptions;

    /**
     * The folder with custom fonts in storage.
     */
    public fontsFolder: string;

    /**
     * The folder which contains specified file in storage.
     */
    public folder: string;

    /**
     * The file storage which have to be used.
     */
    public storage: string;
    
    public constructor(fileName: string, imageOptions?: ImageOptions, fontsFolder?: string, folder?: string, storage?: string) {        
        this.fileName = fileName;
        this.imageOptions = imageOptions;
        this.fontsFolder = fontsFolder;
        this.folder = folder;
        this.storage = storage;
    }
}

/**
 * Request model for ImageCreatePagesCacheFromContent operation.
 */
export class ImageCreatePagesCacheFromContentRequest {
    /**
     * File contents.
     */
    public file: Buffer;

    /**
     * Image rendering options 'ImageOptions' as JSON or XML.
     */
    public imageOptions: Buffer;

    /**
     * The file name.
     */
    public fileName: string;

    /**
     * The folder with custom fonts in storage.
     */
    public fontsFolder: string;

    /**
     * The folder which contains specified file in storage.
     */
    public folder: string;

    /**
     * The file storage which have to be used.
     */
    public storage: string;
    
    public constructor(file: Buffer, imageOptions: Buffer, fileName?: string, fontsFolder?: string, folder?: string, storage?: string) {        
        this.file = file;
        this.imageOptions = imageOptions;
        this.fileName = fileName;
        this.fontsFolder = fontsFolder;
        this.folder = folder;
        this.storage = storage;
    }
}

/**
 * Request model for ImageCreatePagesCacheFromUrl operation.
 */
export class ImageCreatePagesCacheFromUrlRequest {
    /**
     * The URL to retrieve document.
     */
    public url: string;

    /**
     * The image rendering options.
     */
    public imageOptions: ImageOptions;

    /**
     * The file name.
     */
    public fileName: string;

    /**
     * The folder with custom fonts in storage.
     */
    public fontsFolder: string;

    /**
     * The folder which contains specified file in storage.
     */
    public folder: string;

    /**
     * The file storage which have to be used.
     */
    public storage: string;
    
    public constructor(url: string, imageOptions?: ImageOptions, fileName?: string, fontsFolder?: string, folder?: string, storage?: string) {        
        this.url = url;
        this.imageOptions = imageOptions;
        this.fileName = fileName;
        this.fontsFolder = fontsFolder;
        this.folder = folder;
        this.storage = storage;
    }
}

/**
 * Request model for ImageCreatePdfFile operation.
 */
export class ImageCreatePdfFileRequest {
    /**
     * The file name.
     */
    public fileName: string;

    /**
     * The PDF file rendering options.
     */
    public pdfFileOptions: PdfFileOptions;

    /**
     * The folder with custom fonts in storage.
     */
    public fontsFolder: string;

    /**
     * The folder which contains specified file in storage.
     */
    public folder: string;

    /**
     * The file storage which have to be used.
     */
    public storage: string;
    
    public constructor(fileName: string, pdfFileOptions?: PdfFileOptions, fontsFolder?: string, folder?: string, storage?: string) {        
        this.fileName = fileName;
        this.pdfFileOptions = pdfFileOptions;
        this.fontsFolder = fontsFolder;
        this.folder = folder;
        this.storage = storage;
    }
}

/**
 * Request model for ImageCreatePdfFileFromContent operation.
 */
export class ImageCreatePdfFileFromContentRequest {
    /**
     * File contents.
     */
    public file: Buffer;

    /**
     * PDF rendering options 'PdfFileOptions' as JSON or XML.
     */
    public pdfFileOptions: Buffer;

    /**
     * The file name.
     */
    public fileName: string;

    /**
     * The folder with custom fonts in storage.
     */
    public fontsFolder: string;

    /**
     * The folder which contains specified file in storage.
     */
    public folder: string;

    /**
     * The file storage which have to be used.
     */
    public storage: string;
    
    public constructor(file: Buffer, pdfFileOptions: Buffer, fileName?: string, fontsFolder?: string, folder?: string, storage?: string) {        
        this.file = file;
        this.pdfFileOptions = pdfFileOptions;
        this.fileName = fileName;
        this.fontsFolder = fontsFolder;
        this.folder = folder;
        this.storage = storage;
    }
}

/**
 * Request model for ImageCreatePdfFileFromUrl operation.
 */
export class ImageCreatePdfFileFromUrlRequest {
    /**
     * The URL to retrieve document.
     */
    public url: string;

    /**
     * The PDF file rendering options.
     */
    public pdfFileOptions: PdfFileOptions;

    /**
     * The file name.
     */
    public fileName: string;

    /**
     * The folder with custom fonts in storage.
     */
    public fontsFolder: string;

    /**
     * The folder which contains specified file in storage.
     */
    public folder: string;

    /**
     * The file storage which have to be used.
     */
    public storage: string;
    
    public constructor(url: string, pdfFileOptions?: PdfFileOptions, fileName?: string, fontsFolder?: string, folder?: string, storage?: string) {        
        this.url = url;
        this.pdfFileOptions = pdfFileOptions;
        this.fileName = fileName;
        this.fontsFolder = fontsFolder;
        this.folder = folder;
        this.storage = storage;
    }
}

/**
 * Request model for ImageDeleteAttachmentPagesCache operation.
 */
export class ImageDeleteAttachmentPagesCacheRequest {
    /**
     * The file name.
     */
    public fileName: string;

    /**
     * Name of the attachment.
     */
    public attachmentName: string;

    /**
     * The folder which contains specified file in storage.
     */
    public folder: string;

    /**
     * The file storage which have to be used.
     */
    public storage: string;
    
    public constructor(fileName: string, attachmentName: string, folder?: string, storage?: string) {        
        this.fileName = fileName;
        this.attachmentName = attachmentName;
        this.folder = folder;
        this.storage = storage;
    }
}

/**
 * Request model for ImageDeletePagesCache operation.
 */
export class ImageDeletePagesCacheRequest {
    /**
     * The file name.
     */
    public fileName: string;

    /**
     * The folder which contains specified file in storage.
     */
    public folder: string;

    /**
     * The file storage which have to be used.
     */
    public storage: string;
    
    public constructor(fileName: string, folder?: string, storage?: string) {        
        this.fileName = fileName;
        this.folder = folder;
        this.storage = storage;
    }
}

/**
 * Request model for ImageGetAttachment operation.
 */
export class ImageGetAttachmentRequest {
    /**
     * The file name.
     */
    public fileName: string;

    /**
     * Name of the attachment.
     */
    public attachmentName: string;

    /**
     * The document password.
     */
    public password: string;

    /**
     * The folder which contains specified file in storage.
     */
    public folder: string;

    /**
     * The file storage which have to be used.
     */
    public storage: string;
    
    public constructor(fileName: string, attachmentName: string, password?: string, folder?: string, storage?: string) {        
        this.fileName = fileName;
        this.attachmentName = attachmentName;
        this.password = password;
        this.folder = folder;
        this.storage = storage;
    }
}

/**
 * Request model for ImageGetAttachmentInfo operation.
 */
export class ImageGetAttachmentInfoRequest {
    /**
     * The file name.
     */
    public fileName: string;

    /**
     * The attachment name.
     */
    public attachmentName: string;

    /**
     * When this options is set to true text contained in document will be extracted and returned along with other information.
     */
    public extractText: boolean;

    /**
     * The document password.
     */
    public password: string;

    /**
     * The attachment password.
     */
    public attachmentPassword: string;

    /**
     * The folder which contains specified file in storage.
     */
    public folder: string;

    /**
     * The file storage which have to be used.
     */
    public storage: string;
    
    public constructor(fileName: string, attachmentName: string, extractText?: boolean, password?: string, attachmentPassword?: string, folder?: string, storage?: string) {        
        this.fileName = fileName;
        this.attachmentName = attachmentName;
        this.extractText = extractText;
        this.password = password;
        this.attachmentPassword = attachmentPassword;
        this.folder = folder;
        this.storage = storage;
    }
}

/**
 * Request model for ImageGetAttachmentInfoWithOptions operation.
 */
export class ImageGetAttachmentInfoWithOptionsRequest {
    /**
     * The file name.
     */
    public fileName: string;

    /**
     * The attachment name.
     */
    public attachmentName: string;

    /**
     * The rendering options.
     */
    public documentInfoOptions: DocumentInfoOptions;

    /**
     * The folder which contains specified file in storage.
     */
    public folder: string;

    /**
     * The file storage which have to be used.
     */
    public storage: string;
    
    public constructor(fileName: string, attachmentName: string, documentInfoOptions?: DocumentInfoOptions, folder?: string, storage?: string) {        
        this.fileName = fileName;
        this.attachmentName = attachmentName;
        this.documentInfoOptions = documentInfoOptions;
        this.folder = folder;
        this.storage = storage;
    }
}

/**
 * Request model for ImageGetAttachmentPage operation.
 */
export class ImageGetAttachmentPageRequest {
    /**
     * The file name.
     */
    public fileName: string;

    /**
     * Name of the attachment.
     */
    public attachmentName: string;

    /**
     * The attachment page number.
     */
    public pageNumber: number;

    /**
     * The image format (jpg, png or bmp). Default value is png.
     */
    public format: string;

    /**
     * The image width.
     */
    public width: number;

    /**
     * The image height.
     */
    public height: number;

    /**
     * The image quality for jpg format. Default value is 90.
     */
    public quality: number;

    /**
     * The document password.
     */
    public password: string;

    /**
     * The attachment password.
     */
    public attachmentPassword: string;

    /**
     * When this options is set to true text contained in document will be extracted and returned along with other information.
     */
    public extractText: boolean;

    /**
     * Allows to render document comments.
     */
    public renderComments: boolean;

    /**
     * Enables rendering of document hidden pages, sheets or slides.
     */
    public renderHiddenPages: boolean;

    /**
     * The name of the default font.
     */
    public defaultFontName: string;

    /**
     * The folder with custom fonts in storage.
     */
    public fontsFolder: string;

    /**
     * The folder which contains specified file in storage.
     */
    public folder: string;

    /**
     * The file storage which have to be used.
     */
    public storage: string;
    
    public constructor(fileName: string, attachmentName: string, pageNumber: number, format?: string, width?: number, height?: number, quality?: number, password?: string, attachmentPassword?: string, extractText?: boolean, renderComments?: boolean, renderHiddenPages?: boolean, defaultFontName?: string, fontsFolder?: string, folder?: string, storage?: string) {        
        this.fileName = fileName;
        this.attachmentName = attachmentName;
        this.pageNumber = pageNumber;
        this.format = format;
        this.width = width;
        this.height = height;
        this.quality = quality;
        this.password = password;
        this.attachmentPassword = attachmentPassword;
        this.extractText = extractText;
        this.renderComments = renderComments;
        this.renderHiddenPages = renderHiddenPages;
        this.defaultFontName = defaultFontName;
        this.fontsFolder = fontsFolder;
        this.folder = folder;
        this.storage = storage;
    }
}

/**
 * Request model for ImageGetAttachmentPages operation.
 */
export class ImageGetAttachmentPagesRequest {
    /**
     * The file name.
     */
    public fileName: string;

    /**
     * The attachment name.
     */
    public attachmentName: string;

    /**
     * The image format (jpg, png or bmp). Default value is png.
     */
    public format: string;

    /**
     * The image width.
     */
    public width: number;

    /**
     * The image height.
     */
    public height: number;

    /**
     * The image quality for jpg format. Default value is 90.
     */
    public quality: number;

    /**
     * The starting document page number to render.
     */
    public startPageNumber: number;

    /**
     * The count of document pages to render.
     */
    public countPages: number;

    /**
     * Allows to render document comments.
     */
    public renderComments: boolean;

    /**
     * Enables rendering of document hidden pages, sheets or slides.
     */
    public renderHiddenPages: boolean;

    /**
     * The document password.
     */
    public password: string;

    /**
     * The attachment password.
     */
    public attachmentPassword: string;

    /**
     * When this options is set to true text contained in document will be extracted and returned along with other information.
     */
    public extractText: boolean;

    /**
     * The name of the default font.
     */
    public defaultFontName: string;

    /**
     * The folder with custom fonts in storage.
     */
    public fontsFolder: string;

    /**
     * The folder which contains specified file in storage.
     */
    public folder: string;

    /**
     * The file storage which have to be used.
     */
    public storage: string;
    
    public constructor(fileName: string, attachmentName: string, format?: string, width?: number, height?: number, quality?: number, startPageNumber?: number, countPages?: number, renderComments?: boolean, renderHiddenPages?: boolean, password?: string, attachmentPassword?: string, extractText?: boolean, defaultFontName?: string, fontsFolder?: string, folder?: string, storage?: string) {        
        this.fileName = fileName;
        this.attachmentName = attachmentName;
        this.format = format;
        this.width = width;
        this.height = height;
        this.quality = quality;
        this.startPageNumber = startPageNumber;
        this.countPages = countPages;
        this.renderComments = renderComments;
        this.renderHiddenPages = renderHiddenPages;
        this.password = password;
        this.attachmentPassword = attachmentPassword;
        this.extractText = extractText;
        this.defaultFontName = defaultFontName;
        this.fontsFolder = fontsFolder;
        this.folder = folder;
        this.storage = storage;
    }
}

/**
 * Request model for ImageGetAttachments operation.
 */
export class ImageGetAttachmentsRequest {
    /**
     * The file name.
     */
    public fileName: string;

    /**
     * The document password.
     */
    public password: string;

    /**
     * The folder which contains specified file in storage.
     */
    public folder: string;

    /**
     * The file storage which have to be used.
     */
    public storage: string;
    
    public constructor(fileName: string, password?: string, folder?: string, storage?: string) {        
        this.fileName = fileName;
        this.password = password;
        this.folder = folder;
        this.storage = storage;
    }
}

/**
 * Request model for ImageGetDocumentInfo operation.
 */
export class ImageGetDocumentInfoRequest {
    /**
     * The file name.
     */
    public fileName: string;

    /**
     * The document password.
     */
    public password: string;

    /**
     * When this options is set to true text contained in document will be extracted and returned along with other information.
     */
    public extractText: boolean;

    /**
     * Allows to render document comments. Not required if PDF document was created before.
     */
    public renderComments: boolean;

    /**
     * Enables rendering of document hidden pages, sheets or slides.
     */
    public renderHiddenPages: boolean;

    /**
     * The folder which contains specified file in storage.
     */
    public folder: string;

    /**
     * The file storage which have to be used.
     */
    public storage: string;
    
    public constructor(fileName: string, password?: string, extractText?: boolean, renderComments?: boolean, renderHiddenPages?: boolean, folder?: string, storage?: string) {        
        this.fileName = fileName;
        this.password = password;
        this.extractText = extractText;
        this.renderComments = renderComments;
        this.renderHiddenPages = renderHiddenPages;
        this.folder = folder;
        this.storage = storage;
    }
}

/**
 * Request model for ImageGetDocumentInfoFromContent operation.
 */
export class ImageGetDocumentInfoFromContentRequest {
    /**
     * File contents.
     */
    public file: Buffer;

    /**
     * Document info options 'DocumentInfoOptions' as JSON or XML.
     */
    public documentInfoOptions: Buffer;

    /**
     * The document name.
     */
    public fileName: string;

    /**
     * The folder which contains specified file in storage.
     */
    public folder: string;

    /**
     * The file storage which have to be used.
     */
    public storage: string;
    
    public constructor(file: Buffer, documentInfoOptions: Buffer, fileName?: string, folder?: string, storage?: string) {        
        this.file = file;
        this.documentInfoOptions = documentInfoOptions;
        this.fileName = fileName;
        this.folder = folder;
        this.storage = storage;
    }
}

/**
 * Request model for ImageGetDocumentInfoFromUrl operation.
 */
export class ImageGetDocumentInfoFromUrlRequest {
    /**
     * The URL to retrieve document.
     */
    public url: string;

    /**
     * The file name.
     */
    public fileName: string;

    /**
     * The document password.
     */
    public password: string;

    /**
     * When this options is set to true text contained in document will be extracted and returned along with other information.
     */
    public extractText: boolean;

    /**
     * Allows to render document comments. Not required if PDF document was created before.
     */
    public renderComments: boolean;

    /**
     * Enables rendering of document hidden pages, sheets or slides.
     */
    public renderHiddenPages: boolean;

    /**
     * The folder which contains specified file in storage.
     */
    public folder: string;

    /**
     * The file storage which have to be used.
     */
    public storage: string;
    
    public constructor(url: string, fileName?: string, password?: string, extractText?: boolean, renderComments?: boolean, renderHiddenPages?: boolean, folder?: string, storage?: string) {        
        this.url = url;
        this.fileName = fileName;
        this.password = password;
        this.extractText = extractText;
        this.renderComments = renderComments;
        this.renderHiddenPages = renderHiddenPages;
        this.folder = folder;
        this.storage = storage;
    }
}

/**
 * Request model for ImageGetDocumentInfoFromUrlWithOptions operation.
 */
export class ImageGetDocumentInfoFromUrlWithOptionsRequest {
    /**
     * The URL to retrieve document.
     */
    public url: string;

    /**
     * The rendering options.
     */
    public documentInfoOptions: DocumentInfoOptions;

    /**
     * The file name.
     */
    public fileName: string;

    /**
     * The folder which contains specified file in storage.
     */
    public folder: string;

    /**
     * The file storage which have to be used.
     */
    public storage: string;
    
    public constructor(url: string, documentInfoOptions?: DocumentInfoOptions, fileName?: string, folder?: string, storage?: string) {        
        this.url = url;
        this.documentInfoOptions = documentInfoOptions;
        this.fileName = fileName;
        this.folder = folder;
        this.storage = storage;
    }
}

/**
 * Request model for ImageGetDocumentInfoWithOptions operation.
 */
export class ImageGetDocumentInfoWithOptionsRequest {
    /**
     * The file name.
     */
    public fileName: string;

    /**
     * The rendering options.
     */
    public documentInfoOptions: DocumentInfoOptions;

    /**
     * The folder which contains specified file in storage.
     */
    public folder: string;

    /**
     * The file storage which have to be used.
     */
    public storage: string;
    
    public constructor(fileName: string, documentInfoOptions?: DocumentInfoOptions, folder?: string, storage?: string) {        
        this.fileName = fileName;
        this.documentInfoOptions = documentInfoOptions;
        this.folder = folder;
        this.storage = storage;
    }
}

/**
 * Request model for ImageGetPage operation.
 */
export class ImageGetPageRequest {
    /**
     * The file name.
     */
    public fileName: string;

    /**
     * The page number.
     */
    public pageNumber: number;

    /**
     * The image format (jpg, png or bmp). Default value is png.
     */
    public format: string;

    /**
     * The image width.
     */
    public width: number;

    /**
     * The image height.
     */
    public height: number;

    /**
     * The image quality in JPG format. Valid values are between 1 and 100. Default value is 90.
     */
    public quality: number;

    /**
     * The document password.
     */
    public password: string;

    /**
     * When this options is set to true text contained in document will be extracted and returned along with other information.
     */
    public extractText: boolean;

    /**
     * Allows to render document comments.
     */
    public renderComments: boolean;

    /**
     * Enables rendering of document hidden pages, sheets or slides.
     */
    public renderHiddenPages: boolean;

    /**
     * The name of the default font.
     */
    public defaultFontName: string;

    /**
     * The folder with custom fonts in storage.
     */
    public fontsFolder: string;

    /**
     * The folder which contains specified file in storage.
     */
    public folder: string;

    /**
     * The file storage which have to be used.
     */
    public storage: string;
    
    public constructor(fileName: string, pageNumber: number, format?: string, width?: number, height?: number, quality?: number, password?: string, extractText?: boolean, renderComments?: boolean, renderHiddenPages?: boolean, defaultFontName?: string, fontsFolder?: string, folder?: string, storage?: string) {        
        this.fileName = fileName;
        this.pageNumber = pageNumber;
        this.format = format;
        this.width = width;
        this.height = height;
        this.quality = quality;
        this.password = password;
        this.extractText = extractText;
        this.renderComments = renderComments;
        this.renderHiddenPages = renderHiddenPages;
        this.defaultFontName = defaultFontName;
        this.fontsFolder = fontsFolder;
        this.folder = folder;
        this.storage = storage;
    }
}

/**
 * Request model for ImageGetPages operation.
 */
export class ImageGetPagesRequest {
    /**
     * The file name.
     */
    public fileName: string;

    /**
     * The image format (jpg, png or bmp). Default value is png.
     */
    public format: string;

    /**
     * The image width.
     */
    public width: number;

    /**
     * The image height.
     */
    public height: number;

    /**
     * The image quality for jpg format. Default value is 90.
     */
    public quality: number;

    /**
     * The starting document page number to render.
     */
    public startPageNumber: number;

    /**
     * The count of document pages to render.
     */
    public countPages: number;

    /**
     * The document password.
     */
    public password: string;

    /**
     * When this options is set to true text contained in document will be extracted and returned along with other information.
     */
    public extractText: boolean;

    /**
     * Allows to render document comments.
     */
    public renderComments: boolean;

    /**
     * Enables rendering of document hidden pages, sheets or slides.
     */
    public renderHiddenPages: boolean;

    /**
     * The name of the default font.
     */
    public defaultFontName: string;

    /**
     * The folder with custom fonts in storage.
     */
    public fontsFolder: string;

    /**
     * The folder which contains specified file in storage.
     */
    public folder: string;

    /**
     * The file storage which have to be used.
     */
    public storage: string;
    
    public constructor(fileName: string, format?: string, width?: number, height?: number, quality?: number, startPageNumber?: number, countPages?: number, password?: string, extractText?: boolean, renderComments?: boolean, renderHiddenPages?: boolean, defaultFontName?: string, fontsFolder?: string, folder?: string, storage?: string) {        
        this.fileName = fileName;
        this.format = format;
        this.width = width;
        this.height = height;
        this.quality = quality;
        this.startPageNumber = startPageNumber;
        this.countPages = countPages;
        this.password = password;
        this.extractText = extractText;
        this.renderComments = renderComments;
        this.renderHiddenPages = renderHiddenPages;
        this.defaultFontName = defaultFontName;
        this.fontsFolder = fontsFolder;
        this.folder = folder;
        this.storage = storage;
    }
}

/**
 * Request model for ImageGetPagesFromUrl operation.
 */
export class ImageGetPagesFromUrlRequest {
    /**
     * The URL to retrieve document.
     */
    public url: string;

    /**
     * The file name.
     */
    public fileName: string;

    /**
     * The image format (jpg, png or bmp). Default value is png.
     */
    public format: string;

    /**
     * The image width.
     */
    public width: number;

    /**
     * The image height.
     */
    public height: number;

    /**
     * The image quality for jpg format. Default value is 90.
     */
    public quality: number;

    /**
     * The starting document page number to render.
     */
    public startPageNumber: number;

    /**
     * The count of document pages to render.
     */
    public countPages: number;

    /**
     * The document password.
     */
    public password: string;

    /**
     * When this options is set to true text contained in document will be extracted and returned along with other information.
     */
    public extractText: boolean;

    /**
     * Allows to render document comments.
     */
    public renderComments: boolean;

    /**
     * Enables rendering of document hidden pages, sheets or slides.
     */
    public renderHiddenPages: boolean;

    /**
     * The name of the default font.
     */
    public defaultFontName: string;

    /**
     * The folder with custom fonts in storage.
     */
    public fontsFolder: string;

    /**
     * The folder which contains specified file in storage.
     */
    public folder: string;

    /**
     * The file storage which have to be used.
     */
    public storage: string;
    
    public constructor(url: string, fileName?: string, format?: string, width?: number, height?: number, quality?: number, startPageNumber?: number, countPages?: number, password?: string, extractText?: boolean, renderComments?: boolean, renderHiddenPages?: boolean, defaultFontName?: string, fontsFolder?: string, folder?: string, storage?: string) {        
        this.url = url;
        this.fileName = fileName;
        this.format = format;
        this.width = width;
        this.height = height;
        this.quality = quality;
        this.startPageNumber = startPageNumber;
        this.countPages = countPages;
        this.password = password;
        this.extractText = extractText;
        this.renderComments = renderComments;
        this.renderHiddenPages = renderHiddenPages;
        this.defaultFontName = defaultFontName;
        this.fontsFolder = fontsFolder;
        this.folder = folder;
        this.storage = storage;
    }
}

/**
 * Request model for ImageGetPdfFile operation.
 */
export class ImageGetPdfFileRequest {
    /**
     * The file name.
     */
    public fileName: string;

    /**
     * Allows to render document comments. Not required if PDF document was created before.
     */
    public renderComments: boolean;

    /**
     * Enables rendering of document hidden pages, sheets or slides.
     */
    public renderHiddenPages: boolean;

    /**
     * The document password. Not required if PDF document was created before.
     */
    public password: string;

    /**
     * The name of the default font.
     */
    public defaultFontName: string;

    /**
     * The folder with custom fonts in storage.
     */
    public fontsFolder: string;

    /**
     * The folder which contains specified file in storage.
     */
    public folder: string;

    /**
     * The file storage which have to be used.
     */
    public storage: string;
    
    public constructor(fileName: string, renderComments?: boolean, renderHiddenPages?: boolean, password?: string, defaultFontName?: string, fontsFolder?: string, folder?: string, storage?: string) {        
        this.fileName = fileName;
        this.renderComments = renderComments;
        this.renderHiddenPages = renderHiddenPages;
        this.password = password;
        this.defaultFontName = defaultFontName;
        this.fontsFolder = fontsFolder;
        this.folder = folder;
        this.storage = storage;
    }
}

/**
 * Request model for ImageGetPdfFileFromUrl operation.
 */
export class ImageGetPdfFileFromUrlRequest {
    /**
     * The URL to retrieve document.
     */
    public url: string;

    /**
     * The file name.
     */
    public fileName: string;

    /**
     * The document password. Not required if PDF document was created before.
     */
    public password: string;

    /**
     * Allows to render document comments. Not required if PDF document was created before.
     */
    public renderComments: boolean;

    /**
     * Enables rendering of document hidden pages, sheets or slides.
     */
    public renderHiddenPages: boolean;

    /**
     * The name of the default font.
     */
    public defaultFontName: string;

    /**
     * The folder with custom fonts in storage.
     */
    public fontsFolder: string;

    /**
     * The folder which contains specified file in storage.
     */
    public folder: string;

    /**
     * The file storage which have to be used.
     */
    public storage: string;
    
    public constructor(url: string, fileName?: string, password?: string, renderComments?: boolean, renderHiddenPages?: boolean, defaultFontName?: string, fontsFolder?: string, folder?: string, storage?: string) {        
        this.url = url;
        this.fileName = fileName;
        this.password = password;
        this.renderComments = renderComments;
        this.renderHiddenPages = renderHiddenPages;
        this.defaultFontName = defaultFontName;
        this.fontsFolder = fontsFolder;
        this.folder = folder;
        this.storage = storage;
    }
}

/**
 * Request model for ImageGetZipWithAttachmentPages operation.
 */
export class ImageGetZipWithAttachmentPagesRequest {
    /**
     * The file name.
     */
    public fileName: string;

    /**
     * The attachment name.
     */
    public attachmentName: string;

    /**
     * The image format (jpg, png or bmp). Default value is png.
     */
    public format: string;

    /**
     * The image width.
     */
    public width: number;

    /**
     * The image height.
     */
    public height: number;

    /**
     * The image quality for jpg format. Default value is 90.
     */
    public quality: number;

    /**
     * The starting document page number to render.
     */
    public startPageNumber: number;

    /**
     * The count of document pages to render.
     */
    public countPages: number;

    /**
     * Allows to render document comments.
     */
    public renderComments: boolean;

    /**
     * Enables rendering of document hidden pages, sheets or slides.
     */
    public renderHiddenPages: boolean;

    /**
     * The document password.
     */
    public password: string;

    /**
     * The attachment password.
     */
    public attachmentPassword: string;

    /**
     * When this options is set to true text contained in document will be extracted and returned along with other information.
     */
    public extractText: boolean;

    /**
     * The name of the default font.
     */
    public defaultFontName: string;

    /**
     * The folder with custom fonts in storage.
     */
    public fontsFolder: string;

    /**
     * The folder which contains specified file in storage.
     */
    public folder: string;

    /**
     * The file storage which have to be used.
     */
    public storage: string;
    
    public constructor(fileName: string, attachmentName: string, format?: string, width?: number, height?: number, quality?: number, startPageNumber?: number, countPages?: number, renderComments?: boolean, renderHiddenPages?: boolean, password?: string, attachmentPassword?: string, extractText?: boolean, defaultFontName?: string, fontsFolder?: string, folder?: string, storage?: string) {        
        this.fileName = fileName;
        this.attachmentName = attachmentName;
        this.format = format;
        this.width = width;
        this.height = height;
        this.quality = quality;
        this.startPageNumber = startPageNumber;
        this.countPages = countPages;
        this.renderComments = renderComments;
        this.renderHiddenPages = renderHiddenPages;
        this.password = password;
        this.attachmentPassword = attachmentPassword;
        this.extractText = extractText;
        this.defaultFontName = defaultFontName;
        this.fontsFolder = fontsFolder;
        this.folder = folder;
        this.storage = storage;
    }
}

/**
 * Request model for ImageGetZipWithPages operation.
 */
export class ImageGetZipWithPagesRequest {
    /**
     * The file name.
     */
    public fileName: string;

    /**
     * The image format (jpg, png or bmp). Default value is png.
     */
    public format: string;

    /**
     * The image width.
     */
    public width: number;

    /**
     * The image height.
     */
    public height: number;

    /**
     * The image quality for jpg format. Default value is 90.
     */
    public quality: number;

    /**
     * The starting document page number to render.
     */
    public startPageNumber: number;

    /**
     * The count of document pages to render.
     */
    public countPages: number;

    /**
     * The document password.
     */
    public password: string;

    /**
     * When this options is set to true text contained in document will be extracted and returned along with other information.
     */
    public extractText: boolean;

    /**
     * Allows to render document comments.
     */
    public renderComments: boolean;

    /**
     * Enables rendering of document hidden pages, sheets or slides.
     */
    public renderHiddenPages: boolean;

    /**
     * The name of the default font.
     */
    public defaultFontName: string;

    /**
     * The folder with custom fonts in storage.
     */
    public fontsFolder: string;

    /**
     * The folder which contains specified file in storage.
     */
    public folder: string;

    /**
     * The file storage which have to be used.
     */
    public storage: string;
    
    public constructor(fileName: string, format?: string, width?: number, height?: number, quality?: number, startPageNumber?: number, countPages?: number, password?: string, extractText?: boolean, renderComments?: boolean, renderHiddenPages?: boolean, defaultFontName?: string, fontsFolder?: string, folder?: string, storage?: string) {        
        this.fileName = fileName;
        this.format = format;
        this.width = width;
        this.height = height;
        this.quality = quality;
        this.startPageNumber = startPageNumber;
        this.countPages = countPages;
        this.password = password;
        this.extractText = extractText;
        this.renderComments = renderComments;
        this.renderHiddenPages = renderHiddenPages;
        this.defaultFontName = defaultFontName;
        this.fontsFolder = fontsFolder;
        this.folder = folder;
        this.storage = storage;
    }
}

/**
 * Request model for ImageTransformPages operation.
 */
export class ImageTransformPagesRequest {
    /**
     * The file name.
     */
    public fileName: string;

    /**
     * The transformation options.
     */
    public transformOptions: TransformOptionsBase;

    /**
     * The folder which contains specified file in storage.
     */
    public folder: string;

    /**
     * The file storage which have to be used.
     */
    public storage: string;
    
    public constructor(fileName: string, transformOptions?: TransformOptionsBase, folder?: string, storage?: string) {        
        this.fileName = fileName;
        this.transformOptions = transformOptions;
        this.folder = folder;
        this.storage = storage;
    }
}
