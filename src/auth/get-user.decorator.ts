import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { UserCredentials } from "./credential.entity";

export const GetUser = createParamDecorator(
    (_data, ctx:ExecutionContext):UserCredentials =>{
        const req = ctx.switchToHttp().getRequest();
        return req. user;
    },
);