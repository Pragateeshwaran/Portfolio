import {
  Namasivaayam, 
  sagar,
  nithish, 
  nawfal, 
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  cuda,
  docker,
  git,
  huggingface,
  keras,
  langchain,
  mongodb,
  onnx,
  Tensorflow,
  torch,
  mepco,
  school,
  xplore,
  neo4j,
  opencv,
} from "../assets";

export const navLinks = [
  {
    id: "",
    title: "Home",
  },
  {
    id: "About",
    title: "About",
  }, 
  {
    id: "Education",
    title: "Education",
  },
  {
    id: "Tech",
    title: "Tech",
  },
  {
    id: "Works",
    title: "Projects",
  },
  {
    id: "Feedbacks",
    title: "Testimonials",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Deep Leanring Researcher",
    icon: web,
  },
  {
    title: "GenAi Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "mentor",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Torch",
    icon: torch,
  },
  {
    name: "Tensorflow",
    icon: Tensorflow,
  },
  {
    name: "Keras",
    icon: keras,
  },
  {
    name: "Langchain",
    icon: langchain,
  },
  {
    name: "HuggingFace",
    icon: huggingface,
  },  
  {
    name: "OpenCV",
    icon: opencv,
  },
  {
    name: "ONNX",
    icon: onnx,
  },
  {
    name: "Neo4j",
    icon: neo4j,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Cuda",
    icon: cuda,
  },
  {
    name: "Docker",
    icon: docker,
  },

];

const Educations = [
  {
    title: "B.Tech Artificial Intelligence and Data Science",
    company_name: "MEPCO SCHLENK ENGINEERING COLLEGE",
    icon: mepco,
    iconBg: "#383E56",
    date: "Oct 2022 - Apr 2026",
    points: [
      "Built a strong foundation in Data Structures and Algorithms, enhancing problem-solving skills through continuous practice on platforms like Leetcode.",
      "Gained hands-on Education by working on academic projects using technologies like React, Node.js, MongoDB, and Neo4j.",
      "Collaborated with peers in team-based projects, developing communication, version control (Git/GitHub), and agile development practices.",
      "Explored deep learning and machine learning concepts through research papers and personal projects, improving understanding of real-world AI applications.",
    ],
    
  },
  {
    title: "Ai/ML diploma course",
    company_name: "Xplore IT Corp",
    icon: xplore,
    iconBg: "#E6DEDD",
    date: "June 2022 - Oct 2022",
    points: [
      "Explored the fundamentals of Artificial Intelligence and Machine Learning through academic courses and self-driven projects.",
      "Gained hands-on Education with HTML, CSS, and JavaScript, building static and dynamic web pages from scratch.",
      "Learned the basics of database management and backend logic using tools like MySQL and Node.js.",
      "Developed a strong mathematical foundation, especially in linear algebra, probability, and calculus, which are crucial for deep learning.",
    ],    
  },
  {
    title: "School",
    company_name: "K.KAMARAJAR MATRICULATION HIGHER SECONDARY SCHOOL",
    icon: school,
    iconBg: "#383E56",
    date: "Nov 2008 - March 2022",
    points: [
      "Built a strong foundation in mathematics and logical thinking through consistency.",
      "Explored the basics of computers, programming logic, and technology through school-level courses and clubs.",
      "Developed leadership and collaboration skills by actively participating in team projects, science fairs, and competitions.",
      "Learned the importance of discipline, time management, and continuous learning as part of everyday school life.",
    ]
  }
];

const testimonials = [
  {
    testimonial:
      "Collaborating with Pragateeshwaran was an inspiring Education. His focus, clarity of thought, and precision in solving technical challenges made every task feel smooth and efficient.",
    name: "Namasivaayam",
    designation: "ML Engineer",
    company: "Mr. Cooper",
    image: Namasivaayam,
  },
  {
    testimonial:
      "Pragateeshwaran has an exceptional talent for translating ideas into real-world systems. His calm approach, paired with technical depth, consistently led us to breakthrough results.",
    name: "Nithish",
    designation: "Member",
    company: "Computer Society of India",
    image: nithish,
  },
  {
    testimonial:
      "Pragateeshwaran is thoughtful in his approach and consistent in his work. He quietly gets things done with a strong sense of responsibility and focus.",
    name: "Nawfal Arsath",
    designation: "UI/UX",
    company: "Freelancer",
    image: nawfal,
  },
  {
    testimonial:
      "He has a calm way of breaking down tough ideas into simple parts. You can tell he enjoys learning deeply and building things with care.",
    name: "Karnas Sagar",
    designation: "Intern",
    company: "Cogniwide",
    image: sagar,
  },
];

const projects = [
  {
    name: "QueryGen",
    description:
      "QueryGen is a Streamlit application that allows you to generate SQL queries based on natural language prompts and CSV file inputs. It uses LangChain's SQL query generation capabilities and the ChatGroq language model to interpret user prompts and generate optimized SQL queries tailored to the uploaded CSV data.",
    tags: [
      {
        name: "genai",
        color: "blue-text-gradient",
      },
      {
        name: "attention-networks",
        color: "green-text-gradient",
      },
      {
        name: "database",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "https://github.com/Pragateeshwaran/QueryGen",
  },
  {
    name: "Fused-Knowledge-MultiModal",
    description:
      "This project aims to build a multimodal model that relies solely on attention mechanisms. The goal is to process images and text using dedicated attention-based encoders, fuse their representations using an attention-based fusion module, and generate output sequences (captions or answers) through an attention-based decoder.",
    tags: [
      {
        name: "transformers",
        color: "blue-text-gradient",
      },
      {
        name: "attention-networks",
        color: "green-text-gradient",
      },
      {
        name: "MultiModal",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "https://github.com/Pragateeshwaran/Fused-Knowledge-MultiModal",
  },
  {
    name: "ViT-based-Image-Classification",
    description:
      "This project implements a Vision Transformer (ViT) model for classifying images. The implementation includes custom self-attention mechanisms, data preprocessing, and training pipeline.",
    tags: [
      {
        name: "transformers",
        color: "blue-text-gradient",
      },
      {
        name: "attention-networks",
        color: "green-text-gradient",
      },
      {
        name: "data-preprocessing",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "https://github.com/Pragateeshwaran/ViT-based-Image-Classification",
  },
  {
    name: "LoRA-From-Scratch",
    description:
      "This project implements a Low-Rank Adaptation (LoRA) technique from scratch for fine-tuning a neural network on the MNIST dataset. It allows for efficient adaptation of a pre-trained model to specific digits. ",
    tags: [
      {
        name: "Finetuning",
        color: "blue-text-gradient",
      },
      {
        name: "Torch",
        color: "green-text-gradient",
      },
    ],
    source_code_link: "https://github.com/Pragateeshwaran/LoRA-From-Scratch",
  },
  {
    name: "GPT-2 From Scratch",
    description:
      "This Project uses PyTorch to build and train a OpenAI’s GPT-like language model for text generation. It includes data preprocessing, defining model architecture with multi-head attention and feedforward layers, training with backpropagation, and text generation using the trained model. ",
    tags: [
      {
        name: "Attention-network",
        color: "blue-text-gradient",
      },
      {
        name: "torch",
        color: "green-text-gradient",
      },
      {
        name: "maths",
        color: "pink-text-gradient",
      },
    ],  
    source_code_link: "https://github.com/Pragateeshwaran/GPT-2-From-Scratch",
  },
  {
    name: "Deep Face Detection with TensorFlow",
    description:
      "This project implements a deep learning model for face detection using TensorFlow. The model is based on a modified version of the VGG16 architecture and performs both face classification (presence of a face) and face localization (bounding box prediction).",
    tags: [
      {
        name: "computer vision",
        color: "blue-text-gradient",
      },
      {
        name: "tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "annotation",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "https://github.com/Pragateeshwaran/Deep-Face-Detection",
  },
];

export { services, technologies, Educations, testimonials, projects };
