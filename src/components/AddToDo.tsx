import { useState } from "react";
import styled from "@emotion/styled";
import { Input } from "./Atoms/Input";

const Form = styled.form({
  width: "100%",
  marginTop: 30,
});

interface AddTodoProps {
  onAdd: (description: string) => void;
}

export const AddToDo = ({ onAdd }: AddTodoProps) => {
  const [input, setInput] = useState("");

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        onAdd(input);
        setInput("");
      }}
    >
      <Input
        onChange={(e) => setInput(e.target.value)}
        value={input}
        placeholder="Add a new todo item here"
      />
    </Form>
  );
};
