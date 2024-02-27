const loadPhone = async () => {
  const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
  let datas = await res.json();
  displayPhone(datas.data)
  
} 
loadPhone()

const displayPhone = (datas)=>{
  const container = document.getElementById('allCard');
  for(let data of datas){
   let cardContainer = document.createElement('div');
   cardContainer.classList.add('card', 'w-96', 'bg-base-100', 'shadow-xl');
   cardContainer.innerHTML = `
         <!-- card -->
         
            <figure class="px-10 pt-10">
              <img src=${data.image} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="card-title">${data.phone_name}</h2>
              <p>There are many variations of passages of available, but the majority have suffered</p>
              <h1 class="font-bold">$999</h1>
              <div class="card-actions">
                <button onclick="seeDetails.showModal()" class="btn btn-primary">See Details</button>
              </div>
            </div>
          
   `
   container.appendChild(cardContainer)
  }

}