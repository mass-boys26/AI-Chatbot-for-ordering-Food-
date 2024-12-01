document.querySelectorAll('.pro button').forEach(button => {
    button.addEventListener('click', function () {
      alert("Item added to the cart!");
    });
  });
  document.querySelector('#hero button').addEventListener('click', function () {
    window.location.href = '/pages/order.html';
  });