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
    return this.db.team.findMany({
      include: {
        players: true,
      },
    });
  }

  findOne(id: number) {
    return this.db.team.findUnique({ 
      where: { id },
      include: {
        players: true,
      },
    });
  }

  teamsWithPlayers() {
    return this.db.team.findMany({
      include: {
        players: true,
      },
    });
  }

  update(id: number, updateTeamDto: UpdateTeamDto) {
    return this.db.team.update({ where: { id }, data: updateTeamDto });
  }

  remove(id: number) {
    return this.db.team.delete({ where: { id } });
  }
}