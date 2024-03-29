var emailField = document.getElementById("email-field");
        var emailError = document.getElementById("email-error");
        console.log(emailField.in)

       
        function validateEmail() {
            if (!emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
                emailError.innerHTML = "please enter a valid mail";
                emailField.style.borderBottomColor = 'red';
                return false;
            }

            /*emailError.innerHTML = "please enter a valid mail";*/
            emailError.innerHTML = "";
            emailField.style.borderBottomColor = 'green';
            return true;

        }
        var imageId = document.getElementById("image-id");
        var title = document.getElementById('uploadtitle')
        
        function validateImage() {
            console.log(imageId.value)
            title.innerHTML = imageId.value.split(/[\\/]/).pop().split('.')[0]
        }
        
         var str = 'http://stackoverflow.com/questions/5673752/searching-for-a-last-word-in-javascript.js';
        str = str.split(/[\\/]/).pop().split('.')[0]

          console.log(str); 
