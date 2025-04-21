import { IsBoolean, IsString } from "class-validator";

export class CreateTipoCarneDto {

    @IsString()
    nome: string;
    @IsBoolean()
   isActive: boolean;
}
