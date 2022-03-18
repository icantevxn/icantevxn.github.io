# Visa Assignment: Contact List App

<div id="top"></div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation-and-running-the-app">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.6.

The application will manipulate a contact list. Requirements for the application are as follows: 
<ol>
  <li> You may use a set of existing contacts for the list. Hard code a list to start with. The list may reside in memory and be manipulated by the add, edit, and delete functions.
  </li>
  <li>
    Contact information should consist of:
    <ul>
    <li>First name</li>
    <li>Last name</li>
    <li>Phone number</li>
    <li>Email address</li>
    </ul>
  </li>
<li>
 Initially the user should be viewing a page with a list of existing contacts. In the contacts list, a contact should be shown with a card style layout. Each card should consist of:
<ul>
    <li>First name</li>
    <li>Last name</li>
    <li>Phone number</li>
    </ul>
</li>

<li>From the Contact Listing page, the user should be able to:</li>
<ol>
 <li>Edit an existing contact</li>
 <li>All fields are editable</li>
<li>Create a separate page for editing</li>
<li>View a contact
<ul>
<li>Expand a contact to view all information</li>
</ul>
</li>
<li>Delete an existing use </li>
<li>A simple delete with a confirmation popup. Are you sure you want to delete “Contact”?</li>
<li>
Create a new contact
<ul><li>Create a separate page for creating</li>
</ul></li>
</ol>
<li>After any contact actions have been performed, the list must update to reflect any changes</li>
</ol>


<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

This app is built with Angular using some Bootstrap classes that have dependance on Popper and JQuery.
The state is managed with NgRx.

* [Angular v13.2.6](https://angular.io/)
* [Bootstrap v5.1.3](https://getbootstrap.com)
* [Popper v2.11.4](https://popper.js.org/)
* [JQuery v3.6.0](https://jquery.com)
* [FontAwesome v4.7.0](https://fontawesome.com/) - Free solid, regular and brand icons were used.
* [NgRx v13.0.2](https://ngrx.io/)
* [json-server](https://www.npmjs.com/package/json-server) - To mock a fake REST API.

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

To ensure your app works as it should, please make sure you have all prerequisites with the right versions. Version differences may cause issues with styling.

For running `-g` global installs, you may need to use the `sudo` command to install these packages depending on your computer permissions.

### Prerequisites

* npm v6.14.8
  ```sh
  npm install npm@6.14.8 -g
  ```
* json-server
  ```sh
  npm i json-server -g
  ```
* @angular/cli v13.2.6
  ```sh
  npm install -g @angular/cli@13.2.6 -g
  ```

### Installation and Running The App

1. Clone the repo
   ```sh
   git clone https://github.com/icantevxn/visa.git 
   ```
2. Install NPM packages at project root
   ```sh
   npm install
   ```
3. Run
   ```sh
   json-server --watch db.json --port 5000
   ```
   at your project root to run the mock json-server.
4. Navigate to `tsconfig.json` and ensure `strict` is set to `false`.
5. If you are in your project root, run
   ```sh
   cd src
   ng serve -o
   ```
   to serve app on a dev server. `-o` command is to open the app on your browser immediately once the app is done compiling.
6. Navigate to `http://localhost:4200/` if page does not automatically open. The app will automatically reload if you change any of the source files.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


<p align="right">(<a href="#top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

If you have any questions, concerns or issues, please contact me at:
* Email: evan1208lim@gmail.com
* Contact Number: +1 608 622 4272

<p align="right">(<a href="#top">back to top</a>)</p>


