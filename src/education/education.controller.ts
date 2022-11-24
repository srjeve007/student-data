import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserCredentials } from 'src/auth/credential.entity';
import { GetUser } from 'src/auth/get-user.decorator';
import { CreateEducationDto } from './dto/education.dto';
import { FilterEducationDto } from './dto/filter-education.dto';
import { UpdateEducationDto } from './dto/update-education.dto';
import { Education } from './education.entity';
import { EducationService } from './education.service';

@Controller('education')
@UseGuards(AuthGuard())
export class EducationController {

    constructor(private educationService:EducationService){}

    @Post()
    createEducation(@Body() createEducationDto:CreateEducationDto,
                    @GetUser() userCredentials:UserCredentials):Promise<Education[]>{
        
        return this.educationService.createEducation(createEducationDto,userCredentials);
    }


    @Get()
    getEducation(@Query() filterEducationDto:FilterEducationDto,
                 @GetUser() userCredentials:UserCredentials):Promise<Education[]>{
        return this.educationService.getEducation(filterEducationDto, userCredentials);
    }


    @Get('/:id')
    getEducationById(@Param('id') id:number,
                     @GetUser() userCredentials:UserCredentials):Promise<Education>{
        return this.educationService.getEducationById(id,userCredentials);
    }


    @Delete('/:id')
    deleteEducationById(@Param('id') id:number,
                        @GetUser() userCredentials:UserCredentials):Promise<void>{
        return this.educationService.deleteEducationById(id, userCredentials);
    }

    @Patch('/:id/updateEducation')
    updateEducation(@Param('id') id:number,
                    @Body() updateEducationDto:UpdateEducationDto,
                    @GetUser() userCredentials :UserCredentials):Promise<Education>{

                    return this.educationService.updateEducation(id,updateEducationDto, userCredentials);
                }

}
