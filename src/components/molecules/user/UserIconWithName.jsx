import { useState } from "react";
import { useRecoilValue } from "recoil";
import { userState } from "../../../store/userState";
import styled from "styled-components";
import { Input } from "../../atom/input/Input";
import { updateUser, getUser } from "../../pages/Users";
export const UserIconWithName = (props) => {
  const { image, name, width, height, id } = props;
  const userInfo = useRecoilValue(userState);
  const isAdmin = userInfo ? userInfo.isAdmin : false;
  const [isEdit, setIsEdit] = useState(false);
  const [editName, setEditName] = useState("");
  const [dispName, setDispName] = useState(name);

  const onClickEdit = () => {
    setIsEdit(!isEdit);
  };
  const onKeyDown = (e) => {
    if (e.nativeEvent.isComposing || e.key !== "Enter") return;
    //userの名前を書き換えて更新。
    if (editName.length > 0) {
      const user = getUser(id);
      user.name = editName;
      updateUser(id, user);
      setDispName(editName);
    }
    setIsEdit(!isEdit);
  };
  const onChangeInput = (e) => {
    setEditName(e.target.value);
  };
  const onBlur = () => {
    setEditName("");
    setIsEdit(!isEdit);
  };
  return (
    <SContainer>
      <SImg src={image} width={width} height={height} alt="プロフィール" />
      {isEdit ? (
        <SContainerRow>
          <Input
            placeholder="名前を入力してください。"
            onKeyDown={onKeyDown}
            onChange={onChangeInput}
            onBlur={onBlur}
            autoFocus={true}
          />
        </SContainerRow>
      ) : (
        <>
          <SName>{dispName}</SName>
          {isAdmin && <SEdit onClick={onClickEdit}>編集</SEdit>}
        </>
      )}
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;

const SContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const SImg = styled.img`
  border-radius: 50%;
`;

const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;

const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
  margin-left: 10px;
`;
