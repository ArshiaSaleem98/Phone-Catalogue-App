# Phone-Catalogue-App
It’s a responsive web application about phone catalogues. All the phones will be loaded from database and the user will able to see all the details.
## Front-End 
To create Front-end part, i have used [React](https://reactjs.org/) to make the web work efficiently while updating and rendering any components when the data will change.
## Back-End 
For Back-End to create and implement Rest API (that has one ending-point *GET*), i have decided to used [Spring boot](https://spring.io/projects/spring-boot) ,basically it's a Java-based framework , as it makes the services to develop and deploy independently.

## Tecnology Stack

Component         | Technology Used
---               | ---
| Frontend   | React | 
| BackEnd | Spring-Boot,Java  | 
| Database   | MySql | 
| Persistence   | JPA  | 

## Getting Started
## Running the Application on Localhost using Docker-Compose

### Prerequisites

- Clone the Repository into your Computer.  
- Install the docker from https://docs.docker.com/get-docker/ .

### Deployment 
To create and build the docker images ,i have created two DockerFiles ,one for Frontend and other for Backend.
### DockerFile for the React Application   
As the frontend of the application is written in React. so i deployed the React app behind an nginx server.  
Following is the Dockerfile for the React app (It uses nginx.conf):  

<img width="573" alt="dockerfilesreact" src="https://user-images.githubusercontent.com/45390300/139269613-dc281ca6-cd85-47ff-a2e9-176f37f53350.PNG">

### DockerFile for the SpringBoot Application  

Here is the Dockerfile for the spring boot app:  

<img width="573" alt="dockerfilespring" src="https://user-images.githubusercontent.com/45390300/139269610-72d0c2d6-ef76-4836-8956-6213561deac1.PNG">

### Creating the docker-compose.yml configuration

To deploy my docker compose, i created a docker-compose.yml file that contains configuration for all the services in my entire stack.

Following is the docker-compose.yml file To run my application. It has three services: app-server, app-client, and db. The app-server contains configuration for the backend app ,while the app-client contains configuration for the react app, and db is for the mysql database.  

<img width="573" alt="dockerfilesreact" src="https://user-images.githubusercontent.com/45390300/139268996-f8046c77-fb3d-4848-b5f3-16c1ca9f8ee2.png">

### Running the complete Stack:

- Open the Project that you have cloned into an IDE  
- Run the app by using the following Command:`docker-compose up`  
- Access the Application:http://localhost:9090/


## Running the Application on Google Cloud Platform using Cloud Run  

### Prerequisites

- Create an account: https://console.cloud.google.com/ .
- Create a project
- Download cloud sdk: https://cloud.google.com/sdk/docs/install

### Set Up

- Open the terminal type the command: `gcloud init` then select a new configuration option. 
- Choose a name for your project
- Select your account and pick the project. 











## Screenshots  
### Home Page  
![homepage](https://user-images.githubusercontent.com/45390300/139253553-7feacbd8-eb48-4339-8d35-2c34c972d44c.png)

### Phone Detail Page 
![productPage](https://user-images.githubusercontent.com/45390300/139254259-0a6b0093-f2a0-4661-88b1-3405855d59d4.png)

### Contact Page 
![contactpage](https://user-images.githubusercontent.com/45390300/139254977-23e1c94d-3d09-46cf-a185-1b2fb6045c33.png)




