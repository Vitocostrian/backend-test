import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type FileUpload = {
  createdAt: Date;
  filename: string | null;
  id: string;
  processedData: JsonValue;
  status?: "Option1" | null;
  updatedAt: Date;
  uploadDate: Date | null;
  user?: User | null;
};
