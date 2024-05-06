document.addEventListener("DOMContentLoaded", function() {
    const questions = document.querySelectorAll('.question');
    
    questions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
            } else {
                answer.style.display = 'block';
            }
        });
    });

    // Simulated shopping cart
    let cart = [];

    // Function to add item to cart
    function addToCart(productId) {
        cart.push(productId);
        alert('Product added to cart!');
        console.log('Cart:', cart);
    }

    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.getAttribute('data-id');
            addToCart(productId);
        });
    });
});
