import TodoStorage from "../src/modules/toDoStorage.js";
const storage = new TodoStorage()

test("add todo", () => {
  const newToDo = {
    descroption: "do this and that",
    completed: false,
    index: 0,
  };
  storage.addToDo(newToDo)
  const toDoList = JSON.parse(localStorage.getItem("allEntries"));
  expect(toDoList).toContainEqual(newToDo);
});

test("remove todo", () => {
  storage.removeToDo(0)
  const toDoList = JSON.parse(localStorage.getItem("allEntries"));
  expect(toDoList.length).toBe(0)
})