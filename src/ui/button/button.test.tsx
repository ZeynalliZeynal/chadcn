import React from "react";

import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Button from "./button";

describe("Button", () => {
  it("renders button with prefix and children", () => {
    const children = "children";
    const prefix = "prefix";

    // arrange
    const { getByText } = render(<Button prefix={prefix}>{children}</Button>);

    // act
    const childrenElement = getByText(children);
    const prefixElement = getByText(prefix);

    // assert
    expect(childrenElement).toBeInTheDocument();
    expect(prefixElement).toBeInTheDocument();
  });
  it("renders the correct styling", () => {
    const children = "children";
    const prefix = "prefix";

    // arrange
    const { getByTestId } = render(<Button prefix={prefix}>{children}</Button>);

    // act
    const button = getByTestId("button");

    // assert
    expect(button).toHaveClass("items-center");
  });
});
