import {
  Server,
  Cloud,
  Code2,
  Database,
  Terminal,
  Cpu,
  ToolCaseIcon,
  Monitor
} from "lucide-react";
import { Experience, Project, SkillCategory, Education } from "./types";

export const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Resume", href: "#resume" }
];

export const HERO_TITLES = [
  "Software Engineer",
  "Backend Engineer",
  "AI Infra Engineer"
];

export const EXPERIENCES: Experience[] = [
  {
    id: "exp1",
    role: "Research Assistant - Visiting Scholar",
    company: "Stony Brook University",
    location: "Remote",
    period: "Jul 2025 - Present",
    description: [
      "Built a distributed consensus orchestrator in Go, deployed across Kubernetes to evaluate protocols (RCC, DQBFT, MirBFT), improving reliability.",
      "Integrated reinforcement learning to dynamically switch consensus protocols based on workload, boosting throughput by 25% and cutting recovery latency by 18%.",
      "Automated IaC workflows using Terraform and Jenkins on Azure Kubernetes Service, reducing cluster setup time by 50%.",
      "Implemented system monitoring with Prometheus and Grafana to visualize node health, shortening incident response by 40%."
    ],
    techStack: [
      "Go",
      "Protobuf",
      "gRPC",
      "Kubernetes",
      "Terraform",
      "Azure",
      "Prometheus",
      "RL"
    ]
  },
  {
    id: "exp2",
    role: "Graduate Research Assistant",
    company: "The Research Foundation for SUNY - Mechanismic Inc.",
    location: "Stony Brook, NY",
    period: "Dec 2023 - Jan 2025",
    description: [
      "Co-developed a web-based 3D robotics simulation platform using React.js and Babylon.js.",
      "Implemented backend services in Go to handle simulation data, compute requests, and telemetry.",
      "Containerized backend using Docker and deployed to Kubernetes for multi-environment testing.",
      "Integrated application monitoring with Prometheus/Grafana to track simulation performance."
    ],
    techStack: ["React.js", "Babylon.js", "Go", "Docker", "Kubernetes"]
  },
  {
    id: "exp3",
    role: "Specialist Programmer (Full Stack Engineer)",
    company: "Apple Inc. (via Infosys)",
    location: "Hyderabad, India",
    period: "Sep 2021 – Aug 2023",
    description: [
      "Built high-throughput backend services in Java Spring Boot for Apple Maps ingestion pipelines (99.9% reliability).",
      "Optimized APIs with Redis caching and PostgreSQL indexing, reducing latency from 300ms to 120ms.",
      "Developed internal analytics dashboards using React.js, reducing manual QA time by 50%.",
      "Implemented monitoring with Grafana/Prometheus, accelerating failure recovery by 35%."
    ],
    techStack: [
      "Java",
      "Spring Boot",
      "React.js",
      "Redis",
      "PostgreSQL",
      "GraphQL",
      "Docker",
      "Spinnaker"
    ]
  },
  {
    id: "exp4",
    role: "Software Engineer",
    company: "Dhan Technology Labs India",
    location: "Hyderabad, India",
    period: "Apr 2020 – Mar 2021",
    description: [
      "Developed AI-driven conversational chat widgets using Rasa and React.js (90% intent accuracy).",
      "Implemented RESTful APIs in .NET Core with SQL Server and Redis, increasing throughput by 25%.",
      "Set up application monitoring using Azure App Insights."
    ],
    techStack: ["React.js", "Rasa", ".NET Core", "SQL Server", "Azure"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "proj1",
    title: "Fault-Tolerant Replication Protocol with PBFT",
    category: "Distributed Systems",
    description:
      "Designed a PBFT-based replication protocol using threshold signatures and garbage collection. Optimized for high concurrency, processing up to 10,000 client requests/sec under Byzantine faults.",
    techStack: ["Go", "gRPC", "Protobuf", "Distributed Systems"]
  },
  {
    id: "proj2",
    title: "Distributed Transaction Processing System with Paxos",
    category: "Distributed Systems",
    description:
      "Architected a banking system for intra/cross-shard transactions using Paxos with two-phase commit. Achieved 99.99% uptime via Write-Ahead Logging (WAL).",
    techStack: ["Go", "gRPC", "Protobuf", "Paxos"]
  },
  {
    id: "proj3",
    title: "Global Happiness and Sustainability Analytics",
    category: "Data Visualization & Analytics",
    description:
      "Developed an analytics platform that visualizes global happiness, socioeconomic factors, and sustainability trends across 109 countries. Built interactive dashboards with maps and charts to help compare how economic conditions and policy choices affect overall well-being.",
    techStack: ["React", "D3.js", "Python", "Data visualization"]
  },
  {
    id: "proj4",
    title: "Implementation and Evaluation of CPU scheduling algorithms",
    category: "Operating Systems",
    description:
      "Implemented Linux-style CPU schedulers in xv6, including a CFS version using a red-black tree and a BFS version using a linked list for constant-time picks. Benchmarked both to compare latency and turnaround time across I/O-bound and CPU-bound workloads.",
    techStack: ["Kernel v6", "Process Scheduler", "c++", "Operating Systems"]
  },
  {
    id: "proj5",
    title: "Automated Image Captioning with CNN-LSTM",
    category: "Machine Learning",
    description:
      "Developed an image captioning framework that integrates a VGG-based convolutional neural network for visual feature extraction with an LSTM-based decoder for sequence generation. Achieved improved captioning accuracy on the Flickr30k dataset relative to Flickr8k, demonstrating enhanced model scalability and generalization.",
    techStack: ["CNN", "Python", "LSTM", "Tensorflow"]
  },
  {
    id: "proj6",
    title: "Reddit Community Behavioral Analysis",
    category: "Data Science",
    description:
      "Analyzed over ten thousand political subreddit posts using LSTM for sentiment and LDA/BERT for topic modeling, with Pandas and NumPy for processing and visualization in Colab.",
    techStack: [
      "Pandas",
      "NumPy",
      "Python",
      "BERT",
      "Data Scraping",
      "Matplotlib"
    ]
  },
  {
    id: "proj7",
    title: "PALISADE - Student-Friendly Website",
    category: "Full Stack Web",
    description:
      "Web platform for college students to share live events and secure chat. Includes blood donor search. Published in Intelligent Computing and Networking Proceedings (Springer).",
    techStack: ["React", "NodeJS", "MongoDB", "SocketIO"],
    publication: "ISBN: 978-981-16-4863-2"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Languages",
    icon: Code2,
    skills: ["Go", "Python", "Java", "TypeScript", "JavaScript", "SQL"]
  },
  {
    category: "Frameworks",
    icon: Terminal,
    skills: [
      "Spring Boot",
      "Django",
      "React.js",
      "Node.js",
      "Next.js",
      "gRPC",
      "REST APIs",
      "GraphQL",
      "D3.js"
    ]
  },
  {
    category: "Cloud & Infra",
    icon: Cloud,
    skills: [
      "AWS (EC2, S3, EMR)",
      "Azure (AKS, App Insights, Monitor)",
      "Kubernetes",
      "Docker",
      "Terraform",
      "Helm",
      "Jenkins",
      "CI/CD Pipelines",
      "Linux"
    ]
  },
  {
    category: "Distributed Systems & Data",
    icon: Database,
    skills: [
      "Microservices",
      "Kafka",
      "Load Balancing",
      "Fault Tolerance",
      "PostgreSQL",
      "Redis",
      "MongoDB",
      "MySQL",
      "Reinforcement Learning"
    ]
  },
  {
    category: "Monitoring & Telemetry",
    icon: Monitor,
    skills: ["Prometheus", "Grafana", "Azure Monitor"]
  },
  {
    category: "Tools & Practices",
    icon: ToolCaseIcon,
    skills: [
      "Jira",
      "Postman",
      "Agile/Scrum",
      "Performance Optimization",
      "System Reliability"
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    school: "Stony Brook University",
    degree: "Master of Science in Computer Science",
    period: "Aug 2023 - May 2025",
    location: "Stony Brook, NY",
    courses:
      "Distributed Systems, Operating Systems, Data Visualization, Machine Learning, Theory of Database Systems"
  },
  {
    school: "Jawaharlal Nehru Technological University",
    degree: "Bachelor of Technology in Computer Science",
    period: "June 2017 - June 2021",
    location: "Hyderabad, India",
    courses:
      "Cloud Computing, Operating Systems, Java, Computer Networks, Software Engineering"
  }
];

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/nithink03/",
  email: "mailto:nithinkatla19@gmail.com",
  phone: "tel:+19344519425",
  github: "https://github.com/nithink00/"
};
