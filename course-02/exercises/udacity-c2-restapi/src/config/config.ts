export const config = {
  "postgress": {
    "username": "database1udagram",
    "password": "database1udagram",
    "database": "database1udagram",
    "host": "database1udagram.cnncsvqjk8nm.us-east-1.rds.amazonaws.com",
    "dialect": "postgress",
  },
  "dev": {
    // "username": "database1udagram",
    // "password": "database1udagram",
    // "database": "database1udagram",
    // "host": "database1udagram.cnncsvqjk8nm.us-east-1.rds.amazonaws.com",
    // "dialect": "postgres",
    "aws_region": "",
    "aws_profile": "",
    "aws_media_bucket": ""
  },
  "jwt": {
    "secret": " "
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }
}
