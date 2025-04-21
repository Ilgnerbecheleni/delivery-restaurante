import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsString } from "class-validator";

export class CreateTipoFeijaoDto {
    @ApiProperty({
        description: 'Nome do tipo de acompafeijãonhamento',
        example: 'feijão caldo'
    })
    @IsString()
    nome: string;
    @IsBoolean()
    isActive: boolean;

}
