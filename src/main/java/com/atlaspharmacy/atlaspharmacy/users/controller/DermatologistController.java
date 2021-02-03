package com.atlaspharmacy.atlaspharmacy.users.controller;

import com.atlaspharmacy.atlaspharmacy.users.domain.Authority;
import com.atlaspharmacy.atlaspharmacy.users.domain.Dermatologist;
import com.atlaspharmacy.atlaspharmacy.users.service.IDermatologistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.util.List;

@CrossOrigin
@Controller
@RequestMapping(value="/dermatologist")
public class DermatologistController {

    private IDermatologistService _dermatologistService;

    @Autowired
    public DermatologistController(IDermatologistService _dermatologistService) {
        this._dermatologistService = _dermatologistService;
    }

    @GetMapping(value = "/getByPharmacy", produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody
    List<Dermatologist> getByPharmacy(@RequestParam("id") Long id) throws ParseException {
        return _dermatologistService.findAllByPharmacy(id);
    }
}
