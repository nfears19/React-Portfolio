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
  //   Header Paragraph
  headerParagraph:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",

  //Contact Email
  contactEmail: "fkiyah@yahoo.com",


  // Work Section
  projects: [
    {
      title: "Project One",
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", 
      imageSrc:
        "https://images.unsplash.com/photo-1487837647815-bbc1f30cd0d2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Njl8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
      url: "http://chetanverma.com/",
    },
    {
      title: "Project Two",
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", 
      imageSrc:
        "https://images.unsplash.com/photo-1605153864431-a2795a1b2f95?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyNTY3ODl8fGVufDB8fHw%3D&auto=format&fit=crop&w=400&q=60",
      url: "http://chetanverma.com/",
    },
    {
      title: "Project Three", 
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
      imageSrc:
        "https://images.unsplash.com/photo-1504083898675-c896ecdae86e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
      url: "http://chetanverma.com/",
    },
    {
      title: "Project Four", 
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
      imageSrc:
        "https://images.unsplash.com/photo-1492171983775-a51717616c0d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjB8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
      url: "http://chetanverma.com/",
    },
    {
      title: "Project Five", 
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
      imageSrc:
        "https://images.unsplash.com/photo-1534239143101-1b1c627395c5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzZ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
      url: "http://chetanverma.com/",
    },
    {
      title: "Project Six",
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
      imageSrc:
        "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTAyfHxwYXN0ZWx8ZW58MHx8MHw%3D&auto=format&fit=crop&w=400&q=60",
      url: "http://chetanverma.com/",
    },

  ],

  // About Secton 
  aboutParaOne:
    "Nakiyah Fears is an entry-level full-stack web developer from Cleveland, Ohio. She graduated from Kent State University with a degree in advertising and a minor in writing. Her interests include photography, design, writing, and music. She seeks ways to challenge herself while gaining new skills and knowledge.",
  aboutParaTwo:
    "Nakiyah comes from a family of artistic and entrepreneurial individuals, so creativity flows through her veins and drives her to work with a purpose.",
  aboutParaThree:
    "She began her journey as a software developer through the Case Western Reserve University’s Coding Bootcamp. When she’s not spending her downtime writing her book, she’ll find freelance projects, create spec ads, or blog on her website.",
  aboutImage:
    <Image source={require('./images/myimage.jpg')} />,

  // Skills Section

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

  //   Contact Section

  social: [
    { img: githubIcon, url: "https://github.com/nfears19" },
    {
      img: linkedinIcon,
      url: "https://www.linkedin.com/nakiyah-fears-67120313a",
    },
  ],

}
