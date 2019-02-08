# Calculadora base application

Calculadora base code

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 
See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Docker & Docker compose installed

### Installing

Generate the images
In the application folder run
**Backend:**

    docker build -t pichincha/backend backend/.

**Frontend:**

    docker build -t pichincha/frontend frontend/.
    
**Docker Compose:**

    docker-compose up


## Running the tests

Run [mvn surefire:test]

## Built With

* [Maven](https://maven.apache.org/) - Dependency Management

## Authors

* **Andres De La Cuadra** - *Initial work*
* **German Carrillo** - *Gitlab upload & Documentation*
