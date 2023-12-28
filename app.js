let reviewWrapEl = document.querySelectorAll('.review-wrapper');
let currentReviews = [0,2];
let faqsEl = document.querySelectorAll('.faq-card');
let discountSlider = document.querySelector('.discount-slider');
let rotationalVal = 0;


console.log(discountSlider);

///display reiew box in about section-----------------------------
let updteReviewSlider = (cards) => {
    cards.forEach((card_index) => {
        reviewWrapEl[card_index].classList.add('active');
    });
}


setInterval(() => {
   currentReviews.forEach((card_index, i) => {
    reviewWrapEl[card_index].classList.remove('active');

    currentReviews[i] = card_index >= reviewWrapEl.length - 1 ? 0 : card_index + 1;
   });

   setTimeout(() => {
    updteReviewSlider(currentReviews);
   }, 250);

}, 3000);

updteReviewSlider(currentReviews);


// f & Q question box display-------------------------------------- 
faqsEl.forEach((faqs) => {
    faqs.addEventListener('click', () => {
        faqs.classList.toggle('active');
    });
});

//discount slider image rotation------------------------------------

setInterval(() => {
    rotationalVal += 120;
    discountSlider.style.transform = `translateY(-50%) rotate(${rotationalVal}deg)`;
}, 2000);


