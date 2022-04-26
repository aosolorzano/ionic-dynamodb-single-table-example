#!/bin/bash
echo "Packaging frontend projects."
cd ../frontend/ionic-amplify-graphql-example || { echo "Error accessing 'ionic-amplify-graphql-example' directory."; exit 1; }
npm install
ionic build
echo "Done!"