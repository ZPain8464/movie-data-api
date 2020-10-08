'use strict';

const searchURL = "https://api.lyrics.ovh/v1/";

function getLyrics(artist, title) {
  let URL = searchURL + `${artist}/${title}`;
  fetch(URL)
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('No lyrics found!');
  })
  .then(responseJson => displayResults(responseJson))
  .catch(err => {
    $('.js-error-message').text(`Something went wrong!`)
  });
  
}

function displayResults(responseJson) {
  $('#results').empty();
  $('.hidden').removeClass().show()
  $('#results').append(`
  <h2>Here Are Your Lyrics!</h2>
  <p>${responseJson.lyrics}</p>
  `);
  console.log(responseJson);
}

function watchForm() {
$('#submit').on('click', function(event) {
  event.preventDefault();
  let artist = $('.js-query-artist').val();
  let title = $('.js-query-title').val();
  $(getLyrics(artist, title));
})
}

$(watchForm);

