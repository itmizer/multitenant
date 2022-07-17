import { AddEmployee } from '../../../domain/usecases/employee';
import { AddEmployeeRepository } from 'src/data/protocols';

export class DbAddEmployee implements AddEmployee {
  constructor(
    private readonly addEmployeeRepository: AddEmployeeRepository
  ) { }
  async add(data: AddEmployee.Parameters): Promise<AddEmployee.Result> {
    return await this.addEmployeeRepository.add(data);
  }
}