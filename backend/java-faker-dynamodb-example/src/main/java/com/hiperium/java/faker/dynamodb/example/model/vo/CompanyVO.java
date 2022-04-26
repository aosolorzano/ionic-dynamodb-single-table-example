package com.hiperium.java.faker.dynamodb.example.model.vo;

import software.amazon.awssdk.enhanced.dynamodb.mapper.annotations.DynamoDbBean;

/**
 * @author Andres Solorzano
 */
@DynamoDbBean
public class CompanyVO {

    private String name;
    private String city;
    private String industry;
    private String url;

    public CompanyVO() {
    }

    public CompanyVO(String name, String city, String industry, String url) {
        this.name = name;
        this.city = city;
        this.industry = industry;
        this.url = url;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getIndustry() {
        return industry;
    }

    public void setIndustry(String industry) {
        this.industry = industry;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    @Override
    public String toString() {
        return "CompanyVO{" +
                "name='" + name + '\'' +
                ", city='" + city + '\'' +
                ", industry='" + industry + '\'' +
                ", url='" + url + '\'' +
                '}';
    }
}
