import TodoStorage from "./src/modules/toDoStorage.js";

test("add todo", () => {
  const newToDo = {
    descroption: "do this and that",
    completed: false,
    index: 0,
  };
  const storage = new TodoStorage()
  storage.addToDo(newToDo)
  const toDoList = JSON.parse(localStorage.getItem("allEntries"));
  expect(toDoList).toContainEqual(newToDo);
});
