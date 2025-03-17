import React from "react";

export interface Props {
  label: string;
  onClick: () => void;
}

export const Example = ({ label, onClick }: Props) => {
  return <button onClick={onClick}>TEST</button>;
};
