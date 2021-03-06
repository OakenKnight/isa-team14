package com.atlaspharmacy.atlaspharmacy.users.service;

import com.atlaspharmacy.atlaspharmacy.users.DTO.EmployeeFirstTimeLoginDTO;
import com.atlaspharmacy.atlaspharmacy.users.DTO.EmployeePassChange;
import com.atlaspharmacy.atlaspharmacy.users.DTO.PatientDTO;
import com.atlaspharmacy.atlaspharmacy.users.DTO.PharmDermDTO;
import com.atlaspharmacy.atlaspharmacy.users.domain.Patient;
import com.atlaspharmacy.atlaspharmacy.users.domain.User;
import com.atlaspharmacy.atlaspharmacy.users.exceptions.InvalidPatientData;

import java.util.List;

public interface IUserService {
    User getUserBy(Long id);
    User getUserByMail(String mail);
    User getPharmacyAdmin(Long pharmacyId);
    User getByEmail(String email);

    void updateEmployee(PharmDermDTO pharmDermDTO);

    void updateEmployeePassword(EmployeePassChange employeePassChange) throws Exception;

    void updateEmployeePassFirstTime(EmployeeFirstTimeLoginDTO employeePassChange) throws Exception;

    List<User> getUsersForEmployee();
    List<User> searchUsersByName(String name);
}
