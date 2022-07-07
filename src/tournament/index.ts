import { query } from "express";
import { Log, Manager, Search } from "onecore";
import { buildToInsertBatch, DB, insert, postgres, SearchBuilder } from "query-core";
import { TemplateMap, useQuery } from "query-mappers";

export { TournamentController };
import { SqlTournamentRepository } from "./sql-tournament-repository";
import {
  Match,
  matchModel,
  Tournament,
  TournamentFilter,
  tournamentModel,
  TournamentRepository,
  TournamentService,
} from "./tournament";
import { TournamentController } from "./tournament-controller";

export class TournamentManager
  extends Manager<Tournament, string, TournamentFilter>
  implements TournamentService
{
  constructor(
    search: Search<Tournament, TournamentFilter>,
    protected repository: TournamentRepository
  ) {
    super(search, repository);
  }
  saveMatch(tournamentId:string, round: string,team1:string,team2:string): Promise<any> | string  {
    return this.repository.saveMatch(tournamentId, round,team1,team2);
  }
}
export function useTournamentService(
  db: DB,
  mapper?: TemplateMap
): TournamentService {
  const query = useQuery("tournaments", mapper, tournamentModel, true);
  const builder = new SearchBuilder<Tournament, TournamentFilter>(
    db.query,
    "tournaments",
    tournamentModel,
    postgres,
    query
  );
  const repository = new SqlTournamentRepository(db,'matchs', matchModel);

  return new TournamentManager(builder.search, repository);
}

export function useTournamentController(
  log: Log,
  db: DB,
  mapper?: TemplateMap
): TournamentController {
  return new TournamentController(log, useTournamentService(db, mapper));
}
