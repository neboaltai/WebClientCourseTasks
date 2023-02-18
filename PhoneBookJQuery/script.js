$(function () {
    $(".phonebook-form").submit(function (e) {
        e.preventDefault();
    });

    $(".phonebook-form button").click(function () {
        $(".phonebook-form input").change(function () {
            $(this).removeClass("is-invalid");
        });

        var isInvalid = false;

        $(".phonebook-form input").each(function () {
            var inputText = $(this).val().trim()

            if (inputText.length === 0) {
                $(this).addClass("is-invalid");

                isInvalid = true;

                return;
            }
        });

        if (isInvalid) {
            isInvalid = false;

            return;
        }

        $("<tr>").append($("<td>"))
            .append($("<td>").text($(".phonebook-form [placeholder='Surname']").val()))
            .append($("<td>").text($(".phonebook-form [placeholder='Name']").val()))
            .append($("<td>").text($(".phonebook-form [placeholder='Phone number']").val()))
            .append($("<td class='d-flex justify-content-end'>").html("<button class='btn delete-button'>x</button>"))
            .appendTo(".table > tbody");
        
        $(".table > tbody button").click(function (e) {
            $(e.target).closest("tr").remove();

            assignNumbers();
        });

        assignNumbers();

        $(".phonebook-form input").val("");

        function assignNumbers() {
            $(".table tbody tr").each(function (i) {
                var number = i + 1;

                $(this).find("td:first").text(number);
            });
        }
    });
});