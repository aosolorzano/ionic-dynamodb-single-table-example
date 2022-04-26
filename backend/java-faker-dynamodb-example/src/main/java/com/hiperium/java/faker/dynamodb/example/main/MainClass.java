package com.hiperium.java.faker.dynamodb.example.main;

import com.hiperium.java.faker.dynamodb.example.service.SingleTableService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import software.amazon.awssdk.services.dynamodb.model.DynamoDbException;

import java.io.Console;
import java.util.List;
import java.util.Map;
import java.util.Properties;

/**
 * @author Andres Solorzano
 */
public class MainClass {

    private static final Logger LOGGER = LogManager.getLogger(MainClass.class);
    private static final int MAX_NUM_LOCATIONS_TO_GENERATE = 25;
    private static final int MAX_NUM_COMPANIES_PER_LOCATION = 15;
    private static final int MAX_NUM_OPEN_POSITIONS_PER_COMPANY = 5;
    private static final String RANGE_SUPPORTED_EXCEPTION_MESSAGE = "The number entered exceed the range supported.";
    public static final String DONE_MESSAGE = "Done!";

    public static void main(String[] args) throws IllegalAccessException {
        Console console = System.console();
        if (null == console) {
            throw new IllegalAccessException("Java Console is not available...");
        }
        String awsProfile = console.readLine("Enter your aws profile name: [default] ");
        if (!awsProfile.isBlank() && !awsProfile.equalsIgnoreCase("default")) {
            Properties props = System.getProperties();
            props.setProperty("aws.profile", awsProfile.trim());
        }
        // READING USER INPUT
        int requestedLocationsNumber = getRequestedUserInput(console,
                "Enter the number of locations to generate [1-" + MAX_NUM_LOCATIONS_TO_GENERATE + "]: ",
                MAX_NUM_LOCATIONS_TO_GENERATE);
        int requestedCompaniesNumber = getRequestedUserInput(console,
                "Enter the number of companies per location [1-" + MAX_NUM_COMPANIES_PER_LOCATION + "]: ",
                MAX_NUM_COMPANIES_PER_LOCATION);
        int requestedOpenPositionsNumber = getRequestedUserInput(console,
                "Enter the number of open positions per company [1-" + MAX_NUM_OPEN_POSITIONS_PER_COMPANY + "]: ",
                MAX_NUM_OPEN_POSITIONS_PER_COMPANY);

        //DELETING PREVIOUS DATA
        LOGGER.info("Deleting previous data...");
        SingleTableService.deleteAllItems();

        // PERSISTING REQUESTED DATA
        LOGGER.info("Persisting the requested amount of data. This can take a while...");
        try {
            List<String> generatedPkList = createLocationsData(requestedLocationsNumber);
            LOGGER.info(DONE_MESSAGE);
            Map<String, List<String>> locationCompanyIdsMap = createCompaniesData(requestedCompaniesNumber,
                    generatedPkList);
            LOGGER.info(DONE_MESSAGE);
            createOpenPositionData(requestedOpenPositionsNumber, locationCompanyIdsMap);
            LOGGER.info(DONE_MESSAGE);
        } catch (NumberFormatException e) {
            throw new IllegalArgumentException(e.getMessage());
        }
        LOGGER.info("All requested amount of data was created successfully.");
    }

    private static List<String> createLocationsData(int requestedLocationsNumber)
            throws DynamoDbException, IllegalArgumentException {
        LOGGER.info("Creating Locations data...");
        return SingleTableService.generateLocationData(requestedLocationsNumber);
    }

    private static Map<String, List<String>> createCompaniesData(int requestedCompaniesNumber,
                                                                 List<String> generatedPkList)
            throws DynamoDbException, IllegalArgumentException {
        LOGGER.info("Creating Companies data...");
        return SingleTableService.generateCompanyData(requestedCompaniesNumber, generatedPkList);
    }

    private static void createOpenPositionData(int requestedCompaniesNumber,
                                               Map<String, List<String>> locationCompanyIdsMap)
            throws DynamoDbException, IllegalArgumentException {
        LOGGER.info("Creating Open Position data...");
        SingleTableService.generateOpenPositionData(requestedCompaniesNumber, locationCompanyIdsMap);
    }

    private static int getRequestedUserInput(Console console, String message, int maxLimitAllowed) throws NumberFormatException{
        String inputNumberStr = console.readLine(message);
        int inputNumber = Integer.parseInt(inputNumberStr);
        validateInputLimit(inputNumber, maxLimitAllowed);
        return inputNumber;
    }

    private static void validateInputLimit(int enteredNumber, int limit) throws IllegalArgumentException{
        if (enteredNumber <= 0 || enteredNumber > limit) {
            throw new IllegalArgumentException(RANGE_SUPPORTED_EXCEPTION_MESSAGE);
        }
    }
}
