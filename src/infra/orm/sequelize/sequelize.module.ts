import { Module } from '@nestjs/common';

import { sequelizeProvider } from './sequelize.privider';

@Module({
  providers: [...sequelizeProvider],
  exports: [...sequelizeProvider],
})

export class SequelizeModule {}