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
    "https://drive.google.com/file/d/1_JVDgN9_SCz9fTfvbYGaky5e68T_i58f/view?usp=drive_link",
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
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
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
    "I am pursuing my Master of Science in Software Engineering from Arizona State University. I have gained advanced knowledge and practical skills in designing and developing software systems, as well as expertise in applying engineering principles to software development. I also have gained understanding of Data Engineering",
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
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ Recepient of Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "http://iiitdm.ac.in",
    },
  ],
};

const experience = {
  title: "Experience",
  description:
    "I have developed Full-stack applications and also have experince in designing database schemas and programming various logics for Business requirements ",
  experiences: [
    {
      title: "Software Engineer",
      subtitle: "Congruent Solutions",
      logo_path: "congruent_logo.png",
      alt_name: "CSPL",
      duration: "May 2020 - Nov 2023",
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
      title: "Product Developer Intern",
      subtitle: "SVP Laser Tech",
      logo_path: "svp_logo.png",
      alt_name: "SVP",
      duration: "May 2020 - Nov2023",
      descriptions: [
        "⚡ Optimized the MULTICNC software which performs high Precision profiling on several materials with 0.1 mm tolerance.",
        "⚡ Charted Algorithms for a miniature Vending Machine using Raspberry Pi and Arduino.",
      ],
      website_link: "https://www.greacnc.com/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
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
    profile_image_path: "sasikanth.png",
    description:
      "Feel free to use the contact information form below or reach out to me. With a passion for Software Development, I'm eager to explore new opportunities and contribute to exciting projects. Let's connect and discuss how we can work together to make a significant impact on the world.",
  },

  addressSection: {
    title: "Address",
    subtitle: "1717 S Dorsey Ln, Tempe, Arizona",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/6jDJ4RzbHdKXxTnq7",
  },
  phoneSection: {
    title: "Phone ",
    subtitle: "(352) 631-0849",
  },
  emailSection: {
    title: "Email ",
    subtitle: "sasikanthpotluri@gmail.com",
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
