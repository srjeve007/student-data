import {  IsOptional } from "class-validator";
 import { IsString } from "class-validator";

export class FilterExperienceDto{

    @IsOptional()
    @IsString()
    Profile:string;
}