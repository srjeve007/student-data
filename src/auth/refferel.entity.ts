import { Exclude } from "class-transformer";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserCredentials } from "./credential.entity";

@Entity()
export class Referral{

    @PrimaryGeneratedColumn('increment')
    id:string;



    @Column()
    referralId:number;
    
    
    // @Column()
    // userSignUp:number;

    
    // @CreateDateColumn()
    // createdOn:Date;


    @ManyToOne((_type) =>UserCredentials, (userCredentials)=>userCredentials.referral, {eager:false})
    @Exclude({ toPlainOnly:true})
    userCredentials:UserCredentials;


   


    //users with that particular referral
}