package com.hiperium.java.faker.dynamodb.example.service;

import com.hiperium.java.faker.dynamodb.example.generic.ServiceGeneric;
import com.hiperium.java.faker.dynamodb.example.model.SingleTable;
import com.hiperium.java.faker.dynamodb.example.model.enums.ItemTypeEnum;
import com.hiperium.java.faker.dynamodb.example.model.vo.OpenPositionVO;
import com.hiperium.java.faker.dynamodb.example.util.DataUtil;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import software.amazon.awssdk.services.dynamodb.model.DynamoDbException;

import java.util.ArrayList;
import java.util.List;

/**
 * @author Andres Solorzano
 */
public final class OpenPositionService extends ServiceGeneric {

    private static final Logger LOGGER = LogManager.getLogger(OpenPositionService.class);
    private static final String OPEN_POSITION_ID_LABEL = "OP#";
    private static final List<String> INSERTED_OPEN_POSITION_TITLE_LIST = new ArrayList<>();

    private OpenPositionService() {
        super();
    }

    public static void insertRequestedOpenPositionData(String locationPK, String companySK, int requiredNumber)
            throws DynamoDbException, IllegalArgumentException {
        for (int i = 0; i < requiredNumber; i++) {
            insertRequestedData(locationPK, companySK);
        }
    }

    private static void insertRequestedData(String locationPK, String companySK)
            throws DynamoDbException, IllegalArgumentException {
        String jobTitle = DataUtil.FAKER.job().title();
        while (INSERTED_OPEN_POSITION_TITLE_LIST.contains(jobTitle)) {
            jobTitle = DataUtil.FAKER.job().title();
        }
        OpenPositionVO openPositionVO = new OpenPositionVO(
                jobTitle,
                DataUtil.FAKER.job().seniority(),
                DataUtil.FAKER.job().field(),
                DataUtil.FAKER.job().keySkills());

        String openPositionId = jobTitle
                .replaceAll("[\\s+'-]", "");

        SingleTable openPosition = new SingleTable(
                locationPK,
                companySK.concat("#").concat(OPEN_POSITION_ID_LABEL).concat(openPositionId),
                openPositionVO,
                DataUtil.getActualDateTime());
        openPosition.setGsi1pk(ItemTypeEnum.OPEN_POSITION.name());
        openPosition.setGsi1sk(locationPK.concat("#").concat(companySK));

        LOGGER.debug("Inserting {}", openPositionVO.getTitle());
        singleTableClient.putItem(openPosition);
        INSERTED_OPEN_POSITION_TITLE_LIST.add(jobTitle);
        LOGGER.debug("DONE!");
    }
}
