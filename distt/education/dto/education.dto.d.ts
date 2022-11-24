import { EducationStatus } from "../education-statu.enum";
export declare class CreateEducationDto {
    createEducation: CreateEducation[];
}
export declare class CreateEducation {
    education_level: string;
    Stream: string;
    educationStatus: EducationStatus;
    institute: string;
    Percentage: string;
}
