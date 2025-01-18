import { IsEmail, IsEnum, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name: string

    @IsEmail()
    email: string

    @IsEnum(['INTERN', 'ENGENEER', 'ADMIN'], {
        message: 'Valid role required!'
    })
    role: 'INTERN' | 'ENGENEER' | 'ADMIN'
}

function IsNoEmpty(target: CreateUserDto, propertyKey: "name"): void {
    throw new Error("Function not implemented.");
}
