import { ComponentProps } from "react";
import { Input } from "./Atoms/Input";

interface FilterListProps {
  serachVal: string;
  setSerachVal: (value: string) => void;
}

export const SearchBar = ({ serachVal, setSerachVal }: FilterListProps) => {
  const changeHandler: ComponentProps<"input">["onChange"] = (e) => {
    setSerachVal(e.target.value);
  };

  return (
    <Input value={serachVal} onChange={changeHandler} placeholder="Search" />
  );
};
