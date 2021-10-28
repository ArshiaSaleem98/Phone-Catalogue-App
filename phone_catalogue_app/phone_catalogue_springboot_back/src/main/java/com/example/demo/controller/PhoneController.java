package com.example.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Service.PhoneService;
import com.example.demo.model.Phone;
import com.example.demo.repository.PhoneRepository;
@CrossOrigin(origins="*")
@RestController
@RequestMapping("api/v1")
public class PhoneController {
	@Autowired
	private PhoneRepository phoneRepository;
	@GetMapping("/phones")
	public List<Phone> getAllPhones(@RequestParam("page") int page,@RequestParam("page_size")int pageSize){
		try {
			Thread.sleep(1500);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		Pageable phonePage = PageRequest.of(page, pageSize);
		Page<Phone> allPhones = phoneRepository.findAll(phonePage);
        
		return allPhones.getContent();
	}
	/*public Map<String,String> getPhoneDetail(@PathVariable(value="id") int id){
		Phone phone = phoneRepository.getById(id);
		HashMap<String, String> jsonResult = new HashMap<>();
		jsonResult.put("phone_name", phone.getName());
		jsonResult.put("phone_Description", phone.getDescription());
		jsonResult.put("phone_Description", phone.getColor());
		return jsonResult;
	}*/
	@GetMapping("/phoneDetails/{id}")
	public ResponseEntity<Phone> getPhoneById(@PathVariable("id") int id){
		try {
			Thread.sleep(1500);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		Optional<Phone> phoneData= phoneRepository.findById(id);
		if(phoneData.isPresent()) {
			return new ResponseEntity<>(phoneData.get(),HttpStatus.OK);
		}else {
			return new ResponseEntity<>(phoneData.get(),HttpStatus.OK);
		}
	}
	

}
