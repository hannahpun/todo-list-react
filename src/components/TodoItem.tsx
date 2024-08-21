import styled from "@emotion/styled";
import { CheckInput } from "./Atoms/Input";

export const Wrapper = styled.li({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  borderRadius: 4,
  marginBottom: 8,
  padding: 16,
  fontWeight: "400",
  cursor: "pointer",
  backgroundColor: "#eeeeee",
});

const Label = styled.div({
  fontSize: 20,
  margin: 0,
});

const Checkbox = styled.input({
  width: 16,
  height: 16,
  marginRight: 12,
});

const Group = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

interface TodoItemProps extends Todo {
  toggleComplete: (checked: boolean, index: number) => void;
  deleteToDo: (index: number) => void;
  editToDo: (description: string, index: number) => void;
  index: number;
}

export const TodoItem = ({
  description,
  checked = false,
  index,
  toggleComplete,
  editToDo,
  deleteToDo,
}: TodoItemProps) => {
  return (
    <Wrapper data-testid="list">
      <Group>
        <Checkbox
          type="checkbox"
          checked={checked}
          onChange={(e) => toggleComplete(e.target.checked, index)}
        />
        <Label>
          <CheckInput
            type="text"
            checked={checked}
            value={description}
            onChange={(e) => editToDo(e.target.value, index)}
          />
        </Label>
      </Group>
      <button data-testid="delete" onClick={() => deleteToDo(index)}>x</button>
    </Wrapper>
  );
};
