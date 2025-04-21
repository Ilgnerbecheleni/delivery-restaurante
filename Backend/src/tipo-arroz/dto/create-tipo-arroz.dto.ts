import { IsBoolean, IsString } from "class-validator";

export class CreateTipoArrozDto {

    @IsString()
    nome: string;
    @IsBoolean()
        isActive: boolean;
}
