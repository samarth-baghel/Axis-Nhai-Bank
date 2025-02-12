export class Url {

     static readonly url =  'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT'; // UAT env
    //  static readonly  url =  'https://lmsnhai.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT'; // PROD env
    // static readonly  url = 'https://1a21-103-253-208-202.ngrok-free.app/webServicesProject-0.0.1-SNAPSHOT';   
    static readonly homeXmlUrl = Url.url+'/homeDetails';
    static readonly homeBackdatedUrl = Url.url+'/homeBackdatedDetails';
    static readonly financilalsummaryXmlUrl = Url.url+'/financialSummary';
    static readonly fiinancialsummarybackdatedXmlUrl = Url.url+'/financialSummaryBackDated';
    static readonly accountsXmlUrl = Url.url+'/accountSummary';
    static readonly accounthyperlinkAccountNoXmlUrl = Url.url+'/accountDetailsInfo';
    static readonly aegingXmlUrl = Url.url+'/customerAgingSummary';
    static readonly accounttransactionsXmlUrl = Url.url+'/transactionSummary';
    static readonly accountsXmlUrlmulticredit = Url.url+'/transactionSummaryMultipleCredit';
    static readonly projectdirectorsXmlUrl = Url.url+'/PDDetailsReq';
    static readonly subsidiaryaccountXmlUrl = Url.url+'/PDAccountHyperlink';
    static readonly regionalofficesXmlUrl = Url.url+'/ROAPIRequest';
    static readonly roSubsidiaryaccountXmlUrl = Url.url+'/PDAcctHyperLink';
    static readonly roProjectDirectorsUrl = Url.url+'/PDDetailHyperLink';
    static readonly stateXmlUrl = Url.url+'/StateWiseDetails';
    static readonly statesubsidiaryActUrl = Url.url+'/statePDAcctHyperlink';
    static readonly stateProjectDirectorUrl = Url.url+'/statePDDetailHyperLink';
    static readonly zoneXmlUrl = Url.url+'/zonewiseDetails';
    static readonly zonesubsidiaryActUrl = Url.url+'/zonePDAcctHyperlink';
    static readonly zoneProjectDirectorUrl = Url.url+'/zonePDDetailHyperLink';
    static readonly exceptionsXmlUrl = Url.url+'/exceptionPage';
    static readonly awardnumnberXmlUrl = Url.url+'/awardNoMainPage';
    static readonly awardnumberpopupXmlUrl = Url.url+'/awardNoInq';
    static readonly calareconsilation = Url.url+'/calaStatement';
    static readonly calareconsilationAccXmlUrl = Url.url+'/newCalaStatement';
    static readonly calareconsilationDropXmlUrl = Url.url+'/accfetch';
    static readonly calapendingadjustmentXmlUrl = Url.url+'/pendingadjust';
    static readonly datewisezoneXmlUrl = Url.url+'/datewiseZoneSummary';
    static readonly datewiseroXmlUrl = Url.url+'/datewiseROSummary';
    static readonly datewisepoXmlUrl = Url.url+'/datewisePDSummary';
    static readonly datewisecalaXmlUrl = Url.url+'/datewiseCalaSummary';
    static readonly limitdirectcreditXmlUrl = Url.url+'/limitdirectcerditResponse';
    static readonly intPaidXmlUrl = Url.url+'/intPaidHyperlinks';
    //static readonly readXmlUrl = 'http://finappinuat.axisb.com:8180/FISERVLET/fihttp';
    // http://10.9.2.192:8180/FISERVLET/fihttp


    /**
     * User Management including login functionality
     */
    // static readonly userZone = 'assets/CreateUserZone.xml';
    // static readonly userState = 'assets/CreateUserState.xml';
    // static readonly userRo = 'assets/CreateUserRO.xml';
    // static readonly userPD = 'assets/CreateUserPD.xml';
    // static readonly userCALA = 'assets/CreateUserCALA.xml';

    static readonly userZone = Url.url+'/getZonesList';
    static readonly userState = Url.url+'/getStateList';
    static readonly userRo = Url.url+'/getRegionalOfficeList';
    static readonly userPD = Url.url+'/getProjectDirectorsList';
    static readonly userCALA = Url.url+'/checkCALAAct';

    // static readonly saveUserInfo = 'http://localhost:4200/insertUserMaster';
    // static readonly getUserInfo = 'http://localhost:4200/getUserMasterDetails';
    // static readonly lockUser = 'http://localhost:4200/lockUser';
    // static readonly userActiveStaus = 'http://localhost:4200/userActiveStaus';
    // static readonly getUserWorkflowDetails = 'http://localhost:4200/getUserWorkflowDetails';
    // static readonly checkerResponse = 'http://localhost:4200/checkerResponse';
    // static readonly updateUserInfo = 'http://localhost:4200/updateUserInfo';
    // static readonly getStagingEntry = 'http://localhost:4200/getStagingEntry';
    // static readonly userLogin = 'http://localhost:4200/userLogin';
    // static readonly passwordReset = 'http://localhost:4200/passwordReset';

    static readonly saveUserInfo = Url.url+'/insertUserMaster';
    static readonly getUserInfo = Url.url+'/getUserMasterDetails';
    static readonly lockUser = Url.url+'/lockUser';
    static readonly userActiveStaus = Url.url+'/userActiveStaus';
    static readonly getUserWorkflowDetails = Url.url+'/getUserWorkflowDetails';
    static readonly checkerResponse = Url.url+'/checkerResponse';
    static readonly updateUserInfo = Url.url+'/updateUserInfo';
    static readonly getStagingEntry = Url.url+'/getStagingEntry';
    static readonly userLogin = Url.url+'/userLogin';
    static readonly passwordReset = Url.url+'/passwordReset';


    /**
     * Forgot User and Password
     */


    // static readonly generateOTP = 'http://localhost:4200/generateOTP';
    // static readonly validateOTP = 'http://localhost:4200/validateOTP';
    // static readonly sendUserID = 'http://localhost:4200/sendUserID';
    // static readonly forgotPasswordRest = 'http://localhost:4200/forgotPasswordRest';

    static readonly generateOTP = Url.url+'/generateOTP';
    static readonly validateOTP = Url.url+'/validateOTP';
    static readonly sendUserID = Url.url+'/sendUserID';
    static readonly forgotPasswordRest = Url.url+'/forgotPasswordRest';

    static readonly readXmlUrl = '/assets/testing.xml';

    // last login date and time API
    static readonly getLastdateTime = Url.url+'/findLastloginDatebyUserId';

    /**
     * Beneficiary Master
     */
    static readonly beneficiaryMaster = Url.url+'/getBeneficiaryMasterDetails';
    static readonly saveBeneficiaryMaster = Url.url+'/insertBeneficiaryMaster';
    static readonly uploadBeneficiaryDetails = Url.url+'/beneficiartyUploadFile';
    // static readonly beneficiaryMaster = 'http://localhost:4200/getBeneficiaryMasterDetails';
    //static readonly saveBeneficiaryMaster = 'http://localhost:4200/insertBeneficiaryMaster';
    //static readonly uploadBeneficiaryDetails = 'http://localhost:4200/beneficiartyUploadFile';
    //static readonly beneficiaryMaster ='assets/beneficiaryMasterData.json';
    /**
     * Download options
     */
    static readonly homeDetailsDownload = Url.url+'/homeDetailsDownload.xlsx';
    static readonly homeBackDatedDetailsDownload = Url.url+'/homeBackdatedDetails.xlsx';
    static readonly financialSummaryDownload = Url.url+'/financialSummary.xlsx';
    static readonly financialSummaryBackDatedDownload = Url.url+'/financialSummaryBackDated.xlsx';
    static readonly accountSummaryDownload = Url.url+'/accountSummary.xlsx';
    // static readonly accountSummaryDownload = 'http://localhost:8085/cstudent/accountSummary.xlsx';
    static readonly transactionSummaryDownload = Url.url+'/transactionSummary.xlsx';
    static readonly customerAgeingDownload = Url.url+'/customerAgingSummary.xlsx';
    static readonly awardNoMainPageDownload = Url.url+'/awardNoMainPage.xlsx';
    static readonly stateWiseDetailsDownload = Url.url+'/stateWiseDetails.xlsx';
    static readonly regionalOfficeDetailsDownload = Url.url+'/ROAPIRequest.xlsx';
    static readonly PDDetailsReqDownload = Url.url+'/PDDetailsReq.xlsx';
    static readonly zonewiseDetailsDownload = Url.url+'/zonewiseDetails.xlsx';
    static readonly limitdirectcerditResponseDownload = Url.url+'/limitdirectcerditResponse.xlsx';
    static readonly exceptionPageDownload = Url.url+'/exceptionPage.xlsx';
    static readonly calaStatementDownload = Url.url+'/calaStatement.xlsx';
    static readonly datewiseZoneDownload = Url.url+'/datewiseZoneSummary.xlsx';
    static readonly datewisePDDownload = Url.url+'/datewisePDSummary.xlsx';
    static readonly datewiseRODownload = Url.url+'/datewiseROSummary.xlsx';
    static readonly datewiseCalaDownload = Url.url+'/datewiseCalaSummary.xlsx';
    static readonly accountDetailsInfoDownload = Url.url+'/accountDetailsInfo.xlsx';
    static readonly beneficiaryMasterDownload = Url.url+'/getBeneficiaryMasterDetails.xlsx';
    static readonly calareconsilationAccDownload = Url.url+'/newCalaStatement.xlsx';
    static readonly ageingReportDownload = Url.url+'/AgeingReportAccountWise.xlsx';
    static readonly AgeingROAndPDReportDownload = Url.url+'/AgeingROAndPDReport.xlsx';
    static readonly creditReportDownload = Url.url+'/creditReport.xlsx';
    static readonly monthlyReportDownload = Url.url+'/downloadRopdMonthlyReport.xlsx';
    
    // static readonly homeDetailsDownload = 'http://localhost:4200/homeDetailsDownload.xlsx';
    // static readonly homeBackDatedDetailsDownload = 'http://localhost:4200/homeBackdatedDetails.xlsx';
    // static readonly financialSummaryDownload = 'http://localhost:4200/financialSummary.xlsx';
    // static readonly financialSummaryBackDatedDownload = 'http://localhost:4200/financialSummaryBackDated.xlsx';
    // static readonly accountSummaryDownload = 'http://localhost:4200/accountSummary.xlsx';
    // static readonly transactionSummaryDownload = 'http://localhost:4200/transactionSummary.xlsx';
    // static readonly customerAgeingDownload = 'http://localhost:4200/customerAgingSummary.xlsx';
    // static readonly awardNoMainPageDownload = 'http://localhost:4200/awardNoMainPage.xlsx';
    // static readonly stateWiseDetailsDownload = 'http://localhost:4200/stateWiseDetails.xlsx';
    // static readonly regionalOfficeDetailsDownload = 'http://localhost:4200/ROAPIRequest.xlsx';
    // static readonly PDDetailsReqDownload = 'http://localhost:4200/PDDetailsReq.xlsx';
    // static readonly zonewiseDetailsDownload = 'http://localhost:4200/zonewiseDetails.xlsx';
    // static readonly limitdirectcerditResponseDownload = 'http://localhost:4200/limitdirectcerditResponse.xlsx';
    // static readonly exceptionPageDownload = 'http://localhost:4200/exceptionPage.xlsx';
    // static readonly calaStatementDownload = 'http://localhost:4200/calaStatement.xlsx';
    // static readonly datewiseZoneDownload = 'http://localhost:4200/datewiseZoneSummary.xlsx';
    // static readonly datewisePDDownload = 'http://localhost:4200/datewisePDSummary.xlsx';
    // static readonly datewiseRODownload = 'http://localhost:4200/datewiseROSummary.xlsx';
    // static readonly datewiseCalaDownload = 'http://localhost:4200/datewiseCalaSummary.xlsx';
    // static readonly accountDetailsInfoDownload = 'http://localhost:4200/accountDetailsInfo.xlsx';
    // static readonly beneficiaryMasterDownload = 'http://localhost:4200/getBeneficiaryMasterDetails.xlsx';
    // static readonly ageingReportDownload = 'http://localhost:4200/ageingReport.xlsx';

    /**
     * Local Data Maintenence 
     */
    // static readonly navicNormal = "assets/normal.json";
    // static readonly navicUser = "assets/user.json";
    // static readonly navicAdminMaker = "assets/adminMaker.json";
    // static readonly navicAdminChecker = "assets/adminChecker.json";

    static readonly navicNormal = "assets/normal.json";
    static readonly navicUser = "assets/user.json";
    static readonly navicAdminMaker = "assets/adminMaker.json";
    static readonly navicAdminChecker = "assets/adminChecker.json";

    static readonly userData = "assets/userdetails.json";

    static readonly beneficiaryUploadTemplate = "./assets/beneficiary.csv";
    
    static readonly headQuaterUser = "assets/hQUsers.json";
    static readonly regionalOfficeUser = "assets/rOUsers.json";
    static readonly projectDirectorUser = "assets/pdUsers.json";
    static readonly calaUser = "assets/calaUsers.json";

    /**
     * Validation Helpers
     */
    // static readonly systemLogger = "http://localhost:4200/systemLogger";
    static readonly systemLogger = Url.url+'/systemLogger';

    // static readonly logout = "http://localhost:4200/logout";
    static readonly logout = Url.url+'/logout';








//  <--- Below code has been implemented above using dynamic url -->


//   ========================================================================================================================================  
    //  static readonly homeXmlUrl = 'assets/homeResponse.xml';
    //  static readonly intPaidXmlUrl  = 'assets/interestPaid.xml';
    // static readonly homeBackdatedUrl = 'assets/backDatedHomeResponse.xml';
    // static readonly financilalsummaryXmlUrl = 'assets/financialSummaryResponse.xml';
    // static readonly fiinancialsummarybackdatedXmlUrl = 'assets/financialSummaryBackDatedResponse.xml';
    // static readonly accountsXmlUrl = 'assets/accountResponse.xml';
    // static readonly accounthyperlinkAccountNoXmlUrl ='assets/accountHyperwithbalancelimitResponse.xml';
    // static readonly aegingXmlUrl = 'assets/aegingResponse.xml';
    // static readonly accountsXmlUrlmulticredit = 'assets/accountTransactionResponseMulticredite.xml';
    // static readonly accounttransactionsXmlUrl = 'assets/accountTransactionResponse.xml';
    // static readonly projectdirectorsXmlUrl = 'assets/ProjectDirectorsResponse.xml';
    // static readonly subsidiaryaccountXmlUrl = 'assets/subsidiaryaccountResponse.xml';
    // static readonly regionalofficesXmlUrl ='assets/RegionalOfficeResponse.xml';
    // static readonly roSubsidiaryaccountXmlUrl = 'assets/subsidiaryaccountResponse.xml';
    // static readonly roProjectDirectorsUrl = 'assets/RegionalOfficePDs.xml';
    // static readonly stateXmlUrl = 'assets/stateResponse.xml';
    // static readonly statesubsidiaryActUrl = 'assets/subsidiaryaccountResponse_Sate.xml';
    // static readonly stateProjectDirectorUrl = 'assets/StateProjectDirectorsResponse.xml';
    // static readonly zoneXmlUrl = 'assets/zoneResponse.xml';
    // static readonly zonesubsidiaryActUrl = 'assets/subsidiaryaccountResponse_Zone.xml';
    // static readonly zoneProjectDirectorUrl = 'assets/ZoneProjectDirectorsResponse.xml';
    // static readonly exceptionsXmlUrl = 'assets/exceptionsResponse.xml';
    // static readonly awardnumnberXmlUrl ='assets/AwardNumberResponse.xml';
    // static readonly awardnumberpopupXmlUrl = 'assets/AwardNumberPopupResponse.xml';
    // static readonly calareconsilation = 'assets/CalaReconsilationStatementResponse.xml';
    // static readonly calareconsilationAccXmlUrl = 'assets/CalaReconsilationAccStatementResponse.xml';
    // static readonly calareconsilationDropXmlUrl = 'assets/calaDropdownResponse.xml';
    // static readonly datewisezoneXmlUrl = 'assets/datewisezoneResponse.xml';
    // static readonly datewiseroXmlUrl = 'assets/datewiseregionalofficeResponse.xml';
    // static readonly datewisepoXmlUrl = 'assets/datewiseprojectdirectorResponse.xml';
    // static readonly datewisecalaXmlUrl = 'assets/datewisecalasummaryResponse.xml';
    // static readonly limitdirectcreditXmlUrl ='assets/limitdirectcerditResponse.xml';
    // static readonly calapendingadjustmentXmlUrl ='assets/calapendingadjustmentResponse.xml';
   

    /**
     * Dashboard finacle
     */
    // static readonly homeXmlUrl = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/homeDetails';
    // static readonly homeBackdatedUrl = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/homeBackdatedDetails';
    // // static readonly homeBackdatedUrl = 'http://localhost:8085/cstudent/homeBackdatedDetails';
    // static readonly financilalsummaryXmlUrl = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/financialSummary';
    // static readonly fiinancialsummarybackdatedXmlUrl = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/financialSummaryBackDated';
    // static readonly accountsXmlUrl = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/accountSummary';
    // // static readonly accountsXmlUrl = 'http://localhost:8085/cstudent/accountSummary';
    // static readonly accounthyperlinkAccountNoXmlUrl = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/accountDetailsInfo';
    // static readonly aegingXmlUrl = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/customerAgingSummary';
    // static readonly accounttransactionsXmlUrl = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/transactionSummary';
    // // static readonly accounttransactionsXmlUrl = 'http://localhost:8085/cstudent/transactionSummary';

    // static readonly accountsXmlUrlmulticredit = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/transactionSummaryMultipleCredit';
    // static readonly projectdirectorsXmlUrl = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/PDDetailsReq';
    // static readonly subsidiaryaccountXmlUrl = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/PDAccountHyperlink';
    // static readonly regionalofficesXmlUrl = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/ROAPIRequest';
    // static readonly roSubsidiaryaccountXmlUrl = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/PDAcctHyperLink';
    // static readonly roProjectDirectorsUrl = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/PDDetailHyperLink';
    // static readonly stateXmlUrl = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/StateWiseDetails';
    // static readonly statesubsidiaryActUrl = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/statePDAcctHyperlink';
    // static readonly stateProjectDirectorUrl = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/statePDDetailHyperLink';
    // static readonly zoneXmlUrl = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/zonewiseDetails';
    // static readonly zonesubsidiaryActUrl = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/zonePDAcctHyperlink';
    // static readonly zoneProjectDirectorUrl = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/zonePDDetailHyperLink';
    // static readonly exceptionsXmlUrl = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/exceptionPage';
    // static readonly awardnumnberXmlUrl = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/awardNoMainPage';
    // static readonly awardnumberpopupXmlUrl = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/awardNoInq';
    // static readonly calareconsilation = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/calaStatement';
    // static readonly calareconsilationAccXmlUrl = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/newCalaStatement';
    // static readonly calareconsilationDropXmlUrl = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/accfetch';
    // static readonly calapendingadjustmentXmlUrl = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/pendingadjust';
    // static readonly datewisezoneXmlUrl = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/datewiseZoneSummary';
    // static readonly datewiseroXmlUrl = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/datewiseROSummary';
    // static readonly datewisepoXmlUrl = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/datewisePDSummary';
    // static readonly datewisecalaXmlUrl = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/datewiseCalaSummary';
    // static readonly limitdirectcreditXmlUrl = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/limitdirectcerditResponse';
    // static readonly intPaidXmlUrl = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/intPaidHyperlinks';
    // //static readonly readXmlUrl = 'http://finappinuat.axisb.com:8180/FISERVLET/fihttp';
    // // http://10.9.2.192:8180/FISERVLET/fihttp


    // /**
    //  * User Management including login functionality
    //  */
    // // static readonly userZone = 'assets/CreateUserZone.xml';
    // // static readonly userState = 'assets/CreateUserState.xml';
    // // static readonly userRo = 'assets/CreateUserRO.xml';
    // // static readonly userPD = 'assets/CreateUserPD.xml';
    // // static readonly userCALA = 'assets/CreateUserCALA.xml';

    // static readonly userZone = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/getZonesList';
    // static readonly userState = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/getStateList';
    // static readonly userRo = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/getRegionalOfficeList';
    // static readonly userPD = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/getProjectDirectorsList';
    // static readonly userCALA = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/checkCALAAct';

    // // static readonly saveUserInfo = 'http://localhost:4200/insertUserMaster';
    // // static readonly getUserInfo = 'http://localhost:4200/getUserMasterDetails';
    // // static readonly lockUser = 'http://localhost:4200/lockUser';
    // // static readonly userActiveStaus = 'http://localhost:4200/userActiveStaus';
    // // static readonly getUserWorkflowDetails = 'http://localhost:4200/getUserWorkflowDetails';
    // // static readonly checkerResponse = 'http://localhost:4200/checkerResponse';
    // // static readonly updateUserInfo = 'http://localhost:4200/updateUserInfo';
    // // static readonly getStagingEntry = 'http://localhost:4200/getStagingEntry';
    // // static readonly userLogin = 'http://localhost:4200/userLogin';
    // // static readonly passwordReset = 'http://localhost:4200/passwordReset';

    // static readonly saveUserInfo = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/insertUserMaster';
    // static readonly getUserInfo = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/getUserMasterDetails';
    // static readonly lockUser = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/lockUser';
    // static readonly userActiveStaus = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/userActiveStaus';
    // static readonly getUserWorkflowDetails = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/getUserWorkflowDetails';
    // static readonly checkerResponse = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/checkerResponse';
    // static readonly updateUserInfo = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/updateUserInfo';
    // static readonly getStagingEntry = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/getStagingEntry';
    // static readonly userLogin = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/userLogin';
    // static readonly passwordReset = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/passwordReset';


    // /**
    //  * Forgot User and Password
    //  */


    // // static readonly generateOTP = 'http://localhost:4200/generateOTP';
    // // static readonly validateOTP = 'http://localhost:4200/validateOTP';
    // // static readonly sendUserID = 'http://localhost:4200/sendUserID';
    // // static readonly forgotPasswordRest = 'http://localhost:4200/forgotPasswordRest';

    // static readonly generateOTP = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/generateOTP';
    // static readonly validateOTP = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/validateOTP';
    // static readonly sendUserID = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/sendUserID';
    // static readonly forgotPasswordRest = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/forgotPasswordRest';

    // static readonly readXmlUrl = '/assets/testing.xml';

    // // last login date and time API
    // static readonly getLastdateTime = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/findLastloginDatebyUserId';

    // /**
    //  * Beneficiary Master
    //  */
    // static readonly beneficiaryMaster = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/getBeneficiaryMasterDetails';
    // static readonly saveBeneficiaryMaster = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/insertBeneficiaryMaster';
    // static readonly uploadBeneficiaryDetails = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/beneficiartyUploadFile';
    // // static readonly beneficiaryMaster = 'http://localhost:4200/getBeneficiaryMasterDetails';
    // //static readonly saveBeneficiaryMaster = 'http://localhost:4200/insertBeneficiaryMaster';
    // //static readonly uploadBeneficiaryDetails = 'http://localhost:4200/beneficiartyUploadFile';
    // //static readonly beneficiaryMaster ='assets/beneficiaryMasterData.json';
    // /**
    //  * Download options
    //  */
    // static readonly homeDetailsDownload = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/homeDetailsDownload.xlsx';
    // static readonly homeBackDatedDetailsDownload = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/homeBackdatedDetails.xlsx';
    // static readonly financialSummaryDownload = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/financialSummary.xlsx';
    // static readonly financialSummaryBackDatedDownload = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/financialSummaryBackDated.xlsx';
    // static readonly accountSummaryDownload = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/accountSummary.xlsx';
    // // static readonly accountSummaryDownload = 'http://localhost:8085/cstudent/accountSummary.xlsx';
    // static readonly transactionSummaryDownload = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/transactionSummary.xlsx';
    // static readonly customerAgeingDownload = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/customerAgingSummary.xlsx';
    // static readonly awardNoMainPageDownload = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/awardNoMainPage.xlsx';
    // static readonly stateWiseDetailsDownload = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/stateWiseDetails.xlsx';
    // static readonly regionalOfficeDetailsDownload = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/ROAPIRequest.xlsx';
    // static readonly PDDetailsReqDownload = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/PDDetailsReq.xlsx';
    // static readonly zonewiseDetailsDownload = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/zonewiseDetails.xlsx';
    // static readonly limitdirectcerditResponseDownload = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/limitdirectcerditResponse.xlsx';
    // static readonly exceptionPageDownload = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/exceptionPage.xlsx';
    // static readonly calaStatementDownload = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/calaStatement.xlsx';
    // static readonly datewiseZoneDownload = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/datewiseZoneSummary.xlsx';
    // static readonly datewisePDDownload = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/datewisePDSummary.xlsx';
    // static readonly datewiseRODownload = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/datewiseROSummary.xlsx';
    // static readonly datewiseCalaDownload = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/datewiseCalaSummary.xlsx';
    // static readonly accountDetailsInfoDownload = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/accountDetailsInfo.xlsx';
    // static readonly beneficiaryMasterDownload = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/getBeneficiaryMasterDetails.xlsx';
    // static readonly calareconsilationAccDownload = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/newCalaStatement.xlsx';
    // static readonly ageingReportDownload = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/AgeingReportAccountWise.xlsx';
    // static readonly AgeingROAndPDReportDownload = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/AgeingROAndPDReport.xlsx';
    // static readonly creditReportDownload = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/creditReport.xlsx';
    // static readonly monthlyReportDownload = 'https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/downloadRopdMonthlyReport.xlsx';
    
    // // static readonly homeDetailsDownload = 'http://localhost:4200/homeDetailsDownload.xlsx';
    // // static readonly homeBackDatedDetailsDownload = 'http://localhost:4200/homeBackdatedDetails.xlsx';
    // // static readonly financialSummaryDownload = 'http://localhost:4200/financialSummary.xlsx';
    // // static readonly financialSummaryBackDatedDownload = 'http://localhost:4200/financialSummaryBackDated.xlsx';
    // // static readonly accountSummaryDownload = 'http://localhost:4200/accountSummary.xlsx';
    // // static readonly transactionSummaryDownload = 'http://localhost:4200/transactionSummary.xlsx';
    // // static readonly customerAgeingDownload = 'http://localhost:4200/customerAgingSummary.xlsx';
    // // static readonly awardNoMainPageDownload = 'http://localhost:4200/awardNoMainPage.xlsx';
    // // static readonly stateWiseDetailsDownload = 'http://localhost:4200/stateWiseDetails.xlsx';
    // // static readonly regionalOfficeDetailsDownload = 'http://localhost:4200/ROAPIRequest.xlsx';
    // // static readonly PDDetailsReqDownload = 'http://localhost:4200/PDDetailsReq.xlsx';
    // // static readonly zonewiseDetailsDownload = 'http://localhost:4200/zonewiseDetails.xlsx';
    // // static readonly limitdirectcerditResponseDownload = 'http://localhost:4200/limitdirectcerditResponse.xlsx';
    // // static readonly exceptionPageDownload = 'http://localhost:4200/exceptionPage.xlsx';
    // // static readonly calaStatementDownload = 'http://localhost:4200/calaStatement.xlsx';
    // // static readonly datewiseZoneDownload = 'http://localhost:4200/datewiseZoneSummary.xlsx';
    // // static readonly datewisePDDownload = 'http://localhost:4200/datewisePDSummary.xlsx';
    // // static readonly datewiseRODownload = 'http://localhost:4200/datewiseROSummary.xlsx';
    // // static readonly datewiseCalaDownload = 'http://localhost:4200/datewiseCalaSummary.xlsx';
    // // static readonly accountDetailsInfoDownload = 'http://localhost:4200/accountDetailsInfo.xlsx';
    // // static readonly beneficiaryMasterDownload = 'http://localhost:4200/getBeneficiaryMasterDetails.xlsx';
    // // static readonly ageingReportDownload = 'http://localhost:4200/ageingReport.xlsx';

    // /**
    //  * Local Data Maintenence 
    //  */
    // // static readonly navicNormal = "assets/normal.json";
    // // static readonly navicUser = "assets/user.json";
    // // static readonly navicAdminMaker = "assets/adminMaker.json";
    // // static readonly navicAdminChecker = "assets/adminChecker.json";

    // static readonly navicNormal = "assets/normal.ts";
    // static readonly navicUser = "assets/user.ts";
    // static readonly navicAdminMaker = "assets/adminMaker.ts";
    // static readonly navicAdminChecker = "assets/adminChecker.ts";

    // static readonly userData = "assets/userdetails.json";

    // static readonly beneficiaryUploadTemplate = "./assets/beneficiary.csv"

    // /**
    //  * Validation Helpers
    //  */
    // // static readonly systemLogger = "http://localhost:4200/systemLogger";
    // static readonly systemLogger = "https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/systemLogger";

    // // static readonly logout = "http://localhost:4200/logout";
    // static readonly logout = "https://nhailmsuat.axisbank.co.in/webServicesProject-0.0.1-SNAPSHOT/logout";
}