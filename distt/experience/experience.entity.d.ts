import { UserCredentials } from "src/auth/credential.entity";
import { BaseEntity } from "typeorm";
export declare class Experience extends BaseEntity {
    id: number;
    Profile: string;
    Organization: string;
    Location: string;
    Monthly_Salary: string;
    Details: string;
    Currently_Working: boolean;
    createdOn: Date;
    updatedOn: Date;
    userCredentials: UserCredentials;
}
