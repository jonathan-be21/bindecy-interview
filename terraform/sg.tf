resource "aws_security_group" "VM" {
  name = "maximal-number-security-group"
  description = "Allow SSH access from everywhere to specific port"

  ingress {
    protocol = "tcp"
    port = sshPort
    from_port = sshPort
    to_port = sshPort
    cidr_blocks = ["0.0.0.0/0"]
  }
}