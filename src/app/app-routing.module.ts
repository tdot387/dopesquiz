import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { PlayersComponent } from './players/players.component';
import { StatsComponent } from './stats/stats.component';
import { DialogGameDetailsComponent } from './dialog-game-details/dialog-game-details.component';

const routes: Routes = [
  {path: '', component: GameComponent},
  {path: 'game', component: GameComponent},
  {path: 'players', component: PlayersComponent},
  {path: 'stats', component: StatsComponent},
  {path: 'game/:id', component: DialogGameDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
