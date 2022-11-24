import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { ExperienceController } from './experience.controller';
import { Experience } from './experience.entity';
import { ExperienceService } from './experience.service';

@Module({
  imports:[TypeOrmModule.forFeature([Experience]), AuthModule],
  controllers: [ExperienceController],
  providers: [ExperienceService]
})
export class ExperienceModule {}
