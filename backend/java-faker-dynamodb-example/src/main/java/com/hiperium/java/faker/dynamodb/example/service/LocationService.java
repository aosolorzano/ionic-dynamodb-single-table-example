package com.hiperium.java.faker.dynamodb.example.service;

import com.hiperium.java.faker.dynamodb.example.generic.ServiceGeneric;
import com.hiperium.java.faker.dynamodb.example.model.SingleTable;
import com.hiperium.java.faker.dynamodb.example.model.enums.ItemTypeEnum;
import com.hiperium.java.faker.dynamodb.example.model.vo.LocationVO;
import com.hiperium.java.faker.dynamodb.example.util.DataUtil;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import software.amazon.awssdk.services.dynamodb.model.DynamoDbException;

import java.util.ArrayList;
import java.util.List;

/**
 * @author Andres Solorzano
 */
public final class LocationService extends ServiceGeneric {

    private static final Logger LOGGER = LogManager.getLogger(LocationService.class);
    private static final String LOCATION_ID_LABEL = "LOC#";
    private static final List<String> INSERTED_LOCATION_ID_LIST = new ArrayList<>();

    private LocationService() {
        super();
    }

    public static List<String> insertRequestedLocationData(int requiredNumber) {
        INSERTED_LOCATION_ID_LIST.clear();
        for (int i = 0; i < requiredNumber; i++) {
            insertRequestedData();
        }
        return INSERTED_LOCATION_ID_LIST;
    }

    private static void insertRequestedData() throws DynamoDbException, IllegalArgumentException {
        String countryCode = DataUtil.FAKER.country().countryCode2();
        while (INSERTED_LOCATION_ID_LIST.contains(countryCode)) {
            countryCode = DataUtil.FAKER.country().countryCode2();
        }
        LocationVO locationVO = new LocationVO(
                DataUtil.FAKER.country().name(),
                countryCode);

        SingleTable location = new SingleTable(
                LOCATION_ID_LABEL.concat(countryCode),
                LOCATION_ID_LABEL.concat(countryCode),
                locationVO,
                DataUtil.getActualDateTime());
        location.setGsi1pk(ItemTypeEnum.LOCATION.name());
        location.setGsi1sk(LOCATION_ID_LABEL.concat(countryCode));

        LOGGER.debug("Inserting {}", location.getPk());
        singleTableClient.putItem(location);
        INSERTED_LOCATION_ID_LIST.add(location.getPk());
        LOGGER.debug("DONE!");
    }
}
