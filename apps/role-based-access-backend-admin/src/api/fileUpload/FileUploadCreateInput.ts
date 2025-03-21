import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FileUploadCreateInput = {
  filename?: string | null;
  processedData?: InputJsonValue;
  status?: "Option1" | null;
  uploadDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
