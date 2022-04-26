package com.hiperium.java.faker.dynamodb.example.service;

import com.hiperium.java.faker.dynamodb.example.generic.ServiceGeneric;
import com.hiperium.java.faker.dynamodb.example.model.SingleTable;
import com.hiperium.java.faker.dynamodb.example.model.enums.ItemTypeEnum;
import com.hiperium.java.faker.dynamodb.example.model.vo.CompanyVO;
import com.hiperium.java.faker.dynamodb.example.util.DataUtil;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import software.amazon.awssdk.services.dynamodb.model.DynamoDbException;

import java.util.ArrayList;
import java.util.List;

/**
 * @author Andres Solorzano
 */
public final class CompanyService extends ServiceGeneric {

    private static final Logger LOGGER = LogManager.getLogger(CompanyService.class);
    private static final String COMPANY_ID_LABEL = "CO#";
    private static final List<String> INSERTED_COMPANY_NAME_LIST = new ArrayList<>();

    private CompanyService() {
        super();
    }

    public static List<String> insertRequestedCompanyData(String partitionKey, int requiredNumber)
            throws DynamoDbException, IllegalArgumentException {
        INSERTED_COMPANY_NAME_LIST.clear();
        List<String> generatedSortKeyList = new ArrayList<>();
        for (int i = 0; i < requiredNumber; i++) {
            String generatedSortKey = CompanyService.insertRequestedData(partitionKey);
            generatedSortKeyList.add(generatedSortKey);
        }
        return generatedSortKeyList;
    }

    private static String insertRequestedData(String partitionKey)
            throws DynamoDbException, IllegalArgumentException {
        String companyName = DataUtil.FAKER.company().name();
        while (INSERTED_COMPANY_NAME_LIST.contains(companyName)) {
            companyName = DataUtil.FAKER.company().name();
        }
        CompanyVO companyVO = new CompanyVO(
                companyName,
                DataUtil.FAKER.address().cityName(),
                DataUtil.FAKER.company().industry(),
                DataUtil.FAKER.company().url());

        String companyId = companyName
                .replace("and", "")
                .replaceAll("[-,\\s+]", "");

        SingleTable company = new SingleTable(
                partitionKey,
                COMPANY_ID_LABEL.concat(companyId),
                companyVO,
                DataUtil.getActualDateTime());
        company.setGsi1pk(ItemTypeEnum.COMPANY.name());
        company.setGsi1sk(partitionKey);

        LOGGER.debug("Inserting {}", company.getSk());
        singleTableClient.putItem(company);
        INSERTED_COMPANY_NAME_LIST.add(companyName);
        LOGGER.debug("DONE!");
        return company.getSk();
    }
}
