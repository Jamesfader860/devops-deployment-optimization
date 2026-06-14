#!/bin/bash
cd /home/ec2-user/devops-deployment-optimization
npm install
node app.js > /dev/null 2>&1 &