import { Injectable, Inject } from "@nestjs/common";
import {  Controller } from "@/presentation/protocols";
import { AddEmployee } from "@/domain/usecases";
import { ADD_EMPLOYEE } from "@/main/factories/providers";
import { AddEmployeeController } from "@/presentation/controllers";

@Injectable()
export class FactoryAddEmployeeController {
  constructor(
    @Inject(ADD_EMPLOYEE)
    private readonly addEmployee: AddEmployee
  ) {}

  public factory(): Controller {
    const controller = new AddEmployeeController(this.addEmployee);
    return controller;
  }
}