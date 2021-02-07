package com.atlaspharmacy.atlaspharmacy.supplier.service.impl;

import com.atlaspharmacy.atlaspharmacy.medication.DTO.MedicationDTO;
import com.atlaspharmacy.atlaspharmacy.medication.mapper.MedicationMapper;
import com.atlaspharmacy.atlaspharmacy.medication.service.implementations.MedicationServiceImpl;
import com.atlaspharmacy.atlaspharmacy.supplier.DTO.OrderDTO;
import com.atlaspharmacy.atlaspharmacy.supplier.DTO.OrderedMedicationDTO;
import com.atlaspharmacy.atlaspharmacy.supplier.domain.MedicationInOrder;
import com.atlaspharmacy.atlaspharmacy.supplier.domain.Order;
import com.atlaspharmacy.atlaspharmacy.supplier.domain.OrderedMedication;
import com.atlaspharmacy.atlaspharmacy.supplier.mapper.OrderMapper;
import com.atlaspharmacy.atlaspharmacy.supplier.repository.OrderRepository;
import com.atlaspharmacy.atlaspharmacy.supplier.service.IOrderService;
import com.atlaspharmacy.atlaspharmacy.users.DTO.SupplierDTO;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class OrderService implements IOrderService {
    private final OrderRepository orderRepository;
    private final MedicationInOrderService medicationInOrderService;
    private final MedicationServiceImpl medicationService;
    public OrderService(OrderRepository orderRepository, MedicationInOrderService medicationInOrderService, MedicationServiceImpl medicationService) {
        this.orderRepository = orderRepository;
        this.medicationInOrderService = medicationInOrderService;
        this.medicationService = medicationService;
    }

    @Override
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }
    @Override
    public List<OrderDTO> getAllunfinishedOrders(){
        List<Order> unfinished = new ArrayList<>();
        Date currentDate = new Date();

        for(Order o: getAllOrders()) {
            if (currentDate.compareTo(o.getDueDate()) < 0 && currentDate.compareTo(o.getEditableDue())<0) {
                unfinished.add(o);
            }
        }
        List<OrderDTO> dtos = new ArrayList<>();
        for(Order o : unfinished){
            OrderDTO dto = OrderMapper.mapOrderToDTO(o);
            List<OrderedMedicationDTO> orderedMedications = new ArrayList<>();
            for(MedicationInOrder m : medicationInOrderService.getAllMedicationsByOrder(o.getId())){
                //orderedMedications.add(m.getOrderedMedication());
                MedicationDTO mdto = MedicationMapper.convertToMedicationDTO(medicationService.getById(m.getOrderedMedication().getMedication()));
                OrderedMedicationDTO odto = new OrderedMedicationDTO();
                odto.setMedication(mdto);
                odto.setQuantity(m.getOrderedMedication().getQuantity());
                orderedMedications.add(odto);
            }

            dto.setOrderedMedication(orderedMedications);
            dtos.add(dto);
        }
        return dtos;
    }

    @Override
    public OrderDTO getByIdentifier(int uniqueidentifier) {
        for(OrderDTO dto: getAllunfinishedOrders()){
            if(dto.getUniqueidentifier()==uniqueidentifier){
                return dto;
            }
        }
        return null;
    }

    @Override
    public List<Order> getSuppliersOrders(SupplierDTO supplierDTO) {
        return null;
    }

    @Override
    public Order addOrder(OrderDTO orderDTO) {
        return null;
    }
    public Order getByUniqueIdentifier(int uniqueidentifier) {
        for(Order o: getAllOrders()){
            if(o.getUniqueidentifier()==uniqueidentifier){
                return o;
            }
        }
        return null;
    }

    @Override
    public List<OrderedMedicationDTO> getOrderedMedicationByIdentifier(int id) {
        return getByIdentifier(id).getOrderedMedication();
    }
}
