import { IsBoolean, IsEmail, IsNotEmpty, IsString, IsUUID, Length } from 'class-validator'

export class Employee {
  @IsString()
  @IsNotEmpty()
  @Length(5, 15)
    name: string

  @IsEmail()
  @IsNotEmpty()
    email: string

  @IsString()
    departament?: string

  @IsBoolean()
    manager?: boolean
}

export class CreateEmployeeParams extends Employee {
  @IsNotEmpty()
  @IsString()
    password: string
}

export class EmployeeResult extends Employee {
  @IsUUID()
    id: string

  createdAt: Date
  updatedAt:Date
}

