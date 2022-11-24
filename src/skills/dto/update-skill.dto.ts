import {  IsOptional } from "class-validator";
 import { IsString } from "class-validator";

export class UpdateSkillDto{

    @IsOptional()
    @IsString()
    skill_name:string;

    @IsOptional()
    @IsString()
    skill_experience:string;

    
    @IsOptional()
    skill_rating:number;

    @IsOptional()
    @IsString()
    skill_organization:string;
}