#!/bin/bash
cd /home/ec2-user/devops-deployment-optimization

# Install PM2 globally if the server doesn't have it yet
sudo npm install -g pm2

# Install your app dependencies
npm install

# Stop any old running versions of the app so they don't clash
pm2 stop app || true

# Start the app in the background using PM2 and name it "app"
pm2 start app.js --name "app"