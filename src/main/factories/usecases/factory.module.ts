import { Module  } from "@nestjs/common";

import { addEmployeeFactory } from "@/main/factories/usecases/add-employee.factory";

@Module({
  providers: [addEmployeeFactory],
  exports: [addEmployeeFactory],
  imports: []
})

export class FactoryModule {}