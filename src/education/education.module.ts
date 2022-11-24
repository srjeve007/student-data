import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { EducationController } from './education.controller';
import { Education } from './education.entity';
import { EducationService } from './education.service';

@Module({
  imports:[TypeOrmModule.forFeature([Education]), AuthModule],
  controllers: [EducationController],
  providers: [EducationService]
})
export class EducationModule {}
