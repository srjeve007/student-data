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
exports.ExperienceController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const credential_entity_1 = require("../auth/credential.entity");
const get_user_decorator_1 = require("../auth/get-user.decorator");
const experience_dto_1 = require("./dto/experience.dto");
const filter_experience_dto_1 = require("./dto/filter-experience.dto");
const update_experience_dto_1 = require("./dto/update-experience.dto");
const experience_service_1 = require("./experience.service");
let ExperienceController = class ExperienceController {
    constructor(experienceService) {
        this.experienceService = experienceService;
    }
    createExperience(createExperienceDto, userCredentials) {
        return this.experienceService.createExperience(createExperienceDto, userCredentials);
    }
    getEducation(filterExperienceDto, userCredentials) {
        return this.experienceService.getExperience(filterExperienceDto, userCredentials);
    }
    getExperienceById(id, userCredentials) {
        return this.experienceService.getExperienceById(id, userCredentials);
    }
    deleteEducationById(id, userCredentials) {
        return this.experienceService.deleteExperienceById(id, userCredentials);
    }
    updateExperience(id, updateExperienceDto, userCredentials) {
        return this.experienceService.updateExperience(id, updateExperienceDto, userCredentials);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [experience_dto_1.CreateExperienceDto,
        credential_entity_1.UserCredentials]),
    __metadata("design:returntype", Promise)
], ExperienceController.prototype, "createExperience", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_experience_dto_1.FilterExperienceDto, credential_entity_1.UserCredentials]),
    __metadata("design:returntype", Promise)
], ExperienceController.prototype, "getEducation", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, credential_entity_1.UserCredentials]),
    __metadata("design:returntype", Promise)
], ExperienceController.prototype, "getExperienceById", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, credential_entity_1.UserCredentials]),
    __metadata("design:returntype", Promise)
], ExperienceController.prototype, "deleteEducationById", null);
__decorate([
    (0, common_1.Patch)('/:id/updateExperience'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_experience_dto_1.UpdateExperienceDto,
        credential_entity_1.UserCredentials]),
    __metadata("design:returntype", Promise)
], ExperienceController.prototype, "updateExperience", null);
ExperienceController = __decorate([
    (0, common_1.Controller)('experience'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __metadata("design:paramtypes", [experience_service_1.ExperienceService])
], ExperienceController);
exports.ExperienceController = ExperienceController;
//# sourceMappingURL=experience.controller.js.map