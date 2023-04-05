export class EmployeeResultDTO {
  id: string
  createdAt: Date
  name: string
  email: string
  departament?: string | null
  manager: boolean | null
}
