import { useViewportScroll, useTransform } from 'framer-motion';
import { Container } from './styles';

const Header = () => {

  const { scrollYProgress } = useViewportScroll()

  const headerY = useTransform(
    scrollYProgress,
    [0.188, 0.198],
    ['0%', '-100%']
  )

  return (
    <Container
      style={{
        y: headerY
      }}
    >
      <h1>Header</h1>
    </Container>
  );
};

export default Header;
