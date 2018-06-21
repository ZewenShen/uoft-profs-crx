function encodeQueryData(data) {
   let ret = [];
   for (let d in data)
     ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
   return ret.join('&');
}
$(function(){
	$('#btn').click(function(){
		instructor = $('#inlineFormInputName').val();
		course = $('#inlineFormInputGroupUsername').val();
		campus = $('#university').val();
		data = {"instructor": instructor, "course": course, "campus": campus};
		if (instructor == undefined || course == undefined || !/^[A-Za-z\s]*$/.test(instructor) || !/^[A-Z]{3}\d?\d?\d?$/.test(course) || (campus != 'St. George' && campus != 'Mississauga')) {
			var notifOptions = {
				type: 'basic',
				iconUrl: 'icon48.png',
				title: "Error Message from UofT Profs",
				message: "The content that you submit doesn't satisfy the requirement!"
			};
			chrome.notifications.create('limitNotif', notifOptions);
		} else {
			chrome.tabs.create({'url': 'http://172.105.219.80:3000/profanalysis?' + encodeQueryData(data)});
		}
	});
});