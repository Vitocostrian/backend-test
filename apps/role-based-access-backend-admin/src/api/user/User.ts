import { FileUpload } from "../fileUpload/FileUpload";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  fileUploads?: Array<FileUpload>;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
