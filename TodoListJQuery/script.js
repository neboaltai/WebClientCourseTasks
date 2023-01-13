$(function () {
    var addButton = $(".todo-form > button");
    var newTodoTextInput = $(".todo-form > input");
    var todoList = $(".todo-form ~ ol");
    var form = $(".todo-form");

    form.submit(function (e) {
        e.preventDefault();
    });

    addButton.click(function () {
        var newTodoText = newTodoTextInput.val().trim();

        newTodoTextInput.removeClass("invalid");

        if (newTodoText.length === 0) {
            newTodoTextInput.addClass("invalid");

            return;
        }

        var todoItem = $("<li>").addClass("todo-item");
        
        setViewMode();

        todoList.append(todoItem);

        newTodoTextInput.val("");

        function setViewMode() {
            todoItem.html("<span class='todo-item-text'></span>\
            <button class='edit-button' type='button'>Edit</button>\
            <button class='delete-button'>Delete</button>");

            todoItem.find(".todo-item-text").text(newTodoText);

            todoItem.find(".delete-button").click(function () {
                todoItem.remove();
            });

            todoItem.find(".edit-button").click(function () {
                setEditMode();
            });
        }

        function setEditMode() {
            todoItem.html("<input class='edit-todo-item' type='text'/>\
                <button class='save-button'>Save</button>\
                <button class='cancel-button'>Cancel</button>\
                <div class='error-message'> Field is required</div>");

            var editingTodoItem = todoItem.find(".edit-todo-item");
            editingTodoItem.val(newTodoText);
            editingTodoItem.removeClass("invalid");

            todoItem.find(".save-button").click(function () {
                var editedTodoText = editingTodoItem.val().trim();

                if (editedTodoText.length === 0) {
                    editingTodoItem.addClass("invalid");

                    return;
                }

                newTodoText = editedTodoText;
                setViewMode();
            });

            todoItem.find(".cancel-button").click(function () {
                setViewMode();
            });
        }
    });
});