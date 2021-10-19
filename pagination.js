

const details = [
    {
      "id": "1",
      "name": "Lura Senger",
      "email": "Xander_Collier@yahoo.com"
    },
    {
      "id": "2",
      "name": "Wilburn Weber",
      "email": "Bennett_Kreiger11@yahoo.com"
    },
    {
      "id": "3",
      "name": "Tyrique Hahn",
      "email": "Juston.Altenwerth@yahoo.com"
    },
    {
      "id": "4",
      "name": "Lenny Bailey",
      "email": "Guiseppe_Hegmann@yahoo.com"
    },
    {
      "id": "5",
      "name": "Vladimir Keeling",
      "email": "Louisa_Walsh18@hotmail.com"
    },
    {
      "id": "6",
      "name": "Kellie Crona",
      "email": "Chandler_Abernathy@yahoo.com"
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

