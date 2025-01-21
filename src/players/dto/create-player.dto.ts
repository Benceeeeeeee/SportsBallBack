import { Type } from "class-transformer";
import { IsDate, IsNumber, IsString } from "class-validator";

export class CreatePlayerDto {
    @IsString()
    name: string;
    
    @IsNumber()
    goalCount: number;
    
    @Type(() => Date)
    @IsDate()
    birthDate: Date;
}
