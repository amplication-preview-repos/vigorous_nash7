import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SuggestionModuleBase } from "./base/suggestion.module.base";
import { SuggestionService } from "./suggestion.service";
import { SuggestionController } from "./suggestion.controller";
import { SuggestionResolver } from "./suggestion.resolver";

@Module({
  imports: [SuggestionModuleBase, forwardRef(() => AuthModule)],
  controllers: [SuggestionController],
  providers: [SuggestionService, SuggestionResolver],
  exports: [SuggestionService],
})
export class SuggestionModule {}
