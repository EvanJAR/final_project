package com.codeclan.final_project.models;

public class Item {

    private String name;
    private String brand;
    private double price;
    private String sourceURL;

    public Item(String name, String brand, double price, String sourceURL){
        this.name = name;
        this.brand = brand;
        this.price = price;
        this.sourceURL = sourceURL;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getSourceURL() {
        return sourceURL;
    }

    public void setSourceURL(String sourceURL) {
        this.sourceURL = sourceURL;
    }
}
