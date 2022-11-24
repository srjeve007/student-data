
import { Education } from "src/education/education.entity";
import { Experience } from "src/experience/experience.entity";
import { UserSkills } from "src/skills/user-skills.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Referral } from "./refferel.entity";

@Entity()
export class UserCredentials{

    @PrimaryGeneratedColumn('increment')
     id:string;

     @Column({default:null})
     usedReferCodeOfThis:string;

     @Column({unique:true, default:null})
     email:string;

     @Column({default:null})
     password:string;


    //  @Column({default:null})
    //  selfReferralCode:number;

     @Column({default:null})
     referralId:number;

     @CreateDateColumn()
      createdOn:Date;


    

    @OneToMany((_type) =>Experience, (experience)=>experience.userCredentials , {eager:true}  )
    experience:Experience[];

     @OneToMany( (_type) =>Education,   (education)=>education.userCredentials, {eager:true}  )
     education:Education[];

     @OneToMany( (_type) =>UserSkills,   (userSkills)=>userSkills.userCredentials, {eager:true}  )
     userSkills:UserSkills[];
   

     @OneToMany( (_type) =>Referral,   (referral)=>referral.userCredentials, {eager:true}  )
     referral:Referral[];
     
}