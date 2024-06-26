import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../task.model';
import { TaskComponent } from '../task/task.component';


@Component({
  selector: 'angular-workspace-task-list',
  standalone: true,
  imports: [CommonModule, TaskComponent, TaskListComponent],
  templateUrl: './task-list.component.html',
  styleUrls: ['./../task/task.component.css'],
})
export class TaskListComponent {

  /**
+  * @ignore
+  * Component property to define ordering of tasks
+  */
  tasksInOrder: Task[] = [];

  @Input() loading = false;

  // tslint:disable-next-line: no-output-on-prefix
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  @Output() onPinTask: EventEmitter<any> = new EventEmitter();
  // tslint:disable-next-line: no-output-on-prefix
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  @Output() onArchiveTask: EventEmitter<any> = new EventEmitter();

  @Input()
  set tasks(arr: Task[]) {
    const initialTasks = [
      ...arr.filter(t => t.state === 'TASK_PINNED'),
      ...arr.filter(t => t.state !== 'TASK_PINNED'),
    ];
    const filteredTasks = initialTasks.filter(
      t => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED'
    );
    this.tasksInOrder = filteredTasks.filter(
      t => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED'
    );
  }

}


