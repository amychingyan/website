// for the news recent vs old toggle
function showNews(evt, tabName) {
	var newsTab = document.getElementsByClassName('para__news');
	for (var i = 0; i < newsTab.length; i++) {
		newsTab[i].style.display = 'none';
	}

	// Get all elements with class="tabitems" and remove the class "active"
	newsItem = document.getElementsByClassName('news--tab');
	for (i = 0; i < newsItem.length; i++) {
		newsItem[i].className = newsItem[i].className.replace(' on', '');
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = 'block';
	evt.currentTarget.className += ' on';
}

document.getElementById('defaultNow').click();
