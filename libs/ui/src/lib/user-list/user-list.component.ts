import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../public/user';
import { MatTableModule } from '@angular/material/table';
import { UserComponent } from "../user/user.component";


@Component({
  selector: 'angular-workspace-user-list',
  standalone: true,
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  imports: [CommonModule, MatTableModule, UserComponent]
})
export class UserListComponent  {
  
  @Input() users: User[] = [];

  displayedColumns: string[] = ['firstName', 'lastName', 'age', 'salary'];
}
