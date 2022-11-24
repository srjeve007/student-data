import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserCredentials } from 'src/auth/credential.entity';
import { GetUser } from 'src/auth/get-user.decorator';
import { CreateSkillDto } from './dto/createSkill.dto';
import { FilterSkillDto } from './dto/filter-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { SkillsService } from './skills.service';
import { UserSkills } from './user-skills.entity';

@Controller('skills')
@UseGuards(AuthGuard())
export class SkillsController {
    constructor(private skillsService:SkillsService){}

    @Post()
    createSkills(@Body() createSkillDto:CreateSkillDto,
                 @GetUser() userCredentials:UserCredentials):Promise <UserSkills[]>{

        return this.skillsService.createSkills(createSkillDto, userCredentials);
    }


    @Get()
    getSkills(@Query() filterSkillDto:FilterSkillDto,
              @GetUser() userCredentials:UserCredentials):Promise<UserSkills[]>{
        return this.skillsService.getSkills(filterSkillDto, userCredentials);
    }


    @Get('/:id')
    getSkillById(@Param('id') id:number,
                 @GetUser() userCredentials:UserCredentials):Promise<UserSkills>{
        return this.skillsService.getSkillById(id,userCredentials);
    }


    @Delete('/:id')
    deleteSkillById(@Param('id') id:number,
                    @GetUser() userCredentials:UserCredentials):Promise<void>{
        return this.skillsService.deleteSkillById(id,userCredentials);
    }

    @Patch('/:id/updateskill')
    updateSkill(@Param('id') id:number,
                @Body() updateSkillDto:UpdateSkillDto,
                @GetUser() userCredentials:UserCredentials):Promise<UserSkills>{

                    return this.skillsService.updateSkill(id,updateSkillDto,userCredentials);
                }
}


