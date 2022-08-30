import { Module } from '@nestjs/common';
import { FilmController } from './controllers/film/film.controller';
import { FilmService } from './services/film/film.service';

@Module({
  controllers: [FilmController],
  providers: [FilmService]
})
export class FilmModule {}
