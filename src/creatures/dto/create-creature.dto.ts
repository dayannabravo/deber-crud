import { ApiProperty } from "@nestjs/swagger";

export class CreateCreatureDto {
    @ApiProperty()
    name:string

    @ApiProperty({required:false})
    description?:string

    @ApiProperty()
    lasteSee:string

    @ApiProperty()
    countLastSee:number

    @ApiProperty({required:false, default:false})
    extinct?:boolean
}
