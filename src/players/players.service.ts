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
    return this.db.player.findMany();
  }

  findOne(id: number) {
    return this.db.player.findUnique({where: {id}});
  }

  update(id: number, updatePlayerDto: UpdatePlayerDto) {
    return this.db.player.update({where: {id}, data: updatePlayerDto});
  }

  remove(id: number) {
    return this.db.player.delete({where: {id}});
  }
}
