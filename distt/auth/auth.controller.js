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
exports.ReferralController = exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const auth_service_1 = require("./auth.service");
const credential_entity_1 = require("./credential.entity");
const authentication_dto_1 = require("./dto/authentication.dto");
const get_user_decorator_1 = require("./get-user.decorator");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    signUp(authenticationDto) {
        return this.authService.signUp(authenticationDto);
    }
    signIn(authenticationDto) {
        return this.authService.signIn(authenticationDto);
    }
};
__decorate([
    (0, common_1.Post)('/signup'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [authentication_dto_1.AuthenticationDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signUp", null);
__decorate([
    (0, common_1.Post)('/signin'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [authentication_dto_1.AuthenticationDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signIn", null);
AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
let ReferralController = class ReferralController {
    constructor(authService) {
        this.authService = authService;
    }
    createReferral(userCredentials) {
        return this.authService.createReferral(userCredentials);
    }
};
__decorate([
    (0, common_1.Post)('/ReferralId'),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [credential_entity_1.UserCredentials]),
    __metadata("design:returntype", Promise)
], ReferralController.prototype, "createReferral", null);
ReferralController = __decorate([
    (0, common_1.Controller)('referral'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], ReferralController);
exports.ReferralController = ReferralController;
//# sourceMappingURL=auth.controller.js.map