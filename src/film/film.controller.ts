import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { FilmService } from './film.service';

@Controller('film')
export class FilmController {
    constructor(private readonly filmService: FilmService) { }

    @Get()
    getFilms() {
        return this.filmService.findFilms();
    }

    @Get('id/:id')
    findUsersById(@Param('id', ParseIntPipe) id: number) {
        return this.filmService.findFilmById(id);
    }
}
