import TodoStorage from '../src/modules/toDoStorage.js';

const storage = new TodoStorage();

describe('add todo ()', () => {
  test('add todo', () => {
    const newToDo = {
      descroption: 'do this and that',
      completed: false,
      index: 0,
    };
    storage.addToDo(newToDo);
    const toDoList = JSON.parse(localStorage.getItem('allEntries'));
    expect(toDoList).toContainEqual(newToDo);
  });
});

describe('delete todo ()', () => {
  test('remove todo', () => {
    storage.removeToDo(0);
    const toDoList = JSON.parse(localStorage.getItem('allEntries'));
    expect(toDoList).toHaveLength(0);
  });
});
