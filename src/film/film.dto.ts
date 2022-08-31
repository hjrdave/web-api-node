import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class CreateFilmDto {


    @IsNotEmpty()
    @MinLength(1)
    id: number;

    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    @MinLength(4)
    releaseYear: string;

    @IsNotEmpty()
    languageId: number;

    @IsNotEmpty()
    rentalDuration: number;

    @IsNotEmpty()
    rentalRate: number;

    @IsNotEmpty()
    length: number;

    @IsNotEmpty()
    replacementCost: number;

    @IsNotEmpty()
    rating: string;

    @IsNotEmpty()
    lastUpdate: string;

    @IsNotEmpty()
    specialFeatures: string[];

    @IsNotEmpty()
    fullText: string;
}