# GroupDocs.Viewer Cloud Node.js SDK
Node.js module for communicating with the GroupDocs.Viewer Cloud API

## Installation

A package `groupdocs-viewer-cloud` is available at [npmjs.com](https://www.npmjs.com/package/groupdocs-viewer-cloud). You can install it with:

```shell
npm install groupdocs-viewer-cloud
```    

## Getting Started

Please follow the aforementioned installation procedure and then run the following JavaScript code:

```js
// load the module
var GroupDocs = require('groupdocs-viewer-cloud');

// get your appSid and appKey at https://dashboard.groupdocs.cloud (free registration is required).
var appSid = "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX";
var appKey = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";

// construct ViewerApi
var infoApi = GroupDocs.InfoApi.fromKeys(appSid, appKey);

// retrieve supported file-formats
infoApi.getSupportedFileFormats()
    .then(function (response) {
        console.log("Supported file-formats:")
        response.formats.forEach(function (format) {
            console.log(format.fileFormat + " (" + format.extension + ")");
        });
    })
    .catch(function (error) {
        console.log("Error: " + error.message)
    });
```

Or compile and run same written in TypeScript:

```ts
// load the module
import { InfoApi } from "groupdocs-viewer-cloud";

// get your appSid and appKey at https://dashboard.groupdocs.cloud (free registration is required).
const appSid: string = "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX";
const appKey: string = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";

// construct ViewerApi
const infoApi: InfoApi = InfoApi.fromKeys(appSid, appKey);

// retrieve supported file-formats
infoApi.getSupportedFileFormats()
    .then((result) => {
        console.log("Supported file-formats:");
        result.formats.forEach((format) => {
            console.log(format.fileFormat + " (" + format.extension + ")");
        });
    })
    .catch((error) => {
        console.log("Error: " + error.message);
    });
```


## Licensing
GroupDocs.Viewer Cloud Node.js SDK licensed under [MIT License](LICENSE).

[Home](https://www.groupdocs.cloud/) | [Product Page](https://products.groupdocs.cloud/viewer/nodejs) | [Docs](https://docs.groupdocs.cloud/viewer/) | [Demos](https://products.groupdocs.app/viewer/family) | [API Reference](https://apireference.groupdocs.cloud/viewer/) | [Examples](https://github.com/groupdocs-viewer-cloud/groupdocs-viewer-cloud-node-samples) | [Blog](https://blog.groupdocs.cloud/category/viewer/) | [Free Support](https://forum.groupdocs.cloud/c/viewer) | [Free Trial](https://purchase.groupdocs.cloud/trial)
