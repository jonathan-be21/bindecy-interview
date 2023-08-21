variable "ec2_ami_id" {
  type        = string
  default     = "ami-0ae9328bcad70db94"
}

variable "ec2_instance_type" {
  type        = string
  default     = "t3.micro"
}

variable "aws_region" {
  type        = string
  default     = "us-east-1"
}

variable "availability_zone" {
  type        = string
  default     = "us-east-1a"
}
