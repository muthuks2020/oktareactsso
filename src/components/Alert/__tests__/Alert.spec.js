import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import Alert from "..";

describe("<Alert />", () => {
  test("should render to snapshot", () => {
    const component = renderer.create(<Alert />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("should render with default props", () => {
    const wrapper = shallow(<Alert />);
    expect(wrapper.props()).toEqual({
      severity: "warning",
      elevation: 6,
      variant: "filled",
    });
  });

  test("should have Error as text", () => {
    const wrapper = shallow(<Alert severity="error">Error</Alert>);
    expect(wrapper.text()).toEqual("Error");
  });
});
