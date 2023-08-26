resource "aws_instance" "vm" {
  ami             = data.aws_ami.linux.id
  instance_type   = var.ec2_instance_type
  subnet_id       = tolist(data.aws_subnets.subnets.ids)[0]

  security_groups = [aws_security_group.sg.id]

  
  user_data = "${file("add_ports_SSHD.sh")}"

  key_name = "bindecy"

  tags = {
    Name = "Maximal Number EC2"
  }
}
