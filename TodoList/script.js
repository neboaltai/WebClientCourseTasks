document.addEventListener("DOMContentLoaded", function () {
    var addButton = document.querySelector(".todo-form > button");
    var newTodoTextInput = document.querySelector(".todo-form > input");
    var todoList = document.querySelector(".todo-form ~ ol");
    var form = document.querySelector(".todo-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
    });

    addButton.addEventListener("click", function () {
        var newTodoText = newTodoTextInput.value.trim();

        newTodoTextInput.classList.remove("invalid");

        if (newTodoText.length === 0) {
            newTodoTextInput.classList.add("invalid");

            return;
        }

        var todoItem = document.createElement("li");

        todoItem.classList.add("todo-item");

        setViewMode();

        todoList.appendChild(todoItem);

        newTodoTextInput.value = "";

        function setViewMode() {
            todoItem.innerHTML = "<span class='todo-item-text'></span>\
            <button class='edit-button' type='button'>Edit</button>\
            <button class='delete-button'>Delete</button>";

            todoItem.querySelector(".todo-item-text").textContent = newTodoText;

            todoItem.querySelector(".delete-button").addEventListener("click", function () {
                todoItem.remove();
            });

            todoItem.querySelector(".edit-button").addEventListener("click", function () {
                setEditMode();
            });
        }

        function setEditMode() {
            todoItem.innerHTML = "<input class='edit-todo-item' type='text'/>\
                <button class='save-button'>Save</button>\
                <button class='cancel-button'>Cancel</button>";

            var editingTodoItem = todoItem.querySelector(".edit-todo-item");
            editingTodoItem.value = newTodoText;
            editingTodoItem.classList.remove("invalid");

            todoItem.querySelector(".save-button").addEventListener("click", function () {
                var editedTodoText = editingTodoItem.value.trim();

                if (editedTodoText.length === 0) {
                    editingTodoItem.classList.add("invalid");

                    return;
                }

                newTodoText = editedTodoText;
                setViewMode();
            });

            todoItem.querySelector(".cancel-button").addEventListener("click", function () {
                setViewMode();
            });
        }
    });
});