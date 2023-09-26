import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';


@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent {

  constructor(public dialog: MatDialog){

  }

  openAddUserDialog() {
    this.dialog.open(DialogAddUserComponent);
  }
}
