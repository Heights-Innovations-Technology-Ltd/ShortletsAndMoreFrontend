import styled from "styled-components";
import { motion } from "framer-motion";

export const ButtonContainer = styled(motion.div)`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;
export const IconContainer = styled.div`
  margin-left: 32px;
`;
