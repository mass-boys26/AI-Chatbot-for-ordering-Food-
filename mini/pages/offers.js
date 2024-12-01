const claimButtons = document.querySelectorAll('.claim-btn');
claimButtons.forEach(button => {
  button.addEventListener('click', () => {
    alert('Offer Claimed!');
  });
});
