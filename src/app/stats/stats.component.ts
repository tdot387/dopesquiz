import { Component } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent {

  userData!: Observable<any>;

  constructor(private firestore: Firestore) {
    this.getData();
  }

  getData() {
    const collectionInstance = collection(this.firestore, 'players');
    this.userData = collectionData(collectionInstance);
  
    this.userData = this.userData.pipe(
      map((data: any[]) => {
        return data.sort((a: any, b: any) => {
          const nameA = a.player.toLowerCase();
          const nameB = b.player.toLowerCase();
          if (nameA < nameB) return -1;
          if (nameA > nameB) return 1;
          return 0;

        });
      })
    );
  }

}
