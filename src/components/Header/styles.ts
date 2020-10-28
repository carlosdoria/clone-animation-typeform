import styled from 'styled-components';
import { motion } from 'framer-motion'

export const Container = styled(motion.header)`
  position: fixed;
  top: 0;
  z-index: 99999;

  height: 150px;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(0, 0, 0, 0.2);
`;
