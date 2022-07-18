import { MessageValidator } from "@/main/utils";
import { IsNotEmpty } from 'class-validator';

export class AddEmployeeDto {
  @IsNotEmpty({ message: MessageValidator.empty('Nome Fantasia') })
  fantasy_name: string;

  corporate_name: string;

  cnpj: string;

  phone: string;

  @IsNotEmpty({ message: MessageValidator.empty('Rua') })
  street: string;

  complement: string;

  district: string;

  zip_code: string;

  @IsNotEmpty({ message: MessageValidator.empty('Cidade') })
  city: string;

  @IsNotEmpty({ message: MessageValidator.empty('Estado') })
  state: string;
}