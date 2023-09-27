import { Component } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent {

  constructor(private firestore: Firestore) { 
    this.getData();
  }

  getData() {
    const collectionInstance = collection(this.firestore, 'players');
    collectionData(collectionInstance).subscribe(val => {
      console.log(val);
      
    })
  }

}
