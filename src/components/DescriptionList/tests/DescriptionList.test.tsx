import React from "react";
import { shallow } from "enzyme";
import DescriptionList, { Props } from "../DescriptionList";

describe("<DescriptionList />", () => {
  it("should render a dl, dt, and dd with title and data", () => {
    const props: Props = { title: "foo", data: "bar" };
    const wrapper = shallow(<DescriptionList {...props} />);
    expect(wrapper.find("dl")).toHaveLength(1);
    const dts = wrapper.find("dt");
    const dds = wrapper.find("dd");
    expect(dts).toHaveLength(1);
    expect(dts.first().text()).toEqual(props.title);
    expect(dds).toHaveLength(1);
    expect(dds.first().text()).toEqual(props.data);
  });
});
