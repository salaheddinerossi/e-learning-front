import {ErrorData} from "./app/shared/models/ErrorData";

export const environment={

  publicNavLinks: [
    { title: 'Home', link: '/' },
    { title: 'Categories', link: '/categories' },
    { title: 'About Us', link: '/report' }
  ],

  teacherNavLinks: [
    { title: 'Home', link: '/' },
    { title: 'profile', link: '/teacher/profile' },
    { title: 'Create Course ', link: '/start' },
    { title: 'Report', link: '/report' }
  ],
  studentNavLinks: [
    { title: 'Home', link: '/' },
    { title: 'profile', link: '/student/profile' },
    { title: 'categories ', link: '/categories' },
    { title: 'Report', link: '/report' }
  ],

    adminNavLinks: [
      { title: 'Home', link: '/' },
      { title: 'teacher requests', link: '/teachers/request' },
      { title: 'skills', link: '/skills' },
      { title: 'categories', link: '/admin/categories' },
      { title: 'reports', link: '/admin/reports' },
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
    courseCreationService:"http://24.144.78.66/coursecreation/",
    enrollmentService:"http://24.144.78.66/courseenrollment/",
    authenticationService:"http://24.144.78.66/auth/",
    skillService:"http://24.144.78.66/skillsmanagement/",
    profileManagementService:"http://24.144.78.66/profilemanagement/",

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
    courseNoFoundDescription:"no course found with this id",
    chaptersNotFound:"course not found",
    chaptersNotFoundDescription:"no course found with this id, and cannot contain chapters",
    lessonNotFound:"Lesson not found",
    lessonNotFoundDescription:"no lesson found with this id",
    enrollmentNotFound:"Enrollment not found",
    enrollmentNotFoundDescription:"no Enrollment found with this id",

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

  skillLevel:[
    {label:"BEGINNER",value:"BEGINNER"},
    {label:"INTERMEDIATE",value:"INTERMEDIATE"},
    {label:"ADVANCED",value:"ADVANCED"},
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
  },

  publishPage:{
    title:"Publish your course",
    subTitle:"Publish your course and start teaching",
    buttonText:"Publish now!",
  },

  teachersRequestPage:{
    title1:"New requests",
    title2:"Teachers Accounts"
  },

  skillManagement:{
    headTitle:"Skill Management",
    subTitle:"manage your skills here",
    title:"Skills: ",
    formTitle:"Skills form: ",
    skillRequest:"Skill requests:"
  },

  categoriesPage:{
    headTitle:"Categories Management",
    subTitle:"manage your categories",
  },

  reportsPage:{
    headTitle:"Reports",
    subTitle:"manage your reports"
  },

  reportFormPage:{
    headTitle:"Report Page",
    subTitle:"Report your problem to the adminstration"
  },

  studentProfile:{
    headTitle:"Student profile",
    subTitle:"modify your profile and view your personal information"
  },
  teacherProfile:{
    headTitle:"Teacher profile",
    subTitle:"modify your profile and view your personal information"
  },
  lessonModal:{
    title:"You have completed this lesson",
    text:"congratulations you have completed this lesson you can click bellow to study the next lesson",
    submitButton:"Next lesson",
  },
  courseModal:{
    title:"You have completed this course",
    text:"congratulations you have completed this course you can click bellow to view your new added skills",
    submitButton:"view profile",
  }


}
