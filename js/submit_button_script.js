// submit button script

// variable that gets and holds the submit button element
var elSubmitButton = document.getElementById('submit');			// *requirement: access objects (DOM)


function onClickSubmit() {										// *requirement: function, conditionals, innerHTML
        if (elSubmitButton.innerHTML === "Submit") {			// if the submit button's innerHTML reads "Submit"
          elSubmitButton.innerHTML = "Submitted";				// then update the submit button element's innerHTML to "Submitted"
      }
        else {													// if not ...
          elSubmitButton.innerHTML = "Already submitted!";		// then update the submit button element's innerHTML to "Already submitted!"
        }
    }

