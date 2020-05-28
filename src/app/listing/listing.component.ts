import { Component, OnInit, ViewChild  } from '@angular/core';
import { BackendApiService } from '../services/backend-api.service';
import { Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AttrAst } from '@angular/compiler';

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



  searchList(data) {
    if (data && data.length > 0) {
      this.userList = this.userListCopy.filter((x) => {
        return x.examineeName.toLowerCase().indexOf(data.toLowerCase()) >= 0;
      });
    } else {
      this.userList = this.userListCopy;
    }
  }



  orderControl(label,element,orderType?){
    let ot;
    if(orderType){
      ot = orderType;
    }else{
     ot = element.dataset['order'];
    }

   const type = typeof this.userList[0][label]
   switch(type){
    case 'number':
      this.sortNumber(label, ot)
      break;
      case 'string':
      this.sortString(label, ot)
      break;
   }
   element.dataset['order'] = element.dataset['order'] == 'asc'?'desc':'asc';

  }

  sortNumber(label,type){
    if(type==="asc"){
      this.userList.sort((a, b) => parseFloat(a[label]) - parseFloat(b[label]));
    }else{
      this.userList.sort((a, b) => parseFloat(b[label]) - parseFloat(a[label]));
    }
  }

  sortString(label,type){
    if(type==="asc"){
    this.userList.sort((cur,next)=> next[label].toLowerCase() > cur[label].toLowerCase() ? -1 : 1);
    }else{
      this.userList.sort((cur,next)=> next[label].toLowerCase() > cur[label].toLowerCase() ? 1 : -1);
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
        // console.log('error::', error);
        this.toastr.error('no data');
      },
      );
  }

  getCognitiveTestResult(user) {
    console.log('user::', user);
    let list = {
      "examineeId": user.examineeId,
      "testName": user.testName,
      "age":user.age
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
