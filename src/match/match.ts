import { Attributes, DateRange, Filter, Repository, Service } from "onecore";

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

export interface MatchRepository extends Repository<Match, string> {}

export interface MatchService
  extends Service<Match, string, MatchFilter> {}

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

export interface MatchFilter extends Filter {
    id: string;
    tournamentId: string;
    round: string;
    team1: string;
    team2: string;
    score1: string;
    score2: string;
    dateCreated: Date;
}
