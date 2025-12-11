import { Github, Linkedin, Mail, Terminal, Cloud, Server, Shield, Database, Code, Monitor, Globe, Cpu } from "lucide-react";

export const personalInfo = {
  name: "Hritik Munde",
  role: "DevOps Engineer",
  bio: "Building reliable infrastructure and automating the boring stuff. Passionate about cloud native technologies, distributed systems, and security.",
  email: "hritik16munde@gmail.com",
  socials: {
    github: "https://github.com/hritikmunde",
    linkedin: "https://www.linkedin.com/in/hritik-munde-922b43183/",
  },
};

export const skills = [
  { 
    name: "Cloud Infrastructure", 
    icon: Cloud, 
    items: ["AWS (EC2, S3, Lambda, VPC, IAM)", "Azure", "Render", "DigitalOcean"] 
  },
  { 
    name: "Containerization & Orchestration", 
    icon: Server, 
    items: ["Docker", "Kubernetes", "Helm", "Docker Compose", "Podman"] 
  },
  { 
    name: "IaC & Configuration", 
    icon: Terminal, 
    items: ["Terraform", "Ansible", "CloudFormation", "Bicep"] 
  },
  { 
    name: "CI/CD & DevOps Tools", 
    icon: Cpu, 
    items: ["Jenkins", "GitHub Actions", "GitLab CI", "ArgoCD", "Git"] 
  },
  { 
    name: "Observability & Monitoring", 
    icon: Monitor, 
    items: ["Prometheus", "Grafana", "ELK Stack", "Datadog", "CloudWatch"] 
  },
  { 
    name: "Backend & Scripting", 
    icon: Code, 
    items: ["Python", "Go", "Bash/Shell", "JavaScript/TypeScript"] 
  },
  { 
    name: "Networking & Security", 
    icon: Shield, 
    items: ["Nginx", "Traefik", "Firewalls", "IAM", "VPN", "SSL/TLS"] 
  },
  { 
    name: "Databases & Storage", 
    icon: Database, 
    items: ["PostgreSQL", "MongoDB", "Redis", "Etcd", "S3"] 
  },
];

export const projects = [
  {
    title: "Automated Honeypot Farm",
    description: "A Kubernetes-native honeypot deployment system designed to capture and analyze automated network attacks using multiple personas (Web Server, Edge Router, Domain Controller).",
    features: [
      "Deployed on AWS EKS using Terraform for Infrastructure as Code.",
      "Implemented centralized logging and visualization with Loki, Promtail, and Grafana.",
      "Secured with NetworkPolicies and AWS Security Groups for strict isolation.",
      "Automated CI/CD pipeline using GitHub Actions for container builds and deployment."
    ],
    tags: ["Kubernetes", "AWS EKS", "Terraform", "Grafana/Loki", "Cowrie"],
    link: "https://github.com/hritikmunde/honey-pot-farm",
  },
  {
    title: "Distributed Logging & Alerting",
    description: "A lightweight, real-time logging pipeline for Kubernetes that captures error logs via Fluent Bit, bridges them to an Etcd cluster, and triggers alerts.",
    features: [
      "Built custom Go microservices (Bridge & Watcher) for log processing and alerting.",
      "Utilized Fluent Bit for efficient, low-overhead log forwarding and filtering.",
      "Leveraged Etcd for consistent, distributed storage of alert states.",
      "Designed for high availability and namespace-agnostic deployment."
    ],
    tags: ["Go", "Kubernetes", "Etcd", "Fluent Bit", "Distributed Systems"],
    link: "https://github.com/hritikmunde/distributed-etcd-logger",
  },
  {
    title: "Library Catalog Monolith",
    description: "A full-stack Spring Boot application demonstrating modern DevOps practices including containerization, CI/CD, and cloud deployment.",
    features: [
      "Containerized Java Spring Boot application using Docker.",
      "Implemented secure role-based authentication and CRUD operations.",
      "Automated build and test pipelines via GitHub Actions.",
      "Deployed to Render cloud platform with production-ready configuration."
    ],
    tags: ["Java Spring Boot", "Docker", "CI/CD", "Render", "PostgreSQL"],
    link: "https://github.com/hritikmunde/library_catalog",
  },
  {
    title: "Scalable Thumbnail Generator",
    description: "A production-style, cloud-native system for parallel image processing using Kubernetes HPA and custom metrics.",
    features: [
      "Architected a scalable pipeline with Flask, Celery, and Redis for asynchronous task processing.",
      "Implemented Horizontal Pod Autoscaling (HPA) based on custom Redis queue depth metrics.",
      "Provisioned AWS EKS infrastructure using Terraform.",
      "Integrated Prometheus and Grafana for real-time monitoring of worker performance."
    ],
    tags: ["Kubernetes HPA", "Terraform", "AWS EKS", "Python/Celery", "Redis"],
    link: "https://github.com/hritikmunde/parallel-thumbnail-generation",
  },
];

export const experience = [
  {
    role: "DevOps Engineer",
    company: "UST",
    location: "Pune, MH, India",
    period: "Jul 2022 - Jul 2024",
    description: [
      "Redesigned GitLab CI/CD pipelines to run lightweight jobs in parallel and reduce docker cache buildup on the runner machine, cutting the average pipeline build time by 13 minutes.",
      "Provisioned and automated Kubernetes clusters using Terraform for multiple environments, reducing infrastructure setup time by 40% and increasing deployment speed by 30%.",
      "Built Docker images for microservices and secured them in private repositories with role-based access, cutting deployment failures by 15% and boosting release confidence.",
      "Authored and tested disaster recovery runbooks and playbooks, conducting dry runs in simulated environments that reduced recovery time by 90% (from 4 hours to 30 minutes).",
      "Automated server provisioning, configuration, and patch management for Linux environments using Ansible playbooks, reducing setup time by 60%.",
      "Implemented monitoring, alerting, and incident response pipelines using Splunk dashboards and Grafana, reducing incident detection time by 40%."
    ]
  },
  {
    role: "Software Engineering Intern",
    company: "Tata Motors",
    location: "Pune, MH, India",
    period: "Jan 2022 - May 2022",
    description: [
      "Constructed comprehensive web application modules demonstrating proficiency in full-stack development methodologies and payment system architecture.",
      "Crafted PHP CodeIgniter-powered bot for payment receipt generation, streamlining financial documentation processes and eliminating 30% of manual administrative tasks."
    ]
  },
  {
    role: "Backend Developer Intern",
    company: "Console Infotech",
    location: "Pune, MH, India",
    period: "Jun 2021 - Jul 2021",
    description: [
      "Leveraged the Laravel framework, reducing repetitive coding by 50% and accelerating development for website creation.",
      "Enhanced user management using JetStream Package and Spatie; built custom HTML boilerplates that improved navigation speed for 50+ admin users."
    ]
  }
];

export const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "Indiana University Bloomington",
    period: "2024 - 2026",
    description: "Focusing on Cloud Computing, Distributed Systems, and Network Security.",
  },
  {
    degree: "Bachelor of Technology in Computer Engineering",
    school: "MIT Academy of Engineering, Pune",
    period: "2018 - 2022",
    description: "Specialized in Software Development, Database Management, and Network Security.",
  },
];

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  link?: string;
}

export const certifications: Certification[] = [
  {
    name: "Red Hat Certified System Administrator (RHCSA)",
    issuer: "Red Hat",
    date: "Issued 2022",
    link: "#"
  },
  {
    name: "HashiCorp Certified: Terraform Associate (002)",
    issuer: "HashiCorp",
    date: "Issued 2023",
    link: "#"
  }
];
