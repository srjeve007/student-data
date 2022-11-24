import { Exclude } from "class-transformer";
import { UserCredentials } from "src/auth/credential.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Experience extends BaseEntity{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    Profile:string;

    @Column()
    Organization:string;

    @Column()
    Location:string;

    @Column()
    Monthly_Salary:string;

    @Column()
    Details:string;

   // @Column()
    // startDate:Date;
    
    // @Column()
    // endDate:Date;

    @Column()
    Currently_Working:boolean;

    @CreateDateColumn()
    createdOn: Date;

     @UpdateDateColumn()
     updatedOn: Date;


     @ManyToOne((_type) =>UserCredentials, (userCredentials)=>userCredentials.experience, {eager:false})
     @Exclude({ toPlainOnly:true})
     userCredentials:UserCredentials;
}