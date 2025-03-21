const apiUrl = "https://67dcc78be00db03c4068e260.mockapi.io/api/ITEMS/name";

document.getElementById("SUBMIT").addEventListener("click", function() {
  const title = document.getElementById("title").value;
  const price = document.getElementById("price").value;
  const imgLink = document.getElementById("imageUpload").value; 
  const description = document.getElementById("description").value;
  const location = document.getElementById("location").value;
  const category = document.getElementById("category").value;

  let data = {
    name: title,  
    category: category,
    location: location,
    price: price,
    imgLink: imgLink,  
    description: description
  };

  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),  
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
    alert("ITEM CREADO DE FORMA EXITOSA");
  })
  .catch((error) => {
    console.error('Error:', error); 
    alert("ERROR: EL ITEM NO FUE CREADO.");
  });
});
