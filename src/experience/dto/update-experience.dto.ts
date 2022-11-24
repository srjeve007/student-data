import {  IsOptional } from "class-validator";
 import { IsString } from "class-validator";

export class UpdateExperienceDto{

    @IsOptional()
    @IsString()
    Profile:string;

    @IsOptional()
    @IsString()
    Organization:string;

    @IsOptional()
    @IsString()
    Location:string;

    @IsOptional()
    @IsString()
    Monthly_Salary:string;

    @IsOptional()
    @IsString()
    Details:string;

   
    // startDate:Date;


    // endDate:Date;

    @IsOptional()
    Currently_Working:boolean;
}