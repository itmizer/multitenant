import { EmployeeModel } from "@/domain/entities/employee";
import { Table, Model, PrimaryKey, AutoIncrement, Column } from "sequelize-typescript";

@Table({ modelName: "employee", timestamps: false, freezeTableName: true })
export class Employee extends Model implements EmployeeModel {
  @PrimaryKey
  @AutoIncrement
  @Column({ field: "id" })
  id: string;

  @Column
  fantasy_name: string;

  @Column
  corporate_name?: string;

  @Column
  cnpj?: string;

  @Column
  phone?: string;

  @Column
  street: string;

  @Column
  complement?: string;

  @Column
  district?: string;

  @Column
  zip_code?: string;

  @Column
  city: string;

  @Column
  state: string;

  
}