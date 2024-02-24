import { Component } from '@angular/core';
import { PageTitleComponent } from '../../page-title/page-title.component';

@Component({
  selector: 'app-completed-task',
  standalone: true,
  imports: [PageTitleComponent],
  templateUrl: './completed-task.component.html',
  // styleUrl: './completed-task.component.scss'
})
export class CompletedTaskComponent {

}
