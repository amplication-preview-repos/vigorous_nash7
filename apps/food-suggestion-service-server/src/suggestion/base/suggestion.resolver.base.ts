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
import { Suggestion } from "./Suggestion";
import { SuggestionCountArgs } from "./SuggestionCountArgs";
import { SuggestionFindManyArgs } from "./SuggestionFindManyArgs";
import { SuggestionFindUniqueArgs } from "./SuggestionFindUniqueArgs";
import { DeleteSuggestionArgs } from "./DeleteSuggestionArgs";
import { SuggestionService } from "../suggestion.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Suggestion)
export class SuggestionResolverBase {
  constructor(
    protected readonly service: SuggestionService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Suggestion",
    action: "read",
    possession: "any",
  })
  async _suggestionsMeta(
    @graphql.Args() args: SuggestionCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Suggestion])
  @nestAccessControl.UseRoles({
    resource: "Suggestion",
    action: "read",
    possession: "any",
  })
  async suggestions(
    @graphql.Args() args: SuggestionFindManyArgs
  ): Promise<Suggestion[]> {
    return this.service.suggestions(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Suggestion, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Suggestion",
    action: "read",
    possession: "own",
  })
  async suggestion(
    @graphql.Args() args: SuggestionFindUniqueArgs
  ): Promise<Suggestion | null> {
    const result = await this.service.suggestion(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Suggestion)
  @nestAccessControl.UseRoles({
    resource: "Suggestion",
    action: "delete",
    possession: "any",
  })
  async deleteSuggestion(
    @graphql.Args() args: DeleteSuggestionArgs
  ): Promise<Suggestion | null> {
    try {
      return await this.service.deleteSuggestion(args);
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
