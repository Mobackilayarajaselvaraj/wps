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
  constructor(private _apiService: BackendApiService, private _route:Router, private toastr: ToastrService) {

  }
  ngOnInit() {
    // this.toastr.success('listing!');
    const lock = localStorage.getItem("Login");
    if(lock){
    this.getCognitiveTestUsers();
    }else{
      this._route.navigate(['']);
    }

  }



  searchList(data) {
    if (data && data.length > 0) {
      this.userList = this.userListCopy.filter((x) => {
        return x.examineeName.indexOf(data) >= 0;
      });
    } else {
      this.userList = this.userListCopy;
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
            this.userList = [...this.userList, ...resp.Users];
            this.userListCopy = [...this.userListCopy, ...resp.Users];
        }
      }, (error) => {
        this.spinnerLoad = false;
        console.log('error::', error);
      },
      );
  }

  getCognitiveTestResult(user) {
    console.log('user::', user);
    let list = {
      "examineeId": '222',
      "testName": user.testName
    }
    this._apiService.getCognitiveTestResult(list)
      .subscribe((data) => {
        if (data &&  data['body']) {
          const resp = data['body'];
          const a = document.createElement('a');
          a.href = 'data:attachment/csv;charset=utf-8,' + encodeURI(resp);
          a.download = 'CognitiveTestReport.csv';
          a.click();
        }
      }, (error) => {
        console.log('error::', error.error.text);
      },
      );

  }

}