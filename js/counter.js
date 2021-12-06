// character counter

(function () {
	var elMessage = document.getElementById('message');				// get the message textarea element
	var elMessageCount = document.getElementById('message-count'); 	// get the message-count element
	
	// "addEvent" function is from ultilities.js
	addEvent(elMessage, 'focus', updateCounter);       // call updateCounter() on focus; *requirement: events (focus, blur)
  addEvent(elMessage, 'input', updateCounter);		  // call updateCounter() on input

  addEvent(elMessage, 'blur', function () {			  // on leaving the element
    if (elMessage.value.length <= 100) {				  // if message is less than or is 100
      elMessageCount.className = 'hide';				    // hide counter
    }
  });

  function updateCounter(e) {
    var target = e.target || e.srcElement;				// get the target of the event
    var count = 100 - target.value.length;				// how many characters are left?
    if (count < 0) {									            // if less than 0 chars free
      elMessageCount.className = 'error';					  // then add class error
    } else if (count <= 15) {							        // if less than 15 chars free
      elMessageCount.className = 'warn';				  	// then add class warn
    } else {				                              // if not,
      elMessageCount.className = 'good';			   		// then add class good
    }
    var charMsg = '<b>' + count + '</b>' + ' characters';		// display the counter
    elMessageCount.innerHTML = charMsg;							// update counter element
  }

}());