FROM ubuntu:18.04

RUN   apt-get update && \
      apt-get -qy full-upgrade && \
      apt-get install -qy git gnupg software-properties-common wget unzip && \
      # Install a basic SSH server
      apt-get install -qy openssh-server && \
      sed -i 's|session    required     pam_loginuid.so|session    optional     pam_loginuid.so|g' /etc/pam.d/sshd && \
      mkdir -p /var/run/sshd && \
      # Install JDK 8
      apt-get install default-jdk-headless -qy && \
      apt-get -qy autoremove && \
      # Add user jenkins
      adduser --quiet jenkins && \
      # Set password for the jenkins user
      echo "jenkins:jenkins" | chpasswd && \
      /usr/bin/ssh-keygen -A && \
      # Install terraform
      wget --quiet https://releases.hashicorp.com/terraform/1.5.4/terraform_1.5.4_linux_amd64.zip && \
      unzip terraform_1.5.4_linux_amd64.zip && \
      mv terraform /usr/local/bin/ && \
      rm terraform_1.5.4_linux_amd64.zip && \
      rm -rf /var/lib/apt/lists/*

# Copy authorized keys
COPY .ssh/jenkins_id_rsa.pub /home/jenkins/.ssh/authorized_keys

RUN chown -R jenkins:jenkins /home/jenkins/.ssh/

# Standard SSH port
EXPOSE 22

CMD ["/usr/sbin/sshd", "-D"]
