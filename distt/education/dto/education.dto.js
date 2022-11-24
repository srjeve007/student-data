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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEducation = exports.CreateEducationDto = void 0;
const education_statu_enum_1 = require("../education-statu.enum");
const class_validator_1 = require("class-validator");
const class_validator_2 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class CreateEducationDto {
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_validator_1.ArrayMinSize)(1, { message: 'Experience should not be empty' }),
    (0, class_transformer_1.Type)(() => CreateEducation),
    __metadata("design:type", Array)
], CreateEducationDto.prototype, "createEducation", void 0);
exports.CreateEducationDto = CreateEducationDto;
class CreateEducation {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_2.IsString)(),
    __metadata("design:type", String)
], CreateEducation.prototype, "education_level", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_2.IsString)(),
    __metadata("design:type", String)
], CreateEducation.prototype, "Stream", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateEducation.prototype, "educationStatus", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_2.IsString)(),
    __metadata("design:type", String)
], CreateEducation.prototype, "institute", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_2.IsString)(),
    __metadata("design:type", String)
], CreateEducation.prototype, "Percentage", void 0);
exports.CreateEducation = CreateEducation;
//# sourceMappingURL=education.dto.js.map