import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Address } from './../model/address/address';
import { GooglePlacesComponent } from '../google-places/google-places.component';
import { Pharmacy } from '@app/model/pharmacy/pharmacy';
import { PharmacyService } from '@app/service/pharmacy/pharmacy.service';
import { Gender } from '@app/model/users/patient/gender';
import { PharmacyAdmin } from '@app/model/users/pharmacyAdmin/pharmacyAdmin';
import { Role } from '@app/model/users/role';
import { Router } from '@angular/router';
import { AuthenticationService } from '@app/service/user';
import { SysadminRegistrationService } from '@app/service/sysadmin-registration/sysadmin-registration.service';
import { SystemAdmin } from '@app/model/users/systemAdmin/systemAdmin';

@Component({
  selector: 'app-register-pharmacyadmin',
  templateUrl: './register-pharmacyadmin.component.html',
  styleUrls: ['./register-pharmacyadmin.component.css']
})
export class RegisterPharmacyadminComponent implements OnInit {
  addAdminForm : FormGroup;
  selectedGender;

  public sysAdmin;
  address : Address;
  name : string;
  surname : string;
  phone : string;
  email : string;
  password : string;
  confirmPassword : string;
  gender : Gender;
  selectedDate;
  dateOfBirth : Date;

  minDateOfBirth : Date;
  maxDateOfBirth : Date;


  admin_location : Address;
  admin_location_input: String;
  public pharmacy : Pharmacy;
  public pharmacies : Pharmacy[]= new Array();
  public pharmacyAdmin : PharmacyAdmin;
  @ViewChild(GooglePlacesComponent) googleplaces;

  constructor(private systemAdminService : SysadminRegistrationService ,private pharmacyService : PharmacyService, private router:Router, private authenticationService : AuthenticationService) { }

  ngOnInit(): void {
    this.loadSystemAdmin();
    this.maxDateOfBirth = new Date();
    this.minDateOfBirth = new Date();
    this.minDateOfBirth.setFullYear(this.minDateOfBirth.getFullYear() - 180);
    this.addAdminForm = new FormGroup({
      'name' : new FormControl(null, [Validators.required, Validators.pattern("^[a-zšđćčžA-ZŠĐŽČĆ ]*$")]),
      'surname' : new FormControl(null, [Validators.required, Validators.pattern("^[a-zšđćčžA-ZŠĐŽČĆ ]*$")]),
      'gender': new FormControl(null, Validators.required),
      'dob' : new FormControl(null, Validators.required),
      'telephone' : new FormControl(null, [Validators.required, Validators.pattern("^[0-9]*$")]),
      'mail' : new FormControl(null, [Validators.required, Validators.email]),
      'password' : new FormControl(null, [Validators.required, Validators.minLength(8)]),
      'confirmpassword' : new FormControl(null, [Validators.required, Validators.minLength(8)]),
      'pharmacy' : new FormControl(null, Validators.required)
    });
    this.loadAllPharmacies();
  }

  loadSystemAdmin(){
    this.systemAdminService.getSysAdmin(Number(localStorage.getItem('userId'))).subscribe(
      data =>
      {
        this.sysAdmin = new SystemAdmin(Number(localStorage.getItem('userId')), data.sysName, data.sysSurname, data.sysDateOfBirth, data.sysPhoneNumber, data.sysEmail, data.sysPassword, data.sysGender, data.sysAddress, data.sysRole, data.sysAuthorities, data.firstTimeChanged);
        if(!this.sysAdmin.firstTimeChanged){
          this.router.navigate(['/admin']);
        }
      });

  }
  registerDermatologist(){

  }
  adminLogout(){
    this.authenticationService.logout();
  }
  registerAdmin(){
    this.name = this.addAdminForm.value.name;
    this.surname = this.addAdminForm.value.surname;
    this.phone = this.addAdminForm.value.telephone;
    this.email = this.addAdminForm.value.mail;
    this.password = this.addAdminForm.value.password;
    this.confirmPassword = this.addAdminForm.value.confirmpassword;
    if(this.googleplaces===undefined){
      alert("Please fill the address!");
    }else{
      this.address = this.googleplaces.address;
      this.gender = this.selectedGender;
      this.dateOfBirth = this.selectedDate;
      this.pharmacy = this.addAdminForm.value.pharmacy;
      console.log(this.pharmacy.address.coordinates);
      var role : Role;
      role = Role.PharmacyAdmin;
      var auths : Number[] = new Array();
      if(this.password === this.confirmPassword){
        this.pharmacyAdmin = new PharmacyAdmin(null,this.name, this.surname, this.dateOfBirth, this.phone, this.email.toLowerCase(), this.password, this.gender, this.address, role, auths, this.pharmacy,false);

        this.pharmacyService.registerPharmacyAdmin(this.pharmacyAdmin).subscribe(
          res=>{
            this.addAdminForm.reset();
            this.googleplaces = null;
            alert('Success');
            this.router.navigate(['/admin']);
          },
          error=>{
            alert("Failed - email address already in use! Please enter new one!");
          });
      }else{
        alert('Passwords do not match!');
      }

    }


  }
  loadAllPharmacies() {
    this.pharmacyService.findAllPharmacies().subscribe(data =>
      {
        this.pharmacies = data
      });
  }

  respondToComplaints(){

  }

}
