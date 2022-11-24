import { IsNotEmpty, IsString } from "class-validator";

export class FilterEducationDto{
    @IsNotEmpty()
    @IsString()
    education_level:string;
}