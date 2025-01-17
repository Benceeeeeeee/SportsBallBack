import { IsDate, IsNumber, IsString } from "class-validator";

export class CreatePlayerDto {
    @IsString()
    name: string;
    
    @IsNumber()
    goalCount: number;
    
    @IsDate()
    birthDate: Date;
}
