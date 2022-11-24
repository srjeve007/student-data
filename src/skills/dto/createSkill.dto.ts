import { Type } from "class-transformer";
import { IsOptional, IsArray, ValidateNested, ArrayMinSize, IsNotEmpty, IsString } from "class-validator";


export class CreateSkillDto{
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @ArrayMinSize(1, { message: 'Skills should not be empty' })
    @Type(() => CreateSkill)
    createSkill: CreateSkill[]
    }

      
    
    export class CreateSkill{
    
         @IsNotEmpty()
         @IsString()
         skill_name:string;
    
           @IsNotEmpty()
          @IsString()
         skill_experience:string;
    
    
         @IsNotEmpty()
         skill_rating:number;
    
         @IsNotEmpty()
         @IsString()
         skill_organization:string;
     }
    
    
     
    
     