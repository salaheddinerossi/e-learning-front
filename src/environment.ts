import {ErrorData} from "./app/shared/models/ErrorData";

export const environment={

  publicNavLinks: [
    { title: 'Home', link: '/' },
    { title: 'Categories', link: '/categories' },
    { title: 'About Us', link: '/report' }
  ],

  teacherNavLinks: [
    { title: 'Home', link: '/' },
    { title: 'profile', link: '/teacher' },
    { title: 'Create Course ', link: '/start' },
    { title: 'About Us', link: '/report' }
  ],
  studentNavLinks: [
    { title: 'Home', link: '/' },
    { title: 'profile', link: '/student' },
    { title: 'categories ', link: '/categories' },
    { title: 'About Us', link: '/report' }
  ],

  logout:{title:'Logout',link:"/logout"},


  login:{title:'Login',link:"/login/student"},
  singUp:{title:'SignUp',link:"/signup/student"},

  heroTitle:[
    "The Ultimate",
    "Pathway To Smarter",
    "Learning."
  ],

  heroSectionText:{text:"With AI-Learn, educators and students connect seamlessly, creating dynamic, personalized learning journeys. Our AI-driven platform adapts to individual learning styles and paces, optimizing engagement and success for all."},
  heroSectionButton:{
    text:"Get Started",
    link:"/"
  },

  aboutContent:
    {
      headTitle: "Why Choose Us",
      title:"Make your customers happy by giving services.",
      firstParagraph:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less.",
      secondParagraph:"A domain name is one of the first steps to establishing your brand. Secure a consistent brand image with a domain name that matches your business.",
    },

  categoriesTitle:{
    mainTitle:"Parent categories",
    subText:"Check the categories bellow and find your course"
  },

  services:{
    courseCreationService:"http://localhost:8082/",
    enrollmentService:"http://localhost:8084/",
    authenticationService:"http://localhost:8080/",
    skillService:"http://localhost:8083/",

  },

  courseTitle:{
    subTitle:"check the course structure and the reviews bellow ",
    requirements:"Course Requirements:",
    courseTags:"Tags: ",
    skills:"Skills: ",
    courseStructure:"Course structure",
    courseStructureDetails:"check the course structure bellow",
    reviews:"Reviews",
    reviewsDetails:"Check the reviews before enrolling the course",
    noReview:"No Reviews for this course"
  },

  notFound:{
    categoriesNotFound:"Categories Not Found",
    categoriesNoFoundDescription:"No Categories found in this page",
    coursesNotFound:"Courses Not Found",
    coursesNoFoundDescription:"No Courses found in this page",
    courseNotFound:"course not found",
    courseNoFoundDescription:"no course found with this id"

  },

  loading:{
    courseLoading:"Loading courses...",
    categoriesLoading:"Loading categories..."
  },

  loginStudent:{
    title:"Log in as student",
    otherOption:"login as teacher?",
    otherOptionLink:"/login/teacher",
    optionLink:"student",
  },

  loginTeacher:{
    title:"Log in as teacher",
    otherOption:"login as student?",
    otherOptionLink:"/login/student",
    optionLink:"teacher",

  },

  loginAdmin:{
    title:"Login as Admin",
    optionLink:"admin",

  },

  signUpTeacher:{
    title:"Sign up as teacher",
    otherOption:"Sign up as student?",
    otherOptionLink:"/signup/student",
    optionLink:"teacher",
  },

  signUpStudent:{
    title:"Sign up As a Student",
    otherOption:"Sign up as a teacher?",
    otherOptionLink:"/signup/teacher",
    optionLink:"student",
  },




  error404: {
      errorCode:404,
      errorTitle:"Page not found",
      errorDescription:"this page not found please make sure that the path is correct",
  },

  startPage:{
    headTitle:"Create course",
    subTitle: "Create your course and start teaching",
    buttonText:"Start now!",
    buttonLink:"/step1"
  },

  step1:{
    headTitle:"Fill out the form bellow",
    subTitle:"Create your course",
  },

  languagesEnum:[
    {label:"English",value:"ENGLISH"},
    {label:"Arabic",value:"ARABIC"},
    {label:"French",value:"FRENCH"},
  ],
  courseLevelEnum:[
    {label:"Beginner",value:"BEGINNER"},
    {label:"Intermediate",value:"INTERMEDIATE"},
    {label:"Advanced",value:"ADVANCED"},
  ],

  step2Page:{
    headTitle:"Add Chapters",
    subTitle:"Add new chapters bellow",
    formTitle:"Fill out the form ",
    buttonText:"Create chapter",
  },

  step3Page:{
    headTitle:"Fill the information Bellow",
    subTitle:"you are creating a lesson inside the chapter with the id:",
    aiButton:"Push to AI",
    submitButton:"Add the lesson"
  }

}
