import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatList, MatListModule} from '@angular/material/list';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatRadioModule} from '@angular/material/radio';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { AdminComponent } from './admin/admin.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import { RegisterPharmacyComponent } from './register-pharmacy/register-pharmacy.component';
import { RegisterSupplierComponent } from './register-supplier/register-supplier.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { PharmacyAdminProfileComponent } from './pharmacy-admin-profile/pharmacy-admin-profile.component';
import { PharmacyProfileComponent } from './pharmacy-profile/pharmacy-profile.component';
import { DermatologyAppointmentComponent } from './dermatology-appointment/dermatology-appointment.component';
import { BusinessReportComponent } from './business-report/business-report.component';
import { PharmacyPricelistComponent } from './pharmacy-pricelist/pharmacy-pricelist.component';
import { DefineLoyaltyComponent } from './define-loyalty/define-loyalty.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AdminRegisterDrugComponent} from './admin-register-drug/admin-register-drug.component';
import { GooglePlacesComponent } from './google-places/google-places.component';
import {ErrorInterceptor,JwtInterceptor} from "./helpers";
import { HomeComponent } from './home';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    AdminComponent,
    RegisterPharmacyComponent,
    RegisterSupplierComponent,
    AddAdminComponent,
    DefineLoyaltyComponent,
    UserProfileComponent,
    PharmacyAdminProfileComponent,
    PharmacyProfileComponent,
    DermatologyAppointmentComponent,
    BusinessReportComponent,
    PharmacyPricelistComponent,
    PharmacyPricelistComponent,
    DefineLoyaltyComponent,
    AdminRegisterDrugComponent,
    GooglePlacesComponent,
    HomeComponent

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatTableModule,
    MatDatepickerModule,
    MatRadioModule,
    MatInputModule,
    MatTabsModule,
    MatTableModule,
    MatSelectModule,
    MatNativeDateModule,
    MatIconModule,
    MatSelectModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatRadioModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    MatSidenavModule,
    MatGridListModule,
    MatCheckboxModule,
    
  ],

  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
