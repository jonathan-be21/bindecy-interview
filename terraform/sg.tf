resource "aws_security_group" "sg" {
  name = "maximal-number-security-group"
  description = "Allow SSH access from everywhere to specific port"
  vpc_id      = data.aws_vpc.default_vpc.id

  dynamic "ingress" {
    for_each = toset(local.ports_in)
    content {
      description      = "SSH from Max Numbers"
      from_port        = ingress.value
      to_port          = ingress.value
      protocol         = "tcp"
      cidr_blocks      = ["0.0.0.0/0"]
    }
  }

  egress {
    from_port        = 0
    to_port          = 0
    protocol         = "-1"
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["::/0"]
  }
}



