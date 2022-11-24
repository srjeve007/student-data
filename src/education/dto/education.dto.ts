import { EducationStatus } from "../education-statu.enum";
import { ArrayMinSize, IsArray, IsNotEmpty, IsOptional, ValidateNested } from "class-validator";
 import { IsString } from "class-validator";
import { Type } from "class-transformer";
import { CreateExperience } from "src/experience/dto/experience.dto";




 export class CreateEducationDto {
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @ArrayMinSize(1, { message: 'Experience should not be empty' })
    @Type(() => CreateEducation)
    createEducation: CreateEducation[];
    }




export class CreateEducation{

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