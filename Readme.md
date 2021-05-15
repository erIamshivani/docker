This repository contains a HTML-CSS Based frontend with Nodejs backend featuring my Resume as of May 15th, 2021. 
The application has been packaged into Docker container.

Steps to checkout the repository:
1. Clone the repository.
2. ```cd docker```
3. Run as root user, ```sudo su```
4. Create Docker image: ```docker build -t portfolio:v1 .```
5. Check if the image is listed: ```docker images
6. Run the docker image: ```docker run -d -p 3000:3000 portfolio:v1```
7. Check http://localhost:3000/ on your browser.
8. To stop the container, get container id from ```docker ps```. To stop container run ```docker stop <container-id>```
9. To remove container do, ```docker rm <container-id>```. Verify if the container was removed with ```docker ps -a```


Note: This application is still in progress.
