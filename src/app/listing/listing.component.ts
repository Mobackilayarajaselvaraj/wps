import { Component, OnInit, ViewChild  } from '@angular/core';
import { BackendApiService } from '../services/backend-api.service';
import { Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  public userList: any[] = [];
  userListCopy: any = [];
  spinnerLoad = false;
  spinnerLoadcsv = false;
  constructor(private _apiService: BackendApiService, private _route:Router, private toastr: ToastrService) {

  }
  ngOnInit() {
    const lock = localStorage.getItem("Login");
    if(lock){
    this.getCognitiveTestUsers();
    }else{
      this._route.navigate(['']);
    }

  }

ueser = [
  {"id":475,"examineeName":"zday-Test3","examineeId":"Uday-Test3","testName":"CognitiveTestPOC","age":8,"date":"2020-05-21 08:56:16"},
  {"id":475,"examineeName":"hday-Test3","examineeId":"Uday-Test3","testName":"CognitiveTestPOC","age":1,"date":"2020-05-21 08:56:16"},
  {"id":475,"examineeName":"zday-Test3","examineeId":"Uday-Test3","testName":"CognitiveTestPOC","age":9,"date":"2020-05-21 08:56:16"},
  {"id":475,"examineeName":"bday-Test3","examineeId":"Uday-Test3","testName":"CognitiveTestPOC","age":1111,"date":"2020-05-21 08:56:16"},
  {"id":475,"examineeName":"cday-Test3","examineeId":"Uday-Test3","testName":"CognitiveTestPOC","age":222,"date":"2020-05-21 08:56:16"},
  {"id":475,"examineeName":"eday-Test3","examineeId":"Uday-Test3","testName":"CognitiveTestPOC","age":33,"date":"2020-05-21 08:56:16"},
  {"id":475,"examineeName":"dday-Test3","examineeId":"Uday-Test3","testName":"CognitiveTestPOC","age":5,"date":"2020-05-21 08:56:16"},
]

  searchList(data) {
    if (data && data.length > 0) {
      this.userList = this.userListCopy.filter((x) => {
        return x.examineeName.toLowerCase().indexOf(data.toLowerCase()) >= 0;
      });
    } else {
      this.userList = this.userListCopy;
    }
  }



  toggle = false;
  toggles =false;
  ascDescOrder(data){
    this.toggle = !this.toggle;

    if(this.toggle){
      this.userList.sort((a, b) => parseFloat(a[data]) - parseFloat(b[data]));
    }else{
      this.userList.reverse()
    }
  }

  ascdescOrderT(data){
    this.toggles = !this.toggles;
    if(this.toggles){
      this.userList.sort((a, b) => a[data].toLowerCase() !== b[data].toLowerCase() ? a[data].toLowerCase() < b[data].toLowerCase() ? -1 : 1 : 0);
    }else{
      this.userList.reverse()
    }
  }






  getCognitiveTestUsers() {
    this.spinnerLoad = true;
    this._apiService.getCognitiveTestUsers()
      .subscribe((data) => {
        setTimeout(()=>{
          this.spinnerLoad = false;
        },1000)

        const resp = data['body'];
        // console.log(resp);
        if (resp && resp.Users && resp.Users.length > 0) {
            this.userList = [...this.userList, ...resp.Users, ...this.ueser];
            this.userListCopy = [...this.userListCopy, ...resp.Users, ...this.ueser];
        }
      }, (error) => {
        this.spinnerLoad = false;
        // console.log('error::', error);
        this.toastr.error('no data');
      },
      );
  }

  getCognitiveTestResult(user) {
    console.log('user::', user);
    let list = {
      "examineeId": user.examineeId,
      "testName": user.testName
    }
    this.spinnerLoadcsv = true;
    setTimeout(()=>{
      this.spinnerLoadcsv = false;
    },10000)
    this._apiService.getCognitiveTestResult(list)
      .subscribe((data) => {

        if (data &&  data['body']) {
          const resp = data['body'];
          const a = document.createElement('a');
          a.href = 'data:attachment/csv;charset=utf-8,' + encodeURI(resp);
          a.download = 'CognitiveTestReport.csv';
          a.click();
          this.spinnerLoadcsv = false;
        }else if(data['body'] == ''){
          this.toastr.error('no data!');
        }else{
          console.log('no data', data)
        }

      }, (error) => {
        this.spinnerLoadcsv = false;
        console.log('error::', error.error.text);
        this.toastr.error('no data!');
      },
      );

  }

}
