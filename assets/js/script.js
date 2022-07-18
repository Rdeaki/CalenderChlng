var eventsArray = [];

//adresses layout of calender upon application launch
function startDay() {
    var container = $('.container');
    var time = moment().hours(8).format('hA');
    eventsArray = JSON.parse(localStorage.getItem("events"));

    for(var i = 0; i < 10; i++) {
        var timeCol = $("<div>").addClass("col-12 col-md-1 hour").text(rowTime);
        var descriptionX = $("<div>").addClass("description col-12 col-md-10");
        var rowTime = moment().hours(8).add(i, 'hours').format('hA');
        var row = $("<div>").addClass("row");

        if(!eventsArray) {
            eventsArray = [];
        } else {
            for(var x = 0; x < eventsArray.length; x++) {
                if(eventsArray[x].time == rowTime) {
                    descriptionX.text(eventsArray[x].text);
                }
            }
        }
        var saveCol = $("<div>").addClass("saveBtn col-12 col-md-1").append("<span class='oi oi-file'></span>");
        row.append(timeX, descriptionX, saveCol);
        container.append(row);
        updateTaskStatus();
    }
};

function saveEvents() {
    localStorage.setItem("events", JSON.stringify(eventsArray));
}
