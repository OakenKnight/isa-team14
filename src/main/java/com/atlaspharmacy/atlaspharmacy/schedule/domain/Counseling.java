package com.atlaspharmacy.atlaspharmacy.schedule.domain;

import com.atlaspharmacy.atlaspharmacy.schedule.domain.enums.AppointmentType;
import com.atlaspharmacy.atlaspharmacy.schedule.domain.valueobjects.Period;
import com.atlaspharmacy.atlaspharmacy.users.domain.Patient;
import com.atlaspharmacy.atlaspharmacy.users.domain.Pharmacist;
import com.atlaspharmacy.atlaspharmacy.users.domain.User;
import com.atlaspharmacy.atlaspharmacy.users.domain.enums.Role;

import javax.persistence.*;

@Entity
@DiscriminatorValue(value = AppointmentType.Values.Counseling)
public class Counseling extends Appointment {

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Pharmacist pharmacist;

    public Counseling() {
    }

    public Counseling(Pharmacist pharmacist) {
        this.pharmacist = pharmacist;
    }

    public Counseling(Period appointmentPeriod, double cost, String type, boolean isCanceled, Pharmacist pharmacist, Patient patient) {
        super(appointmentPeriod, cost, type, isCanceled, patient);
        this.pharmacist = pharmacist;
    }

    public Pharmacist getPharmacist() {
        return pharmacist;
    }

    public void setPharmacist(Pharmacist pharmacist) {
        this.pharmacist = pharmacist;
    }
}
