import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-base-app',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './base-app.component.html',
  styleUrls: ['./base-app.component.scss']
})
export class BaseAppComponent {

}
