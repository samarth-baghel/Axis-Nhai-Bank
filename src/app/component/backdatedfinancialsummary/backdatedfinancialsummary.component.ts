import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import xml2js from 'xml2js';
import * as _ from 'lodash';
import { BaseService } from 'src/app/core/base.service';
import { Url } from 'src/app/core/services/url';
import { PdfDownloadService } from 'src/app/services/pdf-download.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-backdatedfinancialsummary',
  templateUrl: './backdatedfinancialsummary.component.html',
  styleUrls: ['./backdatedfinancialsummary.component.scss']
})
export class BackdatedfinancialsummaryComponent implements OnInit {
  @ViewChild('content') content: ElementRef;
  dataSources: any;
  dataSource: any;
  data: any;
  backdatedValue: any;
  finBackAmtConv: string;
  constructor(
    public baseService: BaseService, public http: HttpClient, private pdfService: PdfDownloadService,private _snackBar: MatSnackBar
  ) { 
    this.finBackAmtConv = "Amount in Rupees";
  }

  ngOnInit() {
    this.getFinSummaryBackDated();
  }

  onRefreshClick(){
    this.getFinSummaryBackDated();
  }

  onExcelDownload(){
    let messageDateTime = new Date().toISOString().slice(0, -1);
    let requestUUID = this.baseService.getRansdomWithUser(false);
    let date = this.backdatedValue;
    if (date == undefined) {
      date = new Date();
      date = date.setDate(date.getDate() - 1);
      date = new Date(date);
    }
    let finalVal = "",toDateValue="";
    if (date) {
      finalVal = this.baseService.dateformatasperddmmyy(date);
    }

    let url = Url.financialSummaryBackDatedDownload;
    localStorage.setItem('popUpManagement', 'true');
    
    let body: any = {};
    body.RequestUUID = requestUUID;
    body.MessageDateTime = messageDateTime;
    body.backDate = finalVal.toString();
    body.precisionType = this.finBackAmtConv;

    this.baseService.downloadFile(url,body,"financialSummaryBackDated.xls");

    localStorage.setItem('popUpManagement', 'false');
  }

  private getFinSummaryBackDated() {
    const headers =this.baseService.getHeaders();

    var messageDateTime = new Date().toISOString().slice(0, -1);
    var requestUUID = this.baseService.getRansdomWithUser(true);
    var finVal = '';
    let date = this.backdatedValue;
    if (date == undefined) {
      date = new Date();
      date = date.setDate(date.getDate() - 1);
      date = new Date(date);
    }

    if (date) {
      finVal = this.baseService.dateformatasperddmmyy(date);
    }
    
    let body: any = {};
    body.RequestUUID = requestUUID;
    body.MessageDateTime = messageDateTime;
    body.Back_date = finVal;

    this.baseService._makeRequest(Url.fiinancialsummarybackdatedXmlUrl,
      body,
      'POST',
      {
        responseType: 'application/xml',
        headers: headers
      }).subscribe((res: any) => {
        let response = this.baseService.getAPiData(res);
      if (response.body) {
        let decryptedText = this.baseService.getResponseData(res,'getFinancialSummaryBackdatedDetailsResponse');
        this.parseXMLDeposit(decryptedText,this.finBackAmtConv).then((parseData) => {
          this.dataSources = parseData;
        })

        this.parseXMLSummary(decryptedText,this.finBackAmtConv).then((parseDataSummary) => {
          this.dataSource = parseDataSummary;
        })

        this.parseXMLDisbursement(decryptedText,this.finBackAmtConv).then((parseDataDisbursement) => {
          this.data = parseDataDisbursement;
        })
      } else {
        let error = response.error;
        this._snackBar.open(`${error.errorCode} - ${error.errorDesc ? error.errorDesc : error.message}`, "", {
          duration: 8000,
        });
      }
      })
  }

  onItemChange(value?:any){
    this.getFinSummaryBackDated();
  }
  // parse the XML data
  parseXMLDeposit(data,finBackAmtConv) {
    return new Promise(resolve => {
        let arra = [];
        for (const k in data) {
          const id = k.split(/([1-9]+)/)[1];
          let calAmount = finBackAmtConv == "Amount in Rupees" ? +data[k] : ((+data[k])/10000000);
          if (k == 'f01CumulativeDeposit') {
            arra.push({ no: id, deposit: 'Cumulative Deposit(YTD)', amount: calAmount })
          }
          if (k == 'f02InterestCredited') {
            arra.push({ no: id, deposit: 'Interest Credited(YTD)', amount: calAmount })
          }
          if (k == 'f03TotalBalance') {
            arra.push({ no: id, deposit: 'Total Balance(1+2)', amount: calAmount })
          }
        }
        resolve(arra);
      });
    }


  // parse the XML data
  parseXMLSummary(data,finBackAmtConv) {
    return new Promise(resolve => {
        let arra = [];
        for (const k in data) {
          const id = k.split(/([0-9]+)/)[1];
          let calAmount = finBackAmtConv == "Amount in Rupees" ? +data[k] : ((+data[k])/10000000);
          if (k == 'f08SABalance') {
            arra.push({ no: id, summary: 'Central a/c Balance', amount: calAmount })
          }
          if (k == 'f09CumLimAssigned') {
            arra.push({ no: id, summary: 'Cumulative Limits Assigned', amount: calAmount })
          }
          if (k == 'f10CreditReceived') {
            arra.push({ no: id, summary: 'Credit Received/Return Credit in PD account', amount: calAmount })
          }
          if (k == 'f11BalLimToBeAssigned') {
            arra.push({ no: id, summary: 'Balance Limits to be assigned(1-9)', amount: calAmount })
          }
          if (k == 'f12InterestAccrued') {
            arra.push({ no: id, summary: 'Interest Accured Till Now', amount: calAmount })
          }
          if (k == 'f13CreditException') {
            arra.push({ no: id, summary: 'Exception Credits', amount: calAmount })
          }
        }
        resolve(arra);
      });
  }

  // parse the XML data
  parseXMLDisbursement(data,finBackAmtConv) {
    return new Promise(resolve => {
        let arra = [];
        for (const k in data) {
          const id = k.split(/([1-9]+)/)[1];
          let calAmount = finBackAmtConv == "Amount in Rupees" ? +data[k] : ((+data[k])/10000000);
          if (k == 'f04CumulativeDisb') {
            arra.push({ no: id, disbursement: 'Cumulative Disbursement', amount: calAmount })
          }
          if (k == 'f04APaidToBene') {
            arra.push({ no: '4A', disbursement: 'Paid to Beneficiary', amount: calAmount })
          }
          if (k == 'f04BAdminExpense') {
            arra.push({ no: '4B', disbursement: 'Paid to Admin Expenses', amount: calAmount })
          }
          if (k == 'f04CPaidForTDS') {
            arra.push({ no: '4C', disbursement: 'Paid for TDS', amount: calAmount })
          }
          if (k == 'f04DOtherDebit') {
            arra.push({ no: '4D', disbursement: 'Other Debits/Exception Debits', amount: calAmount })
          }
          if (k == 'f05InterestTrf') {
            arra.push({ no: id, disbursement: 'Interest Transfer', amount: calAmount })
          }
          if (k == 'f06LastDayRtnTran') {
            arra.push({ no: id, disbursement: 'Last Day Returns Transaction', amount: calAmount })
          }
          if (k == 'f07TotalBalance') {
            arra.push({ no: id, disbursement: 'Net Cumulative Disbursements(4+5)', amount: calAmount })
          }
        }
        resolve(arra);
      })
 
  }

  onSearchbybackdate(value) {
    this.getFinSummaryBackDated();
  }

  onPDFDownload(){
    this.pdfService.downloadPDF(this.content.nativeElement);
  }
  
  displayedColumns: string[] = ['no', 'deposit', 'amount'];
  //dataSources = ELEMENT_DATA;
  displayedColumn: string[] = ['no', 'summary', 'amount'];
  //dataSource = ELEMENT;
  displayed: string[] = ['no', 'disbursement', 'amount'];
  //data = ELE;
}
