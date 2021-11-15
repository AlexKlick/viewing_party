
<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]](https://www.github.com/AlexKlick/viewing_party/contributors)
[![LinkedIn][linkedin-shield]](https://www.linkedin.com/in/alex-klick/)
[![LinkedIn][linkedin-shield]](https://www.linkedin.com/in/lee-hopper/)


<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/AlexKlick/viewing_party/">
    <img src="https://pyxis.nymag.com/v1/imgs/4da/630/2ec94af82a77404f4c98e1b6be9dd4e0b2-27-facebook-watch-party-logo.rsocial.w1200.jpg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Viewing Party</h3>

  <p align="center">
  A project using <a href="https://www.themoviedb.org/documentation/api">themovieDB api </a> which allows users to search movies, see the top rated movies, and create their own viewing parties to watch movies with their friends! A paired programming project, completed in a 6 day timeframe, while at <a href="https://turing.edu/">Turing School of Software Design</a>
    <br />
    <a href="https://github.com/AlexKlick/viewing_party"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://viewing-partie.herokuapp.com/">View Demo (takes about 20-30 seconds for the heroku dynos to load)</a>
    ·
    <a href="https://github.com/AlexKlick/viewing_party/issues">Report Bug</a>
    ·
    <a href="https://github.com/AlexKlick/viewing_party/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project 
   ### Built Using:
   |      |   |    |      |
|   :----:    |    :----:     |    :----:     |    :----:     |
| Ruby 2.7.2  | SQL           | SimpleCov     | Github        |
| Rails 5.2.5 | ActiveRecord  | BootStrap     | VSCode        |
| RSpec       | HTML5         | Capybara      | Launchy       |
| Pry         | CSS3          | ShouldaMatcher| Orderly       |

## Getting Started

To get a local copy up and running follow these simple steps.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/AlexKlick/repo_name.git
   ```
2. Install Gems
     ```sh
   bundle install
   ```
3. Create Database
     ```sh
    rails db:create
   ```
4. Migrate DB
    ```sh
    rails db:migrate
   ```
5. Run Server Locally
   ```sh
    rails server
   ```

<!-- USAGE EXAMPLES -->
## Usage
- Visit <a href="https://viewing-partie.herokuapp.com/users/new">registration page</a> 
- Create new account, does not require an actual email for this demonstration. ex: user@user.com
- Upon successful creation, redirected to dashboard
- To view movies, navigate to the discover page
- Search movies or view top movies

Individual Movie Show Page
![Individual Movie Show Page](https://user-images.githubusercontent.com/60951642/137794242-19f90ead-d5a8-4810-9141-47eadbc44fdc.png)

Movie Trailer Modal
![Movie Trailer](https://user-images.githubusercontent.com/60951642/137793918-4a379a46-7b5a-43ab-8333-92da1e27f7a9.png)

Dynamic horizonally scrollable content
![Dynamic horizonally scrollable content](https://user-images.githubusercontent.com/60951642/137776834-ee15d515-bbf0-4eaa-9286-c0d566fc2fba.png)


Top Movies Index Page
![Top Movies](https://user-images.githubusercontent.com/60951642/137795577-5b6544e3-2d2b-4725-82fe-eec9bfcf9702.png)

Search Movies
![Top Movies](https://user-images.githubusercontent.com/60951642/137794042-beb4c97f-ab5e-4671-b3b5-608bc3a3a2df.png)


## Acknowledgements
<a href="https://www.themoviedb.org/documentation/api">TheMovieDB</a>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/AlexKlick/viewing-party.svg?style=for-the-badge
[contributors-url]: https://github.com/AlexKlick/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/AlexKlick/repo.svg?style=for-the-badge
[forks-url]: https://github.com/AlexKlick/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/AlexKlick/repo.svg?style=for-the-badge
[stars-url]: https://github.com/AlexKlick/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/AlexKlick/repo.svg?style=for-the-badge
[issues-url]: https://github.com/AlexKlick/repo_name/issues
[license-shield]: https://img.shields.io/github/license/AlexKlick/repo.svg?style=for-the-badge
[license-url]: https://github.com/AlexKlick/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/AlexKlick
