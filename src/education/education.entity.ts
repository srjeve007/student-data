import { Exclude } from "class-transformer";
import { UserCredentials } from "src/auth/credential.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { EducationStatus } from "./education-statu.enum";

@Entity()
export class Education extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    education_level:string;

    @Column()
    Stream:string;

    @Column()
    educationStatus:EducationStatus;

    @Column()
    institute:string;

    // @Column()
    // startDate:Date;

    // @Column()
    // endDate:Date;

    @Column()
    Percentage:string;

    @CreateDateColumn()
    createdOn: Date;

     @UpdateDateColumn()
     updatedOn: Date;

     @ManyToOne((_type) =>UserCredentials, (userCredentials)=>userCredentials.education, {eager:false})
     @Exclude({ toPlainOnly:true})
     userCredentials:UserCredentials;
   





}