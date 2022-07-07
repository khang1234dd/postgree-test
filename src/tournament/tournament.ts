import { Attributes, DateRange, Filter, Repository, Service } from "onecore";

export interface Tournament {
  id: string;
  name: string;
  description: string;
  startDate?: string;
  endDate?: string;
  kind: string;
  status: string;
}


export interface Match {
  id: string;
  tournamentId: string;
  round: string;
  team1: string;
  team2: string;
  score1: string;
  score2: string;
  dateCreated: Date;
}

export interface TournamentRepository extends Repository<Tournament, string> {
  saveMatch(tournamentId:string, round: string,team1:string,team2:string): Promise<any> | string
}

export interface TournamentService
  extends Service<Tournament, string, TournamentFilter> {
    saveMatch(tournamentId:string, round: string,team1:string,team2:string): Promise<any> |string
  }

export const tournamentModel: Attributes = {
  id: {
    key: true,
    match: "equal",
  },
  name: {
    required: true,
  },
  description: {},
  startDate: {},
  endDate: {},
  kind: {},
  status: {},
};

export const matchModel: Attributes = {
  id: {
    key: true,
    match: "equal",
  },
  tournamentId: {
    required: true,
  },
  round: {
    required: true,
  },
  team1: {
    required: true,
  },
  team2: {
    required: true,
  },
  score1: {},
  score2: {},
  dateCreated: {},
};

export interface TournamentFilter extends Filter {
  id: string;
  name: string;
  description: string;
  startDate?: string;
  endDate?: string;
  kind: string;
  status: string;
}
