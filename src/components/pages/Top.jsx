import styled from "styled-components";
import { PrimaryButton } from "../atom/button/PrimaryButton";
import { SecondaryButton } from "../atom/button/SecondaryButton";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { userState } from "../../store/userState";
export const Top = () => {
  const navigate = useNavigate();
  const setUserInfo = useSetRecoilState(userState);
  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    navigate("/users");
  };
  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    navigate("/users");
  };
  return (
    <SContainer>
      <h2>TOPページです。</h2>
      <PrimaryButton onClick={onClickAdmin}>管理者</PrimaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
