import { motion } from "framer-motion";

export default function Loader({ onComplete }) {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">

      {/* Waving Hand */}
      <motion.div
        animate={{ rotate: [0, 20, -10, 20, 0] }}
        transition={{ repeat: Infinity, duration: 1 }}
        className="text-6xl mb-6"
      >
        👋
      </motion.div>

      {/* Name */}
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white">
        Hepin Suthar
      </h1>

      {/* Role */}
      <p className="text-green-500 text-xl mt-3 font-semibold">
        Frontend Developer
      </p>

      {/* Progress Bar */}
      <div className="w-64 mt-10">
        <div className="w-full h-2 bg-gray-300 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 3 }}
            onAnimationComplete={() => {
              if (onComplete) onComplete();
            }}
            className="h-full bg-green-500"
          />
        </div>
      </div>

      <p className="mt-6 text-gray-400">
        Building amazing things
      </p>
    </div>
  );
}
