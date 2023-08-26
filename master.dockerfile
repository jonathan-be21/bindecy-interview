FROM jenkins/jenkins:lts

WORKDIR /var/jenkins

# Copy authorized keys
COPY .ssh/jenkins_id_rsa .ssh/id_rsa

USER root

RUN chown -R jenkins:jenkins .ssh/

USER jenkins

EXPOSE 8080
