import { Module } from "@nestjs/common";
import { FactoryModule } from "@/main/factories/usecases/factory.module";
import { EmployeeController } from "@/main/controllers/employee"
import { FactoryAddEmployeeController } from "@/main/factories/controllers";

@Module({
  imports: [FactoryModule],
  controllers: [EmployeeController],
  providers: [FactoryAddEmployeeController],
})

export class EmployeeModule {}