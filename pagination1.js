const details = [
    {
      "id": "66",
      "name": "Mrs. Hermina Daniel",
      "email": "Murphy59@yahoo.com"
    },
    {
      "id": "67",
      "name": "Marcelino Nienow",
      "email": "Estefania_Dibbert97@hotmail.com"
    },
    {
      "id": "68",
      "name": "Raphaelle Connelly",
      "email": "Josie.Legros70@yahoo.com"
    },
    {
      "id": "69",
      "name": "Mina Heaney",
      "email": "Pete.Hermann79@hotmail.com"
    },
    {
      "id": "70",
      "name": "Jaida Torp",
      "email": "Jonatan82@yahoo.com"
    }
  ]

  document.body.innerHTML = `<section class="container"></section>
  <nav aria-label="Page navigation">
          <ul class="pagination justify-content-center">
            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
            <li class="page-item"><a class="page-link" href="index.html">1</a></li>
            <li class="page-item"><a class="page-link" href="indexpage1.html">2</a></li>
            <li class="page-item"><a class="page-link" href="indexpage2.html">3</a></li>
           
            <li class="page-item"><a class="page-link" href="#">Next</a></li>
          </ul>
        </nav>`;

  details.forEach((data)=>{
    const detail = document.querySelector(".container");
    detail.innerHTML += `<div class="col-12 space">
    <div class = "detail1">
     <h3>Name: ${data.name}</h3>
     <p><b>Email: ${data.email}</b></p>
    </div>
  </div>
  `
})
  