import { Component, OnInit } from '@angular/core';
import { FirstCrudService } from '../../services/firstCrudService/first-crud.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})


export class FirstPageComponent implements OnInit {
  user:any[]=[]
  idUserUpdate:any
  newPassword:any
  constructor(private firstCrudService: FirstCrudService) { }

  ngOnInit(): void {
    this.firstCrudService.getAllUser().subscribe(data => {
      console.log(data)
      this.user = data
    })
  }

  deletUser(i:any){
    this.firstCrudService.deletUser(i).subscribe(data=>{
      console.log(i)
    })
  }


  updateUser(id:any,newPassword:any){
    console.log(id)
    console.log(newPassword)
    this.firstCrudService.updateUser(id,newPassword).subscribe(data=>{
      console.log(id)
    })
  }


 

}
