import { Body, Controller, Delete, Get, Param, Patch, Post, Query,UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserCredentials } from 'src/auth/credential.entity';
import { GetUser } from 'src/auth/get-user.decorator';
import { CreateExperienceDto } from './dto/experience.dto';
import { FilterExperienceDto } from './dto/filter-experience.dto';
import { UpdateExperienceDto } from './dto/update-experience.dto';
import { Experience } from './experience.entity';
import { ExperienceService } from './experience.service';

@Controller('experience')
@UseGuards(AuthGuard())
export class ExperienceController {


    constructor(private experienceService:ExperienceService){}

    @Post()
    createExperience(@Body() createExperienceDto:CreateExperienceDto,
                     @GetUser() userCredentials:UserCredentials):Promise<Experience[]>{

        return this.experienceService.createExperience(createExperienceDto, userCredentials);
    }


    @Get()
    getEducation(@Query() filterExperienceDto:FilterExperienceDto, userCredentials:UserCredentials):Promise<Experience[]>{
        return this.experienceService.getExperience(filterExperienceDto, userCredentials);
    }


    @Get('/:id')
    getExperienceById(@Param('id') id:number,
                      @GetUser() userCredentials:UserCredentials):Promise<Experience>{
        return this.experienceService.getExperienceById(id, userCredentials);
    }


    @Delete('/:id')
    deleteEducationById(@Param('id') id:number,
                        @GetUser() userCredentials:UserCredentials):Promise<void>{
        return this.experienceService.deleteExperienceById(id, userCredentials);
    }

    @Patch('/:id/updateExperience')
    updateExperience(@Param('id') id:number,
                @Body() updateExperienceDto:UpdateExperienceDto,
                @GetUser() userCredentials:UserCredentials):Promise<Experience>{

                    return this.experienceService.updateExperience(id, updateExperienceDto, userCredentials);
                }


}
