import { Application } from "express";
import { ApplicationContext } from "./context";

export function route(app: Application, ctx: ApplicationContext): void {
  app.get("/health", ctx.health.check);
  app.patch("/log", ctx.log.config);
  app.patch("/middleware", ctx.middleware.config);

  app.post("/users/search", ctx.user.search);
  app.get("/users/search", ctx.user.search);
  app.get("/users/:id", ctx.user.load);
  app.post("/users", ctx.user.create);
  app.put("/users/:id", ctx.user.update);
  app.patch("/users/:id", ctx.user.patch);
  app.delete("/users/:id", ctx.user.delete);

  app.post("/tournaments/search", ctx.tournament.search);
  app.get("/tournaments/search", ctx.tournament.search);
  app.get("/tournaments/:id", ctx.tournament.load);
  app.post("/tournaments", ctx.tournament.create);
  app.put("/tournaments/:id", ctx.tournament.update);
  app.patch("/tournaments/:id", ctx.tournament.patch);
  app.delete("/tournaments/:id", ctx.tournament.delete);

  app.post("/leagues/search", ctx.league.search);
  app.get("/leagues/search", ctx.league.search);
  app.get("/leagues/:id", ctx.league.load);
  app.post("/leagues", ctx.league.create);
  app.put("/leagues/:id", ctx.league.update);
  app.patch("/leagues/:id", ctx.league.patch);
  app.delete("/leagues/:id", ctx.league.delete);

  app.post("/players/search", ctx.player.search);
  app.get("/players/search", ctx.player.search);
  app.get("/players/:id", ctx.player.load);
  app.post("/players", ctx.player.create);
  app.put("/players/:id", ctx.player.update);
  app.patch("/players/:id", ctx.player.patch);
  app.delete("/players/:id", ctx.player.delete);

  app.post("/matchs/search", ctx.match.search);
  app.get("/matchs/search", ctx.match.search);
  app.get("/matchs/:id", ctx.match.load);
  app.post("/matchs", ctx.match.create);
  app.put("/matchs/:id", ctx.match.update);
  app.patch("/matchs/:id", ctx.match.patch);
  app.delete("/matchs/:id", ctx.match.delete);
  app.post("/matches/:tournament", ctx.tournament.saveMatch);

  app.post("/teams/search", ctx.team.search);
  app.get("/teams/search", ctx.team.search);
  app.get("/teams/:id", ctx.team.load);
  app.post("/teams", ctx.team.create);
  app.put("/teams/:id", ctx.team.update);
  app.patch("/teams/:id", ctx.team.patch);
  app.delete("/teams/:id", ctx.team.delete);
}
