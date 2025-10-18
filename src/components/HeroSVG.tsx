import { motion } from 'framer-motion';

export default function HeroSVG() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <motion.svg
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        width="500"
        height="400"
        viewBox="0 0 500 400"
        className="w-full h-auto max-w-lg"
      >
        {/* Background gradient */}
        <defs>
          <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="50%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
          <linearGradient id="codeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
        </defs>

        {/* Main background circle */}
        <motion.circle
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          cx="250"
          cy="200"
          r="180"
          fill="url(#bgGradient)"
          opacity="0.1"
        />

        {/* Floating code blocks */}
        {[
          { x: 100, y: 80, delay: 0.3, text: "AI" },
          { x: 350, y: 120, delay: 0.4, text: "ML" },
          { x: 80, y: 280, delay: 0.5, text: "React" },
          { x: 380, y: 300, delay: 0.6, text: "Next.js" },
          { x: 200, y: 50, delay: 0.7, text: "Python" },
          { x: 300, y: 350, delay: 0.8, text: "MongoDB" }
        ].map((block, index) => (
          <motion.g
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: block.delay }}
          >
            <rect
              x={block.x - 25}
              y={block.y - 15}
              width="50"
              height="30"
              rx="8"
              fill="url(#codeGradient)"
              opacity="0.8"
            />
            <text
              x={block.x}
              y={block.y + 5}
              textAnchor="middle"
              fill="white"
              fontSize="12"
              fontWeight="600"
            >
              {block.text}
            </text>
          </motion.g>
        ))}

        {/* Central AI brain/network */}
        <motion.g
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {/* Main brain circle */}
          <circle
            cx="250"
            cy="200"
            r="60"
            fill="url(#bgGradient)"
            stroke="white"
            strokeWidth="3"
          />
          
          {/* Neural network connections */}
          {[
            { x1: 250, y1: 200, x2: 100, y2: 80 },
            { x1: 250, y1: 200, x2: 350, y2: 120 },
            { x1: 250, y1: 200, x2: 80, y2: 280 },
            { x1: 250, y1: 200, x2: 380, y2: 300 },
            { x1: 250, y1: 200, x2: 200, y2: 50 },
            { x1: 250, y1: 200, x2: 300, y2: 350 }
          ].map((line, index) => (
            <motion.line
              key={index}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 1 + index * 0.1 }}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke="url(#codeGradient)"
              strokeWidth="2"
              opacity="0.6"
            />
          ))}

          {/* AI text in center */}
          <text
            x="250"
            y="210"
            textAnchor="middle"
            fill="white"
            fontSize="24"
            fontWeight="bold"
          >
            AI
          </text>
        </motion.g>

        {/* Floating particles */}
        {[...Array(20)].map((_, index) => (
          <motion.circle
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: Math.random() * 500,
              y: Math.random() * 400
            }}
            transition={{ 
              duration: 3,
              delay: Math.random() * 2,
              repeat: Infinity,
              repeatDelay: Math.random() * 3
            }}
            r="2"
            fill="#3B82F6"
            opacity="0.6"
          />
        ))}

        {/* Rocket ship */}
        <motion.g
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <motion.path
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            d="M 50 350 L 60 320 L 80 320 L 70 350 Z"
            fill="#F59E0B"
          />
          <motion.path
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            d="M 50 350 L 40 360 L 50 365 L 60 360 Z"
            fill="#EF4444"
          />
          <text
            x="55"
            y="345"
            textAnchor="middle"
            fill="white"
            fontSize="8"
            fontWeight="bold"
          >
            🚀
          </text>
        </motion.g>

        {/* Success checkmark */}
        <motion.g
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <circle
            cx="400"
            cy="80"
            r="25"
            fill="#10B981"
            stroke="white"
            strokeWidth="2"
          />
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 2.2 }}
            d="M 390 80 L 395 85 L 410 70"
            stroke="white"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.g>
      </motion.svg>
    </div>
  );
}
