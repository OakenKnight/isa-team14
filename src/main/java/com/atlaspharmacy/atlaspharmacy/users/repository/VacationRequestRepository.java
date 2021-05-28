package com.atlaspharmacy.atlaspharmacy.users.repository;

import com.atlaspharmacy.atlaspharmacy.users.domain.VacationRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface VacationRequestRepository extends JpaRepository<VacationRequest, Long> {

    @Query(value = "SELECT v FROM VacationRequest v WHERE v.pharmacy.id = ?1 AND v.status = 2")
    List<VacationRequest> getAllPendingVacationRequests(Long pharmacyId);
}
