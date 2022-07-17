import { AddEmployee } from "src/domain/usecases/employee"
export interface AddEmployeeRepository { 
  add: (data: AddEmployee.Parameters) => Promise<AddEmployee.Result>;
}

export namespace AddEmployeeRepository { 
  export type Parameters = AddEmployee.Parameters;
  export type Result = AddEmployee.Result;
}
