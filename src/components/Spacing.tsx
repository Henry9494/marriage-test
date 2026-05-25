import { useScale } from "../context/ScaleContext";
import { valueWithRatio } from "../utils";

export const Spacing = ({ height }: { height: number }) => {
  const scale = useScale();
  return <div style={{ height: valueWithRatio(height, scale) }} />;
};
