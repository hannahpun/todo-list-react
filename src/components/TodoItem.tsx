import styled from "@emotion/styled";

export const Wrapper = styled.label({
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

const Button = styled.button({});

const Input = styled.input<{ checked: boolean }>(({ checked }) => ({
  width: 315,
  textDecoration: checked ? "line-through" : "none",
  border: "none",
  padding: 10,
  fontSize: 18,
  flex: 1,
  backgroundColor: "#eeeeee",
  borderRadius: 3,
}));

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
    <Wrapper>
      <Group>
        <Checkbox
          type="checkbox"
          checked={checked}
          onChange={(e) => toggleComplete(e.target.checked, index)}
        />
        <Label>
          <Input
            type="text"
            checked={checked}
            value={description}
            onChange={(e) => editToDo(e.target.value, index)}
          />
        </Label>
      </Group>
      <Button onClick={() => deleteToDo(index)}>x</Button>
    </Wrapper>
  );
};
