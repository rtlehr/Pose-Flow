import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';

import { UiService } from '../../services/ui/ui.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.page.html',
  styleUrls: ['./person.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule]
})
export class PersonPage {

  constructor(private ui: UiService) { }

}
