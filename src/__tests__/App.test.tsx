import { render, screen } from "./test-utils";
// import { render, screen } from "@testing-library/react";
import App from "../App";
import { UserEvent } from "@testing-library/user-event";

// eslint-disable-next-line testing-library/no-render-in-lifecycle

test("should render the dashboard", () => {
  render(<App />)
  const title = screen.getByRole("heading", { name: /Todo List/i });
  const inputNode = screen.getByPlaceholderText(/add a new/i)
  const searchNode = screen.getByPlaceholderText(/search/i)

  expect(title).toBeInTheDocument();
  expect(searchNode).toBeInTheDocument();
  expect(inputNode).toBeInTheDocument();
});

const createItems = async (user: UserEvent) => {
  const inputNode = screen.getByPlaceholderText(/add a new/i)
  await user.type(inputNode, `test{enter}`);
  await user.type(inputNode, 'test1{enter}');
  await user.type(inputNode, 'test2{enter}');
}

test("should display correct lists after adding items", async () => {
  const { user } = render(<App />)

  await createItems(user)

  const expectItemsContent = [
    'test2',
    'test1',
    'test',
  ]
  const itemsNodes = screen.getAllByDisplayValue(/test/)
  expect(itemsNodes.length).toBe(3)
  itemsNodes.forEach((itemNode, index) => expect(itemNode).toHaveDisplayValue(expectItemsContent[index]))

});

test("should update corectly after editing", async () => {
  const { user } = render(<App />)
  await createItems(user)
  const itemsNode = screen.getByDisplayValue('test1')
  await user.clear(itemsNode)
  await user.type(itemsNode, `buy something{enter}`)
  expect(itemsNode).not.toHaveDisplayValue('test1')
  expect(itemsNode).toHaveDisplayValue('buy something')

});


test("should delete item properly ", async () => {
  const { user } = render(<App />)
  await createItems(user)
  const deleteButton = screen.getAllByTestId('delete')
  expect(deleteButton.length).toBe(4)
  // await user.click(deleteButton[0])
  // await user.click(deleteButton[1])
  // await user.click(deleteButton[2])
  // expect(deleteButton.length).toBe(3)
  // expect(itemsNode).toHaveDisplayValue('buy something')

});