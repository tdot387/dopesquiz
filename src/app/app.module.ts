import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { DialogAddUserComponent } from './dialog-add-user/dialog-add-user.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { GameComponent } from './game/game.component';
import { PlayersComponent } from './players/players.component';
import { StatsComponent } from './stats/stats.component';
import { DialogNewGameComponent } from './dialog-new-game/dialog-new-game.component';
import { MatStepperModule, matStepperAnimations } from '@angular/material/stepper';
import { DialogGameDetailsComponent } from './dialog-game-details/dialog-game-details.component';


@NgModule({
  declarations: [
    AppComponent,
    DialogAddUserComponent,
    GameComponent,
    PlayersComponent,
    StatsComponent,
    DialogNewGameComponent,
    DialogGameDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatSidenavModule,
    MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
