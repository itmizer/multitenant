import { Injectable, Inject } from "@nestjs/common";
import { ADD_EMPLOYEE_REPOSITORY } from "@/infra/orm/sequelize/sequelize.repositories";
import { AddEmployeeRepository } from "@/data/protocols";
import { Employee } from "@/infra/orm/entities";

@Injectable()
export class EmployeeRepository implements AddEmployeeRepository {
  constructor(
    @Inject(ADD_EMPLOYEE_REPOSITORY) private readonly employeeRepository: typeof Employee
  ) { }

  async add(data: AddEmployeeRepository.Parameters): Promise<AddEmployeeRepository.Result> {
    return await this.employeeRepository.create<Employee>(data);
  }
}