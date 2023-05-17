import { useEffect, useState } from "react";
import styled from "styled-components";
import { Input } from "../atom/input/Input";

import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `aiueo-${val}`,
    image:
      "https://www.pakutaso.com/shared/img/thumb/20220227-A7401442_TP_V.jpg",
    email: "aaa@ggg.com",
    phone: "090-1234-5678",
    company: {
      name: "アイウエオ（株）"
    },
    website: "https://google.com"
  };
});

export const updateUser = (id, user) => {
  users[id] = user;
  return true;
};
export const getUser = (id) => {
  return users[id];
};

export const Users = () => {
  const [searchName, setSearchName] = useState("");
  const [filterArr, setFilterArr] = useState(users);
  const onChange = (e) => {
    setSearchName(e.target.value);
  };
  useEffect(() => {
    // if(string.includes(pattern)){
    //   // 部分一致のときの処理
    // }
    if (searchName.length > 0) {
      const filter = users.filter((user) => {
        return user.name.includes(searchName);
      });
      setFilterArr(filter);
    } else setFilterArr(users);
  }, [searchName]);
  return (
    <SContainerColmun>
      <h2>User一覧です。</h2>
      <SContainerRow>
        <h3>検索：</h3>
        <Input placeholder="ユーザー名を入力" onChange={onChange} />
      </SContainerRow>
      <SUserArea>
        {filterArr.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainerColmun>
  );
};

const SContainerColmun = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 40px;
`;
