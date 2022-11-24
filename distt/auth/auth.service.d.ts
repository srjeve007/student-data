import { Repository } from 'typeorm';
import { UserCredentials } from './credential.entity';
import { AuthenticationDto } from './dto/authentication.dto';
import { JwtService } from '@nestjs/jwt';
import { Referral } from './refferel.entity';
export declare class AuthService {
    UserCredentialRepository: Repository<UserCredentials>;
    ReferralRepository: Repository<Referral>;
    private jwtService;
    constructor(UserCredentialRepository: Repository<UserCredentials>, ReferralRepository: Repository<Referral>, jwtService: JwtService);
    signUp(authenticationDto: AuthenticationDto): Promise<void>;
    signIn(authenticationDto: AuthenticationDto): Promise<{
        accessToken: string;
    }>;
    createReferral(userCredentials: UserCredentials): Promise<any>;
}
