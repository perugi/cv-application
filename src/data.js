import { v4 as uuidv4 } from "uuid";

const sampleCvData = {
  personalInfo: {
    fullName: "Sarah Anderson",
    dob: "1990-03-15",
    email: "sarah.anderson@email.com",
    phone: "+1 (555) 123-4567",
    address: "Portland, Oregon",
    bio: "Passionate software developer with expertise in modern web technologies. Committed to creating intuitive user experiences and writing clean, maintainable code.",
  },
  education: [
    {
      id: uuidv4(),
      title: "Bachelor of Science in Software Engineering",
      organization: "Oregon State University",
      startDate: "2008-09-01",
      endDate: "2012-05-30",
      endDateIsPresent: false,
      location: "Corvallis, Oregon",
      description:
        "Core focus on software architecture, algorithms, and web technologies.",
    },
    {
      id: uuidv4(),
      title: "Master of Science in Information Systems",
      organization: "University of Washington",
      startDate: "2012-09-01",
      endDate: "2014-06-30",
      endDateIsPresent: false,
      location: "Seattle, Washington",
      description:
        "Focused on cloud computing architectures and distributed systems.",
    },
  ],
  professional: [
    {
      id: uuidv4(),
      title: "Frontend Developer",
      organization: "TechStart Solutions",
      startDate: "2014-07-01",
      endDate: "2017-12-31",
      endDateIsPresent: false,
      location: "Seattle, Washington",
      description:
        "Developed responsive web applications using modern JavaScript frameworks and led UI/UX initiatives.",
    },
    {
      id: uuidv4(),
      title: "Lead Frontend Engineer",
      organization: "CloudScale Systems",
      startDate: "2018-01-01",
      endDate: "2021-12-31",
      endDateIsPresent: true,
      location: "Portland, Oregon",
      description:
        "Managing a team of frontend developers and architecting large-scale web applications using modern tech stack.",
    },
  ],
};

const defaultCvControl = {
  layout: "top",
  colorTheme: "lightGray",
  sorting: "newestFirst",
  fontSize: "medium",
};

export { sampleCvData, defaultCvControl };
