import { Provider } from '@loopback/core';
import multer from 'multer';
import { FileUploadHandler } from '../types';
/**
 * A provider to return an `Express` request handler from `multer` middleware
 */
export declare class FileUploadProvider implements Provider<FileUploadHandler> {
    private options;
    constructor(options?: multer.Options);
    value(): FileUploadHandler;
}
