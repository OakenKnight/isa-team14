package com.atlaspharmacy.atlaspharmacy.schedule.domain;

import com.atlaspharmacy.atlaspharmacy.schedule.domain.enums.AppointmentType;
import com.atlaspharmacy.atlaspharmacy.schedule.domain.valueobjects.Period;
import com.atlaspharmacy.atlaspharmacy.users.domain.Patient;
import com.atlaspharmacy.atlaspharmacy.users.domain.Pharmacist;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Proxy;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "appointment")
@Inheritance(strategy= InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "type", discriminatorType=DiscriminatorType.STRING)
@Proxy(lazy = false)
public class Appointment {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long Id;
    @Embedded
    @AttributeOverrides({
            @AttributeOverride( name = "startTime", column = @Column(name = "appointmentStartTime")),
            @AttributeOverride( name = "endTime", column = @Column(name = "appointmentEndTime"))
    })
    private Period appointmentPeriod;
    private double cost;
    @Column(insertable = false, updatable = false)
    private String type;
    private boolean isCanceled;
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Patient patient;


    public Appointment() {
    }

    public Appointment(Period appointmentPeriod, double cost, String type, boolean isCanceled, Patient patient) {
        this.appointmentPeriod = appointmentPeriod;
        this.cost = cost;
        this.type = type;
        this.isCanceled = isCanceled;
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public Period getAppointmentPeriod() {
        return appointmentPeriod;
    }

    public void setAppointmentPeriod(Period appointmentPeriod) {
        this.appointmentPeriod = appointmentPeriod;
    }

    public double getCost() {
        return cost;
    }

    public void setCost(double cost) {
        this.cost = cost;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public boolean isCanceled() {
        return isCanceled;
    }

    public void setCanceled(boolean canceled) {
        isCanceled = canceled;
    }

    public Patient getPatient() {
        return patient;
    }

    public void setPatient(Patient patient) {
        this.patient = patient;
    }

    public boolean isOccupied(Period period) {
        System.out.println(period.getEndTime().getTime());
        System.out.println(period.getStartTime().getTime());
        System.out.println(getAppointmentPeriod().getStartTime().getTime());
        System.out.println(getAppointmentPeriod().getStartTime().getTime() == period.getStartTime().getTime() &&
                getAppointmentPeriod().getEndTime().getTime() == period.getEndTime().getTime());
        return getAppointmentPeriod().getStartTime().getTime() == period.getStartTime().getTime() &&
                getAppointmentPeriod().getEndTime().getTime() == period.getEndTime().getTime();
    }

    public boolean isSameDay(Date date) {
        return getAppointmentPeriod().getStartTime().getDate() == date.getDate() &&
                getAppointmentPeriod().getStartTime().getMonth() == date.getMonth() &&
                getAppointmentPeriod().getStartTime().getYear() == date.getYear();
    }

    public boolean isMedicalStaff(Long medicalStaffId) {
        if (getType().equals(AppointmentType.Values.Counseling)) {
            Counseling counseling = (Counseling) this;
            return counseling.getPharmacist().getId().equals(medicalStaffId);
        }
        Examination examination = (Examination) this;
        return examination.getDermatologist().getId().equals(medicalStaffId);
    }

    public boolean isMedicalStaffAndDate(Long medicalStaffId, Date date) {
        if (getType().equals(AppointmentType.Values.Counseling)) {
            Counseling counseling = (Counseling) this;
            return counseling.getPharmacist().getId().equals(medicalStaffId) && isSameDay(date);
        }
        Examination examination = (Examination) this;
        return examination.getDermatologist().getId().equals(medicalStaffId) && isSameDay(date);
    }

    public boolean isPatient(Long patientId) {
        return getPatient().getId() == patientId;
    }

    public boolean canCancel(int hoursAvailableToCancel) {
        Date validDate = new Date(getAppointmentPeriod().getStartTime().getTime() + hoursAvailableToCancel);
        return getAppointmentPeriod().getStartTime().before(validDate);
    }

    public boolean isCounseling() {
        return getType().equals(AppointmentType.Values.Counseling);
    }

    public boolean isExamination() {
        return getType().equals(AppointmentType.Values.Examination);
    }
}