const AnimatedBackground = () => {
  const points = Array.from({ length: 50 }, (_, i) => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    duration: `${Math.random() * 10 + 3}s`,
  }));

  return (
    <div className="fixed inset-0 -z-10 h-full w-full">
      <div className="absolute inset-0 h-full w-full bg-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] bg-[200%_200%] animate-move-points"></div>
      <div className="absolute inset-0 h-full w-full pointer-events-none">
        {points.map((point, index) => (
          <div
            key={index}
            style={{ top: point.top, left: point.left, animationDuration: point.duration }}
            className="absolute w-1 h-1 bg-white rounded-full animate-move-small-points"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedBackground;
