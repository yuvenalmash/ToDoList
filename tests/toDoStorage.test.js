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

// test("clearCompleted should remove all completed items from the todo list", () => {
//   const todoList = [
//     { id: 1, description: "Wash the dishes", completed: false },
//     { id: 2, description: "Do the laundry", completed: true },
//     { id: 3, description: "Take out the trash", completed: true },
//   ];

//   const updatedTodoList = clearCompleted(todoList);
//   expect(updatedTodoList.length).toBe(1);
//   expect(updatedTodoList[0].id).toBe(1);
// });
