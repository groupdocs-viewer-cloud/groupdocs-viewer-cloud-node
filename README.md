# GroupDocs.Viewer Cloud SDK for Node.js
This repository contains GroupDocs.Viewer Cloud SDK for Node.js source code. This SDK allows you to work with GroupDocs.Viewer Cloud REST APIs in your Node.js applications, enabling you to render documents in HTML, image, or PDF formats, with the flexibility to render the whole document or a custom range of pages.

## Installation

A package `groupdocs-viewer-cloud` is available at [npmjs.com](https://www.npmjs.com/package/groupdocs-viewer-cloud). You can install it with:

```shell
npm install groupdocs-viewer-cloud
```

## Getting Started

Below is an example demonstrating how to preview a document using `ConvertAndDownload` with GroupDocs.Viewer Cloud SDK for Node.js:

```js
const GroupDocs = require('groupdocs-viewer-cloud');
const fs = require('fs');

// Get your appSid and appKey at https://dashboard.groupdocs.cloud
const appSid = "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX";
const appKey = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";

const configuration = new GroupDocs.Configuration(appSid, appKey);
const viewApi = new GroupDocs.ViewApi(configuration);

const format = "jpg";
const fileStream = fs.createReadStream("myfile.docx");
const request = new GroupDocs.ConvertAndDownloadRequest(format, fileStream);

viewApi.convertAndDownload(request)
    .then((result) => {
        fs.writeFileSync("myfile.jpg", result);
        console.log("Document converted and downloaded as JPG.");
    })
    .catch((error) => {
        console.log("Error: " + error.message);
    });
```

Below is an example demonstrating how to upload a document, render it, and download the result using GroupDocs.Viewer Cloud SDK for Node.js:

```js
const GroupDocs = require('groupdocs-viewer-cloud');
const fs = require('fs');

const appSid = "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX";
const appKey = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";

const configuration = new GroupDocs.Configuration(appSid, appKey);

// Upload a file to cloud storage
const fileApi = new GroupDocs.FileApi(configuration);
const uploadRequest = new GroupDocs.UploadFileRequest("myfile.docx", fs.createReadStream("myfile.docx"));
fileApi.uploadFile(uploadRequest)
    .then(() => {
        // Render it to HTML
        const viewApi = new GroupDocs.ViewApi(configuration);
        const viewOptions = new GroupDocs.ViewOptions({
            fileInfo: { filePath: "myfile.docx" },
            viewFormat: "HTML",
            outputPath: "myfile.html"
        });
        const createViewRequest = new GroupDocs.CreateViewRequest(viewOptions);
        return viewApi.createView(createViewRequest);
    })
    .then(() => {
        // Download the result
        const downloadRequest = new GroupDocs.DownloadFileRequest("myfile.html");
        return fileApi.downloadFile(downloadRequest);
    })
    .then((result) => {
        fs.writeFileSync("myfile.html", result);
        console.log("File rendered and downloaded successfully.");
    })
    .catch((error) => {
        console.log("Error: " + error.message);
    });
```

Or compile and run the same written in TypeScript:

```ts
import { Configuration, FileApi, ViewApi, UploadFileRequest, ViewOptions, CreateViewRequest, DownloadFileRequest, ConvertAndDownloadRequest } from "groupdocs-viewer-cloud";
import * as fs from "fs";

const appSid: string = "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX";
const appKey: string = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";

const configuration = new Configuration(appSid, appKey);

// Convert and download
const viewApi = new ViewApi(configuration);
const format = "jpg";
const fileStream = fs.createReadStream("myfile.docx");
const request = new ConvertAndDownloadRequest(format, fileStream);

viewApi.convertAndDownload(request)
    .then((result) => {
        fs.writeFileSync("myfile.jpg", result);
        console.log("Document converted and downloaded as JPG.");
    })
    .catch((error) => {
        console.log("Error: " + error.message);
    });

// Upload, render, and download
const fileApi = new FileApi(configuration);
const uploadRequest = new UploadFileRequest("myfile.docx", fs.createReadStream("myfile.docx"));
fileApi.uploadFile(uploadRequest)
    .then(() => {
        const viewOptions = new ViewOptions({
            fileInfo: { filePath: "myfile.docx" },
            viewFormat: "HTML",
            outputPath: "myfile.html"
        });
        const createViewRequest = new CreateViewRequest(viewOptions);
        return viewApi.createView(createViewRequest);
    })
    .then(() => {
        const downloadRequest = new DownloadFileRequest("myfile.html");
        return fileApi.downloadFile(downloadRequest);
    })
    .then((result) => {
        fs.writeFileSync("myfile.html", result);
        console.log("File rendered and downloaded successfully.");
    })
    .catch((error) => {
        console.log("Error: " + error.message);
    });
```

## Licensing
GroupDocs.Viewer Cloud Node.js SDK is licensed under [MIT License](LICENSE).

## Resources
+ [**Website**](https://www.groupdocs.cloud)
+ [**Product Home**](https://products.groupdocs.cloud/viewer)
+ [**Documentation**](https://docs.groupdocs.cloud/display/viewercloud/Home)
+ [**Free Support Forum**](https://forum.groupdocs.cloud/c/viewer)
+ [**Blog**](https://blog.groupdocs.cloud/category/viewer)

## Contact Us
Your feedback is very important to us. Please feel free to contact us using