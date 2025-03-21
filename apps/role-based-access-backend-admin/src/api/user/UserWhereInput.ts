import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FileUploadListRelationFilter } from "../fileUpload/FileUploadListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  fileUploads?: FileUploadListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
};
