document.addEventListener('DOMContentLoaded', function(){
    const buyTicketButton = document.getElementById('buy-ticket');
    const selectTicketSection = document.getElementById('select-your-seat');

    buyTicketButton.addEventListener('click',function(){
        selectTicketSection.scrollIntoView({ behavior: 'smooth' });
    });
});