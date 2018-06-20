setInterval(function() {
	setCourseList();
	setCourseDialog();
}, 1000);

function setCourseList() {
	$('.courseBox.courseEnrolment').each(function() {
		var courseInfoRawString = $('.enrolment-code', $(this)).text().trim();
		var courseIDFull = courseInfoRawString.split(' ')[0];
		var courseID = courseIDFull.substring(0, courseIDFull.length - 2);
		var campusID = courseIDFull[courseIDFull.length - 1];
		var instructorSelector = $('.instructor > .instructorDetails', $(this));
		var instructor = instructorSelector.html();
		if (instructor.indexOf('href') == -1 && /^[A-Z]{3}\d{3}$/.test(courseID)) {
			var campus = (campusID == 1) ? "St. George": "Mississauga";
			// console.log("<a href='" + encodeURI("http://uoftprofs.com/?" + "instructor=" + instructor + "&course=" + courseID + "&campus=" + campus) + "'>" + instructor + "</a>");
    		instructorSelector.html("<a href='" + encodeURI("http://uoftprofs.com/?" + "instructor=" + instructor + "&course=" + courseID + "&campus=" + campus) + "'>" + instructor + "</a>");
		}
	});
}

function setCourseDialog() {
	var courseInfoRawString = $('#courseCodeAndTitle').text().trim();
	var courseIDFull = courseInfoRawString.split(' ')[0];
	var courseID = courseIDFull.substring(0, courseIDFull.length - 2);
	var campusID = courseIDFull[courseIDFull.length - 1];
	$('.searchResults > .primaryActivity > .activityRow > .instructor > .instructorDetails').each(function() {
		var instructor = $(this).html();
		if (instructor.indexOf('href') == -1 && /^[A-Z]{3}\d{3}$/.test(courseID)) {
			var campus = (campusID == 1) ? "St. George": "Mississauga";
			// console.log("<a href='" + encodeURI("http://uoftprofs.com/?" + "instructor=" + instructor + "&course=" + courseID + "&campus=" + campus) + "'>" + instructor + "</a>");
    		$(this).html("<a href='" + encodeURI("http://uoftprofs.com/?" + "instructor=" + instructor + "&course=" + courseID + "&campus=" + campus) + "'>" + instructor + "</a>");
		}
	});

}
