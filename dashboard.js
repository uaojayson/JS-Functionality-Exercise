const data = {
    "customers": [
      {
        "id": 1,
        "name": "John Doe",
        "email": "johndoe@example.com",
        "phone": "+1-555-555-5555",
        "address": "123 Main St, Anytown, USA"
      },
      {
        "id": 2,
        "name": "Jane Doe",
        "email": "janedoe@example.com",
        "phone": "+1-555-555-5555",
        "address": "456 Elm St, Anytown, USA"
      },
      {
        "id": 3,
        "name": "Bob Smith",
        "email": "bobsmith@example.com",
        "phone": "+1-555-555-5555",
        "address": "789 Oak St, Anytown, USA"
      }
    ],
    "sellers": [
      {
        "id": 1,
        "name": "Green Farms",
        "email": "greenfarms@example.com",
        "phone": "+1-555-555-5555",
        "address": "10 Apple Rd, Anytown, USA"
      },
      {
        "id": 2,
        "name": "Fresh Harvest",
        "email": "freshharvest@example.com",
        "phone": "+1-555-555-5555",
        "address": "20 Orange Rd, Anytown, USA"
      },
      {
        "id": 3,
        "name": "Farm to Table",
        "email": "farmtotable@example.com",
        "phone": "+1-555-555-5555",
        "address": "30 Pear Rd, Anytown, USA"
      }
    ]
  };
  
  const customerSection = document.getElementById('customer-section');
const sellerSection = document.getElementById('seller-section');

// Create a function to generate HTML elements for the customer data
function generateCustomerHTML() {
  data.customers.forEach((customer) => {
    const customerDiv = document.createElement('div');
    customerDiv.innerHTML = `
      <h2>${customer.name}</h2>
      <p>Email: ${customer.email}</p>
      <p>Phone: ${customer.phone}</p>
      <p>Address: ${customer.address}</p>
    `;
    customerSection.appendChild(customerDiv);
  });
}

// Create a function to generate HTML elements for the seller data
function generateSellerHTML() {
  data.sellers.forEach((seller) => {const sellerDiv = document.createElement('div');
  sellerDiv.innerHTML = `
    <h2>${seller.name}</h2>
    <p>Email: ${seller.email}</p>
    <p>Phone: ${seller.phone}</p>
    <p>Address: ${seller.address}</p>
  `;
  sellerSection.appendChild(sellerDiv);
});
}

// Call the functions to generate the HTML elements
generateCustomerHTML();
generateSellerHTML();  
