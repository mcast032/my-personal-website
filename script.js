const h2 = document.createElement("h2");
h2.textContent = "Welcome!";

document.querySelector("body").appendChild(h2);


document.addEventListener('DOMContentLoaded', (event) => {
    function addContact() {
        const contactButton = document.getElementById('btn2');
        contactButton.addEventListener('click', function() {
            let p = document.querySelector("p");
            
            if (!p) {
                p = document.createElement("p");
                document.body.appendChild(p);
            }
            
            p.textContent = "323-978-3252";
        });
    }

    addContact();
});



document.addEventListener('DOMContentLoaded', (event) => {
    function clearContact() {
        const homeButton = document.getElementById('home-btn');
        homeButton.addEventListener('click', function() {
            const p = document.querySelector("p");
            if (p) {
                p.remove();
            }
        });
    }

    
    clearContact();
});






const aboutButton = document.getElementById('btn1');
aboutButton.addEventListener('click', function() {
  alert('I am an aspiring Sofware Engineer');
});


