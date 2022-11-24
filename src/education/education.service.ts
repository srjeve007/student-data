import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserCredentials } from 'src/auth/credential.entity';
import { Repository } from 'typeorm';
import { CreateEducationDto } from './dto/education.dto';
import { FilterEducationDto } from './dto/filter-education.dto';
import { UpdateEducationDto } from './dto/update-education.dto';
import { Education } from './education.entity';
 
@Injectable()
export class EducationService {

    constructor(@InjectRepository(Education) private educationRepository:Repository<Education> ){}

    async createEducation(createEducationDto:CreateEducationDto, userCredentials:UserCredentials):Promise<Education[]>{
        
        const{createEducation}=createEducationDto;

        if(createEducation && createEducation.length)
            {  console.log(createEducation);
                const are:Education[]=[];
                for( const createEducation_ of createEducation)
                    { console.log(createEducation_);
                        const{education_level, Stream,educationStatus, institute, Percentage}=createEducation_;
                       const educationExists= await this.educationRepository.findOne({where:{education_level:'education_level'}});

                       if(educationExists)
                        { throw new NotFoundException(`Education with name "${education_level}" already exists`);
                            
                        }
                       else{  const saveEducation=  this.educationRepository.create({education_level, Stream,educationStatus, institute, Percentage, userCredentials });
                       await this.educationRepository.save(saveEducation);
                       are.push(saveEducation);
                         }
                    }
                    return are;
            }
    
      }



    async getEducation(filterEducationDto:FilterEducationDto, userCredentials:UserCredentials):Promise<Education[]>{
        const { education_level}=filterEducationDto;
        const query= this.educationRepository.createQueryBuilder('education');

        query.where({userCredentials});

        if(education_level)
            {
                query.andWhere('education.education_level = education_level' , {education_level});
            }

            const educations= await query.getMany();
            return educations;
    }



    async getEducationById(id :number, userCredentials:UserCredentials):Promise<Education>{
        const found= await this.educationRepository.findOne({where:{id}});

        if(!found){
            throw new NotFoundException(`Education with ID "${id}" not found`);
        }

        return found;
    }

    async deleteEducationById(id :number, userCredentials:UserCredentials):Promise<void>{
        const found= await this.educationRepository.findOne({where:{id}});

        if(found){
           await this.educationRepository.delete(id);
        }
        else{
            throw new NotFoundException(`Education with ID "${id}" not found`);
        }
    }


    async updateEducation(id:number, updateEducationDto:UpdateEducationDto, userCredentials:UserCredentials):Promise<Education>{
      const  education= await this.getEducationById(id, userCredentials);
      const {education_level,Stream, educationStatus, institute, Percentage}=updateEducationDto;

      education.education_level=education_level;
      education.Stream=Stream;
      education.educationStatus=educationStatus;
      education.institute=institute;
    //   education.startDate=startDate;
    //   education.endDate=endDate;
      education.Percentage=Percentage;

      await this.educationRepository.save(education);

      return education;
    }
}
