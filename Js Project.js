function getUser() {

    /* All Country*/
    fetch("https://randomuser.me/api/")

        /* Indian Country*/
        // fetch("https://randomuser.me/api/?nat=in")

        /* Multiple User (10 User)*/
        // fetch("https://randomuser.me/api/?results=10")

        /* Female User*/
        // fetch("https://randomuser.me/api/?results=5&nat=in&gender=female")


        .then(response => response.json()) /* Convert response to JSON */
        .then(data => {
            console.log(data);

            let user = data.results[0];

            document.getElementById("photo").src = user.picture.large;
            document.getElementById("name").innerText = user.name.first + " " + user.name.last;
            document.getElementById("email").innerText = user.email;
            document.getElementById("country").innerText = user.location.country;


            const linkedinURL = "https://www.linkedin.com/in/" +
                user.name.first.toLowerCase() +
                user.name.last.toLowerCase();

            const linkedinBtn = document.getElementById("linkedin-link");
            linkedinBtn.href = linkedinURL;
            linkedinBtn.style.display = "inline-block";


        });

        
}


