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

import StorageApi = require("asposestoragecloud");
import * as fs from "fs";

import { Configuration } from "../src/configuration";
import { Serializer } from "../src/serializer";
import { ViewerApi } from "../src/viewer_api";
import { TestFile } from "./test_file";

let viewerApi;
let storageApi;

/**
 * Initializes ViewerApi
 */
export function getViewerApi() {
    if (!viewerApi) {
        const settings = require("./test_settings.json");

        const config = new Configuration(settings.AppSid, settings.AppKey);
        config.apiBaseUrl = settings.ApiBaseUrl;

        viewerApi = ViewerApi.fromConfig(config);
    }

    return viewerApi;
}

/**
 * Initializes StorageApi
 */
export function getStorageApi() {
    if (!storageApi) {
        const settings = require("./test_settings.json");
        storageApi = new StorageApi({
            appSid: settings.AppSid,
            apiKey: settings.AppKey,
            baseURI: settings.ApiBaseUrl + "/v1",
        });
    }

    return storageApi;
}

/**
 * Uploads test files
 */
export function uploadTestFiles() {
    const api = getStorageApi();
    
    const testFilesDir = __dirname + "\\test_files";
    const testFiles = getFileList(testFilesDir, []);

    return Promise.all(testFiles.map((file) => {
        const srcFilePath = file;
        const dstFilePath = file.replace(testFilesDir + "/", "");

        return uploadTestFile(api, srcFilePath, dstFilePath);
    }));
}

/**
 * Cleanups temp files
 */
export function cleanupTempFiles() {
    const api = getStorageApi();
    
    const tempDirs = ["test", "cache"];    

    return Promise.all(tempDirs.map((dir) => {
        return deleteTempDir(api, dir);
    }));
}

/**
 * Retrieves test file 
 */
export function getTestFileBuffer(file: TestFile) {
    const testFilesDir = __dirname + "\\test_files";
    const testFilePath = testFilesDir + "\\" + file.folder + "\\" + file.fileName;

    return fs.readFileSync(testFilePath);
}

/**
 * Retrieves test file 
 */
export function serializeIntoBuffer(obj) {
    const serialized = Serializer.serialize(obj, obj.constructor.name);
    const json = JSON.stringify(serialized, undefined, 2);
    return new Buffer(json, "utf-8");
}

const getFileList = (dir, fileList) => {
    const files = fs.readdirSync(dir);
    fileList = fileList || [];
    files.forEach((file) => {
        if (fs.statSync(dir + "/" + file).isDirectory()) {
            fileList = fileList.concat(getFileList(dir + "/" + file, []));
        } else { fileList.push(dir + "/" + file); }
    });
    return fileList;
};

const uploadTestFile = (api, srcFilePath, dstFilePath) => {
    return new Promise((resolve, reject) => {
        api.GetIsExist(dstFilePath, null, null, (existResponse) => {
            if (existResponse.body.fileExist.isExist === true) {
                resolve();
            } else {
                api.PutCreate(dstFilePath, null, null, srcFilePath, (createResponse) => {
                    if (createResponse.status === "OK") {
                        resolve();
                    } else {
                        reject(createResponse.status);
                    }
                });
            }
        });
    }).catch((err) => { throw err; });
};

const deleteTempDir = (api, dir) => {
    return new Promise((resolve, reject) => {
        api.DeleteFolder(dir, null, true, (response) => {
            if (response.status === "OK") {
                resolve();
            } else {
                reject(response.status);
            }
        });
    }).catch((err) => { throw err; });
};
