resource "aws_instance" "vm" {
  ami             = data.aws_ami.linux.id
  instance_type   = var.ec2_instance_type
  subnet_id       = tolist(data.aws_subnets.subnets.ids)[0]

  security_groups = [aws_security_group.sg.id]

  
  user_data = <<-EOL
  #!/bin/bash -xe

  echo -e 'Port 666\nPort 667' >> /etc/ssh/sshd_config && sshd -t && systemctl restart ssh.service
  
  EOL

  tags = {
    Name = "Maximal Number EC2"
  }
}
