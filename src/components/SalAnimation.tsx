import { useEffect } from "react";
import sal from "sal.js";
import "sal.js/dist/sal.css";

const SalAnimation = () => {
  useEffect(() => {
    sal();
  }, []);

  return null;
};

export default SalAnimation;