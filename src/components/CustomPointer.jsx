import { useEffect, useRef } from "react";

const CustomPointer = () => {
  const pointerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const pointer = pointerRef.current;
      pointer.style.left = `${e.clientX}px`;
      pointer.style.top = `${e.clientY}px`;
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div ref={pointerRef} className="custom-pointer"></div>;
};

export default CustomPointer;
