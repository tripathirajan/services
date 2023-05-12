export type StorageType = "File" | "Cloud" | "Stream";

export enum StorageServiceType {
  FILE = "File",
  CLOUD = "Cloud",
  STREAM = "Stream",
}
export type StorageOption =
  | {
      filename?: string;
    }
  | any;

export interface StorageProvider {
  upload(fileBuffer: any, opts: StorageOption): Promise<any>;
}

export type CloudConfig = {
  cloud_name: string;
  api_key: string;
  api_secret: string;
};

export type SmtpAuth = {
  user: string;
  pass: string;
};
export type SmtpOpts = {
  host: string;
  port: number;
  secure: boolean;
  auth: SmtpAuth;
};
export type SendGridAuth = {
  api_key: string;
};
export type SendGridConfig = {
  auth: SendGridAuth;
};

export type SendMailOpts = {
  to: string;
  from: string;
  subject: string;
  body: string;
  isHtml?: boolean;
  callback?: (result?: any, error?: any) => void;
};
