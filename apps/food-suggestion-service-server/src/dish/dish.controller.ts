import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DishService } from "./dish.service";
import { DishControllerBase } from "./base/dish.controller.base";

@swagger.ApiTags("dishes")
@common.Controller("dishes")
export class DishController extends DishControllerBase {
  constructor(
    protected readonly service: DishService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
