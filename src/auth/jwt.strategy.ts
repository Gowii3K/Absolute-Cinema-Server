import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(){

        const secret=process.env.JWT_SECRET;
        if(!secret){
            throw new Error();
        }
        console.log(secret);
        console.log('JWT Strategy Secret:', secret);
        console.log('JWT Strategy Secret length:', secret.length);
        console.log('JWT Strategy Secret type:', typeof secret);
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