export class billingData{
    address:string;
    brandname: string;
    customername: string;
    phonenumber: string;
    productname: string;
    quantity: string;
    vehicleno: string;
    dispatch: string;
    hsncode: string;
    invoiceno: string;
    date: string;
    ewaybill: string;




    
constructor (address:string,
    brandname: string,
    customername: string,
    phonenumber: string,
    productname: string,
    quantity: string,
    vehicleno: string,
    dispatch: string,
    hsncode: string,
    invoiceno: string,
    date: string,
    ewaybill: string,)
    {




this.address = address;
this.brandname= brandname;
this.customername =customername ;
this.phonenumber= phonenumber ;
this.productname= productname ;
this.quantity =quantity; 
this.vehicleno =vehicleno ;
this.dispatch=dispatch; 
this.hsncode=hsncode;
this.invoiceno=invoiceno;
// this.date=date;
this.ewaybill=ewaybill;
}

}