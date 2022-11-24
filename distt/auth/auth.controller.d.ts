import { AuthService } from './auth.service';
import { UserCredentials } from './credential.entity';
import { AuthenticationDto } from './dto/authentication.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signUp(authenticationDto: AuthenticationDto): Promise<void>;
    signIn(authenticationDto: AuthenticationDto): Promise<{
        accessToken: string;
    }>;
}
export declare class ReferralController {
    private authService;
    constructor(authService: AuthService);
    createReferral(userCredentials: UserCredentials): Promise<any>;
}
