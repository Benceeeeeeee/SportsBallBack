import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';

@Injectable()
export class TeamsService {
  constructor(private readonly db: PrismaService) {}

  create(createTeamDto: CreateTeamDto) {
    return this.db.team.create({ data: createTeamDto });
  }

  async addPlayerToTeam(teamId: number, playerId: number) {
    return this.db.player.update({
      where: { id: playerId },
      data: {
        team: {
          connect: { id: teamId },
        },
      },
    });
  }

  findAll() {
    return `This action returns all teams`;
  }

  findOne(id: number) {
    return `This action returns a #${id} team`;
  }

  update(id: number, updateTeamDto: UpdateTeamDto) {
    return `This action updates a #${id} team`;
  }

  remove(id: number) {
    return `This action removes a #${id} team`;
  }
}