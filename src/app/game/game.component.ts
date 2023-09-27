import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogNewGameComponent } from '../dialog-new-game/dialog-new-game.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {

  constructor(public dialog: MatDialog){
  }
    createGame() {
      this.dialog.open(DialogNewGameComponent);
  }

}
