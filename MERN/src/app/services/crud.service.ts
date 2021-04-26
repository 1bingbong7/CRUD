import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router, ActivatedRoute } from "@angular/router";
import { environment } from "src/environments/environment";
import {
  APIResponse,
} from "src/utils/interfaces";
@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
  ) { }

  async getSingleData(id) {
    try {
      let res = (await this.http
        .get(environment.API_BASE + "/get-single-data/" + id)
        .toPromise()) as APIResponse;
      if (res.status == "success") {
        return res.result;
      }
      throw new Error(res.code);
    } catch (err) {
      console.log(err);
    }
  }

  async getAllData() {
    try {
      let res = (await this.http
        .get(environment.API_BASE + "/get-data")
        .toPromise()) as APIResponse;
      if (res.status == "success") {
        return res.result;
      }
      throw new Error(res.code);
    } catch (err) {
      console.log(err);
    }
  }
  async addData(data) {
    try {
      let res = (await this.http
        .post(environment.API_BASE + "/add-data", data)
        .toPromise()) as APIResponse;
      if (res.status == "success") {
        return res.result;
      }
      throw new Error(res.code);
    } catch (err) {
      console.log(err);
    }
  }
  async updateData(id, data) {
    try {
      let res = (await this.http
        .post(environment.API_BASE + "/update-data/" + id, data)
        .toPromise()) as APIResponse;
      if (res.status == "success") {
        return res.result;
      }
      throw new Error(res.code);
    } catch (err) {
      console.log(err);
    }
  }

  async deleteData(id) {
    try {
      let res = (await this.http
        .post(environment.API_BASE + "/delete-data/" + id, null)
        .toPromise()) as APIResponse;
      if (res.status == "success") {
        return res.result;
      }
      throw new Error(res.code);
    } catch (err) {
      console.log(err);
    }
  }
}
