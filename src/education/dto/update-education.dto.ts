import { IsNotEmpty, IsString } from "class-validator";
import { EducationStatus } from "../education-statu.enum";

export class UpdateEducationDto{

    @IsNotEmpty()
    @IsString()
    education_level:string;


    @IsNotEmpty()
    @IsString()
    Stream:string;

    @IsNotEmpty()
    educationStatus:EducationStatus;

    @IsNotEmpty()
    @IsString()
    institute:string;

    
    // startDate:Date;

    
    // endDate:Date;

    @IsNotEmpty()
    @IsString()
    Percentage:string;
}