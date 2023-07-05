import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'angular-workspace-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {


  @Input() task: any;
  // tslint:disable-next-line: no-output-on-prefix
  @Output()
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  onPinTask = new EventEmitter<Event>();

  // tslint:disable-next-line: no-output-on-prefix
  @Output()
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  onArchiveTask = new EventEmitter<Event>();

  onPin(id: any) {
    this.onPinTask.emit(id);
  }
  /**
   * @ignore
   * Component method to trigger the onArchive event
   * @param id string
   */
  onArchive(id: any) {
    this.onArchiveTask.emit(id);
  }
}
