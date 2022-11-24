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
exports.SkillsController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const credential_entity_1 = require("../auth/credential.entity");
const get_user_decorator_1 = require("../auth/get-user.decorator");
const createSkill_dto_1 = require("./dto/createSkill.dto");
const filter_skill_dto_1 = require("./dto/filter-skill.dto");
const update_skill_dto_1 = require("./dto/update-skill.dto");
const skills_service_1 = require("./skills.service");
let SkillsController = class SkillsController {
    constructor(skillsService) {
        this.skillsService = skillsService;
    }
    createSkills(createSkillDto, userCredentials) {
        return this.skillsService.createSkills(createSkillDto, userCredentials);
    }
    getSkills(filterSkillDto, userCredentials) {
        return this.skillsService.getSkills(filterSkillDto, userCredentials);
    }
    getSkillById(id, userCredentials) {
        return this.skillsService.getSkillById(id, userCredentials);
    }
    deleteSkillById(id, userCredentials) {
        return this.skillsService.deleteSkillById(id, userCredentials);
    }
    updateSkill(id, updateSkillDto, userCredentials) {
        return this.skillsService.updateSkill(id, updateSkillDto, userCredentials);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createSkill_dto_1.CreateSkillDto,
        credential_entity_1.UserCredentials]),
    __metadata("design:returntype", Promise)
], SkillsController.prototype, "createSkills", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_skill_dto_1.FilterSkillDto,
        credential_entity_1.UserCredentials]),
    __metadata("design:returntype", Promise)
], SkillsController.prototype, "getSkills", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, credential_entity_1.UserCredentials]),
    __metadata("design:returntype", Promise)
], SkillsController.prototype, "getSkillById", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, credential_entity_1.UserCredentials]),
    __metadata("design:returntype", Promise)
], SkillsController.prototype, "deleteSkillById", null);
__decorate([
    (0, common_1.Patch)('/:id/updateskill'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_skill_dto_1.UpdateSkillDto,
        credential_entity_1.UserCredentials]),
    __metadata("design:returntype", Promise)
], SkillsController.prototype, "updateSkill", null);
SkillsController = __decorate([
    (0, common_1.Controller)('skills'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __metadata("design:paramtypes", [skills_service_1.SkillsService])
], SkillsController);
exports.SkillsController = SkillsController;
//# sourceMappingURL=skills.controller.js.map