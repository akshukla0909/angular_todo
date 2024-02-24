import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpService } from '../../../services/http.service';
import { PageTitleComponent } from '../../page-title/page-title.component';
import { TaskListComponent } from '../../task-list/task-list.component';

@Component({
  selector: 'app-all-task',
  standalone: true,
  imports: [FormsModule,PageTitleComponent, TaskListComponent],
  templateUrl: './all-task.component.html',
})
export class AllTaskComponent {
   newTask = ""
   taskList : any[] = []
   httpService = inject(HttpService)
   ngOnInit(){
    this.getAllTasks()
   }
   addTask(){
    // console.log("hello", this.newTask);
      this.httpService.addTask(this.newTask).subscribe(()=>{
        // console.log("added");
        this.newTask = ""
        this.getAllTasks();
      })
   }

   getAllTasks(){
        this.httpService.getAllTasks().subscribe((result: any)=>{
          console.log(result);
          this.taskList = result
          
        })
   }

   onComplete(task:any){
        task.completed = true
        console.log("comp");
        this.httpService.updateTask(task).subscribe(()=>{
          
        })
        
   }
   onImportant(task:any){
       task.important = true
       console.log("imp");
       
   }
}
