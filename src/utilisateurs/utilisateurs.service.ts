import { Injectable } from '@nestjs/common';

export type Utilisateur = any;

@Injectable()
export class UtilisateursService {
  private readonly utilisateurs = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  async findOne(username: string): Promise<Utilisateur | undefined> {
    return this.utilisateurs.find(
      (utilisateur) => utilisateur.username === username,
    );
  }
}
