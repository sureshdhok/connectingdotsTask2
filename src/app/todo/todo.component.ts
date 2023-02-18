import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  
allRes:any[]=[];
getDate:any
finalData !:any[]


  constructor(private auth:AuthService) { }

  ngOnInit() {
  this.fetchData();
  }




  fetchData(){
    this.auth.viewData().subscribe({
      next:(res:any) =>{
        {
          if (res) {
            this.allRes.push(res['todos'])
            for (const item of this.allRes) {
              for (const key in item) {
                  
                }
                this.finalData=Object.values(item);
                console.log('item', this.finalData);
                
              }
            }
          }
        },
        error:(error)=>{
          throw error;
        },
      
    });

}

}