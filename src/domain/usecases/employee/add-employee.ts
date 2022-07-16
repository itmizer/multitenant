import { EmployeeModel } from '../../entities/employee';

export interface AddEmployee { 
  add: (data: AddEmployee.Parameters) => Promise<EmployeeModel>;
}

export namespace AddEmployee {
  export type Parameters = {
    fantasy_name: string;
    corporate_name?: string;
    cnpj?: string;
    phone?: string;
    street: string;
    complement?: string;
    district?: string;
    zip_code?: string;
    city: string;
    state: string;
  };
  export type Result = EmployeeModel;
}
