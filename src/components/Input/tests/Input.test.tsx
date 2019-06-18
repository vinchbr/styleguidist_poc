import React from "react";
import { shallow } from "enzyme";
import Input from "../Input";

describe("<Input />", () => {
  it("should render an input without validation error message", () => {
    const props = {
      input: { foo: "bar" },
      placeholder: "foo",
      type: "text",
      meta: { touched: false },
      className: "any"
    };
    const wrapper = shallow(<Input {...props} />);
    expect(wrapper.find("div")).toHaveLength(1);
    expect(wrapper.find("input")).toHaveLength(1);
    expect(wrapper.find("i")).toHaveLength(0);
  });

  it("should render a validation error message", () => {
    const props = {
      input: { foo: "bar" },
      placeholder: "foo",
      type: "text",
      meta: { touched: true, error: "looking excessively fly" },
      className: "any"
    };
    const wrapper = shallow(<Input {...props} />);
    expect(wrapper.find("i")).toHaveLength(1);
    expect(wrapper.find("i").text()).toEqual(props.meta.error);
  });
});
