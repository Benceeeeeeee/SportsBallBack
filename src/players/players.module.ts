import { Module } from '@nestjs/common';
import { PlayersService } from './players.service';
import { PlayersController } from './players.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [PlayersController],
  providers: [PlayersService, PrismaService],
  exports: [PlayersService],
})
export class PlayersModule {}