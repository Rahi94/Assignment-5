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
let payTotal = 0;

for (const seat of allSeat) {
    seat.addEventListener('click', function (e) {
        if (seatCount > 3) {
            alert('you can select maximum 4 seat!!!')
            return seat;
        }
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

        seat.classList.add('pointer-events-none')

        createDiv.classList.add('flex', 'justify-between',)
        appendDiv.appendChild(createDiv);

        // total price calculation part
        payTotal = payTotal + 550;
        // console.log(payTotal);
        const priceTotal = document.getElementById('price-total');
        const grandTotal = document.getElementById('grand-total');

        priceTotal.innerText = payTotal;
        grandTotal.innerText = payTotal;


        // coupon section
        const applyCoupon = document.getElementById('apply-btn').addEventListener('click', function () {
            const couponInput = document.getElementById('coupon-input');
            const grandTotal = document.getElementById('grand-total');


            if (couponInput.value === 'NEW15' && payTotal >= 2200) {
                const applyBtn = document.getElementById('apply-btn');
                applyBtn.classList.remove('disabled', 'bg-gray-300');
                applyBtn.classList.add('bg-green-400')
                const payTotal1 = (payTotal * 15) / 100
                grandTotal.innerText = payTotal - payTotal1;
                const couponDiv = document.getElementById('coupon-div');
                couponDiv.classList.add('hidden');
                return grandTotal.innerText;


            }


            else if (couponInput.value === 'COUPLE20') {
                const payTotal2 = (payTotal * 20) / 100;
                grandTotal.innerText = payTotal - payTotal2;
                const couponDiv = document.getElementById('coupon-div');
                couponDiv.classList.add('hidden');
            }
            else {
                payTotal === grandTotal;
            }

        })

    });






}

// next button
const nextBtn = document.getElementById('next-btn').addEventListener('click', function () {


    const purchasedPrice = document.getElementById('price-total');
    const purchaseString = purchasedPrice.innerText;
    const purchase = parseInt(purchaseString);


    const phoneNumber = document.getElementById('phone-number')

    const mainSection = document.getElementById('main-section');
    mainSection.classList.add('hidden');

    const modal = document.getElementById('modal-section');
    modal.classList.remove('hidden');

    const continueButton = document.getElementById('continue-btn').addEventListener('click', function () {
        mainSection.classList.remove('hidden');
        modal.classList.add('hidden');
    })



})



