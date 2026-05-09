export type TrendDomain = "Semiconductors" | "Robotics" | "Automation";

export type TrendSignalType =
  | "Chip Release"
  | "Supply Chain"
  | "Company Move"
  | "Emerging Tech"
  | "Standards";

export type TrendMomentum = "Accelerating" | "Emerging" | "Watching";

export interface IndustryTrendSignal {
  id: string;
  title: string;
  summary: string;
  domain: TrendDomain;
  signalType: TrendSignalType;
  momentum: TrendMomentum;
  horizon: "Now" | "Next 12 months" | "2-5 years";
  impact: string;
  tags: string[];
  sourceName: string;
  sourceUrl?: string;
  publishedAt?: string;
}

export interface TrendForecast {
  id: string;
  title: string;
  direction: "Gaining traction" | "Stable demand" | "Losing momentum";
  domain: TrendDomain | "Cross-industry";
  timeframe: "0-12 months" | "1-3 years" | "2-5 years";
  confidence: number;
  summary: string;
  whyItMatters: string;
  signals: string[];
  skills: string[];
  watchouts: string[];
}

export interface SkillForecast {
  skill: string;
  demand: "Critical" | "High" | "Rising";
  timeframe: "Now" | "1-3 years" | "2-5 years";
  domains: TrendDomain[];
  reason: string;
}

export interface DecliningTechnology {
  name: string;
  pressure: "High" | "Medium";
  replacement: string;
  note: string;
}

export const TREND_SOURCE_QUERIES: {
  domain: TrendDomain;
  query: string;
  keywords: string[];
}[] = [
  {
    domain: "Semiconductors",
    query:
      "semiconductor chip release OR RISC-V OR AI accelerator OR chiplet OR HBM OR UCIe",
    keywords: ["semiconductor", "chip", "RISC-V", "AI accelerator", "chiplet", "HBM", "UCIe"],
  },
  {
    domain: "Robotics",
    query:
      "robotics automation ROS 2 humanoid robot mobile robot sensor fusion edge AI",
    keywords: ["robotics", "ROS 2", "humanoid", "mobile robot", "sensor fusion", "edge AI"],
  },
  {
    domain: "Automation",
    query:
      "industrial automation PLC OPC UA TSN robot factory supply chain semiconductor",
    keywords: ["industrial automation", "PLC", "OPC UA", "TSN", "factory", "supply chain"],
  },
];

export const CURATED_TREND_SIGNALS: IndustryTrendSignal[] = [
  {
    id: "riscv-custom-edge",
    title: "RISC-V moves from evaluation boards into custom edge controllers",
    summary:
      "Open ISA designs are becoming more practical for teams that need custom instructions, tighter cost control, or domain-specific acceleration at the edge.",
    domain: "Semiconductors",
    signalType: "Emerging Tech",
    momentum: "Accelerating",
    horizon: "2-5 years",
    impact:
      "Embedded engineers will need stronger comfort with toolchains, board support packages, and architecture-specific debugging beyond ARM-only workflows.",
    tags: ["RISC-V", "custom silicon", "embedded Linux", "toolchains"],
    sourceName: "Curated baseline",
  },
  {
    id: "sensor-near-ai",
    title: "AI accelerators move closer to sensors and control loops",
    summary:
      "Inference is shifting from cloud-only pipelines toward MCUs, NPUs, smart cameras, and industrial gateways where latency, privacy, and bandwidth matter.",
    domain: "Semiconductors",
    signalType: "Chip Release",
    momentum: "Accelerating",
    horizon: "Now",
    impact:
      "Projects increasingly need quantization, memory planning, accelerator SDKs, and real-time integration skills.",
    tags: ["edge AI", "NPU", "TinyML", "sensor fusion"],
    sourceName: "Curated baseline",
  },
  {
    id: "chiplet-packaging",
    title: "Chiplets and advanced packaging change system architecture decisions",
    summary:
      "Heterogeneous packages let companies combine compute, I/O, memory, RF, and accelerators without putting every block on one monolithic die.",
    domain: "Semiconductors",
    signalType: "Emerging Tech",
    momentum: "Watching",
    horizon: "2-5 years",
    impact:
      "Architecture discussions are moving toward interconnects, memory bandwidth, thermal limits, and hardware/software partitioning.",
    tags: ["chiplets", "UCIe", "advanced packaging", "HBM"],
    sourceName: "Curated baseline",
  },
  {
    id: "mcu-dual-source",
    title: "Supply chain designs favor second-source MCUs and software portability",
    summary:
      "Teams are treating availability risk as an architecture constraint, not just a procurement issue, especially for long-life industrial products.",
    domain: "Semiconductors",
    signalType: "Supply Chain",
    momentum: "Watching",
    horizon: "Next 12 months",
    impact:
      "HAL boundaries, portable drivers, RTOS abstraction, and BOM-aware design reviews become more valuable.",
    tags: ["supply chain", "MCU", "BOM risk", "portability"],
    sourceName: "Curated baseline",
  },
  {
    id: "ros2-safety",
    title: "Robotics stacks converge around ROS 2 plus safety-rated control layers",
    summary:
      "ROS 2 is becoming the common integration layer, while commercial deployments still require deterministic control, safety PLCs, and certified stops.",
    domain: "Robotics",
    signalType: "Standards",
    momentum: "Accelerating",
    horizon: "Now",
    impact:
      "Robotics roles increasingly ask for middleware knowledge alongside controls, real-time Linux, and safety systems.",
    tags: ["ROS 2", "real-time Linux", "functional safety", "motion control"],
    sourceName: "Curated baseline",
  },
  {
    id: "robotics-embodied-ai",
    title: "Embodied AI raises demand for perception, controls, and hardware co-design",
    summary:
      "Humanoid, mobile manipulation, and warehouse automation pilots are pushing teams to connect foundation-model planning with dependable embedded control.",
    domain: "Robotics",
    signalType: "Company Move",
    momentum: "Emerging",
    horizon: "2-5 years",
    impact:
      "The strongest candidates can bridge ML inference, sensors, motor control, and failure-mode thinking.",
    tags: ["humanoids", "mobile robots", "perception", "controls"],
    sourceName: "Curated baseline",
  },
  {
    id: "opcua-tsn",
    title: "Automation networks standardize around secure, interoperable data models",
    summary:
      "OPC UA, TSN, MQTT, and modern industrial Ethernet are reducing vendor islands and making plant data easier to move into analytics systems.",
    domain: "Automation",
    signalType: "Standards",
    momentum: "Accelerating",
    horizon: "Next 12 months",
    impact:
      "Industrial engineers need stronger networking, cybersecurity, and time-sensitive systems fundamentals.",
    tags: ["OPC UA", "TSN", "MQTT", "industrial Ethernet"],
    sourceName: "Curated baseline",
  },
  {
    id: "ot-security-gate",
    title: "Cybersecurity becomes a buying requirement for connected automation",
    summary:
      "Connected machines, remote service, and digital twins are making secure boot, signed updates, identity, and segmentation core product features.",
    domain: "Automation",
    signalType: "Supply Chain",
    momentum: "Accelerating",
    horizon: "Now",
    impact:
      "IEC 62443 literacy, threat modeling, secure firmware update flows, and incident-ready telemetry matter more in interviews and design reviews.",
    tags: ["IEC 62443", "secure boot", "OTA", "OT security"],
    sourceName: "Curated baseline",
  },
];

export const TREND_FORECASTS: TrendForecast[] = [
  {
    id: "heterogeneous-edge",
    title: "Heterogeneous edge compute becomes the default embedded architecture",
    direction: "Gaining traction",
    domain: "Cross-industry",
    timeframe: "1-3 years",
    confidence: 88,
    summary:
      "More products will combine CPUs, MCUs, DSPs, NPUs, GPUs, and programmable logic instead of relying on one general-purpose processor.",
    whyItMatters:
      "The bottleneck is shifting from raw code correctness to partitioning workloads across memory, power, latency, and safety constraints.",
    signals: ["Edge AI roadmaps", "AI MCU launches", "robotics perception pipelines", "industrial gateways"],
    skills: ["accelerator SDKs", "DMA and memory hierarchy", "RTOS plus Linux partitioning", "profiling"],
    watchouts: ["vendor lock-in", "debug complexity", "thermal margins"],
  },
  {
    id: "riscv-open-isa",
    title: "RISC-V grows where customization and cost control matter",
    direction: "Gaining traction",
    domain: "Semiconductors",
    timeframe: "2-5 years",
    confidence: 78,
    summary:
      "RISC-V is most likely to gain durable share in embedded controllers, security islands, AI support cores, and highly customized SoCs.",
    whyItMatters:
      "Even teams that do not design silicon will touch new compiler targets, boot flows, debug probes, and vendor SDKs.",
    signals: ["custom SoCs", "open ISA ecosystems", "university-to-industry talent flow"],
    skills: ["GCC/LLVM toolchains", "assembly reading", "board bring-up", "architecture tradeoff analysis"],
    watchouts: ["fragmented extensions", "maturing software ecosystem", "certification timelines"],
  },
  {
    id: "robotics-safety-ai",
    title: "Robotics roles split between AI autonomy and certifiable control",
    direction: "Gaining traction",
    domain: "Robotics",
    timeframe: "1-3 years",
    confidence: 84,
    summary:
      "Companies will keep adding AI planning and perception, but shipped systems will still be judged by safe stops, determinism, and recoverability.",
    whyItMatters:
      "The career edge is not only knowing ML or controls. It is knowing how to connect them without losing safety guarantees.",
    signals: ["ROS 2 adoption", "warehouse autonomy", "humanoid pilots", "safety-rated robot cells"],
    skills: ["ROS 2", "control theory", "sensor fusion", "functional safety", "real-time Linux"],
    watchouts: ["demo-to-production gap", "edge-case validation", "model drift"],
  },
  {
    id: "ot-it-convergence",
    title: "Industrial automation shifts from isolated PLC cells to secure data platforms",
    direction: "Gaining traction",
    domain: "Automation",
    timeframe: "0-12 months",
    confidence: 86,
    summary:
      "Factories are connecting PLCs, drives, historians, MES, cloud analytics, and digital twins through standardized secure interfaces.",
    whyItMatters:
      "Automation engineers increasingly need to reason about networks, identity, data contracts, and uptime at the same time.",
    signals: ["OPC UA", "MQTT Sparkplug", "IEC 62443", "predictive maintenance"],
    skills: ["industrial networking", "secure update design", "SCADA/HMI", "time-series data", "threat modeling"],
    watchouts: ["legacy equipment", "availability requirements", "vendor-specific tooling"],
  },
  {
    id: "bare-metal-only",
    title: "Bare-metal-only product stacks lose ground in connected systems",
    direction: "Losing momentum",
    domain: "Cross-industry",
    timeframe: "2-5 years",
    confidence: 72,
    summary:
      "Bare metal remains important for tiny, safety-critical, and cost-sensitive designs, but connected products need richer scheduling, security, and update flows.",
    whyItMatters:
      "Interviewers will still test low-level fundamentals, but they will expect you to know when an RTOS, MPU, or Linux split is the better architecture.",
    signals: ["OTA requirements", "secure boot", "multi-protocol products", "field telemetry"],
    skills: ["RTOS design", "bootloaders", "fault isolation", "observability"],
    watchouts: ["overengineering small products", "certification constraints", "RAM footprint"],
  },
];

export const SKILLS_FORECAST: SkillForecast[] = [
  {
    skill: "Edge AI deployment",
    demand: "Critical",
    timeframe: "Now",
    domains: ["Semiconductors", "Robotics", "Automation"],
    reason:
      "Quantization, accelerator runtimes, and memory-aware inference are becoming standard in sensors, robots, cameras, and gateways.",
  },
  {
    skill: "Secure firmware lifecycle",
    demand: "Critical",
    timeframe: "Now",
    domains: ["Semiconductors", "Automation"],
    reason:
      "Secure boot, signed OTA, device identity, SBOMs, and vulnerability response are moving into baseline product requirements.",
  },
  {
    skill: "Real-time Linux and ROS 2",
    demand: "High",
    timeframe: "1-3 years",
    domains: ["Robotics", "Automation"],
    reason:
      "Robots and advanced machines need Linux ecosystems with deterministic behavior, hardware timing, and safety-aware supervision.",
  },
  {
    skill: "Industrial networking",
    demand: "High",
    timeframe: "Now",
    domains: ["Automation", "Robotics"],
    reason:
      "OPC UA, TSN, EtherCAT, PROFINET, CAN FD, and MQTT are central to modern machine integration.",
  },
  {
    skill: "Architecture-aware debugging",
    demand: "Rising",
    timeframe: "2-5 years",
    domains: ["Semiconductors", "Robotics"],
    reason:
      "Heterogeneous systems make issues appear across caches, DMA, interconnects, accelerators, and mixed-criticality boundaries.",
  },
  {
    skill: "Supply-chain-aware design",
    demand: "Rising",
    timeframe: "1-3 years",
    domains: ["Semiconductors", "Automation"],
    reason:
      "Long-life products increasingly need portable HALs, alternate parts, and BOM risk reviews built into engineering decisions.",
  },
];

export const DECLINING_TECHNOLOGIES: DecliningTechnology[] = [
  {
    name: "Closed fieldbus-only automation islands",
    pressure: "High",
    replacement: "OPC UA, MQTT Sparkplug, TSN, and secure industrial Ethernet",
    note:
      "Legacy buses will remain in plants, but new systems are expected to expose richer, secure, interoperable data.",
  },
  {
    name: "Cloud-only inference for latency-critical machines",
    pressure: "High",
    replacement: "Edge AI on MCUs, NPUs, GPUs, and industrial gateways",
    note:
      "Cloud training and analytics stay important, but control-adjacent decisions are moving closer to the machine.",
  },
  {
    name: "Firmware without signed updates or device identity",
    pressure: "High",
    replacement: "Secure boot, signed OTA, hardware roots of trust, and fleet identity",
    note:
      "Connected products increasingly need a defensible lifecycle after shipment.",
  },
  {
    name: "Single-vendor MCU assumptions in long-life products",
    pressure: "Medium",
    replacement: "Portable driver layers, second-source planning, and abstraction around RTOS/HAL choices",
    note:
      "The lesson from supply disruption is that availability needs to be designed into the product, not patched later.",
  },
];
