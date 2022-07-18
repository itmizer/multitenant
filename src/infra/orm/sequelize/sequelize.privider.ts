import { Sequelize } from "sequelize-typescript";
import { sequelizeConfig } from "@/infra/config/sequelize.config";
import { Employee } from '@/infra/orm/entities/employee.entity';

export const sequelizeProvider = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => { 
      const sequelize = new Sequelize(sequelizeConfig as any);
      sequelize.addModels([Employee]);
      await sequelize.sync();
      return sequelize;
    }
  }
]