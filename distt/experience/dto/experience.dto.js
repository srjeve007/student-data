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
exports.CreateExperience = exports.CreateExperienceDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const class_validator_2 = require("class-validator");
class CreateExperienceDto {
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_validator_1.ArrayMinSize)(1, { message: 'Experience should not be empty' }),
    (0, class_transformer_1.Type)(() => CreateExperience),
    __metadata("design:type", Array)
], CreateExperienceDto.prototype, "createExperience", void 0);
exports.CreateExperienceDto = CreateExperienceDto;
class CreateExperience {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_2.IsString)(),
    __metadata("design:type", String)
], CreateExperience.prototype, "Profile", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_2.IsString)(),
    __metadata("design:type", String)
], CreateExperience.prototype, "Organization", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_2.IsString)(),
    __metadata("design:type", String)
], CreateExperience.prototype, "Location", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_2.IsString)(),
    __metadata("design:type", String)
], CreateExperience.prototype, "Monthly_Salary", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_2.IsString)(),
    __metadata("design:type", String)
], CreateExperience.prototype, "Details", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Boolean)
], CreateExperience.prototype, "Currently_Working", void 0);
exports.CreateExperience = CreateExperience;
//# sourceMappingURL=experience.dto.js.map