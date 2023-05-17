import styled from "styled-components";
import { GlassCard } from "../../atom/card/GlassCard";
import { UserIconWithName } from "../../molecules/user/UserIconWithName";
export const UserCard = (props) => {
  const { user } = props;
  return (
    <GlassCard>
      <UserIconWithName
        image={user.image}
        name={user.name}
        width={160}
        height={100}
        id={user.id}
      />
      <SDl>
        <dt>メール</dt>
        <dd>{user.email}</dd>
        <dt>TEL</dt>
        <dd>{user.phone}</dd>
        <dt>会社名</dt>
        <dd>{user.company.name}</dd>
        <dt>WEB</dt>
        <dd>{user.website}</dd>
      </SDl>
    </GlassCard>
  );
};

const SDl = styled.dl`
  text-align: left;
  margin-bottom: 0px;
  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    padding-bottom: 8px;
    overflow-wrap: break-word;
  }
`;
