import { UserCredentials } from "src/auth/credential.entity";
import { BaseEntity } from "typeorm";
import { EducationStatus } from "./education-statu.enum";
export declare class Education extends BaseEntity {
    id: number;
    education_level: string;
    Stream: string;
    educationStatus: EducationStatus;
    institute: string;
    Percentage: string;
    createdOn: Date;
    updatedOn: Date;
    userCredentials: UserCredentials;
}
