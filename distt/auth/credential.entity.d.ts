import { Education } from "src/education/education.entity";
import { Experience } from "src/experience/experience.entity";
import { UserSkills } from "src/skills/user-skills.entity";
import { Referral } from "./refferel.entity";
export declare class UserCredentials {
    id: string;
    usedReferCodeOfThis: string;
    email: string;
    password: string;
    referralId: number;
    createdOn: Date;
    experience: Experience[];
    education: Education[];
    userSkills: UserSkills[];
    referral: Referral[];
}
