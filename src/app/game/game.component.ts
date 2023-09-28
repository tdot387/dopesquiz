import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogNewGameComponent } from '../dialog-new-game/dialog-new-game.component';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {

  gameData!: Observable<any>;

  constructor(public dialog: MatDialog, private firestore: Firestore) {
    this.getData();

  }
  createGame() {
    this.dialog.open(DialogNewGameComponent);
  }

  getData() {
    const collectionInstance = collection(this.firestore, 'gameInfo');

    collectionData(collectionInstance, { idField: 'id' }).subscribe(val => {
      this.gameData = collectionData(collectionInstance, { idField: 'id' });
      console.log(val);
    });
  }
}
