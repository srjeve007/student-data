import { Type } from "class-transformer";
import { ArrayMinSize, IsArray, IsNotEmpty, IsOptional, ValidateNested } from "class-validator";
 import { IsString } from "class-validator";






 export class CreateExperienceDto {
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @ArrayMinSize(1, { message: 'Experience should not be empty' })
    @Type(() => CreateExperience)
    createExperience: CreateExperience[]
    }




export class CreateExperience{
    
    @IsNotEmpty()
    @IsString()
    Profile:string;

    @IsNotEmpty()
    @IsString()
    Organization:string;

    @IsNotEmpty()
    @IsString()
    Location:string;

    @IsNotEmpty()
    @IsString()
    Monthly_Salary:string;

    @IsNotEmpty()
    @IsString()
    Details:string;

   
    // startDate:Date;


    // endDate:Date;

    @IsNotEmpty()
    
    Currently_Working:boolean;
}