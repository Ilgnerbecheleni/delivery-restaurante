import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsString } from "class-validator";

export class CreateTipoCarneDto {
    @ApiProperty({
        description: 'Nome do tipo de carne',
        example: 'carne cozida'
    })
    @IsString()
    nome: string;
    @IsBoolean()
   isActive: boolean;
}
