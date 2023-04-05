import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class CreateEmployeeParamsDTO {
  @IsString()
  @IsNotEmpty()
    name: string

  @IsEmail()
  @IsNotEmpty()
    email: string

  @IsString()
  @IsOptional()
    departament: string | null

  @IsBoolean()
  @IsOptional()
    manager: boolean | null

  @IsString()
    password: string
}
