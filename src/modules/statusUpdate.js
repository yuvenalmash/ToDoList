export const updateStatus = (index) => {
  const check = document.getElementById(`check${index}`);
  const description = document.getElementById(`description${index}`);
  const toDoList = JSON.parse(localStorage.getItem('allEntries'));
  if (check.checked) {
    toDoList[index].completed = true;
    description.style.textDecoration = 'line-through';
  } else {
    toDoList[index].completed = false;
    description.style.textDecoration = 'none';
  }
  localStorage.setItem('allEntries', JSON.stringify(toDoList));
};

export const setStatus = (index) => {
  const description = document.getElementById(`description${index}`);
  const toDoList = JSON.parse(localStorage.getItem('allEntries'));
  if (toDoList[index].completed) {
    document.getElementById(`check${index}`).checked = true;
    description.style.textDecoration = 'line-through';
  } else {
    document.getElementById(`check${index}`).checked = false;
    description.style.textDecoration = 'none';
  }
};