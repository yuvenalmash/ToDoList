import TodoStorage from "../src/modules/toDoStorage.js";
import { setStatus, updateStatus } from "../src/modules/statusUpdate.js";

const storage = new TodoStorage();

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

// describe("To do list functions", () => {
//   test("editing todo tasks", () => {
//     const task = {
//       description: "Cat drinking milk",
//       completed: false,
//       index: 0,
//     };
//     storage.addToDo(task);
//     const updatedTask = edit(task, "Cat eating");
//     expected(updatedTask.description).toBe("Cat eating");
//   });
// });

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
