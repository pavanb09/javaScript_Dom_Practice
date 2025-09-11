// 1.

let products = [
 	{ id: 201, name: "Smartphone", price: 699, category: "Electronics", stock: 50, rating: 4.6 },
 	{ id: 202, name: "Blender", price: 49, category: "Appliances", stock: 20, rating: 4.3 },
 	{ id: 203, name: "Yoga Mat", price: 25, category: "Fitness", stock: 100, rating: 4.9 },
 	{ id: 204, name: "Office Desk", price: 299, category: "Furniture", stock: 10, rating: 4.2 },
 	{ id: 205, name: "Bluetooth Speaker", price: 79, category: "Electronics", stock: 60, rating: 4.7 }
 ];


 /**
  *  Display the products dynamically as cards on a webpage,
  *  with each card showing the product’s name, price, category, rating, and a “Buy Now” button.
  *  Ensure the layout is responsive and visually appealing.
  */

     

    let container1 = document.createElement("div");
    let h1 = document.createElement("h1");
    h1.innerHTML = '<h1 class ="text-center">Our Products 1</h1>';
    document.body.appendChild(h1);
    container1.className = "main_container";
    
    products.forEach(obj => {
        let card = document.createElement("div");
        card.className = "card";

        card.innerHTML =`
                <h3>${obj.name}</h3>
                <p>$${obj.price}</p>
                <p>*${obj.category}</p>
                <p>⭐${obj.rating}</p>
                <button class = "btn btn-warning">Buy Now</button>

        `;
        container1.appendChild(card);

    })
    document.body.appendChild(container1);

// 2.
let products2 = [
 	{ id: 701, name: "Action Camera", price: 299, category: "Electronics", stock: 20, rating: 4.8 },
 	{ id: 702, name: "Toaster", price: 29, category: "Appliances", stock: 40, rating: 4.2 },
 	{ id: 703, name: "Tennis Racket", price: 129, category: "Sports", stock: 60, rating: 4.5 },
 	{ id: 704, name: "Dining Table", price: 799, category: "Furniture", stock: 5, rating: 4.6 },
 	{ id: 705, name: "VR Headset", price: 599, category: "Electronics", stock: 15, rating: 4.9 }
 ];

//  Display a grid of product cards with details including name, price, and rating.
//  Ensure the layout is responsive, showing 2 cards per row on tablets and 3 cards per row on desktops.

let container2 = document.createElement("div");
    let h2 = document.createElement("h1");
    h2.innerHTML = '<h1 class ="text-center">Our Products 2</h1>';
    container2.appendChild(h2);

    document.body.appendChild(h2);
    let con = document.createElement("div");
    container2.className = "main_container";
    
    products2.forEach(obj => {
        let card2 = document.createElement("div");
        card2.className = "card2";
    

        card2.innerHTML =`
                <h3>${obj.name}</h3>
                <p>$${obj.price}</p>
                <p>*${obj.category}</p>
                <p>⭐${obj.rating}</p>
                <button class = "btn btn-success">Buy Now</button>

        `;
        container2.appendChild(card2);

    })
    
    document.body.appendChild(container2);