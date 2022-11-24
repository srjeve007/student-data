import { UserCredentials } from "src/auth/credential.entity";
import { BaseEntity } from "typeorm";
export declare class UserSkills extends BaseEntity {
    id: number;
    skill_name: string;
    skill_experience: string;
    skill_rating: number;
    skill_organization: string;
    createdOn: Date;
    updatedOn: Date;
    userCredentials: UserCredentials;
}
