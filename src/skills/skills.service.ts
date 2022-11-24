import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserCredentials } from 'src/auth/credential.entity';
import { Repository } from 'typeorm';
import { CreateSkillDto } from './dto/createSkill.dto';
import { FilterSkillDto } from './dto/filter-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { UserSkills } from './user-skills.entity';

@Injectable()
export class SkillsService {

   constructor( @InjectRepository(UserSkills) private skillsRepository:Repository<UserSkills>,){}

    
  async  createSkills(createSkillDto:CreateSkillDto, userCredentials:UserCredentials):Promise <UserSkills[]>{

     const {createSkill}=createSkillDto;

     if(createSkill && createSkill.length)
        {   
           const are:UserSkills[]=[];

            for(const createSkill_ of createSkill)
            {
                const{skill_name, skill_experience, skill_rating, skill_organization,}=createSkill_;
            
                   // const saveSkill=new UserSkills;

                    const skillExist=  await this.skillsRepository.findOne({where:{skill_name: 'skill_name'}});
                  
                     if(skillExist)
                            {   console.log(skill_name);
                                throw new NotFoundException(`Skill with name "${skill_name}" already exists`);
                            }
                            
                            
                            else{   const  saveSkill=   this.skillsRepository.create({ skill_name, skill_experience, skill_rating, skill_organization,userCredentials });
                            await this.skillsRepository.save(saveSkill); 
                            are.push(saveSkill);
                                 }                            
            }
                   
            return are;
            }
        }






    async getSkills(filterSkillDto:FilterSkillDto, userCredentials:UserCredentials):Promise<UserSkills[]>{
        const {skill_name}=filterSkillDto;
        const query= this.skillsRepository.createQueryBuilder('skill');

        query.where({userCredentials});

        if(skill_name)
            {
                query.andWhere('skill.skill_name = skill_name' , {skill_name});
            }

            const skills= await query.getMany();
            return skills;
    }



    async getSkillById(id :number, userCredentials:UserCredentials):Promise<UserSkills>{
        const found= await this.skillsRepository.findOne({where:{id}});
        //const found= await this.skillsRepository.findOne(userCredentials);

        if(!found){
            throw new NotFoundException(`Skill with ID "${id}" not found`);
        }

        return found;
    }

    async deleteSkillById(id :number,  userCredentials:UserCredentials):Promise<void>{
        const found= await this.skillsRepository.findOne({where:{id}});

        if(found){
           await this.skillsRepository.delete(id);
        }
        else{
            throw new NotFoundException(`Skill with ID "${id}" not found`);
        }
    }


    async updateSkill(id:number, updateSkillDto:UpdateSkillDto, userCredentials:UserCredentials):Promise<UserSkills>{
      const  skill= await this.getSkillById(id,userCredentials);
      const {skill_name, skill_experience, skill_rating, skill_organization,}=updateSkillDto;

      skill.skill_name=skill_name;
      skill.skill_experience=skill_experience;
      skill.skill_rating=skill_rating;
      skill.skill_organization=skill_organization;

      await this.skillsRepository.save(skill);

      return skill;
    }
}

















//     for (let i = 0; i < createSkillDto.length ; i++) 
//    //while(i < createSkillDto.length)
//     {  
//        // const {skill_name, skill_experience, skill_rating, skill_organization,}=createSkillDto[i] ; 
        
//         console.log("i==",i);
//        // console.log(skill_name);
       

//         const skillExist=  await this.skillsRepository.findOne({where:{skill_name: 'skill_name'}});

//         console.log(skill_name);

//         if(!skillExist){
//         //arr[i]
//         console.log("inside if");
//              const  skill=  this.skillsRepository.create({
//             skill_name, skill_experience, skill_rating, skill_organization,userCredentials
//         });

//        // arr[i]=skill;
//      await this.skillsRepository.save(skill);
//     console.log(skill);
//    arr[i]=(skill);
//     i++;
//     }   

//     else{ throw new NotFoundException(`Skill with name "${skill_name}" already exists`);}

    
//     }
    
//     return arr;




  // saveSkill.skill_name=skill_name;
                    // saveSkill.skill_experience=skill_experience;
                    // saveSkill.skill_rating=skill_rating;
                    // saveSkill.skill_organization=skill_organization;

                    // await this.skillsRepository.save(saveSkill);