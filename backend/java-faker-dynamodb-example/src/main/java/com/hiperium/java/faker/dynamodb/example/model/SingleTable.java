package com.hiperium.java.faker.dynamodb.example.model;

import com.hiperium.java.faker.dynamodb.example.model.vo.CompanyVO;
import com.hiperium.java.faker.dynamodb.example.model.vo.LocationVO;
import com.hiperium.java.faker.dynamodb.example.model.vo.OpenPositionVO;
import software.amazon.awssdk.enhanced.dynamodb.mapper.annotations.*;

import java.time.Instant;
import java.util.Objects;

/**
 * @author Andres Solorzano
 */
@DynamoDbBean
public class SingleTable {

    private String pk;
    private String sk;

    private String gsi1pk;
    private String gsi1sk;

    private LocationVO location;
    private CompanyVO company;
    private OpenPositionVO openPosition;

    private Instant createdAt;
    private Instant updatedAt;

    public SingleTable() {
    }

    public SingleTable(String pk, String sk, LocationVO location, Instant createdAt) {
        this.pk = pk;
        this.sk = sk;
        this.location = location;
        this.createdAt = createdAt;
    }

    public SingleTable(String pk, String sk, CompanyVO company, Instant createdAt) {
        this.pk = pk;
        this.sk = sk;
        this.company = company;
        this.createdAt = createdAt;
    }

    public SingleTable(String pk, String sk, OpenPositionVO openPosition, Instant createdAt) {
        this.pk = pk;
        this.sk = sk;
        this.openPosition = openPosition;
        this.createdAt = createdAt;
    }

    @DynamoDbPartitionKey
    public String getPk() {
        return pk;
    }

    public void setPk(String pk) {
        this.pk = pk;
    }

    @DynamoDbSortKey
    public String getSk() {
        return sk;
    }

    public void setSk(String sk) {
        this.sk = sk;
    }

    @DynamoDbSecondaryPartitionKey(indexNames = { "gsi1sk" })
    public String getGsi1pk() {
        return gsi1pk;
    }

    public void setGsi1pk(String gsi1pk) {
        this.gsi1pk = gsi1pk;
    }

    @DynamoDbSecondarySortKey(indexNames = { "gsi1sk" })
    public String getGsi1sk() {
        return gsi1sk;
    }

    public void setGsi1sk(String gsi1sk) {
        this.gsi1sk = gsi1sk;
    }


    public LocationVO getLocation() {
        return location;
    }

    public void setLocation(LocationVO locationVO) {
        this.location = locationVO;
    }

    public CompanyVO getCompany() {
        return company;
    }

    public void setCompany(CompanyVO companyVO) {
        this.company = companyVO;
    }

    public OpenPositionVO getOpenPosition() {
        return openPosition;
    }

    public void setOpenPosition(OpenPositionVO openPositionVO) {
        this.openPosition = openPositionVO;
    }

    public Instant getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Instant createdAt) {
        this.createdAt = createdAt;
    }

    public Instant getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(Instant updatedAt) {
        this.updatedAt = updatedAt;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        SingleTable that = (SingleTable) o;
        return pk.equals(that.pk) && sk.equals(that.sk);
    }

    @Override
    public int hashCode() {
        return Objects.hash(pk, sk);
    }

    @Override
    public String toString() {
        return "SingleTable{" +
                "pk='" + pk + '\'' +
                ", sk='" + sk + '\'' +
                ", gsi1pk='" + gsi1pk + '\'' +
                ", gsi1sk='" + gsi1sk + '\'' +
                ", location=" + location +
                ", company=" + company +
                ", openPosition=" + openPosition +
                ", createdAt=" + createdAt +
                ", updatedAt=" + updatedAt +
                '}';
    }
}
