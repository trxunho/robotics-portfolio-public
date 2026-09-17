// Replace with owner-supplied, verified information.
export const profile = { name: "", bio: "", email: "", resumeUrl: "" };
type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  question: string;
  concept: string;
  evidence: string[];
  demoUrl?: string;
  demoLabel?: string;
  demoCaption?: string;
  statusLabel?: string;
  modelNote?: string;
  materialsNote?: string;
};

export const projects: Project[] = [
  {
    slug: "a4-household-robot",
    title: "A4 家用机器人",
    category: "三维交互 / ROBOT DESIGN",
    summary: "从外观设定到内部构造，在浏览器中旋转、拆解并探索一台家用机器人。",
    question: "如何把机器人设定图转化为可以观察外观、探索内部系统的交互模型？",
    concept:
      "依据三张设定图，以 React 和 Three.js 构建三维工作台。模型包含 1,016 个网格部件，按外壳、视觉、计算、电池、双臂、伸缩腰、四轮腿和轮毂驱动分为八个系统。",
    evidence: [
      "实时三维旋转、缩放、部件选择与独立显示",
      "连续爆炸拆解、外壳透视与内部设备展示",
      "五种姿态、四种表情与双摄独立隐私遮罩",
      "原始三张设定图对照与模型图片导出",
    ],
    demoUrl: "/robot-studio/index.html",
  },
  {
    slug: "linker-hand-l20",
    title: "灵心巧手 L20",
    category: "三维交互 / ROBOT DESIGN",
    summary: "基于官方三维资产，拆解五指结构，观察关节运动与连杆耦合。",
    question: "如何用可追溯的官方几何与运动学数据，直观解释灵巧手的结构与关节联动？",
    concept: "将官方 L20 右手 URDF 与 STL 整理为 GLB，使用 React 和 Three.js 构建交互工作台。保留 22 个部件、16 个独立关节与 5 个联动关节的安装坐标、旋转轴和限位，分阶段展示总成与指节拆解。",
    evidence: [
      "22 个官方部件的搜索、点选、分色与隔离放大",
      "总成与关节两级爆炸动画、透明观察与剖切",
      "16 个独立关节调节与 5 个 mimic 关节自动随动",
      "五种运动学姿态、图片导出与可下载的资产清单",
    ],
    demoUrl: "/l20-studio/index.html",
    demoLabel: "L20 HAND STUDIO",
    demoCaption: "拖动旋转，滚轮缩放；选择部件探索结构，拖动底部滑杆拆解，或在“关节运动”中调节手指。",
    statusLabel: "可交互原型 · 官方资产",
    modelNote: "几何来自灵心巧手官方开源 L20 右手模型。材质与拆解布局经过展示处理；这是关节级结构演示，不代表制造级拆卸过程或经过实体硬件验证的运动。",
    materialsNote: "模型来源、固定版本与 Apache-2.0 许可可在演示的“技术档案”中查看。开源几何的硬件修订未注明，当前官网参数单独列示；未补造未公开的电机、PCB 或线束零件，预设姿态未做接触或碰撞校核。",
  },
  {
    slug: "adaptive-grasping",
    title: "自适应抓取",
    category: "灵巧操作 / MANIPULATION",
    summary: "面对不同形状与材质，探索稳定而轻柔的抓取。",
    question: "同一套抓取策略，如何适应不同物体的形状与材质？",
    concept:
      "从固定位置和少量典型物体开始，比较接触位置与控制策略对抓取结果的影响。",
    evidence: [
      "完整操作视频与设备说明",
      "相同条件下的重复测试记录",
      "滑落、变形等失败情况与改进对比",
    ],
  },
  {
    slug: "gesture-teleoperation",
    title: "手势遥操作",
    category: "人机交互 / INTERACTION",
    summary: "连接人的手部动作与机器人响应，探索直观的操作方式。",
    question: "如何将人的操作意图，转化为清晰、可控的机器人动作？",
    concept:
      "从张开、握合和捏取等离散手势开始，逐步验证识别、映射与执行的完整流程。",
    evidence: [
      "人手与机器人同步演示",
      "响应延迟与识别结果记录",
      "跟踪丢失时的处理方式",
    ],
  },
  {
    slug: "desktop-sorting",
    title: "桌面整理助手",
    category: "任务规划 / TASK PLANNING",
    summary: "从识别到归位，将日常任务拆成可执行的步骤。",
    question: "机器人如何把识别到的物品，可靠地送到目标区域？",
    concept:
      "在固定桌面与明确物品范围内，连接识别、抓取和放置，并记录整个任务的完成情况。",
    evidence: [
      "完整任务演示",
      "识别、抓取与整轮任务的分别统计",
      "异常处理与恢复流程",
    ],
  },
  {
    slug: "human-robot-handover",
    title: "人机递物协作",
    category: "人机协作 / COLLABORATION",
    summary: "围绕等待、确认与释放，设计清晰的交接过程。",
    question: "人与机器人如何在交接物体时，理解彼此的状态？",
    concept:
      "从轻质物体、固定交接位置与显式确认开始，在受控条件下验证等待、递送和释放流程。",
    evidence: [
      "交接状态与反馈说明",
      "失败与中止流程的测试",
      "个人设计与实现职责",
    ],
  },
  {
    slug: "robot-drawing",
    title: "机器人绘图",
    category: "运动控制 / MOTION CONTROL",
    summary: "让数字路径成为真实笔触，观察动作与精度的关系。",
    question: "数字轨迹变成真实笔迹时，偏差从哪里产生？",
    concept:
      "从直线、圆形和简单图案开始，比较速度、标定和结构对绘制一致性的影响。",
    evidence: [
      "绘制过程与最终结果",
      "目标图形与实物对比",
      "重复精度、断笔情况与时间记录",
    ],
  },
];
