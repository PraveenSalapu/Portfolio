export const profile = {
  name: "Sai Praveen Kumar Salapu",
  tagline:
    "Software engineer blending cloud architecture, data storytelling, and AI experimentation.",
  location: "Tempe, AZ",
  availability:
    "Open to full-time software engineering roles starting Dec 2025",
  photo: "/edited-adjusted-1756403309460.png",
  overview:
    "Software engineer with 3+ years delivering resilient microservices, event-driven systems, and serverless workloads across AWS and GCP. I pair Java/Spring Boot and Python automation with Terraform, data pipelines, and modern frontends to ship observable platforms while experimenting with RAG workflows, AI copilots, and analytics storytelling.",
  contact: {
    email: "saipraveenkumarsalapu@gmail.com",
    phone: "",
    phoneHref: "",
    resume: "https://www.linkedin.com/in/sai-praveen-kumar-salapu",
    calendar: "",
  },
};

export const about = {
  headline: "In it for reliable systems",
  intro:
    "I'm a software engineer who enjoys building reliable systems that scale. Over the past 3+ years, I've worked on microservices, AWS-native deployments, and full-stack applications. What keeps me motivated is continuous learning--whether it's sharpening my system design and DSA fundamentals, or exploring how machine learning and AI can complement modern software systems. I also enjoy designing clean, responsive frontends that connect seamlessly to backend services.",
  highlights: [
    "Delivered microservices, AWS-native deployments, and full-stack products over the past 3+ years.",
    "Practice system design and DSA fundamentals while exploring how ML and AI extend modern software.",
    "Design clean, responsive frontends that connect seamlessly to dependable backend services.",
  ],
};

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sai-praveen-kumar-salapu",
  },
  { label: "Email", href: "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=saipraveenkumarsalapu@gmail.com" },
];


export const principles = [
  {
    title: "AI Chatbots",
    description:
      "Building an LLM-powered chatbot for predicting early diabetes and recommending personalized next steps.",
  },
  {
    title: "RAG Models",
    description:
      "Experimenting with Retrieval-Augmented Generation (RAG) to summarize technical documentation and ease developer workflows.",
  },
  {
    title: "AI in Engineering Pipelines",
    description:
      "Applying ML to backend platforms, including NLP-based APIs and recommendation systems.",
  },
  {
    title: "Data Visualization",
    description:
      "Designing interactive Tableau stories on U.S. economy trends by combining macroeconomic datasets with visual narratives.",
  },
  {
    title: "Cloud Expansion",
    description:
      "Deepening skills in Google Cloud Platform (GCP) alongside AWS.",
  },
  {
    title: "System Design Growth",
    description:
      "Scaling distributed systems with event-driven architectures and high availability patterns.",
  },
];

export const experience = [
  {
    company: "Accenture",
    title: "Software Engineer",
    period: "Sep 2022 - Dec 2023",
    badgeIcon: "server-cog",
    summary:
      "Led backend development for enterprise platforms, owning Spring Boot microservices and reliability improvements across AWS infrastructure.",
    highlights: [
      "Developed and maintained 50+ REST APIs in Java Spring Boot to support high availability use cases.",
      "Boosted API performance with Redis caching and targeted SQL tuning for throughput-critical paths.",
      "Built Jenkins and GitHub Actions CI/CD pipelines that reduced release time by 30%.",
      "Containerized services with Docker and deployed to Amazon EKS for consistent, reliable releases.",
      "Partnered with PM and QA teams in Agile sprints to deliver features on time and within quality bars.",
    ],
    tech: [
      "Java",
      "Spring Boot",
      "AWS",
      "Redis",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "GitHub Actions",
    ],
  },
  {
    company: "Accenture",
    title: "Associate Software Engineer",
    period: "Aug 2020 - Aug 2022",
    badgeIcon: "cloud",
    summary:
      "Supported global clients by automating AWS environments, tuning services for scale, and strengthening operational readiness.",
    highlights: [
      "Automated AWS provisioning with CLI scripts and Terraform, reducing environment setup time and errors.",
      "Implemented load balancing and auto scaling for EC2 fleets to improve system throughput and reliability.",
      "Developed backend utilities in Java and AWS Lambda to process large datasets securely.",
      "Wrote JUnit and integration tests that increased code quality and prevented regressions.",
      "Provided production support using CloudWatch, Dynatrace, and New Relic for proactive monitoring.",
    ],
    tech: [
      "Java",
      "AWS",
      "Terraform",
      "Lambda",
      "JUnit",
      "CloudWatch",
      "Dynatrace",
      "New Relic",
    ],
  },
];

export const education = [
  {
    school: "Master of Science in Information Technology",
    institution: "Arizona State University",
    period: "Jan 2024 - Dec 2025",
    focus:
      "Information technology with emphasis on cloud platforms, machine learning, and data systems.",
    achievements: [
      "Maintaining a 4.0 GPA while balancing graduate research and industry consulting projects.",
      "Exploring advanced coursework in distributed computing, machine learning, and data engineering.",
    ],
  },
  {
    school: "Bachelor of Technology in Computer Science",
    institution: "GITAM University",
    period: "Jun 2016 - Jun 2020",
    focus:
      "Computer science fundamentals, algorithms, and software engineering.",
    achievements: [
      "Graduated with a 3.4 GPA while leading peer programming study groups.",
      "Collaborated on capstone projects focused on scalable web services and data pipelines.",
    ],
  },
];

export const projects = [
  {
    name: "Secure Serverless File-Sharing Platform",
    category: "Cloud Architecture",
    description:
      "Designed a secure, serverless file-sharing application with AWS Lambda, API Gateway, and Amazon S3.",
    impact:
      "Implemented end-to-end AES-256 encryption and resumable 1GB uploads that cut latency for distributed users.",
    tech: ["AWS Lambda", "API Gateway", "Amazon S3", "Terraform", "AES-256"],
    link: "",
  },
  {
    name: "Book Recommendation API + UI",
    category: "Backend Engineering",
    description:
      "Built a Flask API powered by TF-IDF and cosine similarity with a React frontend to deliver tailored book picks.",
    impact:
      "Redis caching reduced response latency by 30% while the interactive UI kept a 500-book catalog relevant.",
    tech: ["Python", "Flask", "AWS EC2", "Redis", "React"],
    link: "",
  },
  {
    name: "AI Chatbot for Early Diabetes Prediction (Ongoing)",
    category: "AI & ML",
    description:
      "Designing an AI assistant that predicts early diabetes risk from lifestyle and wellness inputs.",
    impact:
      "Integrates LLM prompts with ML classifiers to surface risk scores and personalized next steps.",
    tech: ["Python", "scikit-learn", "LangChain", "OpenAI API"],
    link: "",
  },
  {
    name: "RAG Documentation Summarizer (Ongoing)",
    category: "Developer Productivity",
    description:
      "Building a retrieval-augmented generation workflow that ingests large documentation sets for instant answers.",
    impact:
      "Combines embeddings, vector search, and Q&A prompts so developers can digest dense technical references faster.",
    tech: ["Python", "LangChain", "Vector Store", "OpenAI API"],
    link: "",
  },
  {
    name: "Tableau Story - U.S. Economy Trends",
    category: "Data Visualization",
    description:
      "Developed an interactive Tableau narrative exploring GDP, inflation, and employment indicators.",
    impact:
      "Highlighted correlations for academic and research exploration through guided visual storytelling.",
    tech: ["Tableau", "Pandas", "Data Storytelling"],
    link: "",
  },
];

export const skills = {
  languages: ["Java", "Python", "SQL", "JavaScript", "TypeScript"],
  frontend: ["React", "Angular", "HTML5", "CSS3", "Tailwind"],
  frameworks: ["Spring Boot", "Flask", "Hibernate"],
  cloud: [
    "AWS EC2",
    "AWS S3",
    "AWS RDS",
    "AWS Lambda",
    "AWS EKS",
    "AWS Route 53",
    "AWS CloudFront",
    "AWS SQS",
    "AWS SNS",
    "GCP Compute Engine",
    "GCP Cloud Run",
    "GCP BigQuery",
    "Terraform",
  ],
  databases: ["MySQL", "MongoDB", "Redis", "DynamoDB", "Oracle"],
  devops: [
    "Docker",
    "Kubernetes",
    "Jenkins",
    "GitHub Actions",
    "Ansible",
    "Infrastructure as Code (IaC)",
  ],
  aiData: [
    "Scikit-learn",
    "TensorFlow",
    "Pandas",
    "NumPy",
    "Jupyter",
    "Streamlit",
    "LangChain",
    "OpenAI APIs",
  ],
  monitoring: ["CloudWatch", "Dynatrace", "New Relic", "Grafana"],
  productivity: [
    "GitHub Copilot",
    "ChatGPT",
    "VS Code",
    "IntelliJ IDEA",
    "PyCharm",
    "Postman",
    "Swagger",
    "Notion",
    "Jira",
    "ServiceNow",
  ],
  systemDesign: [
    "Microservices",
    "REST APIs",
    "Event-Driven Systems",
    "Distributed Architectures",
    "Serverless",
    "High Availability",
  ],
};



export const recognitions = [] as const;

export const credlyBadges = [
  {
    id: "6120eb1d-f23a-48e4-9ab3-150f8cd2b23d",
    title: "100 Days of Cloud",
    href: "https://www.credly.com/badges/6120eb1d-f23a-48e4-9ab3-150f8cd2b23d/public_url",
    width: 200,
    height: 260,
  },
  {
    id: "3d6bf61c-cb4c-429a-b8d1-6ab5d9b0fd25",
    title: "AWS Cloud Quest",
    href: "https://www.credly.com/badges/3d6bf61c-cb4c-429a-b8d1-6ab5d9b0fd25/public_url",
    width: 200,
    height: 260,
  },
  {
    id: "31ade16e-4d80-4498-8cf1-bd01a9426c6c",
    title: "AWS Academy Cloud Architecting",
    href: "https://www.credly.com/badges/31ade16e-4d80-4498-8cf1-bd01a9426c6c/public_url",
    width: 200,
    height: 260,
  },
  {
    id: "32b0e993-1a25-4db3-9c63-12a71726f92e",
    title: "AWS Academy ML for NLP",
    href: "https://www.credly.com/badges/32b0e993-1a25-4db3-9c63-12a71726f92e/public_url",
    width: 200,
    height: 260,
  },
];

export const journeyMilestones = [
  {
    title: "Cloud-first engineer",
    description:
      "Automated AWS infrastructure with Terraform and CLI tooling, laying the groundwork for scalable deployments.",
    icon: "cloud",
    year: 2020,
  },
  {
    title: "Microservices in production",
    description:
      "Delivered Spring Boot services and caching strategies that powered high availability enterprise platforms.",
    icon: "layers",
    year: 2022,
  },
  {
    title: "Platform reliability champion",
    description:
      "Optimized CI/CD pipelines, observability, and Kubernetes deployments to cut release cycles and outages.",
    icon: "radar",
    year: 2023,
  },
  {
    title: "Graduate innovation spark",
    description:
      "Pursuing a 4.0 GPA at ASU while applying AI, ML, and data engineering concepts to real-world projects.",
    icon: "sparkles",
    year: 2024,
  },
];

