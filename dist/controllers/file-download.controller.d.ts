/// <reference types="express" />
import { Response } from '@loopback/rest';
/**
 * A controller to handle file downloads using multipart/form-data media type
 */
export declare class FileDownloadController {
    private storageDirectory;
    constructor(storageDirectory: string);
    listFiles(): Promise<string[]>;
    downloadFile(fileName: string, response: Response): Response<any, Record<string, any>>;
    /**
     * Validate file names to prevent them goes beyond the designated directory
     * @param fileName - File name
     */
    private validateFileName;
}
