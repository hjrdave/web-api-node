import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Film } from './film.entity';

@Injectable()
export class FilmService {
    constructor(
        @InjectRepository(Film)
        private filmRepository: Repository<Film>,
    ) { };

    getAll(): Promise<Film[]> {
        return this.filmRepository.find();
    }
}
