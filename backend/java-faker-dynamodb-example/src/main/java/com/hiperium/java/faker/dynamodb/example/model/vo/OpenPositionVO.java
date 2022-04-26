package com.hiperium.java.faker.dynamodb.example.model.vo;

import software.amazon.awssdk.enhanced.dynamodb.mapper.annotations.DynamoDbBean;

/**
 * @author Andres Solorzano
 */
@DynamoDbBean
public class OpenPositionVO {
    private String title;
    private String seniority;
    private String field;
    private String skills;

    public OpenPositionVO() {
    }

    public OpenPositionVO(String title, String seniority, String field, String skills) {
        this.title = title;
        this.seniority = seniority;
        this.field = field;
        this.skills = skills;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getSeniority() {
        return seniority;
    }

    public void setSeniority(String seniority) {
        this.seniority = seniority;
    }

    public String getField() {
        return field;
    }

    public void setField(String field) {
        this.field = field;
    }

    public String getSkills() {
        return skills;
    }

    public void setSkills(String skills) {
        this.skills = skills;
    }

    @Override
    public String toString() {
        return "OpenPositionVO{" +
                "title='" + title + '\'' +
                ", seniority='" + seniority + '\'' +
                ", field='" + field + '\'' +
                ", skills='" + skills + '\'' +
                '}';
    }
}
