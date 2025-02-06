import { PartialType } from "@nestjs/mapped-types";
import { CreateScreenDto } from "./create-screen.dto";

    
export class UpdateScreenDto extends PartialType(CreateScreenDto) {

}