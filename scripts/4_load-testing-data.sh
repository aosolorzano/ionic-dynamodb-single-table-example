#!/bin/bash
echo "Load Testing Data."
cd ../backend/java-faker-dynamodb-example || { echo "Error moving to the 'java-faker-dynamodb-example' directory."; exit 1; }
java -jar target/java-faker-dynamodb-example.jar
echo "Done!"