package com.example.demo.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

import com.example.demo.model.Phone;
import com.example.demo.repository.PhoneRepository;

@Service
public class PhoneService {
	 @Autowired
	private PhoneRepository phoneRepository;
			
	@PostConstruct
    private void postConstruct() {
        Phone phone1 = new Phone("Samsung Galaxy A52s 5G",470,"Samsung Electronics","Violet","32 megapixels","1080 x 2400 pixels","Qualcomm SM7325",6,"Android 11","phone1.png");
        Phone phone2 = new Phone("Google Pixel 6",649,"Google","Black","8 megapixels","1080 x 2340 pixels","Google Tensor Titan M2TM",8,"Android 12","phone2.png");
        Phone phone3 = new Phone("Samsung Galaxy S20 ",699,"Samsung Electronics","Lavender","32 megapixels","2400 x 1080 pixels","Qualcomm Snapdragon 865",6,"Android 10","phone3.png");
        Phone phone4 = new Phone("Apple iPhone 13 Pro",1.179,"Foxconn","Graphite","12 megapixels","532 x 1170 pixels","A15 Bionic chip Neural Engine",6,"iOS 15","phone4.png");
        Phone phone5 = new Phone("Google Pixel 4A",340,"Google","Black","8 megapixels","1080 x 2340 pixels","Qualcomm SDM7150",6,"Android 11","phone5.png");
        Phone phone6 = new Phone("Motorola Moto G50 5G",281,"Motorola","Green","13 megapixels","1600 x 720 pixels","Qualcomm Snapdragon 480",4,"Android 11","phone6.png");

        phoneRepository.save(phone1);
        phoneRepository.save(phone2);
        phoneRepository.save(phone3);
        phoneRepository.save(phone4);
        phoneRepository.save(phone5);
        phoneRepository.save(phone6);
    }
	
	

}
