import { Component, OnInit, Inject } from '@angular/core';
import { BaseService } from 'src/app/core/base.service';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AfterVerifyUserNameComponent } from '../after-verify-user-name/after-verify-user-name.component';
import { HttpHeaders } from '@angular/common/http';
import { Url } from 'src/app/core/services/url';
import { Router } from '@angular/router';
@Component({
  selector: 'app-enterotpforgotusername',
  templateUrl: './enterotpforgotusername.component.html',
  styleUrls: ['./enterotpforgotusername.component.scss']
})
export class EnterotpforgotusernameComponent implements OnInit {
  counterclick = 4;
  targetVal: any = "";
  constructor(public baseService: BaseService,
    public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) data,
    private _snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<EnterotpforgotusernameComponent>,
    private router: Router) {
    if (data.targetVal != undefined) {
      this.targetVal = data.targetVal;
    }
  }

  ngOnInit() { }

  otpEntered: any = "";

  onBlur(value: any) {
    this.otpEntered = value;
  }
  onRedirectToForgotUserName() {
    this.dialogRef.close();
    this.router.navigateByUrl('/login/forgotyourusername');
  }

  Opendailogverify() {
    if (this.otpEntered == "") {
      this._snackBar.open("Please enter Shared OTP", "", {
        duration: 4000,
      });
    } else if (this.otpEntered.length != 6) {
      this._snackBar.open("Please enter Shared OTP", "", {
        duration: 4000,
      });
    } else {
      let body: any = {};
      const headers =this.baseService.getHeaders();
      body.entry = (this.targetVal).toString();
      body.code = (this.otpEntered).toString();
      this.baseService._makeRequest(Url.validateOTP,
        this.baseService.encryptionFunctionObject(body),
        'POST', {
        responseType: 'application/text',
        headers: headers
      }).subscribe((res: string) => {
        let resData = this.baseService.dencryptionFunction(res);
        const parsedResponse = JSON.parse(resData);
        const { isValid, timestamp } = parsedResponse
        if (isValid) {
          const currentTime = Date.now();
          const twoMinutesInMillis = 2 * 60 * 1000; // 2 minutes in milliseconds
          // Check if the timestamp is within the last 2 minutes
          if (timestamp >= currentTime - twoMinutesInMillis && timestamp <= currentTime) {
          this.dialogRef.close();
          this.sendEmail(this.targetVal);
          const dialogConfig = new MatDialogConfig();
          dialogConfig.disableClose = true;
          const dialogRef = this.dialog.open(AfterVerifyUserNameComponent, dialogConfig);

          dialogRef.afterClosed().subscribe(result => {
          });
        } else{
          this._snackBar.open("OTP expired", "", {
            duration: 4000,
          });
        }
          //this.router.navigateByUrl('/login');
        } else {
          this._snackBar.open("Invalid OTP", "", {
            duration: 4000,
          });
        }
      });
    }
  }

  resendOTP(){
    
    if(this.counterclick == 0){
      this.counterclick =4;
      this.router.navigateByUrl('/login');
      this.dialogRef.close();
    }

    this.counterclick -- ;

    let body: any  = {};
    const headers =this.baseService.getHeaders();
      body.entry = (this.targetVal).toString();
      this.baseService._makeRequest(Url.generateOTP,
        this.baseService.encryptionFunctionObject(body),
        'POST', {
        responseType: 'application/text',
        headers: headers
      }).subscribe((res:string) => {
        let resData = this.baseService.dencryptionFunction(res)
        if(resData == 'OTPGenerated'){
        }else{
          this._snackBar.open("OTP Attempts elapsed, Please try tomorrow", "", {
            duration: 4000,
          });
        }
      });
  }

  sendEmail(targetVal: any) {
    let body: any = {};
    const headers =this.baseService.getHeaders();
    body.entry = (targetVal).toString();
    this.baseService._makeRequest(Url.sendUserID,
      body,
      'POST', {
      responseType: 'application/text',
      headers: headers
    }).subscribe((res: string) => {
      
    });
  }
}
