import {Gender} from "./../patient/gender";
import {Address} from "./../address/address";
import {Role} from "./../users/role";
import { Pharmacy } from "../pharmacy/pharmacy";

export class PharmacyAdmin{
  public name : String;
  public surname : String;
  public dateOfBirth : Date;
  public phoneNumber : String;
  public email : String;
  public gender : Gender;
  public address : Address;

  constructor(name:String, surname : String, dateOfBirth: Date, phoneNumber : String, email : String, gender: Gender, address : Address){
    this.name = name;
    this.surname = surname;
    this.dateOfBirth = dateOfBirth;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.gender = gender;
    this.address = address;
  }
}
