import { render, screen } from '@testing-library/react';
import App from './App';
import Home from "./components/Home"
import Materials from "./components/Materials"
import Project from "./components/Projects"
test('Home', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Главная/i);
  expect(linkElement).toBeInTheDocument();
});
test('Materials', () => {
  render(<Materials />);
  const linkElement = screen.getByText(/Материалы курса/i);
  expect(linkElement).toBeInTheDocument();
});
test('Materials', () => {
  render(<Materials />);
  const linkElement = screen.getByRole("img");
  expect(linkElement).toBeInTheDocument();
});
test('Project', () => {
  render(<Project />);
  const linkElement = screen.getByText(/Мои задачи на курсе/i);
  expect(linkElement).toBeInTheDocument();
});
test('Project', () => {
  render(<Project />);
  const linkElement = screen.getByRole('heading', {level: 1});
  expect(linkElement).toBeInTheDocument();
});
test('Project', () => {
  render(<Project />);
  const linkElement = screen.getByRole("list");
  expect(linkElement).toBeInTheDocument();
});
// test('Project', () => {
//   render(<Project />);
//   const linkElement = screen.getByRole("listItem");
//     expect(linkElement).toBeInTheDocument();
// });
