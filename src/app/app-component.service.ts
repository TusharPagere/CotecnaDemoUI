import { Injectable } from '@angular/core';
import { retry, catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment'; 
import { HttpClient, HttpHeaders,HttpBackend } from '@angular/common/http';
import { BehaviorSubject, Observable, of, Subject, throwError } from 'rxjs';
import { ServiceRequest,ServiceRequests,DeleteServiceRequest } from './service-request';


@Injectable({
  providedIn: 'root'
})
export class AppComponentService {

  appurl = environment.DemoEndPoint
  private http: HttpClient;

  constructor(httpBackend: HttpBackend) {
    this.http = new HttpClient(httpBackend)
   }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  }

  getCustomerRequestList(): Observable<ServiceRequests>{

    return this.http.get<ServiceRequests>(this.appurl + '/api/RequestData/GetDataList', this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.processError)
    )

}

deleteCustomerRequest(Request: DeleteServiceRequest): Observable<any> {

  return this.http.post<any>(this.appurl + '/api/ExternalConsultant/DeleteServiceRequest', Request, this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.processError)
    )
}

processError(err) {
  let message = '';
  if (err.error instanceof ErrorEvent) {
    message = err.error.message;
  } else {
    message = `Error Code: ${err.status}\nMessage: ${err.message}`;
  }
  console.log(message);
  return throwError(message);
}

 
}
