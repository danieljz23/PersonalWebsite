export const experiences = [
  {
    id: "leechy",
    role: "Lead Android Engineer",
    organization: "Leechy",
    organizationUrl: "https://www.leechy.app/",
    period: "Jul 2025-Present",
    description:
      "Leading Android engineering for Leechy's production marketplace, owning the Kotlin/Jetpack Compose app from architecture through Google Play releases.",
    highlights: [
      "Architected and built a roughly 135K-line Android application with layered MVVM, coroutine-driven async flows, and Supabase-backed data access.",
      "Engineered rental and service workflows across bookings, payments, delivery, handoff verification, condition tracking, messaging, and availability.",
      "Built geospatial discovery with Mapbox, dynamic clustering, and Google Places, plus Stripe Payment Sheet, Connect, and Identity integrations.",
      "Co-developed backend APIs shared across Android, iOS, and web while owning Android release and deployment work.",
    ],
    tags: ["Kotlin", "Jetpack Compose", "Supabase", "Stripe", "Mapbox"],
  },
  {
    id: "trustworthy-ai-lab",
    role: "Undergraduate Researcher",
    organization: "Trustworthy AI Lab at UCLA",
    organizationUrl: "http://www.stat.ucla.edu/~guangcheng/",
    period: "Jun 2026-Present",
    description:
      "Building AI competition and observability infrastructure for evaluating agents across heterogeneous games and multi-turn reasoning workflows.",
    highlights: [
      "Architected an MCP-based competition platform with pluggable runtime adapters and a unified agent API for matchmaking, game state, legal actions, gameplay, and results.",
      "Integrated Pokemon Showdown with FastAPI, poke-env, Docker, and WebSockets as the platform's first non-OpenSpiel runtime while preserving the agent-facing MCP interface.",
      "Designed a deterministic 12-pick drafting engine backed by a versioned 72-Pokemon catalog for reproducible evaluation.",
      "Hardened the Pokemon runtime with about 290 automated tests covering lifecycles, draft state, stale-action protection, failure handling, and backend result reporting.",
      "Built observability for a LangGraph table-reasoning agent with structured failures, Supabase, an admin incident dashboard, correlation IDs, error classification, and LangSmith trace links.",
      "Re-architected multi-turn LangGraph state management to reconstruct state from durable messages and table metadata without persistent checkpoints or redundant execution history.",
    ],
    tags: ["Python", "FastAPI", "Docker", "LangGraph", "LangSmith"],
  },
  {
    id: "rocket",
    role: "Controls Lead / EGSE Lead",
    organization: "Rocket Project at UCLA",
    period: "Sep 2023-Jun 2026",
    description:
      "Led controls and ground-support software for liquid rocket propulsion testing, spanning embedded systems, simulations, telemetry, and hotfire validation.",
    highlights: [
      "Led development and hotfire validation of Rocket Project's first successful closed-loop liquid rocket engine throttling system.",
      "Integrated embedded C++ PID control, custom actuated valves, pressure feedback, and fault detection/recovery.",
      "Designed and validated valve hardware, then tuned controllers through simulation, HIL, waterflow, and coldflow testing to achieve sub-0.7 s setpoint settling.",
      "Developed Python/MATLAB propulsion simulations for feed-system flow, chamber pressure, mass flow, thrust, and valve dynamics.",
      "Designed embedded ground-control and DAQ systems using ESP32/Arduino, custom PCBs, ADS8688 ADCs, and 16-channel pressure acquisition.",
      "Developed Rocket Project's first MQTT-based wireless control and telemetry system for remote engine operations.",
    ],
    tags: ["C++", "Python", "MATLAB", "ESP32", "MQTT"],
  },
  {
    id: "creative-labs",
    role: "Mobile Developer Lead",
    organization: "Creative Labs at UCLA",
    period: "Sep 2024-Jun 2025",
    description:
      "Led mobile development for a gamified coding education app, coordinating implementation across product design, frontend features, and backend integration.",
    highlights: [
      "Led a 3-developer team building a React Native app for coding problems, rankings, progression, and in-app currency.",
      "Translated Figma designs into interactive mobile features and polished app flows.",
      "Owned frontend features from design handoff through backend integration while collaborating with designers and engineers to integrate REST APIs and debug cross-stack issues.",
    ],
    tags: ["React Native", "JavaScript", "REST APIs", "Figma"],
  },
];
