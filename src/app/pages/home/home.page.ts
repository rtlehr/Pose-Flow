import { Component, OnInit } from '@angular/core';

import { IonContent, IonIcon, IonButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logoIonic, star } from 'ionicons/icons';

import { UiService } from '../../services/ui/ui.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [ IonContent, IonIcon, IonButton],
})
export class HomePage implements OnInit {

  constructor(private ui: UiService) {
    addIcons({ star });
  }

  async ngOnInit() {
    
    this.ui.hideHeader();
    this.ui.hideFooter();
  
  }



}
