import { Component, OnInit } from '@angular/core';
import { BackendApiService } from '../services/backend-api.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  public userList: any[] = [];
  userListCopy:any=[];
  constructor(private _apiService: BackendApiService) {

  }
  ngOnInit() {
    this.getCognitiveTestUsers();

  }

  searchList(data){
    if(data && data.length > 0){
      this.userList = this.userListCopy.filter((x)=> {
          return x.examineeName.indexOf(data) >= 0;
      });
    }else{
      this.userList =  this.userListCopy;
    }
  }
  getCognitiveTestUsers() {
    this._apiService.getCognitiveTestUsers()
      .subscribe((data) => {
        const resp = data['body'];
        console.log(resp);
        if (resp && resp.Users && resp.Users.length > 0) {
          this.userList = [...this.userList, ...resp.Users];
          this.userListCopy = [...this.userListCopy, ...resp.Users];
        }
      }, (error) => {
        console.log('error::', error);
      },
      );
  }

  getCognitiveTestResult(user) {
    console.log('user::', user);
    let list ={
      "examineeId":'222',
      "testName":user.testName
    }
    this._apiService.getCognitiveTestResult(list)
    .subscribe((data) => {
      const resp = data['body'];
      console.log('data',data);
      console.log('resp',resp);
       // var encodedUri = encodeURI(error.error.text);
        // var link = document.createElement("a");
        // link.setAttribute("href", encodedUri);
        // link.setAttribute("download", "list_data.csv");
        // document.body.appendChild(link);
        // link.click();


    }, (error) => {
        console.log('error::', error.error.text);
      },
    );

  }

}
