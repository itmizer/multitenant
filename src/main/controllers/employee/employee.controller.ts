import { Body, Controller, Headers,Post, Res } from '@nestjs/common';
import { FactoryAddEmployeeController } from '@/main/factories/controllers';
import { AddEmployeeDto } from './dtos';
import { controllerAdapter } from '@/main/adapters/controller.adapter';
import { HttpResponse } from '@/presentation/protocols';

@Controller('employee')
export class EmployeeController {
  constructor(
    private readonly factoryAddEmployeeController: FactoryAddEmployeeController,
  ) { }

  @Post('')
  async add(
    @Headers() headers: any,
    @Body() body: AddEmployeeDto,
    @Res() res: any,
  ): Promise<HttpResponse> { 
    const result = await controllerAdapter(this.factoryAddEmployeeController.factory(), body);
    return res.status(result.statusCode).json(result);
  }
}