import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../public/user';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'angular-workspace-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  imports: [CommonModule, MatCardModule]
})
export class UserComponent {
  @Input() user!: User;
}
