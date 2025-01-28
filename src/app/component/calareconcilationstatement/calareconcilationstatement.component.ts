import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import xml2js from 'xml2js';
import * as _ from 'lodash';
import { BaseService } from 'src/app/core/base.service';
import { Url } from 'src/app/core/services/url';
import { MatDialog, MatDialogConfig, MatSnackBar } from '@angular/material';
import { from, Observable } from 'rxjs';
import { CalaPendingAdjustmentpopupComponent } from '../cala-pending-adjustmentpopup/cala-pending-adjustmentpopup.component';
import { startWith, map } from 'rxjs/operators';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AutocompleteDisplayComponent } from '../autocomplete-display/autocomplete-display.component';

@Component({
  selector: 'app-calareconcilationstatement',
  templateUrl: './calareconcilationstatement.component.html',
  styleUrls: ['./calareconcilationstatement.component.scss'],
})

export class CalareconcilationstatementComponent implements OnInit {
  @ViewChild('content', { static: false }) content: ElementRef;
  dataSourcecala: any;
  pageSize: any;
  fromCount = 1;
  toCount = 10;
  radioValue2: string;
  totalCount: any;
  fromdate: any;
  todate: any;
  accfromCount: any = 1;
  acctoCount: any = 10;
  accountnumber: any = "";
  dataSourcecalaacc: any;
  accpageSize: any = 10;
  totalCountAcc: any;
  accNo: any;
  monthdate: any;
  selectedMonth: Date;
  filteredvalue: any[];
  @Input() myControl: any;
  @ViewChild(AutocompleteDisplayComponent, { static: false })
  private drpValue: AutocompleteDisplayComponent;
  accNumber: any;
  dataSourcecaladrp: any;

  constructor(public baseService: BaseService, public dialog: MatDialog, private _formBuilder: FormBuilder,private _snackBar: MatSnackBar) {
    this.radioValue2 = "Amount in Rupees";
    this.pageSize = 10;
  }

  ngOnInit() {
    this.getxmldataforCALAOnInit();
    this.getDropdownData();
  }

  openDialogPendingadjustment(accountNumber?: any, roconmonthvalue?: any,accountName?: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.data = {
      actNumber: accountNumber,
      Reconvalue: roconmonthvalue,
      actName: accountName
    }
    const dialogRef = this.dialog.open(CalaPendingAdjustmentpopupComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  onItemChange(value?: any) {
    this.getxmldataforCALAOnInit();
  }
  onSearchclick() {
    this.getxmldataforCALAOnInit();
  }
  onSearchclicks() {
    this.accNumber = this.drpValue.myControl.value;
    this.getxmldataforCALAOnInit();
  }
  pageEvent(event) {
    this.fromCount = (event.pageIndex * event.pageSize) + 1;
    this.toCount = (event.pageIndex + 1) * event.pageSize;
    this.getxmldataforCALAOnInit();
  }
  pageEventForAcc(event) {
    this.accfromCount = (event.pageIndex * event.pageSize) + 1;
    this.acctoCount = (event.pageIndex + 1) * event.pageSize;
    this.getxmldataforCALAOnInit();
  }

  displayedColumns: string[] = ['no', 'accountnumber', 'accountname', 'totalsanctionedlimits', 'limitsutilizedperprevyear', 'limitsutilizedincurryear', 'unutilizedlimit', 'electtrf', 'tdstrf', 'otherdrtrf', 'returns', 'dddebit', 'clearingdebit', 'lessfundscrbcktoacctmiss', 'lessoutwardchequereturn', 'othercreditdepsits'];
  displayedColumn: string[] = ['accountnumber', 'accountname', 'reconformonthyear', 'openingbalance', 'limitgrant', 'limitutilized', 'closingbalance', 'pendingadjustment'];

  private getxmldataforCALAOnInit() {
    this.getAccountData();
    this.getFirstTableData();
    // this.getDropdownData();
  }

  getFirstTableData() {
    const headers = this.baseService.getHeaders();

    var messageDateTime = new Date().toISOString().slice(0, -1);
    var requestUUID = this.baseService.getRansdomWithUser(true);

    let fromDate = this.fromdate;
    let toDate = this.todate;

    let body: any = {};
    body.RequestUUID = requestUUID;
    body.MessageDateTime = messageDateTime;

    let finalVal = '';
    if (fromDate) {
      finalVal = this.baseService.dateformatasperddmmyy(fromDate);
    }

    let finalValforodate = '';
    if (toDate) {
      finalValforodate = this.baseService.dateformatasperddmmyy(toDate);
    }

    let actnumber = ""
    if (this.accountnumber != undefined && this.accountnumber != null) {
      actnumber = this.accountnumber;
    }
    body.acctId = actnumber.toString();
    body.from_date = finalVal;
    body.to_date = finalValforodate;
    body.RecFromNum = (this.fromCount).toString();
    body.RecToNum = (this.toCount).toString();

    this.baseService._makeRequest(Url.calareconsilation,
      body,
      'POST', {
      responseType: 'application/xml',
      headers: headers
    })
      .subscribe((res: any) => {
        let response = this.baseService.getAPiData(res);
        if (response.body) {
          let data = this.baseService.getResponseData(res, 'fetchCALAStatementDetailsResponse');
          this.dataSourcecala = data.CALAStatementDetails;
          this.totalCount = data.totalCount;
          let value = this.radioValue2;
          this.dataSourcecala.forEach((data) => {
            if (data.allocatedLimits) {
              if (value == "Amount in Rupees") {
                data.allocatedLimits = (data.allocatedLimits)
              } else {
                data.allocatedLimits = ((data.allocatedLimits) / 10000000)
              }
            }
            if (data.utilizedLimitTillPreviousMonth) {
              if (value == "Amount in Rupees") {
                data.utilizedLimitTillPreviousMonth = (data.utilizedLimitTillPreviousMonth)
              } else {
                data.utilizedLimitTillPreviousMonth = ((data.utilizedLimitTillPreviousMonth) / 10000000)
              }
            }
            if (data.utilizedLimitInCurrentMonth) {
              if (value == "Amount in Rupees") {
                data.utilizedLimitInCurrentMonth = (data.utilizedLimitInCurrentMonth)
              } else {
                data.utilizedLimitInCurrentMonth = ((data.utilizedLimitInCurrentMonth) / 10000000)
              }
            }
            if (data.PaidForTds) {
              if (value == "Amount in Rupees") {
                data.PaidForTds = (data.PaidForTds)
              } else {
                data.PaidForTds = ((data.PaidForTds) / 10000000)
              }
            }
            if (data.otherDebit) {
              if (value == "Amount in Rupees") {
                data.otherDebit = (data.otherDebit)
              } else {
                data.otherDebit = ((data.otherDebit) / 10000000)
              }
            }
            if (data.elecTarif) {
              if (value == "Amount in Rupees") {
                data.elecTarif = (data.elecTarif)
              } else {
                data.elecTarif = ((data.elecTarif) / 10000000)
              }
            }
            if (data.returns) {
              if (value == "Amount in Rupees") {
                data.returns = (data.returns)
              } else {
                data.returns = ((data.returns) / 10000000)
              }
            }
            if (data.ddDebit) {
              if (value == "Amount in Rupees") {
                data.ddDebit = (data.ddDebit)
              } else {
                data.ddDebit = ((data.ddDebit) / 10000000)
              }
            }
            if (data.clearingDr) {
              if (value == "Amount in Rupees") {
                data.clearingDr = (data.clearingDr)
              } else {
                data.clearingDr = ((data.clearingDr) / 10000000)
              }
            }
            if (data.creditBankToAccount) {
              if (value == "Amount in Rupees") {
                data.creditBankToAccount = (data.creditBankToAccount)
              } else {
                data.creditBankToAccount = ((data.creditBankToAccount) / 10000000)
              }
            }
            if (data.outChequeRet) {
              if (value == "Amount in Rupees") {
                data.outChequeRet = (data.outChequeRet)
              } else {
                data.outChequeRet = ((data.outChequeRet) / 10000000)
              }
            }
            if (data.otherCredit) {
              if (value == "Amount in Rupees") {
                data.otherCredit = (data.otherCredit)
              } else {
                data.otherCredit = ((data.otherCredit) / 10000000)
              }
            }
            if (data.unUtilizedLimit) {
              if (value == "Amount in Rupees") {
                data.unUtilizedLimit = (data.unUtilizedLimit)
              } else {
                data.unUtilizedLimit = ((data.unUtilizedLimit) / 10000000)
              }
            }
          })
        } else {
          this.baseService.getError(response)
        }
      });
  }
  getAccountData() {
    const headers = this.baseService.getHeaders();

    var messageDateTime = new Date().toISOString().slice(0, -1);
    var requestUUID = this.baseService.getRansdomWithUser(true);

    let monthdate = this.monthdate;

    let finalYearVal = '';
    let finalMonthVal = '';

    if (monthdate == '' || monthdate == undefined){
      finalMonthVal = this.baseService.dateformatasperprevioousfromselectedmm(monthdate);
      if(finalMonthVal== "Dec"){
        finalYearVal = this.baseService.dateformatasperpreviousyearasJan(monthdate);
      
      }
     else{
      finalYearVal = this.baseService.dateformatasperprevioousfromselectedyy(monthdate); 
     }
         
    }
    else if(monthdate){
      finalMonthVal = this.baseService.dateformataspermm(monthdate);
      finalYearVal = this.baseService.dateformatasperyy(monthdate);
    }

    // if (monthdate='Jan'){
    //   finalMonthVal = this.baseService.dateformatasperpreviousmonasJan(monthdate).toString();
    //   finalYearVal = this.baseService.dateformatasperpreviousyearasJan(monthdate);
    // }

    let actnumber = ""
    if (this.accNumber != undefined && this.accNumber != null) {
      actnumber = this.accNumber;
    }
    // For dropdown Account No.
    //let actnumber = this.accNumber;

    let body: any = {};
    body.requestUUID = requestUUID;
    body.messageDateTime = messageDateTime;
    body.accNo = actnumber;
    body.month = finalMonthVal;
    body.year = finalYearVal;
    body.recFromNo = (this.accfromCount).toString();
    body.recToNo = (this.acctoCount).toString();

    this.baseService._makeRequest(Url.calareconsilationAccXmlUrl,
      this.baseService.encryptionFunctionObject(body),
      'POST', {
      responseType: 'application/xml',
      headers: headers
    }).subscribe((res: any) => {
      let response = this.baseService.getAPiData(res);
      if (response.body) {
      let data = this.baseService.getResponseData(res,'getCalaStatementNewDetailsResponse');
      this.parseXMLAccount(data.calaSummaryDetails).then((parseDatas) => {
        this.dataSourcecalaacc = parseDatas;
        this.totalCountAcc = data.totalRecordCount;
        let value = this.radioValue2;
        this.dataSourcecalaacc.forEach((data) => {
          if (data.openBalanc) {
            if (value == "Amount in Rupees") {
              data.openBalanc = (+data.openBalanc)
            } else {
              data.openBalanc = ((+data.openBalanc) / 10000000)
            }
          }
          if (data.allocatedLimit) {
            if (value == "Amount in Rupees") {
              data.allocatedLimit = (+data.allocatedLimit)
            } else {
              data.allocatedLimit = ((+data.allocatedLimit) / 10000000)
            }
          }
          if (data.utilisedLimi) {
            if (value == "Amount in Rupees") {
              data.utilisedLimi = (+data.utilisedLimi)
            } else {
              data.utilisedLimi = ((+data.utilisedLimi) / 10000000)
            }
          }
          if (data.closingBalanc) {
            if (value == "Amount in Rupees") {
              data.closingBalanc = (+data.closingBalanc)
            } else {
              data.closingBalanc = ((+data.closingBalanc) / 10000000)
            }
          }
          if (data.pendingAdjestmen) {
            if (value == "Amount in Rupees") {
              data.pendingAdjestmen = (+data.pendingAdjestmen)
            } else {
              data.pendingAdjestmen = ((+data.pendingAdjestmen) / 10000000)
            }
          }
        })
      })
    } else {
      let error = response.error;
      this._snackBar.open(`${error.errorCode} - ${error.errorDesc ? error.errorDesc : error.message}`, "", {
        duration: 8000,
      });
    }
    });
  }

  //For dropdown
  getDropdownData() {
    const headers = this.baseService.getHeaders();

    var messageDateTime = new Date().toISOString().slice(0, -1);
    var requestUUID = this.baseService.getRansdomWithUser(true);

    let body: any = {};
    body.requestUUID = requestUUID;
    body.messageDateTime = messageDateTime;

    this.baseService._makeRequest(Url.calareconsilationDropXmlUrl,
      body,
      'POST', {
      responseType: 'application/xml',
      headers: headers
    }).subscribe((res: any) => {
      let response = this.baseService.getAPiData(res);
      if (response.body) {
        let data = this.baseService.getResponseData(res, 'fetchAccountDetailsResponse');
        this.dataSourcecaladrp = data.accountDetails;
        this.dataSourcecaladrp = this.dataSourcecaladrp.map((data) => { return (data['accountNumber']); });
      } else {
        this.baseService.getError(response)
      }
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
      let itemArr = [];
      parser.parseString(data, function (err, result) {
        var obj = result.FIXML.Body[0].executeFinacleScriptResponse[0].executeFinacleScript_CustomData[0].CALASummaryDtl[0];
        let totalCount = result.FIXML.Body[0].executeFinacleScriptResponse[0].executeFinacleScript_CustomData[0].totRecCnt;
        for (k in obj) {
          const id = k.split(/([0-9]+)/)[1];
          const item = k.split(/([0-9]+)/).filter(Boolean)[0].slice(0, -1);
          if (itemArr.length > 0) {
            const index = _.findIndex(itemArr, { no: id });
            if (index == -1) {
              itemArr.push({ [`${item}`]: obj[k][0], no: id });
            } else {
              if ((item == "ACCT_OPN_DATE") || (item == "LAST_TRAN_DATE")) {
                if ((obj[k][0]) == "NA") {
                  obj[k][0] = "--"
                }
              }
              itemArr[index][item] = obj[k][0]
            }
          }
          else {
            itemArr.push({ [`${item}`]: obj[k][0], no: id });
          }
        }
        let resolvedArr = [itemArr, totalCount]
        resolve(resolvedArr);
      });
    });
  }

  // parse the XML data
  parseXMLAccount(data) {
    return new Promise(resolve => {
      // var k: string | number;
      // var a: string | number,
      //   arr = [],
      //   parser = new xml2js.Parser(
      //     {
      //       strict: false,
      //       trim: true,
      //       explicitArray: true
      //     });
      let itemArrs = [];
      // parser.parseString(data, function (err, result) {
        // let totalCount;
        // if(result.FIXML.Body === undefined){
        //   var obj = result.FIXML.BODY[0].EXECUTEFINACLESCRIPTRESPONSE[0].EXECUTEFINACLESCRIPT_CUSTOMDATA[0].CALASUMMARYDTL[0];
        //   totalCount = result.FIXML.BODY[0].EXECUTEFINACLESCRIPTRESPONSE[0].EXECUTEFINACLESCRIPT_CUSTOMDATA[0].TOTRECCNT;
        // }else{
        //   var obj = result.FIXML.Body[0].executeFinacleScriptResponse[0].executeFinacleScript_CustomData[0].CALASummaryDtl[0];
        //   totalCount = result.FIXML.Body[0].executeFinacleScriptResponse[0].executeFinacleScript_CustomData[0].totRecCnt;
        // }
        for (let k in data) {
          const id = k.split(/([0-9]+)/)[1];
          const item = k.split(/([0-9]+)/).filter(Boolean)[0].slice(0, -1);
          if (itemArrs.length > 0) {
            const index = _.findIndex(itemArrs, { no: id });
            if (index == -1) {
              itemArrs.push({ [`${item}`]: data[k], no: id });
            } else {
              itemArrs[index][item] = data[k]
            }
          }
          else {
            itemArrs.push({ [`${item}`]: data[k], no: id });
          }
        }
        let resolvedArrAcc = itemArrs
        resolve(resolvedArrAcc);
      // });
    });
  }
  // // parse the XML data for dropdown
  parseXMLDropdown(data) {
    return new Promise(resolve => {
      var k: string | number;
      var a: string | number,
        arr = [],
        parser = new xml2js.Parser(
          {
            trim: true,
            explicitArray: true
          });
      let itemArrs = [];
      parser.parseString(data, function (err, result) {
        var obj = result.FIXML.Body[0].executeFinacleScriptResponse[0].executeFinacleScript_CustomData[0];
        for (k in obj) {
          const id = k.split(/([0-9]+)/)[1];
          const item = k.split(/([0-9]+)/).filter(Boolean)[0].slice(0, -1);
          if (itemArrs.length > 0) {
            const index = _.findIndex(itemArrs, { no: id });
            if (index == -1) {
              itemArrs.push({ [`${item}`]: obj[k][0], no: id });
            } else {
              itemArrs[index][item] = obj[k][0]
            }
          }
          else {
            itemArrs.push({ [`${item}`]: obj[k][0], no: id });
          }
        }
        let resolvedArrDrp = [itemArrs]
        resolve(resolvedArrDrp);
      });
    });
  }
  onExcelDownload() {
    var messageDateTime = new Date().toISOString().slice(0, -1);
    var requestUUID = this.baseService.getRansdomWithUser(false);

    let fromDate = this.fromdate;
    let toDate = this.todate;
    
    let finalVal = '';
    if (fromDate) {
      finalVal = this.baseService.dateformatasperddmmyy(fromDate);
    }

    let finalValforodate = '';
    if (toDate) {
      finalValforodate = this.baseService.dateformatasperddmmyy(toDate);
    }

    let actnumber = this.accountnumber;
    if(actnumber == null || actnumber == undefined){
      actnumber = "";
    }

    let url = Url.calaStatementDownload;
    localStorage.setItem('popUpManagement', 'true');
    
    let body: any = {};
    body.requestUUID = requestUUID;
    body.messageDateTime = messageDateTime;
    body.fromDate = finalVal.toString();
    body.toDate = finalValforodate.toString();
    body.recFromNo = "1";
    body.recToNo = (this.toCount).toString();
    body.accNo = actnumber.toString();
    body.precisionType = this.radioValue2;

    this.baseService.downloadFile(url,body,"calaStatement.xls");

    localStorage.setItem('popUpManagement', 'false');
  }

  onRefreshClick() {
    this.getxmldataforCALAOnInit();
  }
  onAccExcelDownload() {
    var messageDateTime = new Date().toISOString().slice(0, -1);
    var requestUUID = this.baseService.getRansdomWithUser(false);

    let fromDate = this.fromdate;
    let toDate = this.todate;

    let monthdate = this.monthdate;
    let finalYearVal = '';
    let finalMonthVal = '';

    if (monthdate) {
      finalMonthVal = this.baseService.dateformataspermm(monthdate);
      finalYearVal = this.baseService.dateformatasperyy(monthdate);
    }
    let actnumber = this.accNumber;
    if(actnumber == null || actnumber == undefined){
      actnumber = "";
    }

    if(finalMonthVal == null || finalMonthVal == undefined){
      finalMonthVal = "";
    }

    if(finalYearVal == null || finalYearVal == undefined){
      finalYearVal = "";
    }

    let url = Url.calareconsilationAccDownload;
    localStorage.setItem('popUpManagement', 'true');
    
    let body: any = {};
    body.requestUUID = requestUUID;
    body.messageDateTime = messageDateTime;
    body.month = finalMonthVal.toString();
    body.year = finalYearVal.toString();
    body.recFromNo = "1";
    body.recToNo = (this.toCount).toString();
    body.accNo = actnumber.toString();
    body.precisionType = this.radioValue2;

    this.baseService.downloadFile(url,body,"calaStatement.xls");

    localStorage.setItem('popUpManagement', 'false');
  }

  onAccRefreshClick() {
    this.getxmldataforCALAOnInit();
  }
}