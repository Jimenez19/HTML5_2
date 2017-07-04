var i = 0;

function timedCount() {
	postMessage(i);
	i = i + 1;
	setTimeout("timedCount()", 500);
}

timedCount();