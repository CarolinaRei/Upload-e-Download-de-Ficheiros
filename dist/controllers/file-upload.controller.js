"use strict";
// Uncomment these imports to begin using these cool features!
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUploadController = void 0;
const tslib_1 = require("tslib");
// import {inject} from '@loopback/core';
const core_1 = require("@loopback/core");
const rest_1 = require("@loopback/rest");
const keys_1 = require("../keys");
/**
 * A controller to handle file uploads using multipart/form-data media type
 */
let FileUploadController = class FileUploadController {
    /**
     * Constructor
     * @param handler - Inject an express request handler to deal with the request
     */
    constructor(handler) {
        this.handler = handler;
    }
    async fileUpload(request, response) {
        return new Promise((resolve, reject) => {
            this.handler(request, response, (err) => {
                if (err)
                    reject(err);
                else {
                    resolve(FileUploadController.getFilesAndFields(request));
                }
            });
        });
    }
    /**
     * Get files and fields for the request
     * @param request - Http request
     */
    static getFilesAndFields(request) {
        const uploadedFiles = request.files;
        const mapper = (f) => ({
            fieldname: f.fieldname,
            originalname: f.originalname,
            encoding: f.encoding,
            mimetype: f.mimetype,
            size: f.size,
        });
        let files = [];
        if (Array.isArray(uploadedFiles)) {
            files = uploadedFiles.map(mapper);
        }
        else {
            for (const filename in uploadedFiles) {
                files.push(...uploadedFiles[filename].map(mapper));
            }
        }
        return { files, fields: request.body };
    }
};
tslib_1.__decorate([
    rest_1.post('/files', {
        responses: {
            200: {
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                        },
                    },
                },
                description: 'Files and fields',
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody.file()),
    tslib_1.__param(1, core_1.inject(rest_1.RestBindings.Http.RESPONSE)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FileUploadController.prototype, "fileUpload", null);
FileUploadController = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject(keys_1.FILE_UPLOAD_SERVICE)),
    tslib_1.__metadata("design:paramtypes", [Function])
], FileUploadController);
exports.FileUploadController = FileUploadController;
//# sourceMappingURL=file-upload.controller.js.map