import React, { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};
const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => {
  const user = userEvent.setup();
  return {
    ...render(ui, { wrapper: AllTheProviders, ...options }),
    user,
  };
};

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
