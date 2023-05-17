import styled from "styled-components";

export const Input = (props) => {
  const { placeholder, onKeyDown, onChange, autoFocus = false, onBlur } = props;
  return (
    <SInput
      type="text"
      placeholder={placeholder}
      onKeyDown={onKeyDown}
      onChange={onChange}
      onBlur={onBlur}
      autoFocus={autoFocus}
    ></SInput>
  );
};
const SInput = styled.input`
  padding: 8px 16px;
  border: solid #ddd 1px;
  border-radius: 9999px;
  outline: none;
`;
