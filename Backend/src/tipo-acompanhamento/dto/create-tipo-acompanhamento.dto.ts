import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsString } from "class-validator";

export class CreateTipoAcompanhamentoDto {
    @ApiProperty({
        description: 'Nome do tipo de acompanhamento',
        example: 'Consulta médica'
    })
    @IsString()
    nome: string;
    @IsBoolean()
    isActive: boolean;
}
