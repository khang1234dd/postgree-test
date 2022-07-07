import { Attributes } from "onecore";
import { DB, Repository } from "query-core";
import {
  Match,
  Tournament,
  tournamentModel,
  TournamentRepository,
} from "./tournament";

export class SqlTournamentRepository
  extends Repository<Tournament, string>
  implements TournamentRepository
{
  constructor(db: DB, table: string, attr: Attributes) {
    // super(db, "tournaments", tournamentModel);
    super(db, table, attr);
  }
  saveMatch(tournamentId:string, round: string,team1:string,team2:string): Promise<any> | string{
    try{
      this.query<any>(`insert into matchs (id, tournamentid, round, team1, team2, score1, core2, datecreate) values (DEFAULT, ${tournamentId} ,${round} ,${team1},${team2},0,0,'2022-08-07')`)
      return'success'
    }catch(err){
      return 'err'
    }
   
  }

  
  
}
