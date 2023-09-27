import { Component } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent {

  constructor(private firestore: Firestore) { }

  addData(f: any) {
    const collectionInstance = collection(this.firestore, 'players');

    const player = {
      player: f.value.player,
      points: 0,
    }

    addDoc(collectionInstance, player);
  }
}
