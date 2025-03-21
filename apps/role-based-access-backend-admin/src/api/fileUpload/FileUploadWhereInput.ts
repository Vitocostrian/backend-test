import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FileUploadWhereInput = {
  filename?: StringNullableFilter;
  id?: StringFilter;
  processedData?: JsonFilter;
  status?: "Option1";
  uploadDate?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
