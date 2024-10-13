import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DishModuleBase } from "./base/dish.module.base";
import { DishService } from "./dish.service";
import { DishController } from "./dish.controller";
import { DishResolver } from "./dish.resolver";

@Module({
  imports: [DishModuleBase, forwardRef(() => AuthModule)],
  controllers: [DishController],
  providers: [DishService, DishResolver],
  exports: [DishService],
})
export class DishModule {}
