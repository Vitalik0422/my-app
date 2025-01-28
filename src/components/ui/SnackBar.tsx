import { useState, FC } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

interface SnackBarProps {
  message: string;
  duration?: number;
  type?: "success" | "error" | "info" | "warning";
}

const SnackBar: FC<SnackBarProps> = ({ message, duration = 3000, type = "info" }) => {
  const [isVisible, setIsVisible] = useState(true);

  const closeSnackBar = () => {
    setIsVisible(false);
  };

  setTimeout(() => {
    setIsVisible(false);
  }, duration);

  if (!isVisible) return null;

  const typeStyles: Record<string, string> = {
    success: "bg-green-500",
    error: "bg-red-500",
    info: "bg-blue-500",
    warning: "bg-yellow-500",
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      className={`fixed top-4 right-4 px-6 py-3 rounded-2xl shadow-lg text-white text-sm flex items-center gap-3 ${typeStyles[type]}`}>
      <span>{message}</span>
      <button onClick={closeSnackBar} className="ml-auto">
        <X className="w-4 h-4" />
      </button>
    </motion.div>
  );
};

export default SnackBar;