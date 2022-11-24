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
exports.EducationController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const credential_entity_1 = require("../auth/credential.entity");
const get_user_decorator_1 = require("../auth/get-user.decorator");
const education_dto_1 = require("./dto/education.dto");
const filter_education_dto_1 = require("./dto/filter-education.dto");
const update_education_dto_1 = require("./dto/update-education.dto");
const education_service_1 = require("./education.service");
let EducationController = class EducationController {
    constructor(educationService) {
        this.educationService = educationService;
    }
    createEducation(createEducationDto, userCredentials) {
        return this.educationService.createEducation(createEducationDto, userCredentials);
    }
    getEducation(filterEducationDto, userCredentials) {
        return this.educationService.getEducation(filterEducationDto, userCredentials);
    }
    getEducationById(id, userCredentials) {
        return this.educationService.getEducationById(id, userCredentials);
    }
    deleteEducationById(id, userCredentials) {
        return this.educationService.deleteEducationById(id, userCredentials);
    }
    updateEducation(id, updateEducationDto, userCredentials) {
        return this.educationService.updateEducation(id, updateEducationDto, userCredentials);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [education_dto_1.CreateEducationDto,
        credential_entity_1.UserCredentials]),
    __metadata("design:returntype", Promise)
], EducationController.prototype, "createEducation", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_education_dto_1.FilterEducationDto,
        credential_entity_1.UserCredentials]),
    __metadata("design:returntype", Promise)
], EducationController.prototype, "getEducation", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, credential_entity_1.UserCredentials]),
    __metadata("design:returntype", Promise)
], EducationController.prototype, "getEducationById", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, credential_entity_1.UserCredentials]),
    __metadata("design:returntype", Promise)
], EducationController.prototype, "deleteEducationById", null);
__decorate([
    (0, common_1.Patch)('/:id/updateEducation'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_education_dto_1.UpdateEducationDto,
        credential_entity_1.UserCredentials]),
    __metadata("design:returntype", Promise)
], EducationController.prototype, "updateEducation", null);
EducationController = __decorate([
    (0, common_1.Controller)('education'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __metadata("design:paramtypes", [education_service_1.EducationService])
], EducationController);
exports.EducationController = EducationController;
//# sourceMappingURL=education.controller.js.map