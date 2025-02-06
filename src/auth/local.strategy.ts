import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "./auth.service";
import { LoginUserDto } from "./dto/login-user.dto";
import { userInfo } from "os";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(private authService : AuthService){
        super({usernameField: 'email'});
    }

    async validate(email:string,password:string){
        const user=await this.authService.validateLogin(email,password);
        return user;
    }

    

}