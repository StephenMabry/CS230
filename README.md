
<div id="top"></div>

<!--

*** Thanks for checking out the Best-README-Template. If you have a suggestion

*** that would make this better, please fork the repo and create a pull request

*** or simply open an issue with the tag "enhancement".

*** Don't forget to give the project a star!

*** Thanks again! Now go create something AMAZING! :D

-->

<!-- PROJECT SHIELDS -->

<!--

*** I'm using markdown "reference style" links for readability.

*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).

*** See the bottom of this document for the declaration of the reference variables

*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.

*** https://www.markdownguide.org/basic-syntax/#reference-style-links

-->

[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->

<br />

<div align="center">

<a href="https://github.com/tdevine1/WVU_CS230_2022.01_Group05">

<img src="/src/assets/MovieOfTheDay.jpg" alt="Logo" width="80" height="80">

</a>

<h3 align="center">Movie of The Day</h3>

<p align="center">

A website that displays movies produced on today's date over the past decades.

<br />

<a href="https://github.com/othneildrew/Best-README-Template"><strong>Explore the docs »</strong></a>

<br />

<br />

<a href="https://github.com/tdevine1/WVU_CS230_2022.01_Group05/issues">Report Bug</a>

·

<a href="https://github.com/tdevine1/WVU_CS230_2022.01_Group05/issues">Request Feature</a>

</p>

</div>

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

<li><a href="#installation">Installation</a></li>

</ul>

</li>

<li><a href="#usage">Usage</a></li>

<li><a href="#roadmap">Roadmap</a></li>

<li><a href="#contributing">Contributing</a></li>

<li><a href="#license">License</a></li>

<li><a href="#contact">Contact</a></li>

<li><a href="#acknowledgments">Acknowledgments</a></li>

</ol>

</details>

<!-- ABOUT THE PROJECT -->

##  About The Project

This project was made by a group of students at West Virginia University for their CS 230 project where they were tasked to pick a website idea and create it. The website works by querying the current date and displaying the top 5 (ranked by a custom sorting alogrithm) websites over the past several decade that were produced on that day. So for a query made on 1 January 2022, the website would display the top 5 websites made on January 1 throughout the past decades.

<p align="right">(<a href="#top">back to top</a>)</p>

###  Built With

* [Angular](https://angular.io/)

* [Bootstrap](https://getbootstrap.com)

* [Node.js](https://nodejs.org/)

* [Firebase](https://firebase.google.com/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

##  Getting Started

This is an example of how you may give instructions on setting up your project locally.

To get a local copy up and running follow these simple example steps.

###  Prerequisites

This is an example of how to list things you need to use the software and how to install them.

* npm

```sh

npm install npm@latest -g

```

###  Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Get a free API Key at [https://www.themoviedb.org/documentation/api](https://www.themoviedb.org/documentation/api)

2. Clone the repo

```sh

git clone https://github.com/tdevine1/WVU_CS230_2022.01_Group05

```

3. Install NPM packages

```sh

npm install

```

4. Enter your API in `/src/app/movie-info/movie-info.component.ts` line 29

```js
return this.http.get<MovieInfo>('https://api.themoviedb.org/3/movie/'+ movie_id +'?api_key=MY_API_KEY_HERE'); // <<< API KEY HERE

```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

##  Roadmap

- [x] Add sorting algorithm when displaying movies

- [x] Clean-up UI

- [ ] Factor user interests into displayed movies

See the [open issues](https://github.com/tdevine1/WVU_CS230_2022.01_Group05/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->

##  Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

Don't forget to give the project a star! Thanks again!

1. Fork the Project

2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)

3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)

4. Push to the Branch (`git push origin feature/AmazingFeature`)

5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

##  License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

##  Contact

Project Link: [https://github.com/tdevine1/WVU_CS230_2022.01_Group05](https://github.com/tdevine1/WVU_CS230_2022.01_Group05)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

##  Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* [Our Amazing Professor!](https://github.com/tdevine1)

* [<img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg" height="20" width="250">](https://www.themoviedb.org/)

* [Best-README-Template](https://github.com/othneildrew/Best-README-Template/blob/master/README.md)


<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->

<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge

[license-url]: https://github.com/tdevine1/WVU_CS230_2022.01_Group05/blob/master/LICENSE.txt

[product-screenshot]: images/screenshot.png
