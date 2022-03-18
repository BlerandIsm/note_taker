<div id="top"><div>
<!--
*** This is the Readme for Note Taker
-->

<!-- Project Shields -->

[![LinkedIn][linkedin-shield]][linkedin-url]

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<!-- Project Logo -->
<br />
<div align="center">
    <a href="https://super-rotary-notes.herokuapp.com/">
        <img src="./public/assets/images/logo.png" alt="logo">
        <br>Click the logo to launch APP<br>
    <a/>
    <h3 align="center">
        A Note Taking APP
    </h3>
    <p align="center">
        A simple app to take notes
        <br />
        <a href="https://github.com/aaguirre7/super-rotary-notes">
            <strong>Explore the docs</strong>
        </a>
        <br />
        <br />
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
        <a href="#what-was-done"> What was done</a>
    </li>
    <li>
        <a href="#instalation"> instalation</a>
    </li>
    <li>
        <a href="#usage"> usage</a>
    </li>
    <li>
        <a href="#contact">Contact</a>
    </li>

  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Challange

[![Product Name Screen Shot][product-screenshot1]](./public/assets/images/11-express-homework-demo-01.png)
[![Product Name Screen Shot][product-screenshot2]](./public/assets/images/11-express-homework-demo-02.png)

### The Task

AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete

### Criteria

GIVEN a note-taking application

- WHEN I open the Note Taker
  - THEN I am presented with a landing page with a link to a notes page
- WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
- WHEN I enter a new note title and the note’s text
  - THEN a Save icon appears in the navigation at the top of the page
- WHEN I click on the Save icon
  - THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
- WHEN I click on an existing note in the list in the left-hand column
  - THEN that note appears in the right-hand column
- WHEN I click on the Write icon in the navigation at the top of the page
  - THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column

### What was done

Created a NODE app that takes the user inputs and saves it in the db.json also if the note is not saved a new blank one is creted erasing the unsaved one. finally any note saved can be erased with the erased button.

App build in:  

- ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?logo=javascript&logoColor=%23F7DF1E&style=for-the-badge)

App runtime Frameworks and helpers:

- ![Node.js ](https://img.shields.io/badge/node.js-6DA55F?logo=node.js&logoColor=white&style=for-the-badge)

- ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?logo=express&logoColor=%2361DAFB&style=for-the-badge)

### Instalation

- Clone or Fork the Repo to your computer.
- Install NODEjs.
- Use NPM to install dependencies:
  - express: 4.17.3,
  - fs: 0.0.1-security,
  - path: 0.12.7,
  - "router": 1.3.6,
  - "util": 0.12.4,
  - "uuid": 8.3.2.

```

npm install express && fs && path && router && util && uuid 

```

### Usage

Run the following from the directory where you have downloaded the repo.

```

node init
npm start

```

this is only if you want to run this in your own deployment. the live app is currently deployed on heroku.


-------------------------
Thank you for taking time looking at this page.

Happy painting!

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Abraham Aguirre Aguirre.Abraham@gmail.com

Project Link: [https://github.com/aaguirre7/super-rotary-notes](https://github.com/aaguirre7/super-rotary-notes)

<!-- MARKDOWN LINKS & IMAGES -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/abraham-aguirre-1b237293/
[product-screenshot1]: ./public/assets/images/11-express-homework-demo-01.png
[product-screenshot2]: ./public/assets/images/11-express-homework-demo-02.png

