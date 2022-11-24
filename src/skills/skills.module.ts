import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { SkillsController } from './skills.controller';
import { SkillsService } from './skills.service';
import { UserSkills } from './user-skills.entity';

@Module({
  imports:[TypeOrmModule.forFeature([UserSkills]), AuthModule],
  controllers: [SkillsController],
  providers: [SkillsService]
})
export class SkillsModule {}
