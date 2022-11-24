import { IsNotEmpty, IsOptional, IsString, Matches, MaxLength, MinLength, UUIDVersion } from "class-validator";


export class AuthenticationDto {

    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(32)
    email: string;


    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    @MaxLength(32)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
  {
     message: 'Passwords will contain at least 1 upper case letter Passwords will contain at least 1 lower case letter Passwords will contain at least 1 number or special character'})
    password: string;


    @IsOptional()
    referralId:number;

        }