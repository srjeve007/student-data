import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SkillsModule } from './skills/skills.module';
import { typeOrmConfig } from './typeorm.config';
import { EducationModule } from './education/education.module';
import { ExperienceModule } from './experience/experience.module';
import { AuthModule } from './auth/auth.module';



@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), SkillsModule, EducationModule, ExperienceModule, AuthModule, ],
  controllers: [],
  providers: [],
})
export class AppModule {}
