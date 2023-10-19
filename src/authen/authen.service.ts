import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UtilisateursService } from 'src/utilisateurs/utilisateurs.service';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthenService {
  constructor(
    private UtilisateursService: UtilisateursService,
    private jwtService: JwtService,
  ) {}

  async signIn(username: string, pass: string): Promise<any> {
    const utilisateur = await this.UtilisateursService.findOne(username);
    if (utilisateur?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { sub: utilisateur.userId, username: utilisateur.username };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
