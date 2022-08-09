# NBC News

## Overview
An Angular app that displays news articles from around the world in different categories from News API.


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.3.


## Screenshot
![Screenshot](https://github.com/Adedeji-Taiwo/Nbc-News/blob/main/src/assets/images/Screenshot%202022-02-22%20170056.png)
  
  
## Link
- Live link: https://nbc-newz.herokuapp.com/


## Third Party Libraries used.

You will find below the different third party libraries used in the project.

| Feature  | Package | Benefits |
| ------------- | ------------- | ------------- |
| Angular  |  `angular` | A platform and framework for building single-page client applications using HTML and TypeScript |
| Angular CLI | `@angular/cli`  | A command-line interface tool that you use to initialize, develop, scaffold, and maintain Angular applications directly from a command shell. |
| Angular Router | `@angular/router`  | Handles the navigation from one view to the next. |
| Angular-Font Awesome | `angular-fontawesome`  | Friction-less way to use our icons in your Angular applications |
| RxJS | `rxjs`  | JavaScript library that uses observables for reactive programming |
| Axios | `axios`  |  Allows for communication with the APIs |
| NGX-oading-Bar | `@ngx-loading-bar/http-client`  | A fully automatic loading bar with zero configuration for Angular app (http, http-client and router).|
| PrimeNG | `primeng`  | A collection of rich UI components for Angular|
| News API | `newsapi`  | A simple, easy-to-use REST API that returns JSON search results for current and historic news articles |
| Express | `express`  | A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. |



## Note
- The News API from [newsapi](https://newsapi.org/) forbids CORS request i.e the API does not accept request from a browser except from localhost. However, this can be solved by making the request on the server-side and forwarding the request to the front-end from your server.



## Setup
- Clone project `git clone https://github.com/LivingStone-Blockchain/NBC.git`
- Install dependencies using `npm install`.
- Generate API_KEY for the API endpoints by signing up at [newsapi](https://newsapi.org/).
- Create `.env` file to store config variables such as API Key, port, and node. Add `.env` file to gitignore before committing to keep keys and other information private.
- Start backend server by running `node server.js` to start Express.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

