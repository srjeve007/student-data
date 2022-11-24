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
exports.UserCredentials = void 0;
const education_entity_1 = require("../education/education.entity");
const experience_entity_1 = require("../experience/experience.entity");
const user_skills_entity_1 = require("../skills/user-skills.entity");
const typeorm_1 = require("typeorm");
const refferel_entity_1 = require("./refferel.entity");
let UserCredentials = class UserCredentials {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", String)
], UserCredentials.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], UserCredentials.prototype, "usedReferCodeOfThis", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true, default: null }),
    __metadata("design:type", String)
], UserCredentials.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], UserCredentials.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", Number)
], UserCredentials.prototype, "referralId", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], UserCredentials.prototype, "createdOn", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((_type) => experience_entity_1.Experience, (experience) => experience.userCredentials, { eager: true }),
    __metadata("design:type", Array)
], UserCredentials.prototype, "experience", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((_type) => education_entity_1.Education, (education) => education.userCredentials, { eager: true }),
    __metadata("design:type", Array)
], UserCredentials.prototype, "education", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((_type) => user_skills_entity_1.UserSkills, (userSkills) => userSkills.userCredentials, { eager: true }),
    __metadata("design:type", Array)
], UserCredentials.prototype, "userSkills", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((_type) => refferel_entity_1.Referral, (referral) => referral.userCredentials, { eager: true }),
    __metadata("design:type", Array)
], UserCredentials.prototype, "referral", void 0);
UserCredentials = __decorate([
    (0, typeorm_1.Entity)()
], UserCredentials);
exports.UserCredentials = UserCredentials;
//# sourceMappingURL=credential.entity.js.map