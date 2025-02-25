import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(){

        const secret=process.env.JWT_SECRET;
        console.log(secret);
        if(!secret){
            throw new Error();
        }
        super({
            jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration:false,
            secretOrKey:secret
        })
    }

    async validate(payload:any){
        return {
            id:payload.sub,
            name:payload.name
        }

    }

}