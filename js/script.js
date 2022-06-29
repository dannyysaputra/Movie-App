const app = document.getElementById('root');

// const logo = document.createElement('img');
// logo.src = '/asset/logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

// app.appendChild(logo);
app.appendChild(container);

// buat variabel request dan tetapkan objek XMLHttpRequest yang baru
var request = new XMLHttpRequest();

// buka koneksi baruk, menggunakan GET request
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

request.onload = function() {
    // mengakses data JSON disini

    // mengubah response dalam bentuk json kedalam javascript objek
    var data = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400) {
        data.forEach(films => {
            const cards = document.createElement('div');
            cards.setAttribute('class', 'card');

            const title = document.createElement('h1');
            title.setAttribute('id', 'title');
            title.textContent = films.title;

            const desc = document.createElement('p');
            descFilms = films.description.substring(0,300);
            desc.textContent = `${descFilms}...`;

            container.appendChild(cards);

            cards.appendChild(title);
            cards.appendChild(desc);
        });
    } else {
        const errorMsg = document.createElement('marquee');
        errorMsg.textContent = "It's not working!";
        app.appendChild(errorMsg);
    }
}

// mengirim request
request.send()