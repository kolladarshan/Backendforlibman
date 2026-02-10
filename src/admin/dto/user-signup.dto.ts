import { IsNotEmpty, IsString, MinLength } from "class-validator";
import { adminsignin } from "./admin-signnin.dto";
export class AdminSignup extends adminsignin{
    @IsNotEmpty({message:"Name should filled"})
    @IsString({message:"should be in string"})
    name:string;

}