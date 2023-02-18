import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
allRes:any[]=[];
getDate:any
finalData !:any[]

  constructor(private demo:DemoService) { }

  ngOnInit() {
  this.fetchData();
  }




  fetchData(){
    this.demo.getData().subscribe({
      next:(res:any) =>{
        {
          if (res) {
            this.allRes.push(res['data'])
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
