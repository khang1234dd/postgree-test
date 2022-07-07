import { Controller, handleError, Log } from "express-ext";
import { Request, Response } from "express";
import { Tournament, TournamentFilter, TournamentService } from "./tournament";

export class TournamentController extends Controller<
  Tournament,
  string,
  TournamentFilter
> {
  constructor(log: Log, protected tournamentService: TournamentService) {
    super(log, tournamentService);
  }
  async saveMatch(req:Request, res:Response){
    const {tournamentId} = req.params


    const result = this.tournamentService.saveMatch(tournamentId,'1','sida1','sida2')
    if(result === 'success'){
      res.status(201).json({message: "create success"})
    }else {
      res.send({message: "err"})

    }
    
  }
}
