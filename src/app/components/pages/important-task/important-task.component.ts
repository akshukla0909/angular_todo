import { Component, inject } from '@angular/core';
import { PageTitleComponent } from '../../page-title/page-title.component';
import { HttpService } from '../../../services/http.service';
import { TaskListComponent } from '../../task-list/task-list.component';

@Component({
  selector: 'app-important-task',
  standalone: true,
  imports: [PageTitleComponent, TaskListComponent],
  templateUrl: './important-task.component.html',
})
export class ImportantTaskComponent {
  newTask = ""
  taskList : any[] = []
  httpService = inject(HttpService)
  ngOnInit(){
   this.getAllTasks()
  }
  

  getAllTasks(){
       this.httpService.getAllTasks().subscribe((result: any)=>{
         console.log(result);
         this.taskList = result.filter( (x : any) => x.important === true)
         
       })
  }

  onComplete(task:any){
       task.completed = true
       console.log("comp");
       this.httpService.updateTask(task).subscribe(()=>{
          this.getAllTasks()
       })
       
  }
  onImportant(task:any){
      task.important = true
      console.log("imp");
      
  }
}
