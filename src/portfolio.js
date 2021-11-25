/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Rima",
  logo_name: "Rima.Menaa()",
  nickname: "Rima / picleric",
  full_name: "Rima Menaa",
  subTitle:
    "Full Stack JS Developer, Open Source Enthusiast 🔥. Always learning.",
  resumeLink:
    "https://drive.google.com/file/d/1zBiVMGJQeHjKlc9RGR5hhECkS7pzJ8hE/view?usp=sharing",
  mail: "rimamn87@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/rimamenaa",
  linkedin: "https://www.linkedin.com/in/rima-menaa/",
  gmail: "rimamn87@gmail.com",
  // gitlab: "https://gitlab.com/hariMenaa",
  // facebook: "https://www.facebook.com/harikrishan.Menaa/",
  // twitter: "https://twitter.com/Rima9",
  // instagram: "https://www.instagram.com/hari_Menaa_/",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications",
        "⚡ Building responsive website front end using React and Angular",
        "⚡ Developing mobile applications using React Native",
        "⚡ Creating application backend in Node.js, Express.js & NestJS",
        "⚡ Working with databases such as MySQL/ Mongodb",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "React",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "Express.js",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "#29B0EE",
          },
        },
        {
          skillName: "Node.js",
          fontAwesomeClassname: "simple-icons:nodejs",
          style: {
            color: "#029FCE",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "jQuery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            color: "#0865A6",
          },
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "simple-icons:redux",
          style: {
            color: "#CA1A22",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "NestJS",
          fontAwesomeClassname: "simple-icons:nestjs",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "TailwindCss",
          fontAwesomeClassname: "simple-icons:tailwindcss",
          style: {
            color: "#3776AB",
          },
        },
      ],
    },
    // {
    //   title: "Cloud Infra-Architecture",
    //   fileName: "CloudInfraImg",
    //   skills: [
    //     "⚡ Experience working on multiple cloud platforms",
    //     "⚡ Experience hosting and managing websites",
    //     "⚡ Experience with Continuous Integration",
    //   ],
    //   softwareSkills: [
    //     // {
    //     //   skillName: "AWS",
    //     //   fontAwesomeClassname: "simple-icons:amazonaws",
    //     //   style: {
    //     //     color: "#FF9900",
    //     //   },
    //     // },
    //     {
    //       skillName: "Netlify",
    //       fontAwesomeClassname: "simple-icons:netlify",
    //       style: {
    //         color: "#38AFBB",
    //       },
    //     },
    //     {
    //       skillName: "Heroku",
    //       fontAwesomeClassname: "simple-icons:heroku",
    //       style: {
    //         color: "#6863A6",
    //       },
    //     },
    //     // {
    //     //   skillName: "Firebase",
    //     //   fontAwesomeClassname: "simple-icons:firebase",
    //     //   style: {
    //     //     color: "#FFCA28",
    //     //   },
    //     // },
    //     // {
    //     //   skillName: "PostgreSQL",
    //     //   fontAwesomeClassname: "simple-icons:postgresql",
    //     //   style: {
    //     //     color: "#336791",
    //     //   },
    //     // },
    //     {
    //       skillName: "MongoDB",
    //       fontAwesomeClassname: "simple-icons:mongodb",
    //       style: {
    //         color: "#47A248",
    //       },
    //     },
    //     // {
    //     //   skillName: "Docker",
    //     //   fontAwesomeClassname: "simple-icons:docker",
    //     //   style: {
    //     //     color: "#1488C6",
    //     //   },
    //     // },
    //     {
    //       skillName: "GitHub Actions",
    //       fontAwesomeClassname: "simple-icons:githubactions",
    //       style: {
    //         color: "#5b77ef",
    //       },
    //     },
    //   ],
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Higher Institute of Languages of Nabeul",
      subtitle: "Master in English for Business and Tourism",
      logo_path: "isln.jpeg",
      alt_name: "isln",
      duration: "2020 - 2022",
      descriptions: [
        // "⚡ I'm a freshly graduate Full Stack JS developer from RBK."
        // "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
        // "⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
        // "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
      ],
      website_link: "http://www.isln.rnu.tn/Fr/accueil_46_4",
    },
    {
      title: "Higher Institute of Languages and Computer Science of Beja",
      subtitle: "Bachelor in English Language, Literature, and Civilization",
      logo_path: "islaib.jpeg",
      alt_name: "islaib",
      duration: "2017 - 2020",
      descriptions: [
        //   "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
        //   "⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
        //   "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
      ],
      website_link:
        "http://www.islaib.rnu.tn/Fr/actualit%C3%A9s-et-ev%C3%A9nements_7_643",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Full Stack JS Developer",
      subtitle: "ReBootKamp Tunisia",
      logo_path: "images.png",
      // certificate_link:
      //   "https://drive.google.com/file/d/12se6bMep48WXA1PlizTBAgCnW0GXM6wq/view?usp=sharing",
      alt_name: "rbktn",
      // color_code: "#2AAFED",
      color_code: "white",
    },
    // {
    //   title: "Hackathon",
    //   subtitle: "Hack The Mountains",
    //   logo_path: "hackathon1.svg",
    //   certificate_link:
    //     "https://drive.google.com/file/d/1Y-HT1flWDfeyfnfqVr3ubNgGIcnuUEYt/view?usp=sharing",
    //   alt_name: "hackathon",
    //   color_code: "#E2405F",
    // },
    {
      title: "Digital Marketing",
      // subtitle: "MongoDB University",
      logo_path: "unnamed.jpg",
      // certificate_link:
      //   "https://drive.google.com/file/d/12u_tkvhgB-K2TIm-RDdJOwYbQ9ccqiqA/view?usp=sharing",
      alt_name: "digitalMarketing",
      // color_code: "#F6B808",
      color_code: "white",
    },
    // {
    //   title: "Cyber Security & Cyber Forensics",
    //   subtitle: "Workshop at IIT Bombay",
    //   logo_path: "iit.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/12uAdjQC5LfrB1ODdxqIY181ugyyQhl-I/view?usp=sharing",
    //   alt_name: "Workshop",
    //   color_code: "#2AAFED",
    // },
    // {
    //   title: "MLH Local Hack Day: Build",
    //   subtitle: "Major League Hacking",
    //   logo_path: "mlh-logo.svg",
    //   certificate_link:
    //     "https://drive.google.com/file/d/1ws7g2Oepu76vDFir6SvR_emFAMSkB2ZQ/view?usp=sharing",
    //   alt_name: "Google",
    //   color_code: "#fe0037",
    // },
    // {
    //   title: "Hack20",
    //   subtitle: "Flutter International Hackathon",
    //   logo_path: "flutter.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/1JTd8pVlHbP0RVQYtfa4OZgJYGfdiCwM6/view?usp=sharing",
    //   alt_name: "Flutter International Hackathon",
    //   color_code: "#2AAFED",
    // },
    // {
    //   title: "Postman Student Expert",
    //   subtitle: "Postman",
    //   logo_path: "postman.png",
    //   certificate_link:
    //     "https://badgr.com/public/assertions/h2qevHs4SlyoHErJQ0mn2g",
    //   alt_name: "Postman",
    //   // color_code: "#f36c3d",
    //   color_code: "#fffbf3",
    // },
    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
// const experience = {
//   title: "Experience",
//   subtitle: "Work, Internship and Volunteership",
//   description:
//     "I've completed one internship. I've mostly done projects on my own and I am actively looking for internships. I love organizing workshops to share my knowledge with others.",
//   header_image_path: "experience.svg",
//   sections: [
//     {
//       title: "Work Experience",
//       experiences: [
//         {
//           title: "Full Stack Developer (Intern)",
//           company: "Valora Infotech",
//           company_url: "https://valora-infotech.business.site/",
//           logo_path: "valora.jpg",
//           duration: "Oct 2020 - Mar 2021",
//           location: "Office",
//           description: `Train, manage and provide guidance to junior software development staff.
//           Work closely with the Project Manager and Team Leads on change request functions.
//           Develops new and maintains existing applications.
//           Increased productivity and problem-solving technics by 20%.
//           We primarily used PERN and MERN Stack. 80% of my work was doing backend development and the remaining 20% was DevOps-related tasks.
//           `,
//           // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
//           color: "#0071C5",
//         },
//         {
//           title: "Full Stack Developer (Freelancer)",
//           company: "NightOwls",
//           company_url: "http://nightowls.company/",
//           logo_path: "nightowls.jpg",
//           duration: "Sep 2020 - Oct 2020",
//           location: "Work From Home",
//           description: `Work closely with the Client and Team on change request functions.
//           We Primarily used LAMP Stack. 40% of my work was doing backend development, 30% of my work was designing database schemas, and 30% of my work was on maintain hosting and user traffics on the website.
//           `,
//           // "Created Front end of Yearn Financial Mutual Funds website. also degined simple web application for better user experience, designed DB Schemas as well.",
//           color: "#ee3c26",
//         },
//       ],
//     },
//     {
//       title: "Volunteerships",
//       experiences: [
//         {
//           title: "Cross Winter of Code Mentor",
//           company: "CWOC",
//           company_url: "https://crosswoc.ieeedtu.in/",
//           logo_path: "cwoc.png",
//           duration: "Feb 2021 - Present",
//           location: "Work From Home",
//           description:
//             "Mentorship responsibilities were to help students plan the project, review issues and pull requests, ensure smooth progress and help them out when they are stuck.",
//           color: "#4285F4",
//         },
//         {
//           title: "Campus Hustler",
//           company: "Skillenza",
//           company_url: "https://skillenza.com/",
//           logo_path: "skillenza.png",
//           duration: "Feb 2021 - Present",
//           location: "Work from Home",
//           description:
//             "Spread Awareness of new Technologies and new Opportunities to Students and Grow Skillenza Community.",
//           color: "#196acf",
//         },
//         {
//           title: "GitHub Student Developer",
//           company: "GitHub",
//           company_url: "https://github.com/",
//           logo_path: "github.png",
//           duration: "Nov 2019 - Present",
//           location: "Work from Home",
//           description:
//             "Contribute to Open Source Community and Open Source Project.",
//           color: "#040f26",
//         },
//         {
//           title: "Google Local Guide",
//           company: "Google Map",
//           company_url: "https://maps.google.com/localguides/",
//           logo_path: "localguide.png",
//           duration: "Sep 2018 - Present",
//           location: "Work From Home",
//           description:
//             "Day-to-day responsibilities of helping local businesses to spread their business to the world. Helping users by writing reviews about different locations and spaces such as shops, malls, etc.",
//           color: "#D83B01",
//         },
//         {
//           title: "GDG Student Volunteer",
//           company: "Google Developer Groups",
//           company_url: "https://gdg.community.dev/",
//           logo_path: "gdg.png",
//           duration: "Feb 2021 - Present",
//           location: "Work From Home",
//           description:
//             "Google Developer Group Surat Student Volunteer and Member.",
//           color: "#D83B01",
//         },
//         {
//           title: "E. F. I. Student Volunteer",
//           company: "ENVIRONMENTALIST FOUNDATION OF INDIA",
//           company_url: "https://indiaenvironment.org/",
//           logo_path: "efi.png",
//           duration: "Apr 2017 - Present",
//           location: "Work From Home",
//           description:
//             "Take time out over weekends to join a gang of nation builders, nature enthusiasts to conserve what is left.",
//           color: "#5a900f",
//         },
//       ],
//     },
//   ],
// };

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools like React, React Native, Angular, Node.js, express.js, NestJS, MySQL, MongoDB, and TailwindCss. Below are some of my projects.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "naa.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do, I hope it can be of help to others",
    link: "https://medium.com/@rimamenaa",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "BY-CYCLE",
      url: "https://github.com/Thesis-rbktn16-16",
      description:
        "This is a mobile app (React Native) and an admin dashboard (React) for renting bikes. (3-week Group-Project)",
      languages: [
        {
          name: "react",
          iconifyClass: "logos-react",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "nestJS",
          iconifyClass: "logos-nestjs",
        },
        {
          name: "TypeScript",
          iconifyClass: "logos-typescript",
        },
        {
          name: "mongoDB",
          iconifyClass: "logos-mongodb",
        },
        {
          name: "tailwindcss",
          iconifyClass: "logos-tailwindcss",
        },
      ],
    },
    {
      id: "1",
      name: "School All-In-One",
      url: "https://github.com/rimamenaa/Legacy",
      description:
        "A school management website built with Angular (7-day Group-Project)",
      languages: [
        {
          name: "Angular",
          iconifyClass: "logos-angular",
        },
        {
          name: "TypeScript",
          iconifyClass: "logos-typescript",
        },
        {
          name: "tailwindcss",
          iconifyClass: "logos-tailwindcss",
        },
        {
          name: "mongoDB",
          iconifyClass: "logos-mongodb",
        },
      ],
    },
    {
      id: "2",
      name: "Project Catwalk",
      url: "https://github.com/Capstone-MindUnits",
      description: "A front-end retail website (7-day Group-Project)",
      languages: [
        {
          name: "react",
          iconifyClass: "logos-react",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "tailwindcss",
          iconifyClass: "logos-tailwindcss",
        },
      ],
    },
    {
      id: "3",
      name: "Sudoku",
      url: "https://github.com/rimamenaa/Solo-Project",
      description: "A website where you can play Sudoku (2-day solo project).",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },

        {
          name: "jQuery",
          iconifyClass: "logos-jquery",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  projectsHeader,
  contactPageData,
  projects,
};
