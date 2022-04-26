package com.hiperium.java.faker.dynamodb.example.service;

import com.hiperium.java.faker.dynamodb.example.generic.ServiceGeneric;
import com.hiperium.java.faker.dynamodb.example.model.SingleTable;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import software.amazon.awssdk.services.dynamodb.model.DynamoDbException;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author Andres Solorzano
 */
public final class SingleTableService extends ServiceGeneric {

    private static final Logger LOGGER = LogManager.getLogger(SingleTableService.class);

    private SingleTableService() {
        super();
    }

    public static List<String> generateLocationData(int requiredNumber)
            throws DynamoDbException, IllegalArgumentException {
        LOGGER.debug("generateLocationData() - START");
        List<String> generatedPkList = new ArrayList<>(LocationService
                .insertRequestedLocationData(requiredNumber));
        LOGGER.debug("generateLocationData() - END");
        return generatedPkList;
    }

    public static Map<String, List<String>> generateCompanyData(int requiredNumber,
                                                                List<String> generatedPkList)
            throws DynamoDbException, IllegalArgumentException {
        LOGGER.debug("generateCompanyData() - START");
        Map<String, List<String>> locationCompanyIdsMap = new HashMap<>();
        for (String partitionKey : generatedPkList) {
            List<String> generatedIds = CompanyService.insertRequestedCompanyData(
                    partitionKey, requiredNumber);
            locationCompanyIdsMap.put(partitionKey, generatedIds);
        }
        LOGGER.debug("generateCompanyData() - END");
        return locationCompanyIdsMap;
    }

    public static void generateOpenPositionData(int requiredNumber,
                                                Map<String, List<String>> locationCompanyIdsMap)
            throws DynamoDbException, IllegalArgumentException {
        LOGGER.debug("generateOpenPositionData() - START");
        // Map BiConsumer<Key, Value>
        locationCompanyIdsMap.forEach((locationPK, companySkList) ->
                companySkList.forEach(companySK ->
                        OpenPositionService.insertRequestedOpenPositionData(
                                locationPK, companySK, requiredNumber)));
        LOGGER.debug("generateOpenPositionData() - END");
    }

    public static void deleteAllItems() {
        LOGGER.debug("deleteAllItems() - START");
        for (SingleTable singleTable : singleTableClient.scan().items()) {
            singleTableClient.deleteItem(singleTable);
        }
        LOGGER.debug("deleteAllItems() - END");
    }
}
