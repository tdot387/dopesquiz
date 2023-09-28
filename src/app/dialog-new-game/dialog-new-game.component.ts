import { Component } from '@angular/core';
import { Firestore, collection, addDoc, doc, updateDoc, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-dialog-new-game',
  templateUrl: './dialog-new-game.component.html',
  styleUrls: ['./dialog-new-game.component.scss']
})
export class DialogNewGameComponent {

  userData!: Observable<any>;
  constructor(private firestore: Firestore) {
    this.getData();
  }

  createGame(g: any) {

    const collectionInstance = collection(this.firestore, 'gameInfo');
    addDoc(collectionInstance, g.value);
    

  }

  getData() {
    const collectionInstance = collection(this.firestore, 'gameInfo');
    collectionData(collectionInstance, { idField: 'id' }).subscribe(val => {
      this.userData = collectionData(collectionInstance, { idField: 'id' });
      console.log(val);

    })
  }

  updateData(id: string) {
    this.getData();
    const docInstance = doc(this.firestore, 'gameInfo', id);
    const updateData = {
      gameName: 'updatedName'
    }
    updateDoc(docInstance, updateData)
    .then(() => {
      console.log('updated');
      
    })
    .catch((err) => {
      console.log(err);
      
    })
  }

}
