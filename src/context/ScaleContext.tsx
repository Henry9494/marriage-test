import { createContext, useContext, useEffect, useRef, useState } from "react";
import { MAX_WIDTH } from "../constants";

const ScaleContext = createContext(1);

export const useScale = () => useContext(ScaleContext);

export function ScaleProvider({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const width = containerRef.current?.offsetWidth ?? MAX_WIDTH;
    setScale(Math.min(width / MAX_WIDTH, 1));
  }, []);

  return (
    <ScaleContext.Provider value={scale}>
      <div ref={containerRef} id="app">
        {children}
      </div>
    </ScaleContext.Provider>
  );
}
