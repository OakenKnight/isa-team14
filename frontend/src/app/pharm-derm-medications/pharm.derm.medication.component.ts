import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import { FormGroup, FormControl, Form, Validators} from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { Reservation } from '@app/model/pharmderm/reservations';
import { PharmacistService } from '@app/service/pharmacist/pharmacist.service';

import {AuthenticationService} from '../service/user/authentication.service'

@Component({
  selector: 'pharmacist-reports',
  templateUrl: './pharm.derm.medication.component.html',
  styleUrls: ['./pharm.derm.medication.component.css']
})
export class PharmDermMedicationsComponent {
    public reservation : Reservation;
    public uniqueId : String;
    public searchForm : FormGroup;
    public showResults : boolean;
    public issueAvailable : boolean;
    constructor(private authService  : AuthenticationService, private router : Router, private pharmacistService : PharmacistService) {}
    @ViewChild(MatPaginator) paginator: MatPaginator;
    
    ngOnInit() {
      if ((localStorage.getItem('firstTimeChanged') === 'false')) { 
        this.router.navigate(["/employee-welcome"]);
      }

      let user = this.authService.currentUserValue;

      if (user.role !== 'Pharmacist') {
        this.router.navigate(["/dashboard"]);
      }

      this.uniqueId = null;
      this.issueAvailable = false;
      this.showResults  = false;

      this.searchForm = new FormGroup({
        'uniqueIdentifier' : new FormControl("", [Validators.required, Validators.pattern("^[0-9]*$")])
      });
    }

    searchReservation() {
      let id = this.searchForm.controls.uniqueIdentifier.value;
      this.pharmacistService.getReservationsByUniqueIdentifier(id).subscribe(
        data => {
          this.reservation = data;
          console.log("ASDASDsa")
          this.showResults  = true;
          console.log(this.reservation)
          this.uniqueId = this.reservation.uniqueIdentifier;
          this.issueAvailable = true;
        }, error => {
          alert(error)
          this.uniqueId = null;
          this.issueAvailable = false;
          this.showResults  = false;
        }
      )
    }
    isDateBeforeToday(date) {
      return new Date(date.toDateString()) < new Date(new Date().toDateString());
    }

    issueReservation() {
      if (this.uniqueId != null) {
        this.pharmacistService.issueReservation(Number(this.uniqueId)).subscribe(
          data => {
            alert("Successfully issued reservation!")
            this.showResults  = true;
            this.issueAvailable = false;
          },
          error => {
            alert(error)
            this.showResults  = false;
            this.issueAvailable = false;
          }
        )
      }
    }

    logout() {
      this.authService.logout();
    }


  }
  