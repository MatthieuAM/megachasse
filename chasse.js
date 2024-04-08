


















		function showDiv() {
			var div = document.getElementById("hidden-div");
			if (div.style.display === "none") {
				div.style.display = "block";
			} else {
				div.style.display = "none";
			}
		}




//Minuteur


var totalSeconds = 30;
		var timer;

		function addLeadingZero(num) {
			return (num < 10) ? "0" + num : num;
		}

		function startTimer() {
			timer = setInterval(function() {
				totalSeconds--;
				if (totalSeconds < 0) {
					clearInterval(timer);
					document.getElementById("timer").innerHTML = "00:00";
					document.getElementById("fin").style.display = "block";
				} else {
					var minutes = Math.floor(totalSeconds / 60);
					var seconds = totalSeconds % 60;
					document.getElementById("timer").innerHTML = addLeadingZero(minutes) + ":" + addLeadingZero(seconds);
				}
			}, 1000);
		}

		function stopTimer() {
			clearInterval(timer);
		}

		function resetTimer() {
			clearInterval(timer);
			totalSeconds = 30;
			document.getElementById("timer").innerHTML = "00:30";
			document.getElementById("fin").style.display = "none";
		}

		//----------------------------------------



		