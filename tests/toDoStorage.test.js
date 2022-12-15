import TodoStorage from "../src/modules/toDoStorage.js";
import { updateStatus } from "../src/modules/statusUpdate.js";

const storage = new TodoStorage();
const newToDo = {
  description: "do this and that",
  completed: false,
  index: 0,
};
const newToDo2 = {
  description: "do this and that2",
  completed: false,
  index: 1,
};

describe("add todo()", () => {
  test("add todo", () => {
    const newToDo = {
      descroption: "do this and that",
      completed: false,
      index: 0,
    };
    storage.addToDo(newToDo);
    const toDoList = JSON.parse(localStorage.getItem("allEntries"));
    expect(toDoList).toContainEqual(newToDo);
  });
});

describe("delete todo()", () => {
  test("remove todo", () => {
    storage.removeToDo(0);
    const toDoList = JSON.parse(localStorage.getItem("allEntries"));
    expect(toDoList).toHaveLength(0);
  });
});

describe("To do list functions", () => {
  test("editing todo tasks", () => {
    const task = {
      description: "Cat drinking milk",
      completed: false,
      index: 0,
    };
    storage.addToDo(task);
    const index = 0;
    const input = "Cat eating";

    storage.saveToDo(index, input);
    const toDoList = JSON.parse(localStorage.getItem("allEntries"));

    expect(toDoList[0].description).toBe("Cat eating");
  });
});

describe("Update completed tasks", () => {
  test("update completed status", () => {
    const task1 = {
      description: "Cat drinking milk",
      completed: false,
      index: 0,
    };
    const index = task1.index;
    const description = task1.description;
    document.body.innerHTML =
      "<div>" +
      `<input id="check${index}" type="checkbox" onchange="updateStatus(${index})">
      <p id="description${index}" style="display:block;" onclick="edit(${index})">${description}</p>` +
      "</div>";
    storage.addToDo(task1);
    document.getElementById(`check${index}`).checked = true;

    updateStatus(0);
    const toDoList = JSON.parse(localStorage.getItem("allEntries"));

    expect(toDoList[0].completed).toBe(true);
  });
});

describe('clear completed module',()=>{
  test('clear completed',()=>{
    storage.addToDo(newToDo);
    storage.addToDo(newToDo2);
    document.body.innerHTML =
      "<div>" +
      `<input id="check${newToDo.index}" type="checkbox" onchange="updateStatus(${newToDo.index})">
      <p id="description${newToDo.index}" style="display:block;" onclick="edit(${newToDo.index})">${newToDo.description}</p>` +
      `<input id="check${newToDo2.index}" type="checkbox" onchange="updateStatus(${newToDo2.index})">
      <p id="description${newToDo2.index}" style="display:block;" onclick="edit(${newToDo2.index})">${newToDo2.description}</p>` +
      "</div>";
    document.getElementById(`check${newToDo.index}`).checked = true;
    updateStatus(0)
    storage.clearCompleted()
    const toDoList = JSON.parse(localStorage.getItem("allEntries"));
    console.log(toDoList)
    expect(toDoList).not.toContainEqual(newToDo);
  })
})
