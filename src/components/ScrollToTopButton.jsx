import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 rounded-full border border-white/10 bg-white/10 p-4 text-white shadow-glow backdrop-blur-xl transition hover:-translate-y-1 hover:bg-brand-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileTap={{ scale: 0.96 }}
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}

export default ScrollToTopButton;
