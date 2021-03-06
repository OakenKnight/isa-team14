package com.atlaspharmacy.atlaspharmacy.pharmacy.repository;

import com.atlaspharmacy.atlaspharmacy.pharmacy.domain.PharmacyStorage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PharmacyStorageRepository extends JpaRepository<PharmacyStorage, Long> {
}
