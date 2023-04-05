import { IsBoolean, IsEmail, IsEmpty, IsNotEmpty, IsString } from 'class-validator'

export class EmployeeDTO {

  @IsString()
  @IsNotEmpty()
    name: string

  @IsString()
  @IsEmail()
  @IsNotEmpty()
    email: string

  @IsString()
  @IsEmpty()
    departament?: string | null

  @IsBoolean()
  @IsEmpty()
    manager: boolean | null
}
