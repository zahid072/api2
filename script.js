const loadPhone = async (brands = "iphone") => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${brands}`
  );
  let datas = await res.json();
  displayPhone(datas.data);
};
loadPhone();

const displayPhone = (datas) => {
  const container = document.getElementById("allCard");

  const showAllContainer = document.getElementById("showAllContainer");
  if (datas.length > 12) {
    showAllContainer.classList.remove("hidden");
  } else {
    showAllContainer.classList.add("hidden");
  }
  datas = datas.slice(0, 12);
  container.innerHTML = "";
  for (let data of datas) {
    let cardContainer = document.createElement("div");
    cardContainer.classList.add("card", "w-96", "bg-base-100", "shadow-xl");
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
          
   `;
    container.appendChild(cardContainer);
  }

  handleSearchHandleLoader(false);
};

const searchHandle = () => {
  handleSearchHandleLoader(true);
  const searchFiled = document.getElementById("searchFiled");
  loadPhone(searchFiled.value);
  searchFiled.value = "";
};

const handleSearchHandleLoader = (loader) => {
  const loaderHandler = document.getElementById("loaderHandle");

  if (loader === true) {
    loaderHandler.classList.remove("hidden");
  } else {
    loaderHandler.classList.add("hidden");
  }
};
