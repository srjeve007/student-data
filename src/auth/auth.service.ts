import { ConflictException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserCredentials } from './credential.entity';
import { AuthenticationDto } from './dto/authentication.dto';
import  * as bcrypt from 'bcrypt';
import { JwtPayload } from './jwt-payload.interface';
import { JwtService } from '@nestjs/jwt';

import { BadRequestException } from '@nestjs/common/exceptions';
import { Referral } from './refferel.entity';


@Injectable()
export class AuthService {

    constructor(
     @InjectRepository(UserCredentials,)
     public UserCredentialRepository: Repository<UserCredentials>,
     @InjectRepository(Referral)
     public ReferralRepository:Repository<Referral>,
     private jwtService:JwtService, ) {}

     async signUp(authenticationDto:AuthenticationDto):Promise<void>{
        const {email, password, referralId}=authenticationDto; // i will extract referral code also
        const salt =await bcrypt.genSalt();
        const hashedPassword= await bcrypt.hash(password, salt);



if(referralId)
        { 
            const useReferral= await this.UserCredentialRepository.findOne({where:{referralId:referralId}});
           // console.log(useReferral);

        if(!useReferral)
            {
            const found_referral= await this.ReferralRepository.findOne({where:{referralId:referralId}});
            const usedReferCodeOfThis =found_referral.id;

            if(found_referral)
            {
                    const user=  this.UserCredentialRepository.create({email, password:hashedPassword, referralId ,usedReferCodeOfThis});
            
                  try{ await this.UserCredentialRepository.save(user);  }
                  catch(error)
                            { 
                                if(error.errno===1062){
                                     throw new ConflictException('username already exist');
                                 } 
                                 else{
                                     throw new InternalServerErrorException();
                                 }
                            }
             }
                else{ throw new BadRequestException(" enter valid referral code");}
            }
            else{ throw new BadRequestException(" Referral code already used");}
        }

       else
        { 
            const user=  this.UserCredentialRepository.create({email, password:hashedPassword});
            
                  try{ await this.UserCredentialRepository.save(user);  }
                  catch(error)
                            { 
                                if(error.errno===1062){
                                     throw new ConflictException('username already exist');
                                 } 
                                 else{
                                     throw new InternalServerErrorException();
                                 }
                            }

        }
 
    
    
    }
 

     async signIn(authenticationDto:AuthenticationDto):Promise<{accessToken:string}>{
        const {email, password}=authenticationDto;
        const user= await this.UserCredentialRepository.findOne({where:{email}});

        

        if(user && (await bcrypt.compare(password, user.password))){
            const payload:JwtPayload= {email};
            const accessToken:string =  this.jwtService.sign(payload);

            return {accessToken}
        }
        else{ throw new UnauthorizedException(' Please check your login credentials'); }

     }


     async createReferral(userCredentials:UserCredentials):Promise<any>{   

       const  referralId= Math.floor(Math.random() * 1000000000);
        const refer= this.ReferralRepository.create({referralId,userCredentials});
        await this.ReferralRepository.save(refer);
        return referralId;
     }
 }
