import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { CdkTableModule } from '@angular/cdk/table';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  imports: [CommonModule, MatCardModule, MatInputModule, CdkTableModule, MatTableModule],

})
export class UiModule { }
