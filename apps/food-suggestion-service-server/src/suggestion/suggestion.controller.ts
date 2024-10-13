import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SuggestionService } from "./suggestion.service";
import { SuggestionControllerBase } from "./base/suggestion.controller.base";

@swagger.ApiTags("suggestions")
@common.Controller("suggestions")
export class SuggestionController extends SuggestionControllerBase {
  constructor(
    protected readonly service: SuggestionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
