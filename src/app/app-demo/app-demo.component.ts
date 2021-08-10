import { Component, OnInit,Input,Output,EventEmitter,ViewChild,AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { CustomNavigationClient } from '../custom-navigation-client';
import { environment } from 'src/environments/environment';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatPaginator,PageEvent } from '@angular/material/paginator';
import { MatSort, MatSortable } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { ServiceRequest,ServiceRequests } from '../service-request';
import { AppComponentService} from '../app-component.service';
import { AppEditRequestComponent} from '../app-edit-request/app-edit-request.component'
 
@Component({
  selector: 'app-app-demo',
  templateUrl: './app-demo.component.html',
  styleUrls: ['./app-demo.component.css']
})
export class AppDemoComponent implements OnInit,AfterViewInit {

  displayedColumns: string[] = ['select', 'requestId','Customer_Name','observations','Request_Date','Status','edit','delete'];
  ServiceRequests: any = [];
  public dataSource = new MatTableDataSource<ServiceRequest>();
  selection = new SelectionModel<ServiceRequest>(true, []);
  public pageSize = 10;
  public currentPage = 0;
  public totalSize = 0;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private appService:AppComponentService,
    private dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.getRequestData()

    this.dataSource.sortingDataAccessor = (data, sortHeaderId) => data[sortHeaderId]
    this.selection.clear();

     }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  getRequestData(){
   
    return this.appService.getCustomerRequestList().subscribe((res: ServiceRequests) => {
     
     this.dataSource.data = res.customerDetails;
      console.log(res.customerDetails)
    
      
    },
      (error) => {console.log(error)},
      
      () => {console.log("Complete")
    
    });

     
 }

 public handlePage(e: any) {
   this.currentPage = e.pageIndex;
   this.pageSize = (e.pageSize != undefined) ? e.pageSize : this.pageSize; 
   
 }

 deleteRequest(requestDate,requestId){
  
  let dateString = requestDate 
  let newDate = new Date(dateString);
 // console.log(newDate)
  var today = new Date();
  //console.log(today)
  if(newDate > today){
    alert("greater date")
  }
  else{
    alert("smaller date")
  }
 

 }

 OpenEdit(){
  const dialogConfig = new MatDialogConfig();
   
  dialogConfig.width = '400px',
    dialogConfig.data = {
      id: 1,
      title: '',
      description: ''
    };
  const dialogRef = this.dialog.open(AppEditRequestComponent, dialogConfig);
  return dialogRef.afterClosed().subscribe((res: any) => {

    this.ngOnInit()
  });
 }

}
