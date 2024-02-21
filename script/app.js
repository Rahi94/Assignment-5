document.addEventListener('DOMContentLoaded', function () {
    const buyTicketButton = document.getElementById('buy-ticket');
    const selectTicketSection = document.getElementById('select-your-seat');

    buyTicketButton.addEventListener('click', function () {
        selectTicketSection.scrollIntoView({ behavior: 'smooth' });
    });
});

const allSeat = document.getElementsByClassName('seat');
let count = 24;
let seatCount = 0;

for (const seat of allSeat) {
    seat.addEventListener('click', function (e) {
        seat.classList.add('bg-green-400');
        count = count - 1;
        document.getElementById('seats-left').innerText = count;
        seatCount = seatCount + 1;
        document.getElementById('seat-count').innerText = seatCount;
        // create element
        const appendDiv = document.getElementById('append-div');

        const createDiv = document.createElement('div')
        const createSeat = document.createElement('p')
        const post = document.createElement('p');
        post.innerText = 'Economy';
        const price = document.createElement('p');
        price.innerText = '550';
        createSeat.setAttribute('class', 'text-xl',);
        createSeat.innerText = seat.innerText;
        

        createDiv.appendChild(createSeat);
        createDiv.appendChild(post);
        createDiv.appendChild(price);

        createDiv.classList.add('flex', 'justify-between', )

        appendDiv.appendChild(createDiv);

    });
}