import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  projectData: any;

  constructor(
    private homeService: HomeService
  ) { }
 userDetails={
  
    username : "huloopui@yopmail.com",
    password:  "test@123",
    serverurl: "https://demo.huloop.ai/HuLoopRest"
 
 }
  ngOnInit(): void {

    
      
    this.homeService.getAllProjects().subscribe(
      (res)=>{
        this.projectData = res;
        console.log(this.projectData);
        
      }
     );
  }

}
