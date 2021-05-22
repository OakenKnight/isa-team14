package com.atlaspharmacy.atlaspharmacy.promotions.mapper;

import com.atlaspharmacy.atlaspharmacy.pharmacy.mapper.PharmacyMapper;
import com.atlaspharmacy.atlaspharmacy.promotions.DTO.PromotionDTO;
import com.atlaspharmacy.atlaspharmacy.promotions.domain.Promotion;
import com.atlaspharmacy.atlaspharmacy.schedule.domain.valueobjects.Period;

import java.util.ArrayList;
import java.util.List;

public class PromotionMapper {
    private PromotionMapper(){}

    public static Promotion MapDTOToPromotion(PromotionDTO promotionDTO){
        Promotion p=new Promotion();
        p.setId(promotionDTO.getId());
        p.setDescription(promotionDTO.getDescription());
        p.setActivePeriod(new Period(promotionDTO.getStartTime(),promotionDTO.getEndTime()));
        p.setPharmacy(PharmacyMapper.mapDTOToPharmacy(promotionDTO.getPharmacy()));
        return p;
    }

    public static PromotionDTO MapPromotionToDTO(Promotion promotion){
        return new PromotionDTO(promotion.getId(),promotion.getDescription(),promotion.getActivePeriod().getStartTime()
        ,promotion.getActivePeriod().getEndTime(), PharmacyMapper.mapPharmacyToDTO(promotion.getPharmacy()));
    }

    public static List<PromotionDTO> MapToListDTOS(List<Promotion> promotions){
        List<PromotionDTO> dtos=new ArrayList();
        for(Promotion p:promotions){
            dtos.add(MapPromotionToDTO(p));
        }
        return dtos;
    }
}
