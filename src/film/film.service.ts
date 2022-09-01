import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Film } from './film.entity';

@Injectable()
export class FilmService {
    constructor(
        @InjectRepository(Film)
        private readonly filmRepository: Repository<Film>,
    ) { };

    findFilms(): Promise<Film[]> {
        return this.filmRepository.find();
    }

    findFilmById(id: number) {
        return this.filmRepository.findOne({ where: { id: id } });
    }
}
