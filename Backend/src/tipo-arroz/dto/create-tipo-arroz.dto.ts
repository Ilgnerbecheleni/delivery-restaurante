import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsString } from "class-validator";

export class CreateTipoArrozDto {
    @ApiProperty({
        description: 'Nome do tipo de arroz',
        example: 'Consulta médica'
    })
    @IsString()
    nome: string;
    @IsBoolean()
        isActive: boolean;
}
