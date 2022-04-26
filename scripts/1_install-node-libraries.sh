#!/bin/bash
echo "Installing/Updating required NPM dependencies."
node -v
npm -v
sudo npm install -g @angular/cli
sudo npm install -g @ionic/cli
sudo npm install -g @aws-amplify/cli
echo "Done!"