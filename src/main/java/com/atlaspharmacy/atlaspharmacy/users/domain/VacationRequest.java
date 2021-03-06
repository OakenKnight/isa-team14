package com.atlaspharmacy.atlaspharmacy.users.domain;

import com.atlaspharmacy.atlaspharmacy.pharmacy.domain.Pharmacy;
import com.atlaspharmacy.atlaspharmacy.users.domain.enums.Role;
import org.hibernate.annotations.Proxy;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "vacation_requests")
@DiscriminatorValue(value = Role.Values.Patient)
@Proxy(lazy = false)
public class VacationRequest {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private Date startDate;
    private Date endDate;
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
    private MedicalStaff medicalStaff;
    private String vacationReason;

    public VacationRequest() {
    }

    public VacationRequest(Date startDate, Date endDate, MedicalStaff medicalStaff, String vacationReason) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.medicalStaff = medicalStaff;
        this.vacationReason = vacationReason;
    }

    public String getVacationReason() {
        return vacationReason;
    }

    public void setVacationReason(String vacationReason) {
        this.vacationReason = vacationReason;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public MedicalStaff getMedicalStaff() {
        return medicalStaff;
    }

    public void setMedicalStaff(MedicalStaff medicalStaff) {
        this.medicalStaff = medicalStaff;
    }
}
