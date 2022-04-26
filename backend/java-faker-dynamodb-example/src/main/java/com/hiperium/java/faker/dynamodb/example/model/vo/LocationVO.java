package com.hiperium.java.faker.dynamodb.example.model.vo;

import software.amazon.awssdk.enhanced.dynamodb.mapper.annotations.DynamoDbBean;

import java.text.MessageFormat;

/**
 * @author Andres Solorzano
 */
@DynamoDbBean
public class LocationVO {

    private static final String FLAG_URL = "https://flagcdn.com/h80/{0}.png";

    private String country;
    private String flagImageUrl;

    public LocationVO() {
    }

    public LocationVO(String countryName, String countryCode2) {
        this.country = countryName;
        this.flagImageUrl = MessageFormat.format(FLAG_URL, countryCode2);
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getFlagImageUrl() {
        return flagImageUrl;
    }

    public void setFlagImageUrl(String flagImageUrl) {
        this.flagImageUrl = flagImageUrl;
    }

    @Override
    public String toString() {
        return "SingleTable{" +
                "country='" + country + '\'' +
                ", flagImageUrl='" + flagImageUrl + '\'' +
                '}';
    }
}
