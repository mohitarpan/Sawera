// Responsive Navigation
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    });
});

// Example: Display product details on click
const productLinks = document.querySelectorAll('.product-link');

productLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const productId = link.getAttribute('data-product-id');
        displayProductDetails(productId);
    });
});

function displayProductDetails(productId) {
    // Example: Fetch product details from the server and display them on the page
    const productDetailsContainer = document.querySelector('#product-details-container');
    
    // Simulating a product fetch (replace this with actual AJAX/fetch call)
    const productData = {
        name: 'Sample Product',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: '$50.00',
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['Red', 'Blue', 'Green'],
    };

    const productDetailsHTML = `
        <h2>${productData.name}</h2>
        <p>${productData.description}</p>
        <p>Price: ${productData.price}</p>
        <p>Sizes: ${productData.sizes.join(', ')}</p>
        <p>Colors: ${productData.colors.join(', ')}</p>
    `;

    productDetailsContainer.innerHTML = productDetailsHTML;
}

// Add more JavaScript functionality based on your website's requirements
