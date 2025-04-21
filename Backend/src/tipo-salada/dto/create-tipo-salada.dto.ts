import { IsBoolean, IsString } from "class-validator";

export class CreateTipoSaladaDto {

    @IsString()
    nome: string;
    @IsBoolean()
    isActive: boolean;
}
