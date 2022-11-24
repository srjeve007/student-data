import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController, ReferralController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserCredentials } from './credential.entity';
import {JwtModule} from '@nestjs/jwt'
import { JwtStrategy } from './jwt-strategy';
import { Referral } from './refferel.entity';


@Module({
  imports:[
    PassportModule.register( {defaultStrategy:'jwt'} ),
    JwtModule.register({
      secret:'topSecret51',
      signOptions:{expiresIn:3600,},
    }),
    TypeOrmModule.forFeature([ UserCredentials, Referral])],
  controllers: [AuthController, ReferralController],
  providers: [AuthService,JwtStrategy ],
  exports: [ JwtStrategy, PassportModule],
})
export class AuthModule {}
