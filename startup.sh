#!/bin/bash

docker build -t jenkins_master:latest -f master.dockerfile .
docker build -t jenkins_agent:latest -f agent.dockerfile .

docker run --name jenkins_master -d -v ./jenkins_home:/var/jenkins_home -p 8080:8080 -p 50000:50000 jenkins/jenkins