import useScrollProgress from "../hooks/useScrollProgress";

function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="fixed left-0 top-0 z-[70] h-1 w-full bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-brand-400 via-cyan-300 to-orange-400 transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

export default ScrollProgress;
