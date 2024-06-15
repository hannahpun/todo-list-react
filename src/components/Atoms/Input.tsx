import styled from "@emotion/styled";

export const Input = styled.input({
  width: "100%",
  border: "none",
  padding: 16,
  outline: "none",
  borderRadius: 3,
  marginBottom: 8,
  fontSize: 18,
});

export const CheckInput = styled.input<{ checked: boolean }>(({ checked }) => ({
  width: 315,
  textDecoration: checked ? "line-through" : "none",
  border: "none",
  padding: 10,
  fontSize: 18,
  flex: 1,
  backgroundColor: "#eeeeee",
  borderRadius: 3,
}));
