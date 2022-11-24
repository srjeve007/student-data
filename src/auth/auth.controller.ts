import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {AuthService} from './auth.service';
import { UserCredentials } from './credential.entity';
import { AuthenticationDto } from './dto/authentication.dto';
import { GetUser } from './get-user.decorator';

@Controller('auth')
export class AuthController {

    constructor(private authService:AuthService) {}
       
    
    
        @Post('/signup')
        signUp(@Body() authenticationDto:AuthenticationDto):Promise<void>{
            return this.authService.signUp(authenticationDto);
        }
    
        @Post('/signin')
        signIn(@Body() authenticationDto:AuthenticationDto):Promise<{ accessToken: string}>{
            return this.authService.signIn(authenticationDto);
        }



        
      
}

@Controller('referral')
@UseGuards(AuthGuard())
export class ReferralController{

    constructor(private authService:AuthService) {}


    @Post('/ReferralId')
    createReferral(@GetUser() userCredentials:UserCredentials):Promise<any>{

        return this.authService.createReferral(userCredentials);
    }


    // @Get('/ReferralId')
    // getAllUserByReferralId()

}