import { motion } from "motion/react";
import { RemoveScroll } from "react-remove-scroll";
import loaderImage from "../assets/loader.webp";
import { MAX_WIDTH } from "../constants";

export default function Loader() {
  return (
    <RemoveScroll>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 99999,
          backgroundColor: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `url(${loaderImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          maxWidth: MAX_WIDTH,
          margin: "0 auto",
        }}
      />
    </RemoveScroll>
  );
}
