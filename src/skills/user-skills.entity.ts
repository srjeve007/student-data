import { Exclude } from "class-transformer";
import { UserCredentials } from "src/auth/credential.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class UserSkills extends BaseEntity{

    @PrimaryGeneratedColumn()
    id : number;

    @Column({unique:true})
    skill_name:string;

    @Column()
    skill_experience:string;

    @Column()
    skill_rating:number;

    @Column()
    skill_organization:string;

    @CreateDateColumn()
    createdOn: Date;

     @UpdateDateColumn()
     updatedOn: Date;

     @ManyToOne((_type) =>UserCredentials, (userCredentials)=>userCredentials.userSkills, {eager:false})
     @Exclude({ toPlainOnly:true})
     userCredentials:UserCredentials;

     



    
}