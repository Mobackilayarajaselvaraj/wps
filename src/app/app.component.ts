import { Component, OnInit } from '@angular/core';
import { BackendApiService } from './services/backend-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public userList: any[] = [];
  title = 'app';
  constructor(private _apiService: BackendApiService) {

  }
  ngOnInit() {
    this.getCognitiveTestUsers();
    this.userList = [
      {
        'id': 33,
        'examineeName': 'Uday-111',
        'examineeId': 'Uday-111',
        'testName': 'CognitiveTestPOC',
        'age': 4
      },
      {
        'id': 34,
        'examineeName': '222',
        'examineeId': '222',
        'testName': 'CognitiveTestPOC',
        'age': 3
      },
      {
        'id': 35,
        'examineeName': 'alok111',
        'examineeId': 'alok111',
        'testName': 'CognitiveTestPOC',
        'age': 6
      },
      {
        'id': 36,
        'examineeName': 'alok111',
        'examineeId': 'alok111',
        'testName': 'CognitiveTestPOC',
        'age': 6
      },
      {
        'id': 37,
        'examineeName': 'alok111',
        'examineeId': 'alok111',
        'testName': 'CognitiveTestPOC',
        'age': 6
      },
      {
        'id': 38,
        'examineeName': 'alok111',
        'examineeId': 'alok111',
        'testName': 'CognitiveTestPOC',
        'age': 6
      },
      {
        'id': 39,
        'examineeName': 'alok111',
        'examineeId': 'alok111',
        'testName': 'CognitiveTestPOC',
        'age': 6
      },
      {
        'id': 40,
        'examineeName': 'alok111',
        'examineeId': 'alok111',
        'testName': 'CognitiveTestPOC',
        'age': 6
      },
      {
        'id': 41,
        'examineeName': 'alok111',
        'examineeId': 'alok111',
        'testName': 'CognitiveTestPOC',
        'age': 6
      },
      {
        'id': 42,
        'examineeName': 'alok111',
        'examineeId': 'alok111',
        'testName': 'CognitiveTestPOC',
        'age': 6
      },
      {
        'id': 43,
        'examineeName': 'alok111',
        'examineeId': 'alok111',
        'testName': 'CognitiveTestPOC',
        'age': 6
      },
      {
        'id': 44,
        'examineeName': 'alok111',
        'examineeId': 'alok111',
        'testName': 'CognitiveTestPOC',
        'age': 6
      },
      {
        'id': 45,
        'examineeName': 'alok111',
        'examineeId': 'alok111',
        'testName': 'CognitiveTestPOC',
        'age': 6
      },
      {
        'id': 46,
        'examineeName': 'alok111',
        'examineeId': 'alok111',
        'testName': 'CognitiveTestPOC',
        'age': 6
      },
      {
        'id': 47,
        'examineeName': 'alok111',
        'examineeId': 'alok111',
        'testName': 'CognitiveTestPOC',
        'age': 6
      },
      {
        'id': 48,
        'examineeName': 'alok111',
        'examineeId': 'alok111',
        'testName': 'CognitiveTestPOC',
        'age': 6
      },
      {
        'id': 49,
        'examineeName': 'alok111',
        'examineeId': 'alok111',
        'testName': 'CognitiveTestPOC',
        'age': 6
      },
      {
        'id': 50,
        'examineeName': 'alok111',
        'examineeId': 'alok111',
        'testName': 'CognitiveTestPOC',
        'age': 6
      },
      {
        'id': 51,
        'examineeName': 'alok111',
        'examineeId': 'alok111',
        'testName': 'CognitiveTestPOC',
        'age': 6
      },
      {
        'id': 52,
        'examineeName': 'alok111',
        'examineeId': 'alok111',
        'testName': 'CognitiveTestPOC',
        'age': 6
      },
      {
        'id': 53,
        'examineeName': 'alok111',
        'examineeId': 'alok111',
        'testName': 'CognitiveTestPOC',
        'age': 6
      },
      {
        'id': 54,
        'examineeName': 'alok111',
        'examineeId': 'alok111',
        'testName': 'CognitiveTestPOC',
        'age': 6
      },
      {
        'id': 55,
        'examineeName': 'alok111',
        'examineeId': 'alok111',
        'testName': 'CognitiveTestPOC',
        'age': 6
      },
      {
        'id': 56,
        'examineeName': 'alok111',
        'examineeId': 'alok111',
        'testName': 'CognitiveTestPOC',
        'age': 6
      },
      {
        'id': 57,
        'examineeName': 'alok111',
        'examineeId': 'alok111',
        'testName': 'CognitiveTestPOC',
        'age': 6
      },
      {
        'id': 58,
        'examineeName': 'alok111',
        'examineeId': 'alok111',
        'testName': 'CognitiveTestPOC',
        'age': 6
      },
      {
        'id': 59,
        'examineeName': 'alok111',
        'examineeId': 'alok111',
        'testName': 'CognitiveTestPOC',
        'age': 6
      },
      {
        'id': 60,
        'examineeName': 'alok111',
        'examineeId': 'alok111',
        'testName': 'CognitiveTestPOC',
        'age': 6
      },
      {
        'id': 61,
        'examineeName': 'alok111',
        'examineeId': 'alok111',
        'testName': 'CognitiveTestPOC',
        'age': 6
      },
      {
        'id': 62,
        'examineeName': 'alok111',
        'examineeId': 'alok111',
        'testName': 'CognitiveTestPOC',
        'age': 6
      },
      {
        'id': 63,
        'examineeName': 'alok111',
        'examineeId': 'alok111',
        'testName': 'CognitiveTestPOC',
        'age': 6
      },
      {
        'id': 64,
        'examineeName': 'alok111',
        'examineeId': 'alok111',
        'testName': 'CognitiveTestPOC',
        'age': 6
      },
      {
        'id': 65,
        'examineeName': 'alok111',
        'examineeId': 'alok111',
        'testName': 'CognitiveTestPOC',
        'age': 6
      },
      {
        'id': 66,
        'examineeName': 'alok111',
        'examineeId': 'alok111',
        'testName': 'CognitiveTestPOC',
        'age': 6
      },
      {
        'id': 67,
        'examineeName': 'alok111',
        'examineeId': 'alok111',
        'testName': 'CognitiveTestPOC',
        'age': 6
      },
      {
        'id': 68,
        'examineeName': 'alok111',
        'examineeId': 'alok111',
        'testName': 'CognitiveTestPOC',
        'age': 6
      },
      {
        'id': 69,
        'examineeName': 'alok111',
        'examineeId': 'alok111',
        'testName': 'CognitiveTestPOC',
        'age': 6
      },
      {
        'id': 70,
        'examineeName': 'alok111',
        'examineeId': 'alok111',
        'testName': 'CognitiveTestPOC',
        'age': 6
      },
      {
        'id': 71,
        'examineeName': 'alok111',
        'examineeId': 'alok111',
        'testName': 'CognitiveTestPOC',
        'age': 6
      },
      {
        'id': 72,
        'examineeName': 'alok111',
        'examineeId': 'alok111',
        'testName': 'CognitiveTestPOC',
        'age': 6
      },
      {
        'id': 73,
        'examineeName': 'alok111',
        'examineeId': 'alok111',
        'testName': 'CognitiveTestPOC',
        'age': 6
      },
      {
        'id': 74,
        'examineeName': 'alok111',
        'examineeId': 'alok111',
        'testName': 'CognitiveTestPOC',
        'age': 6
      },
      {
        'id': 75,
        'examineeName': 'alok111',
        'examineeId': 'alok111',
        'testName': 'CognitiveTestPOC',
        'age': 6
      },
      {
        'id': 76,
        'examineeName': 'alok111',
        'examineeId': 'alok111',
        'testName': 'CognitiveTestPOC',
        'age': 6
      },
      {
        'id': 77,
        'examineeName': 'alok111',
        'examineeId': 'alok111',
        'testName': 'CognitiveTestPOC',
        'age': 6
      },
      {
        'id': 78,
        'examineeName': 'alok111',
        'examineeId': 'alok111',
        'testName': 'CognitiveTestPOC',
        'age': 6
      },
      {
        'id': 79,
        'examineeName': 'alok111',
        'examineeId': 'alok111',
        'testName': 'CognitiveTestPOC',
        'age': 6
      },
      {
        'id': 80,
        'examineeName': 'alok111',
        'examineeId': 'alok111',
        'testName': 'CognitiveTestPOC',
        'age': 6
      },
      {
        'id': 81,
        'examineeName': 'alok111',
        'examineeId': 'alok111',
        'testName': 'CognitiveTestPOC',
        'age': 6
      },
      {
        'id': 82,
        'examineeName': 'alok111',
        'examineeId': 'alok111',
        'testName': 'CognitiveTestPOC',
        'age': 6
      },
      {
        'id': 83,
        'examineeName': 'alok111',
        'examineeId': 'alok111',
        'testName': 'CognitiveTestPOC',
        'age': 6
      },
      {
        'id': 84,
        'examineeName': 'alok111',
        'examineeId': 'alok111',
        'testName': 'CognitiveTestPOC',
        'age': 6
      },
      {
        'id': 85,
        'examineeName': 'alok111',
        'examineeId': 'alok111',
        'testName': 'CognitiveTestPOC',
        'age': 6
      },
      {
        'id': 86,
        'examineeName': 'alok111',
        'examineeId': 'alok111',
        'testName': 'CognitiveTestPOC',
        'age': 6
      },
      {
        'id': 87,
        'examineeName': 'alok111',
        'examineeId': 'alok111',
        'testName': 'CognitiveTestPOC',
        'age': 6
      },
      {
        'id': 88,
        'examineeName': 'alok111',
        'examineeId': 'alok111',
        'testName': 'CognitiveTestPOC',
        'age': 6
      },
      {
        'id': 89,
        'examineeName': 'alok111',
        'examineeId': 'alok111',
        'testName': 'CognitiveTestPOC',
        'age': 6
      },
      {
        'id': 90,
        'examineeName': 'alok111',
        'examineeId': 'alok111',
        'testName': 'CognitiveTestPOC',
        'age': 6
      },
      {
        'id': 91,
        'examineeName': 'alok111',
        'examineeId': 'alok111',
        'testName': 'CognitiveTestPOC',
        'age': 6
      },
      {
        'id': 92,
        'examineeName': 'alok111',
        'examineeId': 'alok111',
        'testName': 'CognitiveTestPOC',
        'age': 6
      },
      {
        'id': 93,
        'examineeName': 'alok111',
        'examineeId': 'alok111',
        'testName': 'CognitiveTestPOC',
        'age': 6
      },
      {
        'id': 94,
        'examineeName': 'alok111',
        'examineeId': 'alok111',
        'testName': 'CognitiveTestPOC',
        'age': 6
      },
      {
        'id': 95,
        'examineeName': 'alok111',
        'examineeId': 'alok111',
        'testName': 'CognitiveTestPOC',
        'age': 6
      },
      {
        'id': 96,
        'examineeName': 'alok111',
        'examineeId': 'alok111',
        'testName': 'CognitiveTestPOC',
        'age': 6
      },
      {
        'id': 97,
        'examineeName': 'alok111',
        'examineeId': 'alok111',
        'testName': 'CognitiveTestPOC',
        'age': 6
      },
      {
        'id': 98,
        'examineeName': 'alok111',
        'examineeId': 'alok111',
        'testName': 'CognitiveTestPOC',
        'age': 6
      },
      {
        'id': 99,
        'examineeName': 'alok111',
        'examineeId': 'alok111',
        'testName': 'CognitiveTestPOC',
        'age': 6
      },
      {
        'id': 100,
        'examineeName': 'alok111',
        'examineeId': 'alok111',
        'testName': 'CognitiveTestPOC',
        'age': 6
      },
      {
        'id': 101,
        'examineeName': 'alok111',
        'examineeId': 'alok111',
        'testName': 'CognitiveTestPOC',
        'age': 6
      },
      {
        'id': 102,
        'examineeName': 'alok111',
        'examineeId': 'alok111',
        'testName': 'CognitiveTestPOC',
        'age': 6
      }
    ];
  }
  getCognitiveTestUsers() {
    this._apiService.getCognitiveTestUsers()
      .subscribe((data) => {
        const resp = data['body'];
        console.log(resp);

        if (resp && resp.data && resp.data.denormDatabases) {


        }

      }, (error) => {
        console.log('error::', error);
      },
      );
  }
  getCognitiveTestResult(user) {
    console.log('user::', user);


  }
}
