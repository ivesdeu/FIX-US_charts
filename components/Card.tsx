"use client";

import { motion } from "framer-motion";

export default function Card({
  children,
  className = "",
  noBorder = false,
  noPadding = false,
}: {
  children: React.ReactNode;
  className?: string;
  noBorder?: boolean;
  noPadding?: boolean;
}) {
  return (
    <motion.div
      whileHover={{ y: -2, scale: 1.005 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className={`
        ${noBorder ? "" : "border border-border"}
        bg-white rounded-2xl
        ${noPadding ? "" : "p-4"}
        h-full min-h-0 max-h-full overflow-hidden
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
