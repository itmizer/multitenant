import { ok, serverError } from '../helpers';
import { Controller, HttpResponse } from '../protocols';
import { AddEmployee } from '../../domain/usecases';

export class AddEmployeeController implements Controller {
  constructor(private readonly addEmployee: AddEmployee) { }

  async handle(request: AddEmployee.Parameters): Promise<HttpResponse> { 
    try {
      const result = await this.addEmployee.add(request);
      return ok(result)
    } catch (error: any) {
      return serverError(error)
    }
  }
}
