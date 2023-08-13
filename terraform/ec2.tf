provider "aws" {
    region = "us-east-1"
}

resource "aws_instance" "vm" {
  ami = ami_id
  instance_type = "t2.micro"

  tags {
    Name = "Maximal Number EC2"
  }
}
