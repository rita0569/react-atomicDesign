import styled from "styled-components";

export const GlassCard = (props) => {
  const { children } = props;
  return <SCard>{children}</SCard>;
};

const SCard = styled.div`
  position: relative;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 20px 20px 40px rgba(0, 0, 0, 0.5);
  /*filter: drop-shadow(20px 10px 40px rgba(0, 0, 0, 0.5));*/
  border-radius: 8px;
  padding: 16px;
  backdrop-filter: blur(30px);
  &:hover {
    scale: 1.1;
  }
`;
