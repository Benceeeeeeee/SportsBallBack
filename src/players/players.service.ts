import { Injectable } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PlayersService {
  constructor(private readonly db: PrismaService){}

  create(createPlayerDto: CreatePlayerDto) {
    return this.db.player.create({data: createPlayerDto});
  }

  newPlayerent(id: number, createPlayerDto: CreatePlayerDto) {
    console.log(createPlayerDto)
    return this.db.player.create({
      data: {
        ...createPlayerDto,
        team: {
          connect: { id: id }
        }
      }
    })
  }

  findAll() {
    return `This action returns all players`;
  }

  findOne(id: number) {
    return `This action returns a #${id} player`;
  }

  update(id: number, updatePlayerDto: UpdatePlayerDto) {
    return `This action updates a #${id} player`;
  }

  remove(id: number) {
    return `This action removes a #${id} player`;
  }
}
