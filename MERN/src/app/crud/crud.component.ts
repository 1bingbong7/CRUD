import { Component, OnInit } from '@angular/core';
import {CrudService} from "../services/crud.service"
import { Router, ActivatedRoute } from "@angular/router";
 
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})

export class CrudComponent implements OnInit {
  data: any = [];
  constructor(private crud: CrudService, private router: Router) { }

  ngOnInit(): void {
    this.getAllData();
  }
  async getAllData(){
    this.data = await this.crud.getAllData();
  }

  async deleteData(id){
    await this.crud.deleteData(id);
    let index: number = this.data.findIndex((data) => data._id === id);
    this.data.splice(index, 1);
  }
  editData(id){
    this.router.navigate(["/Edit/"+ id]);
  }
}

@Component({
  selector: 'add-crud',
  templateUrl: './add.component.html',
  styleUrls: ['./crud.component.scss']
})
export class AddComponent implements OnInit {
  name: string = "";
  age: string = "";
  address: string = "";
  constructor(private crud: CrudService, private router: Router,) { }
  ngOnInit(): void {
  }
  async addData(){
    let data = {
      name: this.name,
      age: this.age,
      address: this.address,
    }
    let res = await this.crud.addData(data);
    if(res){
      this.router.navigate([""]);
    }
  }
  errorHandler (){
    return this.name == "" || this.age == "" || this.address == "";
  }

}

@Component({
  selector: 'edit-crud',
  templateUrl: './edit.component.html',
  styleUrls: ['./crud.component.scss']
})
export class EditComponent implements OnInit {
  name: string = "";
  age: string = "";
  address: string = "";
  id: string = "";
  constructor(private crud: CrudService, private router: Router, private route: ActivatedRoute,) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.getSingleData()
  }
  async getSingleData(){
    let res = await this.crud.getSingleData(this.id);
    if(res){
      this.name = res.name;
      this.age = res.age;
      this.address = res.address;

    }
  }
  async updateData(){
    let data = {
      name: this.name,
      age: this.age,
      address: this.address,
    }
    let res = await this.crud.updateData(this.id, data);
    if(res){
      this.router.navigate([""]);
    }
  }
  errorHandler (){
    return this.name == "" || this.age == "" || this.address == "";
  }
}
