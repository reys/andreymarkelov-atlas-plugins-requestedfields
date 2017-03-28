(function($) {
    $(document).ready(function() {
        AJS.$("#customfield_10000 option[value='-1']").remove(); //Removes the default value "None"
        function convertMulti(id) {
            var myText = 'From requestedFields.js';
            console.log(myText);
            if (AJS.$('#' + id + "-textarea").length == 0) {
                new AJS.MultiSelect({
                    element: $("#" + id),
                    itemAttrDisplayed: "label",
                    errorMessage: AJS.params.multiselectComponentsError
                });
            }
        }

        AJS.toInit(function () {
            convertMulti("customfield_10000");
        })

        JIRA.bind(JIRA.Events.NEW_CONTENT_ADDED, function (e, context) {
            AJS.$("#customfield_<10000> option[value='-1']").remove();
            convertMulti("customfield_<10000>");
        });
    });
})(AJS.$ || jQuery);

// var myVar = 234;
// console.log(myVar);