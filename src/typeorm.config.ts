import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { UserCredentials } from "./auth/credential.entity";
import { Referral } from "./auth/refferel.entity";
import { Education } from "./education/education.entity";
import { Experience } from "./experience/experience.entity";
import { UserSkills } from "./skills/user-skills.entity";


export const typeOrmConfig : TypeOrmModuleOptions= {
    type:'mysql',
    host:'localhost',
    port:3306,
    username:'root',
    password:'Shubh@7507',
    database:'userinfo',
    synchronize:true,
    entities: [UserSkills, Education, Experience,UserCredentials,Referral],

//     logging: true,
  
//   logger: 'file',
//   // migrations: [__dirname + '/../migration/**/*.{.js,.ts}'],
//   // migrations: ["dist/migration/**/*{.js,.ts}"],

//   migrations: ["dist/migration/**/*.js"],
//   migrationsTableName: 'migrations_typeorm',
//   migrationsRun: false,

  
}


 