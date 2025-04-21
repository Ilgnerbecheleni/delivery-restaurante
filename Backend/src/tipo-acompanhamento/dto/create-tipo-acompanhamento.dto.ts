import { IsBoolean, IsString } from "class-validator";

export class CreateTipoAcompanhamentoDto {
    @IsString()
    nome: string;
    @IsBoolean()
    isActive: boolean;
}
