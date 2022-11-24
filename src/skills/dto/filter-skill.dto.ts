import {  IsOptional, IsString } from "class-validator";

export class FilterSkillDto{
    @IsOptional()
    @IsString()
    skill_name:string;
}