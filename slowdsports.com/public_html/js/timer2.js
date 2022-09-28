function t5am() {
  // Set the date we're counting down to
  // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //::::::::::::                                       ::::::::::::
  //::::::::::::              5:00 AM                  ::::::::::::
  //::::::::::::                                       ::::::::::::
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //                                   (AAAA, MM, DD, HH, mm, S ));
  var countDownDate = new Date(Date.UTC(2020, 07, 25, 12, 00, 00));

  // Update the count down every 1 second
  var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    // GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
    var distance = countDownDate - now - (3600000 * 1);

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    for (const ele of document.getElementsByClassName("t5am")) {
      ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> " +
        minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
    }

    // If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("t5am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("t5am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

t5am()

function t530am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              5:30 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2020, 07, 25,12,30,00));

// Update the count down every 1 second
	var x = setInterval(function () {

		// Get todays date and time
		var now = new Date().getTime();

		// Find the distance between now an the count down date
		// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
		var distance = countDownDate - now - (3600000 * 1);

		// Time calculations for days, hours, minutes and seconds
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		// Output the result in an element with id="demo"
		for (const ele of document.getElementsByClassName("t530am")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("t530am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("t530am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

t530am()

function t6am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              6:00 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2020, 07, 25,13,00,00));

// Update the count down every 1 second
	var x = setInterval(function () {

		// Get todays date and time
		var now = new Date().getTime();

		// Find the distance between now an the count down date
		// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
		var distance = countDownDate - now - (3600000 * 1);

		// Time calculations for days, hours, minutes and seconds
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		// Output the result in an element with id="demo"
		for (const ele of document.getElementsByClassName("t6am")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("t6am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("t6am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

t6am()

function t630am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              6:30 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2020, 07, 25,13,30,00));

// Update the count down every 1 second
	var x = setInterval(function () {

		// Get todays date and time
		var now = new Date().getTime();

		// Find the distance between now an the count down date
		// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
		var distance = countDownDate - now - (3600000 * 1);

		// Time calculations for days, hours, minutes and seconds
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		// Output the result in an element with id="demo"
		for (const ele of document.getElementsByClassName("t630am")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("t630am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("t630am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

t630am()

function t7am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              7:00 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2020, 07, 25,14,00,00));

// Update the count down every 1 second
	var x = setInterval(function () {

		// Get todays date and time
		var now = new Date().getTime();

		// Find the distance between now an the count down date
		// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
		var distance = countDownDate - now - (3600000 * 1);

		// Time calculations for days, hours, minutes and seconds
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		// Output the result in an element with id="demo"
		for (const ele of document.getElementsByClassName("t7am")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("t7am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("t7am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

t7am()

function t730am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              7:30 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2020, 07, 25,14,30,00));

// Update the count down every 1 second
	var x = setInterval(function () {

		// Get todays date and time
		var now = new Date().getTime();

		// Find the distance between now an the count down date
		// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
		var distance = countDownDate - now - (3600000 * 1);

		// Time calculations for days, hours, minutes and seconds
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		// Output the result in an element with id="demo"
		for (const ele of document.getElementsByClassName("t730am")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("t730am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("t730am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

t730am()

function t8am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              8:00 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2020, 07, 25,15,00,00));

// Update the count down every 1 second
	var x = setInterval(function () {

		// Get todays date and time
		var now = new Date().getTime();

		// Find the distance between now an the count down date
		// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
		var distance = countDownDate - now - (3600000 * 1);

		// Time calculations for days, hours, minutes and seconds
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		// Output the result in an element with id="demo"
		for (const ele of document.getElementsByClassName("t8am")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("t8am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("t8am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

t8am()

function t830am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              8:30 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2020, 07, 25,15,30,00));

// Update the count down every 1 second
	var x = setInterval(function () {

		// Get todays date and time
		var now = new Date().getTime();

		// Find the distance between now an the count down date
		// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
		var distance = countDownDate - now - (3600000 * 1);

		// Time calculations for days, hours, minutes and seconds
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		// Output the result in an element with id="demo"
		for (const ele of document.getElementsByClassName("t830am")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("t830am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("t830am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

t830am()

function t9am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              9:00 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2020, 07, 25,16,00,00));

// Update the count down every 1 second
	var x = setInterval(function () {

		// Get todays date and time
		var now = new Date().getTime();

		// Find the distance between now an the count down date
		// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
		var distance = countDownDate - now - (3600000 * 1);

		// Time calculations for days, hours, minutes and seconds
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		// Output the result in an element with id="demo"
		for (const ele of document.getElementsByClassName("t9am")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("t9am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("t9am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

t9am()

function t930am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              9:30 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2020, 07, 25,16,30,00));

// Update the count down every 1 second
	var x = setInterval(function () {

		// Get todays date and time
		var now = new Date().getTime();

		// Find the distance between now an the count down date
		// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
		var distance = countDownDate - now - (3600000 * 1);

		// Time calculations for days, hours, minutes and seconds
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		// Output the result in an element with id="demo"
		for (const ele of document.getElementsByClassName("t930am")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("t930am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("t930am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

t930am()

function t10am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              10:00 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2020, 07, 25,17,00,00));

// Update the count down every 1 second
	var x = setInterval(function () {

		// Get todays date and time
		var now = new Date().getTime();

		// Find the distance between now an the count down date
		// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
		var distance = countDownDate - now - (3600000 * 1);

		// Time calculations for days, hours, minutes and seconds
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		// Output the result in an element with id="demo"
		for (const ele of document.getElementsByClassName("t10am")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("t10am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("t10am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

t10am()

function t1030am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              10:30 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2020, 07, 25,17,30,00));

// Update the count down every 1 second
	var x = setInterval(function () {

		// Get todays date and time
		var now = new Date().getTime();

		// Find the distance between now an the count down date
		// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
		var distance = countDownDate - now - (3600000 * 1);

		// Time calculations for days, hours, minutes and seconds
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		// Output the result in an element with id="demo"
		for (const ele of document.getElementsByClassName("t1030am")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("t1030am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("t1030am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

t1030am()

function t11am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              11:00 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2020, 07, 25,18,00,00));

// Update the count down every 1 second
	var x = setInterval(function () {

		// Get todays date and time
		var now = new Date().getTime();

		// Find the distance between now an the count down date
		// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
		var distance = countDownDate - now - (3600000 * 1);

		// Time calculations for days, hours, minutes and seconds
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		// Output the result in an element with id="demo"
		for (const ele of document.getElementsByClassName("t11am")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("t11am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("t11am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

t11am()

function t1130am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              11:30 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2020, 07, 25,18,30,00));

// Update the count down every 1 second
	var x = setInterval(function () {

		// Get todays date and time
		var now = new Date().getTime();

		// Find the distance between now an the count down date
		// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
		var distance = countDownDate - now - (3600000 * 1);

		// Time calculations for days, hours, minutes and seconds
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		// Output the result in an element with id="demo"
		for (const ele of document.getElementsByClassName("t1130am")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("t1130am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("t1130am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

t1130am()

function t12am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              12:00 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2020, 07, 25,19,00,00));

// Update the count down every 1 second
	var x = setInterval(function () {

		// Get todays date and time
		var now = new Date().getTime();

		// Find the distance between now an the count down date
		// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
		var distance = countDownDate - now - (3600000 * 1);

		// Time calculations for days, hours, minutes and seconds
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		// Output the result in an element with id="demo"
		for (const ele of document.getElementsByClassName("t12am")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("t12am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("t12am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

t12am()

function t1230am() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              12:30 AM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2020, 07, 25,19,30,00));

// Update the count down every 1 second
	var x = setInterval(function () {

		// Get todays date and time
		var now = new Date().getTime();

		// Find the distance between now an the count down date
		// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
		var distance = countDownDate - now - (3600000 * 1);

		// Time calculations for days, hours, minutes and seconds
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		// Output the result in an element with id="demo"
		for (const ele of document.getElementsByClassName("t1230am")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("t1230am")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("t1230am")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

t1230am()

function t1pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              1:00 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2020, 07, 25,20,00,00));

// Update the count down every 1 second
	var x = setInterval(function () {

		// Get todays date and time
		var now = new Date().getTime();

		// Find the distance between now an the count down date
		// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
		var distance = countDownDate - now - (3600000 * 1);

		// Time calculations for days, hours, minutes and seconds
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		// Output the result in an element with id="demo"
		for (const ele of document.getElementsByClassName("t1pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("t1pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("t1pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

t1pm()

function t130pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              1:30 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2020, 07, 25,20,30,00));

// Update the count down every 1 second
	var x = setInterval(function () {

		// Get todays date and time
		var now = new Date().getTime();

		// Find the distance between now an the count down date
		// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
		var distance = countDownDate - now - (3600000 * 1);

		// Time calculations for days, hours, minutes and seconds
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		// Output the result in an element with id="demo"
		for (const ele of document.getElementsByClassName("t130pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("t130pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("t130pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

t130pm()

function t2pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              2:00 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2020, 07, 25,21,00,00));

// Update the count down every 1 second
	var x = setInterval(function () {

		// Get todays date and time
		var now = new Date().getTime();

		// Find the distance between now an the count down date
		// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
		var distance = countDownDate - now - (3600000 * 1);

		// Time calculations for days, hours, minutes and seconds
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		// Output the result in an element with id="demo"
		for (const ele of document.getElementsByClassName("t2pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("t2pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("t2pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

t2pm()

function t230pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              2:30 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2020, 07, 25,21,30,00));

// Update the count down every 1 second
	var x = setInterval(function () {

		// Get todays date and time
		var now = new Date().getTime();

		// Find the distance between now an the count down date
		// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
		var distance = countDownDate - now - (3600000 * 1);

		// Time calculations for days, hours, minutes and seconds
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		// Output the result in an element with id="demo"
		for (const ele of document.getElementsByClassName("t230pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("t230pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("t230pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

t230pm()

function t3pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              3:00 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2020, 07, 25,22,00,00));

// Update the count down every 1 second
	var x = setInterval(function () {

		// Get todays date and time
		var now = new Date().getTime();

		// Find the distance between now an the count down date
		// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
		var distance = countDownDate - now - (3600000 * 1);

		// Time calculations for days, hours, minutes and seconds
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		// Output the result in an element with id="demo"
		for (const ele of document.getElementsByClassName("t3pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("t3pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("t3pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

t3pm()

function t330pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              3:30 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2020, 07, 25,22,30,00));

// Update the count down every 1 second
	var x = setInterval(function () {

		// Get todays date and time
		var now = new Date().getTime();

		// Find the distance between now an the count down date
		// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
		var distance = countDownDate - now - (3600000 * 1);

		// Time calculations for days, hours, minutes and seconds
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		// Output the result in an element with id="demo"
		for (const ele of document.getElementsByClassName("t330pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("t330pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("t330pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

t330pm()

function t4pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              4:00 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2020, 07, 25,23,00,00));

// Update the count down every 1 second
	var x = setInterval(function () {

		// Get todays date and time
		var now = new Date().getTime();

		// Find the distance between now an the count down date
		// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
		var distance = countDownDate - now - (3600000 * 1);

		// Time calculations for days, hours, minutes and seconds
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		// Output the result in an element with id="demo"
		for (const ele of document.getElementsByClassName("t4pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("t4pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("t4pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

t4pm()

function t430pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              4:30 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2020, 07, 25,23,30,00));

// Update the count down every 1 second
	var x = setInterval(function () {

		// Get todays date and time
		var now = new Date().getTime();

		// Find the distance between now an the count down date
		// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
		var distance = countDownDate - now - (3600000 * 1);

		// Time calculations for days, hours, minutes and seconds
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		// Output the result in an element with id="demo"
		for (const ele of document.getElementsByClassName("t430pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("t430pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("t430pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

t430pm()

function t5pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              5:00 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2020, 07, 26,00,00,00));

// Update the count down every 1 second
	var x = setInterval(function () {

		// Get todays date and time
		var now = new Date().getTime();

		// Find the distance between now an the count down date
		// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
		var distance = countDownDate - now - (3600000 * 1);

		// Time calculations for days, hours, minutes and seconds
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		// Output the result in an element with id="demo"
		for (const ele of document.getElementsByClassName("t5pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("t5pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("t5pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

t5pm()

function t530pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              5:30 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2020, 07, 26,00,30,00));

// Update the count down every 1 second
	var x = setInterval(function () {

		// Get todays date and time
		var now = new Date().getTime();

		// Find the distance between now an the count down date
		// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
		var distance = countDownDate - now - (3600000 * 1);

		// Time calculations for days, hours, minutes and seconds
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		// Output the result in an element with id="demo"
		for (const ele of document.getElementsByClassName("t530pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("t530pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("t530pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

t530pm()

function t6pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              6:00 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2020, 07, 26,01,00,00));

// Update the count down every 1 second
	var x = setInterval(function () {

		// Get todays date and time
		var now = new Date().getTime();

		// Find the distance between now an the count down date
		// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
		var distance = countDownDate - now - (3600000 * 1);

		// Time calculations for days, hours, minutes and seconds
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		// Output the result in an element with id="demo"
		for (const ele of document.getElementsByClassName("t6pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("t6pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("t6pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

t6pm()

function t630pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              6:30 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2020, 07, 26,01,30,00));

// Update the count down every 1 second
	var x = setInterval(function () {

		// Get todays date and time
		var now = new Date().getTime();

		// Find the distance between now an the count down date
		// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
		var distance = countDownDate - now - (3600000 * 1);

		// Time calculations for days, hours, minutes and seconds
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		// Output the result in an element with id="demo"
		for (const ele of document.getElementsByClassName("t630pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("t630pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("t630pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

t630pm()

function t7pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              7:00 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2020, 07, 26,02,00,00));

// Update the count down every 1 second
	var x = setInterval(function () {

		// Get todays date and time
		var now = new Date().getTime();

		// Find the distance between now an the count down date
		// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
		var distance = countDownDate - now - (3600000 * 1);

		// Time calculations for days, hours, minutes and seconds
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		// Output the result in an element with id="demo"
		for (const ele of document.getElementsByClassName("t7pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("t7pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("t7pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

t7pm()

function t730pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              7:30 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2020, 07, 26,02,30,00));

// Update the count down every 1 second
	var x = setInterval(function () {

		// Get todays date and time
		var now = new Date().getTime();

		// Find the distance between now an the count down date
		// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
		var distance = countDownDate - now - (3600000 * 1);

		// Time calculations for days, hours, minutes and seconds
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		// Output the result in an element with id="demo"
		for (const ele of document.getElementsByClassName("t730pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("t730pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("t730pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

t730pm()

function t8pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              8:00 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2020, 07, 26,03,00,00));

// Update the count down every 1 second
	var x = setInterval(function () {

		// Get todays date and time
		var now = new Date().getTime();

		// Find the distance between now an the count down date
		// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
		var distance = countDownDate - now - (3600000 * 1);

		// Time calculations for days, hours, minutes and seconds
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		// Output the result in an element with id="demo"
		for (const ele of document.getElementsByClassName("t8pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("t8pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("t8pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

t8pm()

function t830pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              8:30 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2020, 07, 26,03,30,00));

// Update the count down every 1 second
	var x = setInterval(function () {

		// Get todays date and time
		var now = new Date().getTime();

		// Find the distance between now an the count down date
		// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
		var distance = countDownDate - now - (3600000 * 1);

		// Time calculations for days, hours, minutes and seconds
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		// Output the result in an element with id="demo"
		for (const ele of document.getElementsByClassName("t830pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("t830pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("t830pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

t830pm()

function t9pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              9:00 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2020, 07, 26,04,00,00));

// Update the count down every 1 second
	var x = setInterval(function () {

		// Get todays date and time
		var now = new Date().getTime();

		// Find the distance between now an the count down date
		// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
		var distance = countDownDate - now - (3600000 * 1);

		// Time calculations for days, hours, minutes and seconds
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		// Output the result in an element with id="demo"
		for (const ele of document.getElementsByClassName("t9pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("t9pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("t9pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

t9pm()

function t930pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              9:30 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2020, 07, 26,04,30,00));

// Update the count down every 1 second
	var x = setInterval(function () {

		// Get todays date and time
		var now = new Date().getTime();

		// Find the distance between now an the count down date
		// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
		var distance = countDownDate - now - (3600000 * 1);

		// Time calculations for days, hours, minutes and seconds
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		// Output the result in an element with id="demo"
		for (const ele of document.getElementsByClassName("t930pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("t930pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("t930pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

t930pm()

function t10pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              10:00 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2020, 07, 26,05,00,00));

// Update the count down every 1 second
	var x = setInterval(function () {

		// Get todays date and time
		var now = new Date().getTime();

		// Find the distance between now an the count down date
		// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
		var distance = countDownDate - now - (3600000 * 1);

		// Time calculations for days, hours, minutes and seconds
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		// Output the result in an element with id="demo"
		for (const ele of document.getElementsByClassName("t10pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("t10pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("t10pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

t10pm()

function t1030pm() {
    // Set the date we're counting down to
    // Year, Month ( 0 for January ), Day, Hour, Minute, Second, , Milliseconds
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    //::::::::::::                                       ::::::::::::
    //::::::::::::              10:30 PM                  ::::::::::::
    //::::::::::::                                       ::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	//                                   (AAAA, MM, DD, HH, mm, S ));
	var countDownDate = new Date(Date.UTC(2020, 07, 26,05,30,00));

// Update the count down every 1 second
	var x = setInterval(function () {

		// Get todays date and time
		var now = new Date().getTime();

		// Find the distance between now an the count down date
		// GMT/UTC Adjustment at the end of the function. 0 = GMT/UTC+0; 1 = GMT/UTC+1.
		var distance = countDownDate - now - (3600000 * 1);

		// Time calculations for days, hours, minutes and seconds
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		// Output the result in an element with id="demo"
		for (const ele of document.getElementsByClassName("t1030pm")){
			ele.innerHTML = (days + "<span>d</span> " + hours + "<span>h</span> "
				+ minutes + "<span>m</span> " + seconds + "<span>s</span><br />")
		}
        
		// If the count down is over, write some text
    if (distance < 0) {
      for (const ele of document.getElementsByClassName("t1030pm")) {
        ele.innerHTML = "<p class='live-text'>Live <i class='fa fa-circle faa-flash animated'></i></p> ";
      }
      if (distance + 7200000 < 0) {
        for (const allEllements of document.getElementsByClassName("t1030pm")) {
          allEllements.innerHTML = "Ended";
        }
      }
    }
  }, 1000);
}

t1030pm()