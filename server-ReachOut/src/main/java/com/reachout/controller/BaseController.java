package com.reachout.controller;


import com.reachout.model.Notes;
import com.reachout.repository.ReachRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api")
public class BaseController {

    @Autowired
    ReachRepository reachRepository;


    @GetMapping("/notes")
    public List<Notes> getAllNotes() {
        return reachRepository.findAll();
    }

    @PostMapping("/notes")
    public Notes createNote(@Valid @RequestBody Notes note) {
        return reachRepository.save(note);
    }



}
