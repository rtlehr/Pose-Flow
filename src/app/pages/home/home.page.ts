import { Component } from '@angular/core';

import { IonContent, IonIcon, IonButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { star } from 'ionicons/icons';

import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [ IonContent, IonIcon, IonButton,  RouterModule, RouterOutlet],
})
export class HomePage {

  constructor() {
    addIcons({ star });
  }

}
