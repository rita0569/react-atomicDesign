import styled from "styled-components";

import { PrimaryButton } from "../atom/button/PrimaryButton";
import { Input } from "../atom/input/Input";

export const SearchInput = (props) => {
  const { onChange, onClick } = props;
  return (
    <div>
      <SContainer>
        <Input placeholder="検索条件を入力" onChange={onChange}></Input>
        <SButtonWrapper>
          <PrimaryButton onClick={onClick}>検索</PrimaryButton>
        </SButtonWrapper>
      </SContainer>
    </div>
  );
};
const SContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SButtonWrapper = styled.div`
  padding-left: 8px;
`;
