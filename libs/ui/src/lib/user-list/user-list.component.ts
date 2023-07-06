import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../public/user';
import { MatTableModule } from '@angular/material/table';


@Component({
  selector: 'angular-workspace-user-list',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
  users: User[] = [
    new User('mosine', 'me', 30, 50000),
    new User('mahdi', 'rida', 25, 60000),
    new User('amine', 'm.', 35, 140000),

  ];
  
  displayedColumns: string[] = ['firstName', 'lastName', 'age', 'salary'];
}
