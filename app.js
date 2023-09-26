 const nextBtn = document.getElementById('nextBtn');
 const prevBtn = document.getElementById('prevBtn');
 const tanyaCard = document.getElementById('tanya-card');
 const johnCard = document.getElementById('john-card');

 nextBtn.addEventListener('click', function () {
    tanyaCard.classList.add('hidden');
    johnCard.classList.remove('hidden');
 });

 prevBtn.addEventListener('click', function () {
    tanyaCard.classList.remove('hidden');
    johnCard.classList.add('hidden');
 });



