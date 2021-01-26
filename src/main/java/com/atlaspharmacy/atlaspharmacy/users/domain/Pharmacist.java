package com.atlaspharmacy.atlaspharmacy.users.domain;

import com.atlaspharmacy.atlaspharmacy.users.domain.enums.Role;

import javax.persistence.*;

@Entity
@Table(name = "pharmacists")
@DiscriminatorValue(value = Role.Values.Pharmacist)
public class Pharmacist extends MedicalStaff {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    public Pharmacist(Long id) {
        this.id = id;
    }

    public Pharmacist() {

    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }
}
