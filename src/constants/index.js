import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a skilled developer with expertise in web development, Salesforce, Java, and database management. A diploma holder in Computer Engineering, I am currently pursuing a B.Tech at PCCOE. Passionate about technology, I strive to create impactful and efficient applications.`;

export const ABOUT_TEXT = `I am a dedicated and versatile developer with expertise in web development, Salesforce, Java, and database management. Proficient in technologies like React, Next.js, Node.js, and Python frameworks such as Flask and Django, I have also worked with AI/ML frameworks like TensorFlow and scikit-learn. A diploma holder in Computer Engineering, I am currently pursuing a B.Tech at PCCOE. Passionate about problem-solving and innovation, I constantly explore new technologies to build efficient and impactful solutions.`;

export const EXPERIENCES = [
  {
    year: "2024",
    role: "Research Intern",
    company: "PCCOE",
    description: `Worked on a DST-sponsored project focused on cervical cell classification using shape features. Conducting research on medical image analysis and developing machine learning models to classify cervical cells as normal or abnormal based on morphological characteristics.`,
    technologies: ["Python", "OpenCV", "Scikit-learn", "TensorFlow"],
  },
  {
    year: "2022",
    role: "Python Developer Intern",
    company: "Infeanet Media",
    description: `Developed Python-based applications and scripts to automate workflows. Worked on backend development and data processing tasks. Collaborated with the team to optimize code efficiency and improve software performance.`,
    technologies: ["Python", "Django", "Flask", "MySQL"],
  },
];


export const PROJECTS = [
  {
    title: "AI-Assisted Loan Approval System",
    image: project1,
    description:
      "A loan management system utilizing an ANN model for loan application processing and approval predictions. Built using Django and integrated with a machine learning model to assess loan eligibility.",
    technologies: ["Python", "Django", "ANN", "TensorFlow", "MySQL"],
  },
  {
    title: "Handwritten Character Recognition",
    image: project2,
    description:
      "A deep learning-based system for recognizing handwritten characters with an accuracy of 94%. Developed using convolutional neural networks (CNNs) and trained on a large dataset.",
    technologies: ["Python", "TensorFlow", "OpenCV", "CNN"],
  },
  {
    title: "Brain Tumor Classification",
    image: project3,
    description:
      "A machine learning model that classifies brain tumors as normal or abnormal using shape-based features. Achieved 75% accuracy using extracted morphological characteristics.",
    technologies: ["Python", "Scikit-learn", "OpenCV", "Feature Engineering"],
  },
  {
    title: "Cervical Cell Classification",
    image: project4,
    description:
      "A DST-sponsored research project focused on classifying cervical cells using shape features. Developed machine learning models to differentiate between normal and abnormal cells.",
    technologies: ["Python", "OpenCV", "Scikit-learn", "Machine Learning"],
  },
  {
    title: "Artimas - AIMSAxGfG Event Website",
    image: project1,
    description:
      "An event website for AIMSAxGfG Student Chapter, featuring interactive UI elements, smooth animations, and event details. Built using modern web technologies.",
    technologies: ["React", "MongoDB", "Express", "3.js", "Framer Motion", "Tailwind CSS"],
  },
  {
    title: "AI-Based Gym Trainer & Exercise Pose Correction",
    image: project2,
    description:
      "An AI-powered gym trainer that provides real-time exercise pose correction using human pose estimation. Utilizes machine learning models trained for detecting incorrect postures.",
    technologies: ["Python", "Mediapipe", "Machine Learning", "Pose Estimation"],
  },
  {
    title: "Maratha Tutorials - E-Learning Platform",
    image: project3,
    description:
      "An online learning platform offering study materials and resources for students. Built with a MERN stack and designed with a responsive UI.",
    technologies: ["MERN", "Tailwind CSS"],
  },
];


export const CONTACT = {
  address: "Bhosari Pune 411039",
  phoneNo: "+91 9322193906 ",
  email: "harshalm633@gmail.com",
};
