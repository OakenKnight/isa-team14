
import { LoginComponent } from 'src/app/login/login.component';
import {Gender} from "@app/model/users/patient/gender";
import {Address} from "@app/model/address/address";
import {Role} from "@app/model/users/role";


export class Patient{
  public name : String;
  public surname : String;
  public dateOfBirth : Date;
  public phoneNumber : String;
  public email : String;
  public password : String;
  public gender : Gender;
  public address : Address;
  public role : Role;
  public authorities : Number[];

  constructor(name:String, surname : String, dateOfBirth: Date, phoneNumber : String, email : String, password : String, gender: Gender, address : Address, role : Role, autorities : Number[]){
    this.name = name;
    this.surname = surname;
    this.dateOfBirth = dateOfBirth;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.password = password;
    this.gender = gender;
    this.address = address;
    this.role = role;
    this.authorities = autorities;
  }
}
