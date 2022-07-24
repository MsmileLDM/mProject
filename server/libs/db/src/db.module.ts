import { Global, Module } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { User } from './models/user.model';

const models = TypegooseModule.forFeature([User]);

@Global()
@Module({
  imports: [TypegooseModule.forRoot('mongodb://localhost/MsmileApp'), models],
  providers: [DbService],
  exports: [DbService, models],
})
export class DbModule {}
