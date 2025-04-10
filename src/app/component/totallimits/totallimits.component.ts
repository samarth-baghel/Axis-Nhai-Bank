import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseService } from 'src/app/core/base.service';
import { Url } from 'src/app/core/services/url';
import xml2js from 'xml2js';
import * as _ from 'lodash'; 

@Component({
  selector: 'app-totallimits',
  templateUrl: './totallimits.component.html',
  styleUrls: ['./totallimits.component.scss']
})
export class TotallimitsComponent implements OnInit {
  dataSourcetotallimit:any;
  actNumber:any;
  totalCount:any;
  isLoading = true;
  displayedColumnstotallimit: string[] = ['no','dateoflimit','limitgrant','expiredlimit'];

  constructor(public baseService: BaseService, public http: HttpClient,private _snackBar: MatSnackBar,@Inject(MAT_DIALOG_DATA) data) { 
    this.actNumber = data.actNumber;
  }

  ngOnInit() {
    this.getXmlDataForAccountsOnInit();
  }

  private getXmlDataForAccountsOnInit() {
    const headers =this.baseService.getHeaders();

    var messageDateTime = new Date().toISOString().slice(0, -1);
    var requestUUID = this.baseService.getRansdomWithUser(true);
    
    let body: any = {};
    body.RequestUUID = requestUUID;
    body.MessageDateTime = messageDateTime;

    let date = new Date();
    body.FromDate = this.baseService.dateformatasperdaymonthyear(date);
    body.ToDate = this.baseService.dateformatasperdaymonthyear(date);
    body.AcctNo = this.actNumber;
    this.baseService._makeRequest(Url.accounthyperlinkAccountNoXmlUrl, 
      this.baseService.encryptionFunctionObject(body),
      'POST', {
      responseType: 'application/xml',
      headers: headers
    }).subscribe((res: any) => {
      let response = this.baseService.getAPiData(res);
      if (response.body) {
        let data = this.baseService.getResponseData(res, 'fecthLimitDetailsResponse');
        this.dataSourcetotallimit = data.accountInquiry.accountDetails;
        this.dataSourcetotallimit.data = this.dataSourcetotallimit;
        this.totalCount = data.recordCount;
        this.isLoading = false;
      } else {
        this.isLoading = false;
        let error = response.error;
        this._snackBar.open(`${error.errorCode} - ${error.errorDesc ? error.errorDesc : error.message}`, "", {
          duration: 8000,
        });
      }
    }, (error) => {
      this.isLoading = false;
    });
  }

  // parse the XML data
  parseXML(data) {
    return new Promise(resolve => {
      var k: string | number;
      var a: string | number,
        arr = [],
        parser = new xml2js.Parser(
          {
            trim: true,
            explicitArray: true
          });
      parser.parseString(data, function (err, result) {
        var arr = result.FIXML.Body[0].executeFinacleScriptResponse[0].executeFinacleScript_CustomData[0].AccountInquiry[0].AcctDtls;
        let arra = [];
        arr.forEach(element => {
          for (a in element) {
            element[a] = element[a][0];
          }
           arra.push(element);
        });
        let resolvedArr = [arra]
        resolve(resolvedArr);
      });
    });
  }
}