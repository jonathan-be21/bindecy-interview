#!/bin/bash

### in order to run this script, please make sure you've installed docker
read -p "Do you wish to build this project and run Jenkins master on the current platform? (Yes/No): " answer

if [[ "$answer" != "Yes" && "$answer" != "yes" ]] ;then 
    exit 0
fi

docker build -t jenkins-master -f master.dockerfile .
docker build -t jenkins-agent -f agent.dockerfile .

docker run --name jenkins-master -d -v ./jenkins_home:/var/jenkins_home -p 8080:8080 -p 50000:50000 jenkins-master

### If you're running the jenkins master docker container on remote server
### please use the following ssh tunnel command (replace USER and JENKINS_HOST with relevant details):
### ssh USER@JENKINS_HOST -L 8080:JENKINS_HOST:8080

echo "Jenkins Master login details:"
echo "USERNAME: Admin"
echo "Password: Aa123456"