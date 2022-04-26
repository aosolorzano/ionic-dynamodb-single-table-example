#!/bin/bash
cd scripts/ || { echo "Error moving to the 'scripts' directory."; exit 1; }
POC_WORKING_DIR=$(cd -P -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd -P)

echo "Running all scripts in the $POC_WORKING_DIR directory."
sh ./1_install-node-libraries.sh

cd "$POC_WORKING_DIR" || { echo "Error moving to the working directory."; exit 1; }
sh ./2_package-ionic-project.sh

cd "$POC_WORKING_DIR" || { echo "Error moving to the working directory."; exit 1; }
sh ./3_package-java-project.sh

cd "$POC_WORKING_DIR" || { echo "Error moving to the working directory."; exit 1; }
sh ./4_load-testing-data.sh

cd "$POC_WORKING_DIR" || { echo "Error moving to the working directory."; exit 1; }
sh ./5_run-ionic-project.sh