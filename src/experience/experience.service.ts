import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserCredentials } from 'src/auth/credential.entity';
import { Repository } from 'typeorm';
import { CreateExperienceDto } from './dto/experience.dto';
import { FilterExperienceDto } from './dto/filter-experience.dto';
import { UpdateExperienceDto } from './dto/update-experience.dto';
import { Experience } from './experience.entity';

@Injectable()
export class ExperienceService {



    constructor(@InjectRepository(Experience) private experienceRepository:Repository<Experience> ){}

    async createExperience(createExperienceDto:CreateExperienceDto, userCredentials:UserCredentials):Promise<Experience[]>{

        const {createExperience}=createExperienceDto;

        if(createExperience && createExperience.length)
        {  
           const are: Experience[]=[];
            for(const createExperience_ of createExperience)
            {
                const{Profile,Organization, Location, Monthly_Salary, Details, Currently_Working}=createExperience_;
                const experienceExists= await this.experienceRepository.findOne({where:{Profile:'Profile'}});
                if(!experienceExists)
                    {
                    const saveExperience = this.experienceRepository.create({Profile,Organization, Location, Monthly_Salary, Details, Currently_Working,userCredentials });
                    await this.experienceRepository.save(saveExperience);
                    are.push(saveExperience);
                    }
                 else {   
                    throw new NotFoundException(`Experience with name "${Profile}" already exists`);
                }
                    
            }

            return are;
        }
    
}


    async getExperience(filterExperienceDto:FilterExperienceDto, userCredentials:UserCredentials):Promise<Experience[]>{
        const { Profile}=filterExperienceDto;
        const query= this.experienceRepository.createQueryBuilder('experience');

        query.where({userCredentials});

        if(Profile)
            {
                query.andWhere('experience.Profile = Profile' , {Profile});
            }

            const experiences= await query.getMany();
            return experiences;
    }



    async getExperienceById(id :number, userCredentials:UserCredentials):Promise <Experience>{
        const found= await this.experienceRepository.findOne({where:{id}});

        if(!found){
            throw new NotFoundException(`Experience with ID "${id}" not found`);
        }

        return found;
    }

    async deleteExperienceById(id :number, userCredentials:UserCredentials):Promise<void>{
        const found= await this.experienceRepository.findOne({where:{id}});

        if(found){
           await this.experienceRepository.delete(id);
        }
        else{
            throw new NotFoundException(`Experience with ID "${id}" not found`);
        }
    }


    async updateExperience(id:number, updateExperienceDto:UpdateExperienceDto, userCredentials:UserCredentials):Promise<Experience>{
      const  experience= await this.getExperienceById(id, userCredentials);
      const {Profile,Organization,Location,Monthly_Salary,Details,Currently_Working}=updateExperienceDto;

      experience.Profile=Profile;
      experience.Organization=Organization;
      experience.Location=Location;
      experience.Monthly_Salary=Monthly_Salary;
      experience.Details=Details;
      experience.Currently_Working=Currently_Working;

    //   education.startDate=startDate;
    //   education.endDate=endDate;

      await this.experienceRepository.save(experience);

      return experience;
    }


}
