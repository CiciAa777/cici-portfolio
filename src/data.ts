// Edit your portfolio content here. TypeScript checks every entry against its type.
import type { Experience, Project } from './types';

export const experiences = [
  {
    "role": "AI Engineer Intern",
    "organization": "IDX Exchange",
    "dates": "Jun – Sep 2026",
    "featured": true,
    "metrics": [
      {
        "value": "5",
        "label": "specialized agents"
      },
      {
        "value": "667K+",
        "label": "real estate records"
      }
    ],
    "bullets": [
      "Architected a multi-agent assistant using OpenClaw for property search, market analytics, recommendations, and RAG over active listings and historical transactions.",
      "Built natural-language search with structured filters and parameterized MySQL queries over a 130+ field schema, plus session memory for multi-turn preferences.",
      "Implemented document chunking and OpenAI embeddings; combined property-attribute similarity, listing embeddings, and sold-comparable pricing validation for hybrid recommendations.",
      "Integrated WhatsApp and approval-gated email workflows with human-in-the-loop safeguards."
    ]
  },
  {
    "role": "Data Science Intern",
    "organization": "IDX Exchange",
    "dates": "Jun – Sep 2026",
    "featured": true,
    "metrics": [
      {
        "value": "800K+",
        "label": "property records"
      },
      {
        "value": "0.8995",
        "label": "XGBoost R²"
      },
      {
        "value": "8.90%",
        "label": "MdAPE"
      }
    ],
    "bullets": [
      "Analyzed California property data with EDA, cleaning, and feature engineering to build residential valuation models.",
      "Benchmarked Linear Regression, Random Forest, and XGBoost; evaluated performance across geographic regions, property types, and price tiers.",
      "Used SHAP feature importance and residual analysis to interpret predictions and translate findings into business recommendations."
    ]
  },
  {
    "role": "NLP Algorithm Intern",
    "organization": "Shanghai Daobi Education Technology Co., Ltd",
    "dates": "Aug – Oct 2025",
    "featured": true,
    "metrics": [
      {
        "value": "3,500+",
        "label": "course documents"
      },
      {
        "value": "~30%",
        "label": "fewer low-quality questions"
      }
    ],
    "bullets": [
      "Built a two-stage NLP pipeline for structured concept extraction and curriculum-aligned question generation using SQL retrieval and LLM inference.",
      "Designed chunking, overlap resolution, deduplication, and JSON validation for consistent schema-valid extraction.",
      "Combined rubric-based LLM scoring with human review across coverage, relevance, and quality; guided prompt experiments that reduced low-quality questions by approximately 30%.",
      "Benchmarked OCR, document parsing, and vision-language models on accuracy, latency, and cost to recommend a production configuration."
    ]
  },
  {
    "role": "Research Assistant",
    "organization": "UCSD Cognitive Development Lab",
    "dates": "Jun 2025 – Apr 2026",
    "featured": false,
    "metrics": [],
    "bullets": [
      "Built a multimodal preprocessing pipeline using Whisper transcription, YOLO-based face detection, and human-in-the-loop CVAT correction to convert raw video/audio into structured datasets.",
      "Designed coordinate-level evaluation using IoU alignment and exact-match scoring to quantify detection accuracy."
    ]
  },
  {
    "role": "Data Science Intern",
    "organization": "Zhangjiang Institute of Mathematics",
    "dates": "Aug – Oct 2024",
    "featured": false,
    "metrics": [],
    "bullets": [
      "Applied NLP and sentiment analysis to 600K+ social media comments; built a CNN using video features and sentiment scores to predict popularity and support traffic allocation.",
      "Built metadata extraction with LLMs and rule-based validation, improving label accuracy from 71% to 86%.",
      "Led internal testing on 1K+ videos using Postman, diagnosed error patterns, and coordinated fixes with ML engineers."
    ]
  },
  {
    "role": "Industry & Equity Research Analyst Intern",
    "organization": "GuoHai Securities Co.",
    "dates": "Aug – Oct 2023",
    "featured": false,
    "metrics": [],
    "bullets": [
      "Built an ARIMA model for daily stock-price trends, achieving 3.2% MAPE on test data.",
      "Applied PCA and DBSCAN to segment 3K+ companies using financial and operational metrics.",
      "Created Tableau dashboards and Matplotlib visualizations for financial KPIs across 10+ companies."
    ]
  },
  {
    "role": "Data Science Teaching Assistant",
    "organization": "Halıcıoğlu Data Science Institute",
    "dates": "Mar – Jun 2024",
    "featured": false,
    "metrics": [],
    "bullets": [
      "Supported 50+ students through office hours, concept explanations, and debugging Python assignments.",
      "Published Markdown reference sheets and solution explanations on the course website."
    ]
  },
  {
    "role": "Cluster 7 Assistant · Machine Learning",
    "organization": "UC San Diego COSMOS",
    "dates": "Jun – Jul 2026",
    "featured": false,
    "metrics": [],
    "bullets": [
      "Supported the “Can We Teach a Computer to Think?” machine learning cluster."
    ]
  }
] satisfies Experience[];

export const projects = [
  {
    "title": "Adventure Planning Agent",
    "dates": "AI agents / Apr – May 2026",
    "description": "A chat-based travel agent that coordinates external tools, with explicit execution guardrails and a scenario-based evaluation harness.",
    "featured": true,
    "category": "AI & Agents",
    "status": "Course project",
    "tags": [
      "OpenAI SDK",
      "Function calling",
      "Agent evaluation"
    ],
    "metrics": [
      {
        "value": "6",
        "label": "external tools"
      },
      {
        "value": "30+",
        "label": "evaluation scenarios"
      }
    ],
    "bullets": [
      "Built a custom function-calling loop for destination search, weather, routes, and personalized itineraries.",
      "Implemented step limits, retries, duplicate-call prevention, and confirmation gates for write actions.",
      "Evaluated planning quality, safety, and edge cases with pass@k, LLM-as-a-judge, and structured experiment logging."
    ],
    "links": [
      {
        "label": "GitHub",
        "url": "https://github.com/CiciAa777/travel-agent"
      }
    ]
  },
  {
    "title": "Fairer voter turnout through resource allocation",
    "dates": "Causality & optimization / Sep 2024 – Mar 2025",
    "description": "Modeled the impact of polling-station placement and optimized allocations to balance expected turnout with equity constraints.",
    "featured": true,
    "category": "Visualization & Decisions",
    "status": "Capstone",
    "tags": [
      "Structural causal models",
      "Gurobi / MIP",
      "Next.js",
      "TypeScript"
    ],
    "metrics": [],
    "bullets": [
      "Used Georgia county-level voting records to estimate the causal impact of polling-station placement across demographic groups.",
      "Formulated and solved a fairness-constrained mixed-integer optimization problem in Gurobi.",
      "Built an interactive dashboard to compare intervention strategies and display outcomes."
    ],
    "links": [
      {
        "label": "Live project",
        "url": "https://angelinaaaaaaaaaaaa.github.io/GA_Addressing_Voter_Turnout_Inequalies/"
      },
      {
        "label": "GitHub",
        "url": "https://github.com/Angelinaaaaaaaaaaaa/Addressing-Voter-Turnout-Disparities-through-Data-Driven-Resource-Allocation"
      }
    ]
  },
  {
    "title": "Olist KPI Monitoring & Anomaly Detection",
    "dates": "Business analytics / Independent project",
    "description": "Building a workflow to detect unusual e-commerce performance, inspect contributing segments, and separate potential anomalies from seasonal or event-driven changes.",
    "featured": true,
    "category": "Data & ML",
    "status": "In progress",
    "tags": [
      "DuckDB / SQL",
      "Python",
      "STL / MAD · planned",
      "Isolation Forest · planned"
    ],
    "metrics": [],
    "bullets": [
      "Completed monthly volume checks and daily order plotting; preparing data-quality checks and the KPI layer.",
      "Planned: five KPI tables; STL residual + robust z-score versus Isolation Forest; evaluation with injected anomalies; expected-event tagging.",
      "Planned: segment contribution and rate/mix decomposition, three-view Streamlit dashboard, and a findings README.",
      "Segment contributions explain where a change occurred. Establishing its business cause requires additional evidence."
    ],
    "links": []
  },
  {
    "title": "Social Media NLP Monitor",
    "dates": "Apr – May 2026",
    "description": "Identifying local event announcements from Bluesky.",
    "featured": false,
    "category": "AI & Agents",
    "status": "Project",
    "tags": [
      "NLP",
      "LLMs",
      "Evaluation"
    ],
    "metrics": [],
    "bullets": [
      "API/firehose ingestion, metadata and keyword filtering, LLM classification, and structured event extraction.",
      "Curated a 50-post labeled gold dataset; tracked precision, recall, F1, filtering rates, and inference cost."
    ],
    "links": [
      {
        "label": "GitHub",
        "url": "https://github.com/CiciAa777/announcement-detector"
      }
    ]
  },
  {
    "title": "Schema Linking with Supervised Fine-Tuning",
    "dates": "May 2026",
    "description": "Fine-tuning a small language model for NL-to-SQL schema linking.",
    "featured": false,
    "category": "AI & Agents",
    "status": "Project",
    "tags": [
      "Qwen2.5",
      "LoRA",
      "NL-to-SQL"
    ],
    "metrics": [],
    "bullets": [
      "Fine-tuned Qwen2.5-1.5B with LoRA; added type/key injection, table reordering, and schema annotations.",
      "Ablated serialization, training, and inference configurations; improved leaderboard score from 0.42 to 0.63 with refinement and structured post-processing."
    ],
    "links": []
  },
  {
    "title": "Transformer Language Model Optimization",
    "dates": "Apr 2026",
    "description": "Architecture and optimization experiments on a GPT-style language model.",
    "featured": false,
    "category": "Data & ML",
    "status": "Project",
    "tags": [
      "PyTorch",
      "Transformers",
      "Ablation studies"
    ],
    "metrics": [],
    "bullets": [
      "Implemented a decoder-only Transformer in PyTorch with RoPE, SwiGLU, and the Muon optimizer.",
      "Ablated architecture, optimization, and data mixing; reduced validation perplexity from 57.4 to 24.5."
    ],
    "links": []
  },
  {
    "title": "Deloitte × UCSD HDSI Apprenticeship",
    "dates": "Apr – Jun 2024",
    "description": "Retail analytics and an ML recommendation prototype.",
    "featured": false,
    "category": "Data & ML",
    "status": "Project",
    "tags": [
      "EDA",
      "FP-Growth",
      "Team leadership"
    ],
    "metrics": [],
    "bullets": [
      "Analyzed 1M+ sales transactions and built a tree-based product revenue prediction model; reported accuracy: 92.5%.",
      "Designed product bundles using Frequent Pattern Growth, with a projected 15% sales increase; this was a projection, not a measured uplift.",
      "Led a team of five proposing a recommendation system prototype for retail personalization."
    ],
    "links": [
      {
        "label": "GitHub",
        "url": "https://github.com/CiciAa777/deloitte-case"
      }
    ]
  },
  {
    "title": "Netflix Business Model Investigation & Data Visualization",
    "dates": "Apr – Jun 2024",
    "description": "An interactive narrative of Netflix’s business-model evolution.",
    "featured": false,
    "category": "Visualization & Decisions",
    "status": "Project",
    "tags": [
      "Svelte",
      "D3.js",
      "Data storytelling"
    ],
    "metrics": [],
    "bullets": [
      "Curated key metrics to explain a decade of business-model shifts to a non-technical audience.",
      "Built a Svelte + D3.js website with a clickable timeline, hover tooltips, and year slider."
    ],
    "links": [
      {
        "label": "Live project",
        "url": "https://junyuelin.github.io/netflix_visualization/"
      }
    ]
  },
  {
    "title": "Credit Card Default Prediction",
    "dates": "Jan – Mar 2024",
    "description": "Feature engineering and classification on 30K+ client records.",
    "featured": false,
    "category": "Data & ML",
    "status": "Project",
    "tags": [
      "scikit-learn",
      "SMOTE",
      "Classification"
    ],
    "metrics": [],
    "bullets": [
      "Created six financial and persona features, improving F1 from 0.54 to 0.68.",
      "Applied SMOTE for class imbalance, improving F1 from 0.68 to 0.79.",
      "Compared logistic regression and Random Forest with GridSearchCV; Random Forest achieved weighted F1 of 0.79 and AUC of 0.83."
    ],
    "links": [
      {
        "label": "GitHub",
        "url": "https://github.com/CiciAa777/credit-card-client-default-prediction"
      }
    ]
  },
  {
    "title": "ReSnap: Screenshot Memory Engine",
    "dates": "Spring 2026 · Course project",
    "description": "Organizing screenshots with OCR, LLM processing, and a clustering interface.",
    "featured": false,
    "category": "AI & Agents",
    "status": "Project",
    "tags": [
      "OCR",
      "LLMs",
      "Clustering"
    ],
    "metrics": [],
    "bullets": [
      "Combines text extraction and LLM processing with a cluster-based interface for exploring captured information.",
      "Repository, demo, and individual contributions will be added after review."
    ],
    "links": []
  },
  {
    "title": "RAG & Context Engineering",
    "dates": "Spring 2026 · Course project",
    "description": "Retrieval backends and question-answering evaluation.",
    "featured": false,
    "category": "AI & Agents",
    "status": "Project",
    "tags": [
      "RAG",
      "Vector retrieval",
      "Evaluation"
    ],
    "metrics": [],
    "bullets": [
      "Explored FAISS, Pinecone, PGVector, and RapidFireAI metrics with a 14-question Q&A dataset.",
      "Final experiment setup, personal contributions, and results will be added after review."
    ],
    "links": []
  }
] satisfies Project[];
