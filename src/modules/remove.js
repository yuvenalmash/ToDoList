import { toDos } from "./ui.js"
import TodoStorage from "./toDoStorage.js"
export const remove = (index) => {
  console.log('remove clicked')
  const storage = new TodoStorage
  storage.removeToDo(index)
  toDos()
}