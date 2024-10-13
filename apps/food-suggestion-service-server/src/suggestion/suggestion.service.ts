import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SuggestionServiceBase } from "./base/suggestion.service.base";

@Injectable()
export class SuggestionService extends SuggestionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
