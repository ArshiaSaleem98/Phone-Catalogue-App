package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="PHONE_TBL")


public class Phone {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;
	@Column(name="name")
    private String name;
	@Column(name="price")
    private double price;
	@Column(name="manufacturer")
    private String manufacturer;
	@Column(name="color")
    private String color;
	@Column(name="camera")
    private String camera;
	@Column(name="screen")
    private String screen;
	@Column(name="processor")
    private String processor;
	@Column(name="ram")
    private int ram;
	@Column(name="operating_system")
    private String operatingSystem;
	@Column(name="imageFileName")
    private String imageFileName;
    
    
	public Phone() {
	}
    

	public Phone(String name, double price, String manufacturer, String color, String camera, String screen,
			String processor, int ram, String operatingSystem, String imageFileName) {
		super();
		this.name = name;
		this.price = price;
		this.manufacturer = manufacturer;
		this.color = color;
		this.camera = camera;
		this.screen = screen;
		this.processor = processor;
		this.ram = ram;
		this.operatingSystem = operatingSystem;
		this.imageFileName = imageFileName;
	}


	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public double getPrice() {
		return price;
	}


	public void setPrice(double price) {
		this.price = price;
	}


	public String getManufacturer() {
		return manufacturer;
	}


	public void setManufacturer(String manufacturer) {
		this.manufacturer = manufacturer;
	}


	public String getColor() {
		return color;
	}


	public void setColor(String color) {
		this.color = color;
	}


	public String getCamera() {
		return camera;
	}


	public void setCamera(String camera) {
		this.camera = camera;
	}


	public String getScreen() {
		return screen;
	}


	public void setScreen(String screen) {
		this.screen = screen;
	}


	public String getProcessor() {
		return processor;
	}


	public void setProcessor(String processor) {
		this.processor = processor;
	}


	public int getRam() {
		return ram;
	}


	public void setRam(int ram) {
		this.ram = ram;
	}


	public String getOperatingSystem() {
		return operatingSystem;
	}


	public void setOperatingSystem(String operatingSystem) {
		this.operatingSystem = operatingSystem;
	}


	public String getImageFileName() {
		return imageFileName;
	}


	public void setImageFileName(String imageFileName) {
		this.imageFileName = imageFileName;
	}

    
	
	
	


}
