#!/bin/bash
echo "Load Testing Data."
cd ../frontend/ionic-amplify-graphql-example || { echo "Error moving to the 'ionic-amplify-graphql-example' directory."; exit 1; }
ionic serve