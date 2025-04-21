import { IsBoolean, IsString } from "class-validator";

export class CreateTipoFeijaoDto {
    @IsString()
    nome: string;
    @IsBoolean()
    isActive: boolean;

}
