import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../public/user';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'angular-workspace-user',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {

  user = new User('Mosine', 'Hajjar', 24, 50000);


}
