import * as graphql from "@nestjs/graphql";
import { AuthenticationService } from "./authentication.service";

export class AuthenticationResolver {
  constructor(protected readonly service: AuthenticationService) {}
}
