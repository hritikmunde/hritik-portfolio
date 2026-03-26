import { Github, Linkedin, Mail, Cloud, Server, Shield, Database, Code, Monitor, Cpu, Lock, Layers } from "lucide-react";

export const personalInfo = {
  name: "Hritik Munde",
  role: "DevOps & Platform Engineer",
  bio: "Platform engineer specializing in cloud-native infrastructure, GitOps, and DevSecOps. Building self-service IDPs, zero-trust CI/CD pipelines, and production-grade observability platforms across AWS, Azure, and Kubernetes.",
  email: "hritik16munde@gmail.com",
  socials: {
    github: "https://github.com/hritikmunde",
    linkedin: "https://www.linkedin.com/in/hritik-munde-922b43183/",
  },
};

export const skills = [
  {
    name: "CI/CD & GitOps",
    icon: Cpu,
    items: ["GitHub Actions", "Jenkins", "GitLab CI", "CircleCI", "ArgoCD", "Azure DevOps", "Progressive Delivery"]
  },
  {
    name: "Containers & Orchestration",
    icon: Server,
    items: ["Docker", "Kubernetes (EKS, AKS, GKE)", "Helm", "Kustomize", "Microservices", "Multi-cluster management"]
  },
  {
    name: "Cloud & IaC",
    icon: Cloud,
    items: ["AWS (EC2, S3, IAM, VPC, RDS)", "Azure", "GCP", "Terraform", "Crossplane", "Ansible"]
  },
  {
    name: "Observability & Reliability",
    icon: Monitor,
    items: ["Prometheus", "Grafana", "Loki", "OpenTelemetry", "Datadog", "Dynatrace", "Istio Service Mesh", "SLO/Error Budgeting"]
  },
  {
    name: "Security & DevSecOps",
    icon: Lock,
    items: ["OPA Gatekeeper", "Cosign", "SBOM (Syft)", "Trivy", "Snyk", "Litmus Chaos", "HashiCorp Vault"]
  },
  {
    name: "Deployment Strategies",
    icon: Layers,
    items: ["Blue-Green", "Canary", "Rolling Updates", "Automated Rollbacks", "Self-Healing Infrastructure"]
  },
  {
    name: "Languages & Scripting",
    icon: Code,
    items: ["Python (Django, FastAPI)", "Go", "Java", "TypeScript", "Bash/Shell", "SQL"]
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
    title: "Shipyard IDP — Internal Developer Platform",
    description: "A self-service Internal Developer Platform built on Backstage that reduces cloud-native service provisioning from 3-day tickets to under 3 minutes, with full GitOps automation and observability.",
    features: [
      "Backstage scaffolding templates auto-provision GitHub repos, Actions CI/CD pipelines, and AWS RDS databases via Crossplane on every developer request.",
      "ArgoCD App of Apps GitOps pattern for zero-touch Kubernetes deployments across microservices.",
      "Full observability via Prometheus ServiceMonitors and Grafana dashboards.",
      "One-command Terraform automation bootstrapped on Kind (local) and EKS (cloud)."
    ],
    tags: ["Backstage", "Crossplane", "ArgoCD", "Terraform", "Kubernetes", "Prometheus"],
    link: "https://github.com/hritikmunde/shipyard-idp",
  },
  {
    title: "Zero-Trust CI/CD Supply Chain Pipeline",
    description: "A hardened software supply chain pipeline that blocks 100% of unverified images from production Kubernetes using policy enforcement, image signing, and automated vulnerability scanning.",
    features: [
      "OPA Gatekeeper admission policies reject unsigned or unregistered container images at deploy time.",
      "SBOMs generated with Syft and images signed with Cosign per build for supply chain integrity.",
      "Trivy vulnerability scanning integrated into GitHub Actions to surface critical CVEs before merge.",
      "End-to-end zero-trust enforcement from commit to production deployment."
    ],
    tags: ["GitHub Actions", "Cosign", "Syft", "OPA Gatekeeper", "Trivy", "Kubernetes"],
  },
  {
    title: "Self-Healing Kubernetes Platform",
    description: "An automated remediation platform that detects failures and rolls back to healthy releases without human intervention, validated under real failure conditions.",
    features: [
      "Prometheus detects error rate threshold breaches, AlertManager fires a webhook, and ArgoCD automatically rolls back to the last healthy release.",
      "Validated under real failure conditions by injecting pod crashes and traffic spikes.",
      "Confirmed sub-5-minute automated recovery with tuned SLI alert thresholds.",
      "Grafana burn-rate dashboards used to observe and tune remediation behavior."
    ],
    tags: ["Kubernetes", "Prometheus", "AlertManager", "ArgoCD", "Grafana", "Python"],
  },
  {
    title: "FinOps Governance Agent",
    description: "An automated cloud cost governance agent that detects spend overruns, identifies cost drivers, and delivers real-time breakdowns to engineering teams via Slack.",
    features: [
      "Python agent detects daily forecast overruns, identifies top cost drivers, and scans for untagged resources.",
      "Automated Slack notifications with per-service AWS cost breakdowns.",
      "CloudWatch budget alerts and tagging policy enforcement to reduce unplanned cloud spend.",
      "Built on AWS Cost Explorer and Boto3 with Lambda-based scheduling."
    ],
    tags: ["Python", "AWS Cost Explorer", "Boto3", "Slack API", "CloudWatch", "Lambda"],
  },
  {
    title: "GitOps Multi-Environment Pipeline",
    description: "A structured dev/staging/prod promotion pipeline using ArgoCD ApplicationSets with automated health gates and full Git audit trail across all environments.",
    features: [
      "Code merged to main auto-deploys to dev, passes automated health gates, promotes to staging, then requires manual approval for production.",
      "Automatic rollback on failed health checks with Kustomize per-environment overlays.",
      "Full Git audit trail for every environment change eliminates manual deployment coordination.",
      "ArgoCD ApplicationSets drive promotion logic across 3 environments."
    ],
    tags: ["ArgoCD", "ApplicationSets", "Kustomize", "GitHub Actions", "Kubernetes"],
  },
  {
    title: "LLM Inference Platform",
    description: "Production-grade LLM serving infrastructure on Kubernetes with autoscaling on request queue depth, GitOps deployment, and full observability across GPU replicas.",
    features: [
      "Built LLM serving with vLLM on Kubernetes with horizontal pod autoscaling on request queue depth.",
      "GitOps deployment via ArgoCD with Terraform-provisioned EKS on AWS.",
      "Implemented deployment health gates and automated rollback triggers.",
      "Grafana dashboards tracked token throughput, TTFT, and GPU utilization across replicas for data-driven production decisions."
    ],
    tags: ["vLLM", "Kubernetes", "ArgoCD", "Prometheus", "Grafana", "Terraform", "GitHub Actions"],
  },
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
    role: "Graduate Teaching Assistant (Part-time)",
    company: "Indiana University, Dept. of Computer Science",
    location: "Bloomington, IN",
    period: "Aug 2025 - Present",
    description: [
      "Spearheaded a self-service Linux sandbox environment for 100+ students using automated shell scripts and network isolation, reducing setup overhead for instructors by 20 hours per week.",
      "Engineered an automated grading pipeline using Shell scripts and Autograder to validate code submissions, creating a CI/CD-like feedback loop that reduced grading turnaround time by 40%."
    ]
  },
  {
    role: "DevOps Engineer — Infrastructure Platform",
    company: "UST",
    location: "Pune, India",
    period: "Jul 2022 - Jul 2024",
    description: [
      "Cut delivery cycles 93% (4hrs to 15min) for 40+ microservices via ArgoCD/Jenkins/Helm GitOps; implemented Blue-Green/Canary for zero-downtime upgrades for a Tier-1 US telecom.",
      "Reduced MTTR 50% (under 90min) via Prometheus/Grafana/Loki stack; utilized Istio Service Mesh for traffic management and SLI/SLO dashboards to catch 80% of issues before user impact.",
      "Eliminated 90% configuration drift across 200+ K8s nodes via Ansible/Terraform provisioning; reduced server setup time from hours to 30 minutes.",
      "Engineered automated DR runbooks, achieving an 87% RTO improvement (4hrs to 30min) and ensuring 100% compliance during quarterly security and enterprise audits.",
      "Architected migration to Azure (AKS), leveraging HPA and Cluster Autoscalers to handle 30% peak traffic surges without manual intervention.",
      "Led shift-left security integration of Trivy/SonarQube into CI/CD pipelines, reducing production vulnerabilities by 40% across all cloud-native and microservice environments."
    ]
  },
  {
    role: "Software Engineer Intern",
    company: "Tata Motors",
    location: "Pune, India",
    period: "Aug 2021 - May 2022",
    description: [
      "Engineered 3+ production-level Python scripts to automate recurring operational workflows, resulting in a 60% reduction in manual toil for the engineering team.",
      "Collaborated with the core engineering team to optimize SQL queries and backend API endpoints, improving internal dashboard load times by 25%."
    ]
  }
];

export const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "Indiana University Bloomington",
    period: "Aug 2024 - May 2026",
    description: "GPA: 3.9/4. Focusing on Cloud Computing, Distributed Systems, and Network Security.",
  },
  {
    degree: "Bachelor of Technology in Computer Engineering",
    school: "MIT Academy of Engineering, Pune",
    period: "Aug 2018 - May 2022",
    description: "GPA: 3.65/4. Specialized in Software Development, Database Management, and Network Security.",
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
    name: "HashiCorp Certified: Terraform Associate (003)",
    issuer: "HashiCorp",
    date: "Issued 2023",
    link: "#"
  }
];
