#!/bin/bash
echo "Packaging Java projects."
cd ../backend/java-faker-dynamodb-example || { echo "Error moving to the 'java-faker-dynamodb-example' directory."; exit 1; }
mvn clean package