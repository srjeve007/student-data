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
exports.SkillsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_skills_entity_1 = require("./user-skills.entity");
let SkillsService = class SkillsService {
    constructor(skillsRepository) {
        this.skillsRepository = skillsRepository;
    }
    async createSkills(createSkillDto, userCredentials) {
        const { createSkill } = createSkillDto;
        if (createSkill && createSkill.length) {
            const are = [];
            for (const createSkill_ of createSkill) {
                const { skill_name, skill_experience, skill_rating, skill_organization, } = createSkill_;
                const skillExist = await this.skillsRepository.findOne({ where: { skill_name: 'skill_name' } });
                if (skillExist) {
                    console.log(skill_name);
                    throw new common_1.NotFoundException(`Skill with name "${skill_name}" already exists`);
                }
                else {
                    const saveSkill = this.skillsRepository.create({ skill_name, skill_experience, skill_rating, skill_organization, userCredentials });
                    await this.skillsRepository.save(saveSkill);
                    are.push(saveSkill);
                }
            }
            return are;
        }
    }
    async getSkills(filterSkillDto, userCredentials) {
        const { skill_name } = filterSkillDto;
        const query = this.skillsRepository.createQueryBuilder('skill');
        query.where({ userCredentials });
        if (skill_name) {
            query.andWhere('skill.skill_name = skill_name', { skill_name });
        }
        const skills = await query.getMany();
        return skills;
    }
    async getSkillById(id, userCredentials) {
        const found = await this.skillsRepository.findOne({ where: { id } });
        if (!found) {
            throw new common_1.NotFoundException(`Skill with ID "${id}" not found`);
        }
        return found;
    }
    async deleteSkillById(id, userCredentials) {
        const found = await this.skillsRepository.findOne({ where: { id } });
        if (found) {
            await this.skillsRepository.delete(id);
        }
        else {
            throw new common_1.NotFoundException(`Skill with ID "${id}" not found`);
        }
    }
    async updateSkill(id, updateSkillDto, userCredentials) {
        const skill = await this.getSkillById(id, userCredentials);
        const { skill_name, skill_experience, skill_rating, skill_organization, } = updateSkillDto;
        skill.skill_name = skill_name;
        skill.skill_experience = skill_experience;
        skill.skill_rating = skill_rating;
        skill.skill_organization = skill_organization;
        await this.skillsRepository.save(skill);
        return skill;
    }
};
SkillsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_skills_entity_1.UserSkills)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SkillsService);
exports.SkillsService = SkillsService;
//# sourceMappingURL=skills.service.js.map