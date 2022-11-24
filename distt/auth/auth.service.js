"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const credential_entity_1 = require("./credential.entity");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
const exceptions_1 = require("@nestjs/common/exceptions");
const refferel_entity_1 = require("./refferel.entity");
let AuthService = class AuthService {
    constructor(UserCredentialRepository, ReferralRepository, jwtService) {
        this.UserCredentialRepository = UserCredentialRepository;
        this.ReferralRepository = ReferralRepository;
        this.jwtService = jwtService;
    }
    async signUp(authenticationDto) {
        const { email, password, referralId } = authenticationDto;
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        if (referralId) {
            const useReferral = await this.UserCredentialRepository.findOne({ where: { referralId: referralId } });
            if (!useReferral) {
                const found_referral = await this.ReferralRepository.findOne({ where: { referralId: referralId } });
                const usedReferCodeOfThis = found_referral.id;
                if (found_referral) {
                    const user = this.UserCredentialRepository.create({ email, password: hashedPassword, referralId, usedReferCodeOfThis });
                    try {
                        await this.UserCredentialRepository.save(user);
                    }
                    catch (error) {
                        if (error.errno === 1062) {
                            throw new common_1.ConflictException('username already exist');
                        }
                        else {
                            throw new common_1.InternalServerErrorException();
                        }
                    }
                }
                else {
                    throw new exceptions_1.BadRequestException(" enter valid referral code");
                }
            }
            else {
                throw new exceptions_1.BadRequestException(" Referral code already used");
            }
        }
        else {
            const user = this.UserCredentialRepository.create({ email, password: hashedPassword });
            try {
                await this.UserCredentialRepository.save(user);
            }
            catch (error) {
                if (error.errno === 1062) {
                    throw new common_1.ConflictException('username already exist');
                }
                else {
                    throw new common_1.InternalServerErrorException();
                }
            }
        }
    }
    async signIn(authenticationDto) {
        const { email, password } = authenticationDto;
        const user = await this.UserCredentialRepository.findOne({ where: { email } });
        if (user && (await bcrypt.compare(password, user.password))) {
            const payload = { email };
            const accessToken = this.jwtService.sign(payload);
            return { accessToken };
        }
        else {
            throw new common_1.UnauthorizedException(' Please check your login credentials');
        }
    }
    async createReferral(userCredentials) {
        const referralId = Math.floor(Math.random() * 1000000000);
        const refer = this.ReferralRepository.create({ referralId, userCredentials });
        await this.ReferralRepository.save(refer);
        return referralId;
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(credential_entity_1.UserCredentials)),
    __param(1, (0, typeorm_1.InjectRepository)(refferel_entity_1.Referral)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map