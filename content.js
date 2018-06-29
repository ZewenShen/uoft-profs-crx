$('*').on('click', function() {
	var startTime = new Date().getTime();
	var interval = setInterval(function(){
	if (new Date().getTime() - startTime > 10000) {
		clearInterval(interval);
		return;
	}
	setCourseList();
	setCourseDialogFallWinter();
	setCourseDialogSummer();
	}, 500);
});


function setCourseList() {
	$('.courseBox').each(function() {
		var courseInfoRawString = $('.enrolment-code', $(this)).text().trim();
		var courseIDFull = courseInfoRawString.split(' ')[0];
		var courseID = courseIDFull.substring(0, courseIDFull.length - 2);
		var campusID = courseIDFull[courseIDFull.length - 1];
		var instructorSelector = $('.instructor > .instructorDetails', $(this));
		var instructors = instructorSelector.html();
		if (instructors.indexOf('href') == -1 && instructors != "TBA" && /^[A-Z]{3}\d{3}$/.test(courseID)) {
			var campus = (campusID == 1) ? "St. George": "Mississauga";
			var instructorList = instructors.split(', ');
			var aArray = new Array(instructorList.length);
			instructorList.forEach(function(instructor) {
				aArray.push("<a href='" + encodeURI("http://uoftprofs.com/?" + "instructor=" + instructor + "&course=" + courseID + "&campus=" + campus) + "'>" + instructor + "</a>");
			})
    		instructorSelector.html(aArray.reduce(function(x, y) {return x + ', ' + y;}));
		}
	});
}

function setCourseDialogSummer() {
	var courseInfoRawString = $('#courseCodeAndTitle').text().trim();
	var courseIDFull = courseInfoRawString.split(' ')[0];
	var courseID = courseIDFull.substring(0, courseIDFull.length - 2);
	var campusID = courseIDFull[courseIDFull.length - 1];
	$('.searchResults > .primaryActivity > .activityRow > .instructor > .instructorDetails').each(function() {
		var instructors = $(this).html();
		if (instructors.indexOf('href') == -1 && instructors != "TBA" && /^[A-Z]{3}\d{3}$/.test(courseID)) {
			var campus = (campusID == 1) ? "St. George": "Mississauga";
			var instructorList = instructors.split(', ');
			var aArray = new Array(instructorList.length);
			instructorList.forEach(function(instructor) {
				aArray.push("<a href='" + encodeURI("http://uoftprofs.com/?" + "instructor=" + instructor + "&course=" + courseID + "&campus=" + campus) + "'>" + instructor + "</a>");
			});
    		$(this).html(aArray.reduce(function(x, y) {return x + ', ' + y;}));
		}	
	});
}
function setCourseDialogFallWinter() {
	var courseInfoRawString = $('#modalHeading').prop("lastChild").nodeValue.trim();
	var courseIDFull = courseInfoRawString.split(' ')[0];
	var courseID = courseIDFull.substring(0, courseIDFull.length - 2);
	var campusID = courseIDFull[courseIDFull.length - 1];
	$('.searchResults > .primaryActivity > .activityRow > .instructor > .instructorDetails').each(function() {
		var instructors = $(this).html();
		if (instructors.indexOf('href') == -1 && instructors != "TBA" && /^[A-Z]{3}\d{3}$/.test(courseID)) {
			var campus = (campusID == 1) ? "St. George": "Mississauga";
			var instructorList = instructors.split(', ');
			var aArray = new Array(instructorList.length);
			instructorList.forEach(function(instructor) {
				aArray.push("<a href='" + encodeURI("http://uoftprofs.com/?" + "instructor=" + instructor + "&course=" + courseID + "&campus=" + campus) + "'>" + instructor + "</a>");
			});
    		$(this).html(aArray.reduce(function(x, y) {return x + ', ' + y;}));
		}	
	});
}