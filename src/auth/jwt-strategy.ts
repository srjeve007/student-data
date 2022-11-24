import { Injectable } from "@nestjs/common";
import { UnauthorizedException } from "@nestjs/common/exceptions";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { AuthService } from './auth.service' 
import { JwtPayload } from "./jwt-payload.interface";

@Injectable()

export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(private authService:AuthService)
    {
        super({
            secretOrKey:'topSecret51',
            jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
        })
    }


     async validate(payload:JwtPayload):Promise<any>{
        const {email}=payload;
        const user = await this.authService.UserCredentialRepository.find({where:{email} });

        if(!user)
            {
                throw new UnauthorizedException();
            }

            return user;
     }
}