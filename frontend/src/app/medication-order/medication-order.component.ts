import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "@app/service/user";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Medication} from "@app/model/medications/medication";
import {MedicationService} from "@app/service/medication/medication.service";
import {MedicationOrder} from "@app/model/medicationOrder/medicationOrder";
import {Supplier} from "@app/model/users/supplier/supplier";
import {PharmacyService} from "@app/service/pharmacy/pharmacy.service";
import {PharmacyAdminService} from "@app/service/pharmacyAdmin/pharmacy-admin.service";
import {Pharmacy} from "@app/model/pharmacy/pharmacy";
import {Order} from "@app/model/medicationOrder/order";
import {OrdersService} from "@app/service/orders/orders.service";

@Component({
  selector: 'app-medication-order',
  templateUrl: './medication-order.component.html',
  styleUrls: ['./medication-order.component.css']
})
export class MedicationOrderComponent implements OnInit {

  addItem: boolean;
  addMedicationOrderForm: FormGroup;
  orderForm: FormGroup;
  medications:Medication[]=new Array();
  orderList:MedicationOrder[]=new Array();
  suppliers:Supplier[]=new Array();
  dueDate:Date;
  medication:Medication;
  amount:Number;
  currentUserId:Number;
  pharmacy:Pharmacy;
  editableDue:Date;

  constructor(private router: Router, private authenticationService: AuthenticationService
    , private medicationService: MedicationService,
              private pharmacyAdminService: PharmacyAdminService, private orderService: OrdersService) {

  }

  ngOnInit(): void {
    this.addItem = false;

    this.addMedicationOrderForm = new FormGroup({
      'medication' : new FormControl(null, Validators.required),
      'amount' : new FormControl(null,Validators.required)});

    this.orderForm = new FormGroup({
      'dueDate' : new FormControl(null,Validators.required),
      'editableDue' : new FormControl(null,Validators.required),
      });

    this.medicationService.findAllMedications().subscribe(data=>
      {
        this.medications = data;
      });
  }

  Logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  showAddForm() {
    this.addItem=true;

  }

  addOrder() {
      let orderItemExists=this.orderList.filter(order => order.medicationId==this.addMedicationOrderForm.value.medicationId).length==0;
      if(orderItemExists)
        {
          let newOrder=new MedicationOrder(this.addMedicationOrderForm.value.medication.id
                                        ,this.addMedicationOrderForm.value.medication.name
                                        ,this.addMedicationOrderForm.value.amount);
          this.orderList.push(newOrder);
        }
      else
        {
          for (var i in this.orderList)
          {
            if (this.orderList[i].medicationId == this.addMedicationOrderForm.value.medication.id)
            {
              this.orderList[i].quantity += this.addMedicationOrderForm.value.amount;
              break;
            }
          }
        }

  }


  cancelItem(itemId:Number) {
    this.orderList = this.orderList.filter(listItem => listItem.medicationId !== itemId);
  }

  submitOrder() {
    this.currentUserId=Number(localStorage.getItem('userId'));
    console.log(this.currentUserId);
    this.pharmacyAdminService.getPharmacyByAdmin(Number(this.currentUserId)).subscribe(
      result => {
      this.pharmacy = result;
      let order=new Order(null,this.orderForm.value.dueDate,this.orderList,this.pharmacy,this.orderForm.value.editableDue
        ,null);
      console.log(order);
      this.orderService.addOrder(order);
      });

    }
}
