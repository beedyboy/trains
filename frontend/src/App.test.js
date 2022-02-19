import { render, screen } from '@testing-library/react';
import App from './App';
import {   shallow } from 'enzyme'; 

// test file
// import { shallow, mount, render } from 'enzyme';

describe("Test", () => {
  let wrapper;
  beforeEach(() => {
wrapper = shallow(<App />);
  })
  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
  test('render the title', () => {
    expect(wrapper.find("h1").text()).toContain("This is a heading  tag");
  })
  
  test("render the click event", () => {
    wrapper.find("#count").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("1");
  })
})