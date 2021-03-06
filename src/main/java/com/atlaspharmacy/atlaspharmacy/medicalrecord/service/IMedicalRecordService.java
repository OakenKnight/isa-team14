package com.atlaspharmacy.atlaspharmacy.medicalrecord.service;

import com.atlaspharmacy.atlaspharmacy.medicalrecord.DTO.MedicalRecordDTO;
import com.atlaspharmacy.atlaspharmacy.medicalrecord.DTO.MedicationToRecommendDTO;
import com.atlaspharmacy.atlaspharmacy.medicalrecord.domain.MedicalRecord;
import com.atlaspharmacy.atlaspharmacy.medication.DTO.MedicationDTO;
import com.atlaspharmacy.atlaspharmacy.medication.domain.Ingredient;

import java.util.List;

public interface IMedicalRecordService {
    MedicalRecord getByPatientId(Long patientId);
    boolean addPatientIngredients(MedicalRecordDTO dto);
    List<MedicationToRecommendDTO> recommendMedicationForPatient(Long patientId, Long pharmacyId);
    List<Ingredient> getPatientIngredient(Long id);

    List<MedicationToRecommendDTO> recommendSimilarMedication(Long medicationId, Long pharmacyId) throws Exception;
}
