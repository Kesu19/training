import { Component, OnInit } from '@angular/core';
import { FirstCrudService } from '../../services/firstCrudService/first-crud.service';
import { FormControl, FormGroup } from '@angular/forms';

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
  }

  deletUser(i:any){
    this.firstCrudService.deletUser(i).subscribe(data=>{
      console.log(i)
    })
  }
  updateUser(id:any){
    this.firstCrudService.updateUser(id).subscribe(data=>{
      console.log(id)
    })
  }


 

}
