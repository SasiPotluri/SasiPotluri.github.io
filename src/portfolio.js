/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false,
};

//SEO Related settings
const seo = {
  title: "Sasi's Portfolio",
  description:
    "A passionate software engineer who thrives to work in challenging projects to create an impact on the advancement of technology.",
  og: {
    title: "Sasikanth Potluri Portfolio",
    type: "website",
    url: "http://sasikanthpotlur  i.com/",
  },
};

//Home Page
const greeting = {
  title: "Sasikanth Potluri",
  logo_name: "Sasikanth Potluri",
  subTitle:
    "I am a passionate software engineer who thrives to work in challenging projects to create an impact on the advancement of technology..",
  resumeLink:
    "https://drive.google.com/file/d/1EfwIAptlU0n6XAnfts2MmeXs8yzIXEdB/view?usp=drive_link",
  portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/ashutosh1919",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/SasiPotluri",
  // linkedin: "https://www.linkedin.com/in/sasipotluri/",
  // gmail: "sasipotluri81@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/SasiPotluri",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/sasipotluri/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },

  {
    name: "Gmail",
    link: "mailto:sasipotluri81@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UCEBADtBTwp20_ONVu3sij8w",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
];

const skills = {
  data: [
    {
      title: "Sever Side Development",
      fileName: "serverDev",
      skills: [
        "⚡ Implemented End to End Backend services using .NET employing Microservices architecture",
        "⚡ Developed over 70 Web APIs using the REST architecture to establish seamless HTTP connections within the application",
        "⚡ Leveraged the power of Dapper ORM and Entity Framework to proficiently establish Object Relational Mapping",
        "⚡ Developed a command line application for Professor-student using Java by employing various Design Patterns",
      ],
      softwareSkills: [
        {
          skillName: ".NET",
          fontAwesomeClassname: "logos:dotnet",
          style: {
            backgroundColor: "transparent",
            color: "#1E88E5",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: {
            backgroundColor: "transparent",
            color: "#0277BD",
          },
        },
        {
          skillName: "JAVA",
          fontAwesomeClassname: "logos:java",
          style: {
            backgroundColor: "transparent",
            color: "#1565C0",
          },
        },
        {
          skillName: "DOCKER",
          fontAwesomeClassname: "logos:docker",
          style: {
            backgroundColor: "transparent",
            color: "#1565C0",
          },
        },
      ],
    },
    {
      title: "Web Development",
      fileName: "webDev",
      skills: [
        "⚡ Created an interactive Modern Frontend User Interface using ReactJS",
        "⚡ Experienced in building Web applications using Django framework",
        "⚡ Experience in building static web pages using HTML, CSS and JavaScript",
        "⚡ Experience in designing UX screens and WireFraming using Figma",
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
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
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
          skillName: "Django",
          fontAwesomeClassname: "logos:django",
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
      ],
    },
    {
      title: "Database Experience",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working with Relational and Non-Relational Databases",
        "⚡ Have extensive experience in database development and proficiently querying data using both SQL and NoSQL technologies.",
        "⚡ Have proficiently designed and constructed a robust document database and container utilizing MongoDB, leveraging its capabilities to generate comprehensive reports.",
      ],
      softwareSkills: [
        {
          skillName: "MS SQL",
          fontAwesomeClassname: "fa-database",
          style: {
            color: "#003366",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Hadoop",
          fontAwesomeClassname: "logos:hadoop",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Cosmos DB",
          fontAwesomeClassname: "fa-globe",
          style: {
            color: "#339AF0",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        // {
        //   skillName: "Docker",
        //   fontAwesomeClassname: "simple-icons:docker",
        //   style: {
        //     color: "#1488C6",
        //   },
        // },
      ],
    },
  ],
};

// Education Page

const education = {
  description:
    "I hold a Master of Science in Software Engineering from Arizona State University. This program equipped me with advanced skills in software system design and development, applying engineering principles to software creation. I gained expertise in design methodologies, maintenance, testing, and operational principles. Additionally, I engaged in research and honed professional skills, eager to apply my knowledge to innovate software solutions.",
  degrees: [
    {
      title: "Arizona State University",
      subtitle: "M.S. in Software Engineernig",
      logo_path: "asu_logo.png",
      alt_name: "ASU",
      duration: "2022 - 2023",
      descriptions: [
        "⚡ Gained advanced knowledge and practical skills in designing and developing software systems, as well as expertise in applying engineering principles to software development.",
        "⚡ Studied and gained expertise in design methodologies, maintenance, testing, and operation principles of software.",
        "⚡ I have taken courses like Foundations of Software Engineering, Principles of Programming languages, Human Computer Interaction, Mobile Computing, Web semantics",
      ],
      website_link: "https://www.asu.edu/",
    },
    {
      title: "Indian Institute of Information Technology Kancheepuram",
      subtitle: "B.Tech. in Smart Manufacturing",
      logo_path: "iiitdm_logo.png",
      alt_name: "IIITDM Kancheepuram",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like Data Structures and Algorithms, Database management systems, Operating systems, etc.",
        "⚡ Recepient of Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "http://iiitdm.ac.in",
    },
  ],
};

const experience = {
  title: "Experience",
  description:
    "I excel in crafting user-friendly applications from concept to completion, including database design and implementing diverse business logic components. My expertise spans from creating intuitive interfaces to backend development. I am skilled at managing databases efficiently to meet specific business needs accurately.",
  experiences: [
    {
      title: "Software Developer (Capstone)",
      subtitle: "Kutta Technologies",
      logo_path: "kutta.jpeg",
      alt_name: "Kutta",
      duration: "Aug 2023 - Dec 2023",
      descriptions: [
        "⚡  Developed and fine-tuned Aerial Object Detection System by implementing the YOLO algorithm for search and rescue in real time on a low-power ARM Linux platform with an OpenCL-enabled GPU.",
        "⚡  Achieved over 95% accuracy in real-time object detection, enhancing decision-making for rescue teams using Pytorch",
        "⚡  Implemented user-friendly interface and addressed streaming setup complexities, contributing to efficient search and rescue.",
      ],
      website_link: "https://www.kuttatech.com/",
    },
    {
      title: "Software Engineer",
      subtitle: "Congruent Solutions",
      logo_path: "congruent_logo.png",
      alt_name: "CSPL",
      duration: "May 2020 - Nov 2021",
      descriptions: [
        "⚡  Engineered and deployed CORE-2.0, a full stack application utilizing .NET CORE and ReactJS frameworks to streamline 401(K) plan record keeping, resulting in a 50% reduction in data entry time.",
        "⚡  Implemented Entity and Dapper ORM to create microservices for 5 modules, reducing server response time by 50% and increasing user satisfaction by 35% using C#",
        "⚡  Applied the mediator pattern in the payroll module resulting in a 50% reduction in code complexity and a 30% improvement in application performance, allowing for processing of 1 million records in just 5 minutes",
        "⚡  Developed a scalable and secure REST API framework with over 70 endpoints, improving overall scalabilityn",
        "⚡  Employed cutting-edge design principles using ReactJS, HTML, and CSS to create an intuitive and interactive UI",
        "⚡  Built data base using SQL, MongoDB, and Cosmos DB to accurately match business requirements resulting in a 100% success rate for all database builds",
      ],
      website_link: "https://www.congruentsolutions.com/",
    },
    {
      title: "Software Developer Intern",
      subtitle: "Verity Technologies",
      logo_path: "verity_logo.png",
      alt_name: "VT",
      duration: "Apr 2019 - Jun 2019",
      descriptions: [
        "⚡ Developed ASP.NET MVC web application with C# .NET, emphasizing efficient design and middleware implementation.",
        "⚡ Proficient in SQL Server for back-end database management, utilizing LINQ and ADO.NET for optimized data handling.",
        "⚡ Utilized Git and Azure DevOps for version control and collaborative development, ensuring streamlined project management.",
      ],
      website_link: "https://www.verity365.com/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "AWS",
      subtitle: "- AWS Developer Associate",
      logo_path: "aws.png",
      certificate_link:
        "https://www.credly.com/badges/cee8a9d2-35e7-40b0-b3ee-b937855c3125",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "C#",
      subtitle: "- Microsoft",
      logo_path: "microsoft_logo.png",
      certificate_link: "microsoft.com",
      alt_name: "freecodecamporg",
      color_code: "#D83B0199",
    },
    {
      title: "Oustanding Sprint Developer",
      subtitle: "- Congruent",
      logo_path: "congruent_logo.png",
      certificate_link: "https://www.congruentsolutions.com/",
      alt_name: "Congruent",
      color_code: "#0C9D5899",
    },
  ],
};

// Experience Page
/*
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          subtitle: "B.Tech. in Smart Manufacturing",
          logo_path: "iiitdm_logo.png",
          alt_name: "IIITDM Kancheepuram",
          duration: "2016 - 2020",
          descriptions: [
            "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
            "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
            "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
          ],
          website_link: "http://iiitdm.ac.in",
        },
        {
          title: "Android and ML Developer",
          company: "Muffito Incorporation",
          company_url: "https://www.linkedin.com/company/muffito-inc/about/",
          logo_path: "muffito_logo.png",
          duration: "May 2018 - Oct 2018",
          location: "Pune, Maharashtra",
          description:
            "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
          color: "#9b1578",
        },
        {
          title: "Android Developer",
          company: "FreeCopy Pvt. Ltd.",
          company_url: "https://www.linkedin.com/company/freecopy/about/",
          logo_path: "freecopy_logo.png",
          duration: "Nov 2017 - Dec 2017",
          location: "Ahmedabad, Gujarat",
          description:
            "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Machine Learning Intern",
          company: "TikTok Inc.",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "tiktok_logo.png",
          duration: "May 2022 - Aug 2022",
          location: "San Francisco, USA",
          description:
            "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
          color: "#000000",
        },
        {
          title: "Data Science Research Intern",
          company: "Delhivery Pvt. Ltd.",
          company_url: "https://www.delhivery.com/",
          logo_path: "delhivery_logo.png",
          duration: "May 2019 - Sept 2019",
          location: "Gurgaon, Haryana",
          description:
            "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
          color: "#ee3c26",
        },
        {
          title: "Data Science Intern",
          company: "Intel Indexer LLC",
          company_url:
            "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
          logo_path: "intel_logo.jpg",
          duration: "Nov 2018 - Dec 2018",
          location: "Work From Home",
          description:
            "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
          color: "#0071C5",
        },
      ],
    },
 
  ],
};
*/

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best expertise is to create Full stack applications and deploy them to web using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "sasi_logo.jpg",
    description:
      "Feel free to use the contact information form below or reach out to me. I am passionate in Software Development, I'm eager to explore new opportunities and contribute to exciting projects. Let's connect and discuss how we can work together to make a significant impact on the world.",
  },

  addressSection: {
    title: "Address",
    subtitle: "7401 Ridgepoint Dr, Irving, TX",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/DB8hRbS1xMVsnioB7",
  },
  phoneSection: {
    title: "Phone ",
    subtitle: "(352) 631-0849",
  },
  emailSection: {
    title: "Email ",
    subtitle: "potlurisasikanth@gmail.com",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  education,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
