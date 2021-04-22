import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"

import githubIcon from "./images/github.svg"


export default {
  
  name: "Nakiyah Fears",
  headerTagline: [
    //Line 1 For Header
    "Web Developer",
  ],

//Contact Email
  contactEmail: "fkiyah@yahoo.com",

//Work
  projects: [
    {
      title: "Project One",
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", 
      imageSrc:
        <img src= "src\images\03-javascript-homework-demo.png"/>,
    },
    {
      title: "Animal Activity",
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", 
      imageSrc:
        <img src= "src\images\Animal-Activity-Website.png"/>,
    },
    {
      title: "Bio Website", 
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
      imageSrc:
        <img src= "src\images\Bio-website.png"/>,
    },
    {
      title: "Code Quiz", 
      para:
        "This repository contains my timed coding quiz on JavaScript fundamentals that stores high scores. This project was a homework assignment from the Case Western Reserve Univeristy's Coding Bootcamp. The assignment is to build a timed coding quiz with multiple-choice questions. This app will run in the browser and feature dynamically updated HTML and CSS powered by JavaScript code that I write. It will have a clean, polished, and responsive user interface.",
      imageSrc:
        <img src= "src\images\Code-Quiz.png"/>,
    },
    {
      title: "Relative Portfolio", 
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
      imageSrc:
        <img src= "src\images\Portfolio Screenshot.png"/>,
    },
    {
      title: "Adoptable Cats",
      para:
        "Cat lovers can come to our website and search for different types of cats that are available for adoption. They can also input their name and the pet name to discover how compatiable they are with the cat!",
      imageSrc:
        <img src= "src\images\screen_shot_2021-01-18_at_12.54.04_pm.png"/>,
    },

  ],

  //About 
  aboutParaOne:
    "Nakiyah Fears is an entry-level full-stack web developer from Cleveland, Ohio. She graduated from Kent State University with a degree in advertising and a minor in writing. Her interests include photography, design, writing, and music. She seeks ways to challenge herself while gaining new skills and knowledge.",
  aboutParaTwo:
    "Nakiyah comes from a family of artistic and entrepreneurial individuals, so creativity flows through her veins and drives her to work with a purpose.",
  aboutParaThree:
    "She began her journey as a software developer through the Case Western Reserve University’s Coding Bootcamp. When she’s not spending her downtime writing her book, she’ll find freelance projects, create spec ads, or blog on her website.",
  aboutImage:
    <Image source={require('./images/myimage.jpg')} />,

  //Skills

  skills: [
    {
      img: htmlIcon,
    },
    {
      img: cssIcon,
    },
    {
      img: jsIcon,
    },
    {
      img: reactIcon,
    },
    {
      img: designIcon,
    },
    {
      img: codeIcon,
    },
  ],

  //Contact
  social: [
    { img: githubIcon, url: "https://github.com/nfears19" },
    {
      img: linkedinIcon,
      url: "https://www.linkedin.com/nakiyah-fears-67120313a",
    },
  ],

}
