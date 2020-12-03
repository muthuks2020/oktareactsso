import React from "react";
import { mount } from "enzyme";
import Drawer from "..";
import { Security } from "@okta/okta-react";
import { securityConfig } from "config";
import { MemoryRouter } from "react-router-dom";
import renderer from "react-test-renderer";

describe("<Drawer />", () => {
  let authService;
  let authState;
  let mockProps;
  beforeEach(() => {
    authState = {
      isPending: true,
    };
    authService = {
      on: jest.fn(),
      updateAuthState: jest.fn(),
      getAuthState: jest.fn().mockImplementation(() => authState),
      handleAuthentication: jest.fn(),
    };
    mockProps = { authService, ...securityConfig };
  });

  test("should render component with default props", () => {
    const component = mount(
      <MemoryRouter>
        <Security {...mockProps}>
          <Drawer />
        </Security>
      </MemoryRouter>
    );
    expect(component.find('Drawer').prop('anchor')).toEqual('left');
    expect(component.find('Drawer').prop('variant')).toEqual('permanent');
  });

  test("should render to snapshot", () => {
    let component = renderer.create(
      <MemoryRouter>
        <Security {...mockProps}>
          <Drawer />
        </Security>
      </MemoryRouter>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
