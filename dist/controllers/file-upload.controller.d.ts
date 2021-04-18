/// <reference types="express" />
import { Request, Response } from '@loopback/rest';
import { FileUploadHandler } from '../types';
/**
 * A controller to handle file uploads using multipart/form-data media type
 */
export declare class FileUploadController {
    private handler;
    /**
     * Constructor
     * @param handler - Inject an express request handler to deal with the request
     */
    constructor(handler: FileUploadHandler);
    fileUpload(request: Request, response: Response): Promise<object>;
    /**
     * Get files and fields for the request
     * @param request - Http request
     */
    private static getFilesAndFields;
}
