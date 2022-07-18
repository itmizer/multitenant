import { DbAddEmployee } from "@/data/usecases";
import { EmployeeRepository } from "@/infra/orm/repositories"
import { AddEmployee } from "@/domain/usecases";
import { ADD_EMPLOYEE } from "@/main/factories/providers";

export const addEmployeeFactory = {
  provide: ADD_EMPLOYEE,
  useFactory: (employeeRepository: EmployeeRepository): AddEmployee => { 
    return new DbAddEmployee(employeeRepository);
  },
  inject: [EmployeeRepository],
}