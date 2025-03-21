import { SortOrder } from "../../util/SortOrder";

export type FileUploadOrderByInput = {
  createdAt?: SortOrder;
  filename?: SortOrder;
  id?: SortOrder;
  processedData?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  uploadDate?: SortOrder;
  userId?: SortOrder;
};
