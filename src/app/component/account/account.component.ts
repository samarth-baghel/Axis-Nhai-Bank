import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { LimitlewdgerComponent } from '../limitlewdger/limitlewdger.component';
import { TotallimitsComponent } from '../totallimits/totallimits.component';
import {MatPaginator, MatSnackBar} from '@angular/material';
import {MatTableDataSource} from '@angular/material/table';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import { BaseService } from 'src/app/core/base.service';
import xml2js from 'xml2js';
import * as _ from 'lodash'; 
import { Url } from 'src/app/core/services/url';
import { Constants } from 'src/app/core/services/constants';
import { StateServiceService } from 'src/app/core/services/state-service.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  accountParsedArr: any;
  radioValue1:string;
  radioValue2:string;
  totalCount:any;
  //dataSource = new MatTableDataSource;
  dateValue:any;
  pageSize:any = 10;
  fromCount = 1;
  toCount = 10;
  searchValue:any="";

  constructor(public dialog: MatDialog, public baseService: BaseService, 
    public http: HttpClient,private _snackBar: MatSnackBar) { 
    this.radioValue1 = "Account Number";
    this.radioValue2 = "Amount in Rupees";
    this.pageSize = 10;
  }

  ngOnInit() {
    this.getXmlDataForAccountsOnInit();
  }

  displayedColumns: string[] = ['no', 'AccountOpenDate', 'lastOperatinDate', 'NoOfdayssincelastTransaction', 'AccountID', 'AccountName', 'TotalLimit', 'UsedLimit', 'NoofdaysinceAccountopned', 'FundsUsed', 'BalanceLimit', 'AccountBalance'];
 
  onRefreshClick(){
    this.getXmlDataForAccountsOnInit();
  }

  onExcelDownloadClick(){
    var messageDateTime = new Date().toISOString().slice(0, -1);
    var requestUUID = this.baseService.getRansdomWithUser(false);
    var actNumber = '', actName = '';
    let finalVal = '';
    let date = this.dateValue;
    if(date){
      finalVal = this.baseService.dateformatasperddmmyy(date);
    }
    
    if(this.radioValue1){
      if (this.radioValue1 == Constants.actNumber) {
        actNumber = this.searchValue;
      } else {
        actName = this.searchValue;
      }
    } 

    let url = Url.accountSummaryDownload;
    localStorage.setItem('popUpManagement', 'true');
    
    let body: any = {};
    body.RequestUUID = requestUUID;
    body.MessageDateTime = messageDateTime;
    body.ActNum = actNumber.toString();
    body.ActName = actName.toString();
    body.fromCount = "1";
    body.toCount = (this.toCount).toString();
    body.actDate = finalVal.toString();
    body.precisionType = this.radioValue2;
    
    this.baseService.downloadFile(url,body,"accountSummary.xls");

    localStorage.setItem('popUpManagement', 'false');
  }

  openDialoglimitlewdger(accountNumber?:any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.data = {
      actNumber:accountNumber
    }
    const dialogRef = this.dialog.open(LimitlewdgerComponent,dialogConfig);
    dialogRef.afterClosed().subscribe(result => {

    });
  }

  openDailogtotallimit(accountNumber?:any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.data = {
      actNumber:accountNumber
    }
    const dialogRef = this.dialog.open(TotallimitsComponent,dialogConfig);
    dialogRef.afterClosed().subscribe(result => {

    });
  }

  private getXmlDataForAccountsOnInit(value?:any, radioBtnValue1?:any, date?:any) {
    const headers =this.baseService.getHeaders();
    var messageDateTime = new Date().toISOString().slice(0, -1);
    var requestUUID = this.baseService.getRansdomWithUser(true);
    let body: any = {};
    body.RequestUUID = requestUUID;
    body.MessageDateTime = messageDateTime;

    var actNumber = '', actName = '';
    let finalVal = '';
    let dateVal = this.dateValue;
    if(date){
      finalVal = this.baseService.dateformatasperddmmyy(date);
    }
    
    if(this.radioValue1){
      if (this.radioValue1 == Constants.actNumber) {
        actNumber = value;
      } else {
        actName = value;
      }
    } 

    body.AcctName = actName;
    body.AcctNum =  this.baseService.encryptionFunction(actNumber) ;
    body.Acct_opn_date = finalVal;
    body.From_count = (this.fromCount).toString();
    body.To_count = (this.toCount).toString();

    this.baseService._makeRequest(Url.accountsXmlUrl, 
      this.baseService.encryptionFunctionObject(body),
      'POST', {
      responseType: 'application/xml',
      headers: headers
    }).subscribe((res: any) => {
      let response = this.baseService.getAPiData(res);
      if (response.body) {
        let data = this.baseService.getResponseData(res, 'getAccoutDetailsResponse');
          this.accountParsedArr = data.accountDetails;
          this.accountParsedArr = this.accountParsedArr.map((x, index) => {
            if (this.accountParsedArr[index].ACCOUNTNUMBER != undefined && this.accountParsedArr[index].ACCOUNTNUMBER.split('')[this.accountParsedArr[index].ACCOUNTNUMBER.split('').length - 1] == '=') {
              x.ACCOUNTNUMBER = x.ACCOUNTNUMBER ? this.baseService.dencryptionFunction(x.ACCOUNTNUMBER) : '';
              return x;
            } else {
              x.ACCOUNTNUMBER = x.ACCOUNTNUMBER;
              return x
            }
          });
          // this.totalCount = this.getTotalCount(this.accountParsedArr);
          // this.totalCount = this.accountParsedArr[this.accountParsedArr.length-1].totalCount;
          this.totalCount = data.totalCount

          // this.accountParsedArr = this.accountParsedArr.filter((data) => { return (data['no'] != undefined); });
          // this.dataSource.data = this.accountParsedArr;
          let value = this.radioValue2;
          this.accountParsedArr.forEach((data) => {
            if (data.accountBalance) {
              if (value == "Amount in Rupees") {
                data.accountBalance = (data.accountBalance)
              } else {
                data.accountBalance = ((data.accountBalance) / 10000000)
              }
            }
          })

          this.accountParsedArr.forEach((data) => {
            if (data.totalLimitGrantAmount) {
              if (value == "Amount in Rupees") {
                data.totalLimitGrantAmount = (data.totalLimitGrantAmount)
              } else {
                data.totalLimitGrantAmount = ((data.totalLimitGrantAmount) / 10000000)
              }
            }
          });

          this.accountParsedArr.forEach((data) => {
            if (data.utilisedLimit) {
              if (value == "Amount in Rupees") {
                data.utilisedLimit = (data.utilisedLimit)
              } else {
                data.utilisedLimit = ((data.utilisedLimit) / 10000000)
              }
            }
          });

          this.accountParsedArr.forEach((data) => {
            if (data.balanceLimit) {
              if (value == "Amount in Rupees") {
                data.balanceLimit = (data.balanceLimit)
              } else {
                data.balanceLimit = ((data.balanceLimit) / 10000000)
              }
            }
          });
      } else {
        let error = response.error;
        this._snackBar.open(`${error.errorCode} - ${error.errorDesc ? error.errorDesc : error.message}`, "", {
          duration: 8000,
        });
      }
    });
  }

  getTotalCount(accountParsedArr){
    let totalCount = 0;
    for(let i =0 ;i<accountParsedArr.length;i++){
      let actItem = accountParsedArr[i];
      if(actItem.totalCount != undefined){
        totalCount =  actItem.totalCount;
        break;
      }
    }
    return totalCount;
  }
  // parse the XML data
  parseXML(data) {
    return new Promise(resolve => {
      var k: string | number,
        arr = [],
        parser = new xml2js.Parser(
          {
            strict: false,
            trim: true,
            explicitArray: true
          });
      let itemArr = [];
      // parser.parseString(data, function (err, result) {
        // console.log(result);
        
        // if(result.FIXML.Body === undefined){
        //   var obj = result.FIXML.BODY[0].EXECUTEFINACLESCRIPTRESPONSE[0].EXECUTEFINACLESCRIPT_CUSTOMDATA[0];
        // }
        // else{
        //   var obj = result.FIXML.Body[0].executeFinacleScriptResponse[0].executeFinacleScript_CustomData[0];
        // }
          Object.keys(data).forEach((ele,index)=>{
            if(ele.includes('AccountNumber_')){
              let encryptedBase64Key="YWJjYWJjZGVmZGVmZ2hpZw==";
              let parsedBase64Key=CryptoJS.enc.Base64.parse(encryptedBase64Key);
              let decryptedData = CryptoJS.AES.decrypt( data[ele], parsedBase64Key, {
                mode: CryptoJS.mode.ECB,
                padding: CryptoJS.pad.Pkcs7
                } );
                data[ele]=decryptedData.toString(CryptoJS.enc.Utf8);
            }else{
              data[ele] = data[ele];
            }
          });
        for (k in data) {
          const id = k.split(/([0-9]+)/)[1];
          const item = k.split(/([0-9]+)/).filter(Boolean)[0].slice(0, -1);
          if (itemArr.length > 0) {
            const index = _.findIndex(itemArr, { no: id });
            if (index == -1) {
              itemArr.push({ [`${item}`]: data[k], no: id });
            } else {
              if ((item == "ACCT_OPN_DATE") || (item == "LAST_TRAN_DATE")) {
                if ((data[k]) == "NA") {
                  data[k] = "--"
                }
              }
              itemArr[index][item] = data[k]
            }
          }
          else {
            itemArr.push({ [`${item}`]: data[k], no: id });
          }
        }
        resolve(itemArr);
      // });
    });
  }

    // search method with input
  onSearch(value?:any, radioBtnValue1?:any, date?:any) {
    this.getXmlDataForAccountsOnInit(value, radioBtnValue1,date);
  }

  onItemChange(value?:any){
    this.getXmlDataForAccountsOnInit();
  }

  // on submit the date
  onSubmit(value, radioBtnValue1,date){
    this.onSearch(value, radioBtnValue1,date);
  }

  pageEvent(event,searchValue,radioValue1,dateValue){
    this.fromCount = (event.pageIndex*event.pageSize)+1;
    this.toCount =  (event.pageIndex+1)*event.pageSize;
    console.log();
    
    this.getXmlDataForAccountsOnInit(searchValue,radioValue1,dateValue);
  }
}