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
exports.EducationService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const education_entity_1 = require("./education.entity");
let EducationService = class EducationService {
    constructor(educationRepository) {
        this.educationRepository = educationRepository;
    }
    async createEducation(createEducationDto, userCredentials) {
        const { createEducation } = createEducationDto;
        if (createEducation && createEducation.length) {
            console.log(createEducation);
            const are = [];
            for (const createEducation_ of createEducation) {
                console.log(createEducation_);
                const { education_level, Stream, educationStatus, institute, Percentage } = createEducation_;
                const educationExists = await this.educationRepository.findOne({ where: { education_level: 'education_level' } });
                if (educationExists) {
                    throw new common_1.NotFoundException(`Education with name "${education_level}" already exists`);
                }
                else {
                    const saveEducation = this.educationRepository.create({ education_level, Stream, educationStatus, institute, Percentage, userCredentials });
                    await this.educationRepository.save(saveEducation);
                    are.push(saveEducation);
                }
            }
            return are;
        }
    }
    async getEducation(filterEducationDto, userCredentials) {
        const { education_level } = filterEducationDto;
        const query = this.educationRepository.createQueryBuilder('education');
        query.where({ userCredentials });
        if (education_level) {
            query.andWhere('education.education_level = education_level', { education_level });
        }
        const educations = await query.getMany();
        return educations;
    }
    async getEducationById(id, userCredentials) {
        const found = await this.educationRepository.findOne({ where: { id } });
        if (!found) {
            throw new common_1.NotFoundException(`Education with ID "${id}" not found`);
        }
        return found;
    }
    async deleteEducationById(id, userCredentials) {
        const found = await this.educationRepository.findOne({ where: { id } });
        if (found) {
            await this.educationRepository.delete(id);
        }
        else {
            throw new common_1.NotFoundException(`Education with ID "${id}" not found`);
        }
    }
    async updateEducation(id, updateEducationDto, userCredentials) {
        const education = await this.getEducationById(id, userCredentials);
        const { education_level, Stream, educationStatus, institute, Percentage } = updateEducationDto;
        education.education_level = education_level;
        education.Stream = Stream;
        education.educationStatus = educationStatus;
        education.institute = institute;
        education.Percentage = Percentage;
        await this.educationRepository.save(education);
        return education;
    }
};
EducationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(education_entity_1.Education)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EducationService);
exports.EducationService = EducationService;
//# sourceMappingURL=education.service.js.map