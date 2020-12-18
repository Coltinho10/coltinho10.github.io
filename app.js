function getFranchiseInfo(number) {

    $.get("https://statsapi.web.nhl.com/api/v1/teams/" + number,
        (data) => {
            let str = '';
            for (let obj of data.teams) {
                str += `${obj.name}, ${obj.abbreviation}, ${obj.venue.city}, ${obj.firstYearOfPlay}<br>`
            }
            location.href="searched.html";
            document.body.innerHTML += str;
            document.body.innerHTML += "<br>";
            
        }
    );
}

function getRoster(number) {

    $.get("https://statsapi.web.nhl.com/api/v1/teams/" + number + "/roster",
        (data) => {
            let str = '';
            for (let obj of data.roster) {
                str += `${obj.person.fullName}, ${obj.jerseyNumber}, ${obj.position.name}<br>`
            }
            document.body.innerHTML += str;
            document.body.innerHTML += "<br>";
        }
    );
}

function getPlayer() {

    $.get("https://statsapi.web.nhl.com/api/v1/people/8474141",
        (data) => {
            let str = '';
            for (let obj of data.people) {
                str += `${obj.fullName}, ${obj.primaryNumber}, ${obj.currentAge}, ${obj.captain}<br>`
            }
            document.body.innerHTML += str;
            document.body.innerHTML += "<br>";
        }
    );
}

	
	
//getFranchiseInfo();
//getRoster();
//getPlayer();
