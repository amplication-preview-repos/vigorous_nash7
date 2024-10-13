/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { Dish } from "./Dish";
import { DishCountArgs } from "./DishCountArgs";
import { DishFindManyArgs } from "./DishFindManyArgs";
import { DishFindUniqueArgs } from "./DishFindUniqueArgs";
import { DeleteDishArgs } from "./DeleteDishArgs";
import { DishService } from "../dish.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Dish)
export class DishResolverBase {
  constructor(
    protected readonly service: DishService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Dish",
    action: "read",
    possession: "any",
  })
  async _dishesMeta(
    @graphql.Args() args: DishCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Dish])
  @nestAccessControl.UseRoles({
    resource: "Dish",
    action: "read",
    possession: "any",
  })
  async dishes(@graphql.Args() args: DishFindManyArgs): Promise<Dish[]> {
    return this.service.dishes(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Dish, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Dish",
    action: "read",
    possession: "own",
  })
  async dish(@graphql.Args() args: DishFindUniqueArgs): Promise<Dish | null> {
    const result = await this.service.dish(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Dish)
  @nestAccessControl.UseRoles({
    resource: "Dish",
    action: "delete",
    possession: "any",
  })
  async deleteDish(@graphql.Args() args: DeleteDishArgs): Promise<Dish | null> {
    try {
      return await this.service.deleteDish(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
