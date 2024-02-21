document.addEventListener('DOMContentLoaded', function () {
    const buyTicketButton = document.getElementById('buy-ticket');
    const selectTicketSection = document.getElementById('select-your-seat');

    buyTicketButton.addEventListener('click', function () {
        selectTicketSection.scrollIntoView({ behavior: 'smooth' });
    });
});

const allSeat = document.getElementsByClassName('seat');
let count = 24;

for (const seat of allSeat) {
    seat.addEventListener('click', function (e) {
        count = count - 1;
        document.getElementById('seats-left').innerText = count;
    });
}