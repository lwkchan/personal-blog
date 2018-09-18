# Personal Blog

A personal blog built with GatsbyJs. Still a work in progress. I'll post up the link to it when it is hosted on a server.

## Getting started locally

Prerequisites - before getting started, you'll need Node and NPM on your machine. You will also need to Gatsby command line tool, which you can get with `npm install --g gatsby-cli`

Then,
1. Clone down this repository and install all the packages required for this repository by running `npm i` in the directory.
2. Run `gatsby develop`
3. Visit http://localhost:8000

## Todo

- [x] Finish up styling
  - [x] ~Implement typography.js for fonts~ - tried it out bu didn't enjoy it.
  - [x] Decide on general layout and add it to the site
- Change sitetitles in Helmet
- Add blogpost dates in the actual blog
- [ ] Deploy site using Netlify

## A sidenote on using Contentful

This project was initially built with [Contentful](ttps://www.contentful.com) as a CMS. I started down that route as I was interested to learn more about headless CMSes. 

However, although Contentful is a very powerful tool which is incredibly easy to use, I realised that I wanted more flexibility than a content model set up by myself was willing to give me. A content model is great for if you have multiple authors, and you need to keep all of the content looking someone consistent. However, because I am both the only developer and the only writer for this site, and because my priority with this site is to have a platform to show my blogs, I decided that it was simpler to just maintain a folder of markdown files.

If your interested in seeing how I set up Contentful in my blog, see the [contentful-setup branch](https://github.com/lwkchan/personal-blog/tree/contentful-setup)