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
 * Describes API error.
 */
export class ApiError {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{ name: string, baseName: string, type: string }> = [
        {
            name: "error",
            baseName: "error",
            type: "Error",
        }];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ApiError.attributeTypeMap;
    }

    /**
     * Error.
     */
    public error: Error;

    public constructor(init?: Partial<ApiError>) {

        Object.assign(this, init);
    }
}

/**
 * Error.
 */
export class Error {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{ name: string, baseName: string, type: string }> = [
        {
            name: "code",
            baseName: "code",
            type: "string",
        },
        {
            name: "message",
            baseName: "message",
            type: "string",
        }];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Error.attributeTypeMap;
    }

    /**
     * Error code.
     */
    public code: string;

    /**
     * Error message
     */
    public message: string;

    public constructor(init?: Partial<Error>) {

        Object.assign(this, init);
    }
}
