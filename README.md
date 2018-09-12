# Personal Blog

A personal blog built with GatsbyJs and Contentful. Still a work in progress. I'll post up the link to it when it is hosted on a server.

## Getting started locally

Prerequisites - before getting started, you'll need Node and NPM on your machine. You will also need to Gatsby command line tool, which you can get with `npm install --g gatsby-cli`

Then,
1. Clone down this repository and install all the packages required for this repository by running `npm i` in the directory.
2. Run `gatsby develop`
3. Visit http://localhost:8000

## Key learnings/motivations

I was motivated to build this by an investigation into headless CMSes and by the wish to learn about static site renderers. Through this project, I have become interested in the [JAM stack](https://jamstack.org/), and what it presents for the future of web development.

## Todo

- [ ] Finish up styling
  - [ ] Implement typography.js for fonts
  - [ ] Decide on general layout and add it to the site
- [ ] Deploy site using Netlify
  - [ ] Set up continuous deloyment by creating webhook to rebuild site when new content is published in Contentful. (Useful guide [here](https://www.halfelectronic.com/post/setting-up-gatsby-js-contentful-and-netlify/))
