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
];

export const HERO_TITLES = [
  "Software Engineer",
  "Backend & Distributed Systems Engineer",
  "AI Infrastructure Engineer"
];

export const EXPERIENCES: Experience[] = [
  {
    id: "exp1",
    role: "Research Assistant - Distributed Systems Research",
    company: "Stony Brook University",
    location: "Remote",
    period: "Jul 2025 - Feb 2026",
    description: [
      "Designed and implemented a distributed consensus orchestration platform in Go to deploy and manage consensus protocols across Kubernetes clusters.",
      "Built a coordination layer capable of orchestrating multiple consensus algorithms and automatically handling leader election, node recovery and configuration updates.",
      "Developed a reinforcement learning controller that dynamically selected optimal consensus strategies based on runtime latency and throughput metrics, improving throughput by 25% and reducing recovery latency by 18%.",
      "Implemented distributed system monitoring using Prometheus and Grafana to visualize node health, performance metrics and cluster level events."
    ],
    techStack: [
      "Go",
      "gRPC",
      "Protobuf",
      "Kubernetes",
      "Azure",
      "Prometheus",
      "Grafana",
      "Reinforcement Learning"
    ]
  },

  {
    id: "exp2",
    role: "Graduate Research Assistant",
    company: "Mechanismic Inc. / SUNY Research Foundation",
    location: "Stony Brook, NY",
    period: "Dec 2023 - Jun 2025",
    description: [
      "Co-developed a web based robotics simulation platform that visualized robotic kinematics and distributed simulation workloads in real time.",
      "Engineered backend services in Go to process simulation compute jobs and telemetry streams across distributed nodes.",
      "Containerized simulation services using Docker and deployed them to Kubernetes clusters for scalable testing environments.",
      "Implemented CI/CD pipelines with GitHub Actions to automate build, testing and deployment workflows."
    ],
    techStack: ["React.js", "Babylon.js", "Go", "Docker", "Kubernetes"]
  },

  {
    id: "exp3",
    role: "Software Engineer",
    company: "Apple Inc. (via Infosys)",
    location: "Hyderabad, India",
    period: "Sep 2021 – Aug 2023",
    description: [
      "Developed high throughput backend services in Java Spring Boot powering Apple Maps ingestion pipelines processing millions of location updates daily.",
      "Built REST APIs and Kafka based data pipelines to ingest and normalize vendor supplied location datasets from multiple providers.",
      "Optimized Redis caching and PostgreSQL query performance reducing API latency from 300ms to 120ms under high traffic workloads.",
      "Developed internal analytics dashboards using React.js to monitor ingestion pipelines and identify vendor data quality issues.",
      "Implemented monitoring pipelines using Prometheus and Grafana to analyze ingestion failures and pipeline anomalies."
    ],
    techStack: [
      "Java",
      "Spring Boot",
      "Kafka",
      "Redis",
      "PostgreSQL",
      "React.js",
      "Docker",
      "Kubernetes"
    ]
  },

  {
    id: "exp4",
    role: "Software Engineer",
    company: "Dhan Technology Labs",
    location: "Hyderabad, India",
    period: "Apr 2020 – Aug 2021",
    description: [
      "Developed conversational AI systems for healthcare workflows using Rasa and React based chat widgets.",
      "Implemented Django REST APIs integrating SQL Server and Redis caching layers improving throughput by 25%.",
      "Built intent classification pipelines and entity extraction workflows using Rasa to automate patient support interactions.",
      "Integrated Azure Application Insights to monitor chatbot performance, usage metrics and production errors."
    ],
    techStack: ["React.js", "Rasa", "Django", "SQL Server", "Azure"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "proj1",
    title: "Fault Tolerant Replication Protocol with PBFT",
    category: "Distributed Systems",
    description:
      "Implemented a Byzantine fault tolerant replication protocol using PBFT with threshold signatures and checkpointing to support high concurrency distributed workloads.",
    techStack: ["Go", "gRPC", "Protobuf", "Distributed Systems"]
  },

  {
    id: "proj2",
    title: "Distributed Transaction Processing System with Multi Paxos",
    category: "Distributed Systems",
    description:
      "Built a distributed transaction processing platform using Multi Paxos and two phase commit to maintain strong consistency across distributed shards.",
    techStack: ["Go", "gRPC", "Protobuf", "Paxos"]
  },

  {
    id: "proj3",
    title: "Distributed ML Platform on Kubernetes",
    category: "AI Infrastructure",
    description:
      "Designed and deployed a distributed machine learning platform using Ray and KubeRay on Kubernetes enabling autoscaling clusters for large scale model inference workloads.",
    techStack: ["Ray", "KubeRay", "Kubernetes", "FastAPI", "Python"]
  },

  {
    id: "proj4",
    title: "RAG Based Documentation Assistant",
    category: "AI Systems",
    description:
      "Built an end to end retrieval augmented generation system integrating LLM APIs, vector databases and document ingestion pipelines enabling citation backed knowledge retrieval across large document collections.",
    techStack: ["Python", "LangChain", "OpenAI", "Pinecone", "Streamlit"]
  },

  {
    id: "proj5",
    title: "Global Happiness and Sustainability Analytics",
    category: "Data Visualization",
    description:
      "Developed an analytics platform visualizing global happiness metrics and sustainability indicators across 100+ countries using interactive charts and maps.",
    techStack: ["React", "D3.js", "Python"]
  },

  {
    id: "proj6",
    title: "CPU Scheduling Algorithms Evaluation",
    category: "Operating Systems",
    description:
      "Implemented Linux style CPU schedulers in the xv6 kernel including a CFS scheduler using red black trees and a BFS scheduler using linked lists for constant time process selection.",
    techStack: ["xv6 Kernel", "C++", "Operating Systems"]
  },

  {
    id: "proj7",
    title: "Reddit Community Behavioral Analysis",
    category: "Machine Learning",
    description:
      "Analyzed large scale Reddit discussion datasets using LSTM based sentiment models and BERT based topic modeling to study political discourse patterns.",
    techStack: ["Python", "TensorFlow", "BERT", "Pandas"]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Languages",
    icon: Code2,
    skills: ["Go", "Python", "Java", "TypeScript", "JavaScript", "SQL"]
  },

  {
    category: "Backend & Frameworks",
    icon: Terminal,
    skills: [
      "Spring Boot",
      "Django",
      "FastAPI",
      "Node.js",
      "React.js",
      "Next.js",
      "gRPC",
      "REST APIs",
      "GraphQL"
    ]
  },

  {
    category: "AI Systems",
    icon: Cpu,
    skills: [
      "RAG Systems",
      "LangChain",
      "OpenAI APIs",
      "Pinecone",
      "LLM Applications",
      "AI Agents"
    ]
  },

  {
    category: "Cloud & Infrastructure",
    icon: Cloud,
    skills: [
      "AWS",
      "Azure",
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
    category: "Distributed Systems",
    icon: Database,
    skills: [
      "Microservices",
      "Kafka",
      "Fault Tolerance",
      "Consensus Protocols",
      "Load Balancing",
      "PostgreSQL",
      "Redis"
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
