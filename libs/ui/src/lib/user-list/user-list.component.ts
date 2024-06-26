import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../public/user';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { UserComponent } from "../user/user.component";
import { CdkTableModule } from '@angular/cdk/table';
import { TableHeaderComponent } from "../table-header/table-header.component";


@Component({
    selector: 'angular-workspace-user-list',
    standalone: true,
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css'],
    imports: [CommonModule, MatTableModule, UserComponent, MatInputModule, CdkTableModule, TableHeaderComponent]
})
export class UserListComponent {

  @Input() users: User[] = [];

  displayedColumns: string[] = ['firstName', 'lastName', 'age', 'salary'];
}
