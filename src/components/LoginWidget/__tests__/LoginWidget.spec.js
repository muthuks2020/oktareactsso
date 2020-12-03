import React from "react";
import { mount } from "enzyme";
import LoginWidget from "..";
import { Security } from "@okta/okta-react";
import { securityConfig } from "config";
import { MemoryRouter } from "react-router-dom";
import renderer from "react-test-renderer";

describe("<LoginWidget />", () => {
  let authService;
  let authState;
  let mockProps;
  let mockIssuer;
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
    mockIssuer = "undefined/oauth/v2";
  });

  test("should render to snapshot", () => {
    let component = renderer.create(
      <MemoryRouter>
        <Security {...mockProps}>
          <LoginWidget issuer={mockIssuer} />
        </Security>
      </MemoryRouter>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("should render two input fields and a button", () => {
    const wrapper = mount(
      <MemoryRouter>
        <Security {...mockProps}>
          <LoginWidget issuer={mockIssuer} />
        </Security>
      </MemoryRouter>
    );
    expect(wrapper.find("#password")).toBeTruthy();
    expect(wrapper.find("#username")).toBeTruthy();
    expect(wrapper.find('#submit')).toBeTruthy();
  });
});
