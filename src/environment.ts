export const environment={

  publicNavLinks: [
    { title: 'Home', link: '/' },
    { title: 'Categories', link: '/categories' },
    { title: 'About Us', link: '/report' }
  ],

  login:{title:'Login',link:"/login"},
  singUp:{title:'SignUp',link:"/singUp"},

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
    enrollmentService:"http://localhost:8084/"
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
  }







}
