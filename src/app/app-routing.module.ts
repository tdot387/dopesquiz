import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { PlayersComponent } from './players/players.component';
import { StatsComponent } from './stats/stats.component';

const routes: Routes = [
  {path: '', component: GameComponent},
  {path: 'players', component: PlayersComponent},
  {path: 'stats', component: StatsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
