"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
const credential_entity_1 = require("./auth/credential.entity");
const refferel_entity_1 = require("./auth/refferel.entity");
const education_entity_1 = require("./education/education.entity");
const experience_entity_1 = require("./experience/experience.entity");
const user_skills_entity_1 = require("./skills/user-skills.entity");
exports.typeOrmConfig = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Shubh@7507',
    database: 'userinfo',
    synchronize: true,
    entities: [user_skills_entity_1.UserSkills, education_entity_1.Education, experience_entity_1.Experience, credential_entity_1.UserCredentials, refferel_entity_1.Referral],
};
//# sourceMappingURL=typeorm.config.js.map