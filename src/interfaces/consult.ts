export interface IConsult {
  email: string;
  subject: string;
  message?: string;
  fullName: string;
  webOrigin: WebOriginUrl;
  createdAt: Date;
}

type WebOriginUrl = "WIM";
