# Car Park Management

## Requirements
- Node 15.9.0 and later. Install if not available.
- dependencies specified in package.json

## Steps to run
1) Change current directory to root of project
2) Run ```npm i``` and wait for all dependecies to be installed.
3) Run ```node .``` in command line in the root of project to run the script.

## Design
The project uses aggregate design from Domain Driven Design.
The aggregate root is the car park domain, and the lots are the leaves. 

## Possible Improvement
- Change out the global carPark object to use a database with car park as a document. 
  This would be useful if there is a need to manage multiple car parks.
