# **Purchase Paradise** 🛒✨  

**Purchase Paradise** is a frontend-only e-commerce website that offers users a seamless shopping experience. It is built with **HTML**, **CSS**, and **JavaScript**, with some level of mobile responsiveness. In the future, this project will evolve into a fully functional e-commerce solution. The product data is fetched from the **FakeStore API**, simulating a real shopping experience.

---

## **Project Overview** 🌐

This project demonstrates an e-commerce interface with multiple pages and essential features like product categories, shopping cart, and order confirmation. The website is designed with basic HTML, CSS, and JavaScript, and it lays the foundation for a more complex shopping platform to be developed later.

---

## **Features** 🛍️

1. **Home Page** – Displays featured products and a welcoming message.  
2. **Category Page** – Browse products by category to find exactly what you need.  
3. **Cart Page** – Review the selected products and update quantities.  
4. **Checkout Page** – Input your details to complete your purchase.  
5. **Order Confirmation Page** – Displays the order summary after a successful purchase.  
6. **About Us Page** – Provides information about the website and business.  

---

## **Technologies Used** 🛠️

- **HTML5** – For the structure of the website.  
- **CSS3** – For styling and creating a responsive layout.  
- **JavaScript** – For interactivity and dynamic content loading.  
- **FakeStore API** – Used to fetch product data and display them on the website.

---

## **How to Run the Project Locally** 🚀

1. **Clone the Repository:**  
   ```bash
   git clone https://github.com/mayurk224/e-com-website
   cd e-com-website
   ```

2. **Open the Project in a Browser:**  
   Simply open the `index.html` file in your browser to view the website.

---

## **API Integration** 🔄

This project uses **FakeStore API** to fetch product data dynamically.  
API URL: [https://fakestoreapi.com](https://fakestoreapi.com)

### Example API Call:
```javascript
fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {
    console.log(data); // Displays fetched product data in the console
  })
  .catch(error => console.error('Error fetching products:', error));
```

---

## **Future Enhancements** 🚧

- Add **user authentication** and **user profiles**.  
- Build a **backend** with order management and payment gateway integration.  
- Improve **mobile responsiveness** for smaller screens.  
- Add **filtering and sorting** options for product categories.  
- Implement **wishlist** and **user reviews** functionality.

---

## **Contact** 📧

For any feedback or suggestions, reach out to me at **mayurkamble0250@gmail.com**.

---

## **License** 📝

This project is licensed under the **MIT License**. Feel free to use the code for learning purposes.

---

## **Acknowledgements** 💡

- **FakeStore API** for providing product data.
- **W3Schools** and **MDN Web Docs** for HTML, CSS, and JavaScript resources.
- **Open-source communities** for inspiration.

---

## **Feedback** 📝

Your feedback will help me improve this project. Feel free to submit suggestions via email or GitHub issues.
