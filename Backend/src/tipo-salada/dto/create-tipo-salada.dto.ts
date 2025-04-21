import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsString } from "class-validator";

export class CreateTipoSaladaDto {
    @ApiProperty({
        description: 'Nome do tipo de salada',
        example: 'alface'
    })
    @IsString()
    nome: string;
    @IsBoolean()
    isActive: boolean;
}
