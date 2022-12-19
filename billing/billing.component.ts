import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { billingData } from '../model/BillingData';
import { AuthenticationService } from '../authentication.service';
@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {

  public billingform !: FormGroup

  constructor(private formBulider : FormBuilder,private authenticationService : AuthenticationService) { }
  submitted=false;
  ngOnInit(): void {
this .billingform= this.formBulider.group({
      address:[''],
      brandname: [''],
      customername: [''],
      phonenumber: [''],
      productname:[''],
      vehicleno:[''],
      dispatch: [''],
      hsncode: [''],
      invoiceno: [''],
      date:[''],
      ewaybill:['']
    })
   }
   onSubmit()
   {
     this.submitted=true;
    const billingData = new billingData(this.billingform.value.address,this.billingform.value.brandname,this.billingform.value.customername,
      this.billingform.value.phonenumber,this.billingform.value.productname,this.billingform.value.vehicleno,this.billingform.value.dispatch,
      this.billingform.value.hsncode,this.billingform.value.invoiceno,this.billingform.value.date,this.billingform.value.ewaybill);
    this.authenticationService.authenticate(billingData);
   }
 }