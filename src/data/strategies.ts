import { BarChart2, LineChart, DollarSign, Trophy } from "lucide-react"

export const strategies = [
  {
    title: "ICT / SMC",
    description:
      "Trade alongside institutional players by understanding smart money concepts, order flow and market structure",
    icon: BarChart2,
    colors: "from-blue-500 to-cyan-400",
    shadowColor: "shadow-blue-500/20",
    difficulty: "Advanced",
    timeframe: "All Timeframes",
    features: ["Order Blocks", "Liquidity", "Market Structure", "Fair Value Gaps"],
  },
  {
    title: "Price Action",
    description: "Master candlestick patterns, support/resistance levels, and chart formations without indicators",
    icon: LineChart,
    colors: "from-emerald-500 to-green-400",
    shadowColor: "shadow-emerald-500/20",
    difficulty: "Intermediate",
    timeframe: "All Timeframes",
    features: ["Candlestick Patterns", "Chart Patterns", "Support/Resistance", "Trend Analysis"],
  },
  {
    title: "Intra Day",
    description: "Capitalize on short-term price movements within a single trading session for quick profits",
    icon: DollarSign,
    colors: "from-amber-500 to-orange-400",
    shadowColor: "shadow-amber-500/20",
    difficulty: "Intermediate",
    timeframe: "Minutes to Hours",
    features: ["Scalping", "Breakouts", "Momentum Trading", "News Trading"],
  },
  {
    title: "Swing Trading",
    description: "Capture medium-term market movements by holding positions for several days to weeks",
    icon: Trophy,
    colors: "from-violet-500 to-purple-400",
    shadowColor: "shadow-violet-500/20",
    difficulty: "Beginner-Friendly",
    timeframe: "Days to Weeks",
    features: ["Trend Following", "Higher Timeframes", "Fundamental Analysis", "Lower Screen Time"],
  },
]

