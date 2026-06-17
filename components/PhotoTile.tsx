"use client";

import { motion } from "framer-motion";

export default function PhotoTile({
  className = "",
}: {
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -2, scale: 1.005 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className={`rounded-2xl overflow-hidden bg-[#F2F2F2] w-full h-full ${className}`}
    />
  );
}
