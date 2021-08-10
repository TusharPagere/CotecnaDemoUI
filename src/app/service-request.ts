export class ServiceRequest {
  RegionIds : string; 
  CustomerName : string;
  CustomerAddress : string;
  RequestDate : string;

}

export class ServiceRequests{
  customerDetails: ServiceRequest[]; 	
  }

export class DeleteServiceRequest {
  RequestId : string;
}
