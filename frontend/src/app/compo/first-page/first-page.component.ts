import { Component, OnInit } from '@angular/core';
import { FirstCrudService } from '../../services/firstCrudService/first-crud.service';


@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})


export class FirstPageComponent implements OnInit {
  user:any[]=[]
  constructor(private firstCrudService: FirstCrudService) { }

  ngOnInit(): void {
    this.firstCrudService.getAllUser().subscribe(data => {
      console.log(data)
      this.user = data
    })
    this.firstCrudService.deletUser(4).subscribe(data=>{
      console.log(data)
    })
  }

  selectAllUser(){

  }


 

}
