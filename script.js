var url = 'https://api.icndb.com/jokes/random';
var paragraph = document.getElementById('joke');

window.onload = getJoke;

var button = document.getElementById('get-joke');
button.addEventListener('click', function () {
    getJoke();
});

function getJoke() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.addEventListener('load', function () {
        var response = JSON.parse(xhr.response);
        paragraph.innerHTML = response.value.joke;
    });
    xhr.send();
}



/*

Jquery

var url = 'https://api.icndb.com/jokes/random';
var $button = $('#get-joke');
var $paragraph = $('#joke');

$button.click(function(){
    getJoke();
});

function getJoke(){
    $.ajax({
        url: url,
        method: 'GET',
        success: function(res){
            $paragraph.text(res.value.joke)
        }        
    })
}

getJoke();

*/











































