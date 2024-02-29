const loadPhone = async (brands = "iphone", isShowAll) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${brands}`
  );
  let datas = await res.json();
  displayPhone(datas.data, isShowAll);
};
loadPhone();

const displayPhone = (datas, isShowAll) => {
  const container = document.getElementById("allCard");
  const showAllContainer = document.getElementById("showAllContainer");
  if (!isShowAll) {
    datas = datas.slice(0, 12);
    container.innerHTML = "";
  }
  if (datas.length > 12) {
    showAllContainer.classList.add("hidden");
  } else {
    showAllContainer.classList.remove("hidden");
  }
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
                <button onclick="showModal('${data.slug}')" class="btn btn-primary">See Details</button>
              </div>
            </div>
          
   `;
    container.appendChild(cardContainer);
  }

  handleSearchHandleLoader(false);
};

const searchHandle = (isShowAll) => {
  handleSearchHandleLoader(true);
  const searchFiled = document.getElementById("searchFiled");
  loadPhone(searchFiled.value, isShowAll);
};

const handleSearchHandleLoader = (loader) => {
  const loaderHandler = document.getElementById("loaderHandle");
  if (loader === true) {
    loaderHandler.classList.remove("hidden");
  } else {
    loaderHandler.classList.add("hidden");
  }
};

const showAll = () => {
  searchHandle(true);
};

const showModal = async (id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phone/${id}`
  );
  let datas = await res.json();
  console.log(datas);
  const modalContainer = document.getElementById("modalContainer");
  modalContainer.innerHTML = "";
  const modal = document.createElement("div");
  modal.classList.add(
    "fixed",
    "bg-[#16151579]",
    "w-full",
    "h-screen",
    "top-0",
    "closeModal"
  );
  modal.innerHTML = `
       <div class="mx-auto p-10 md:w-[700px] rounded-xl bg-slate-200 space-y-4 mt-20">
        <img src="${datas.data.image}" alt="">
        <h1 class="font-bold">Name: ${datas.data.name}</h1>
        <p class="font-semibold">Brand: ${datas.data.brand}</p>
        <p>Storage: ${datas.data.mainFeatures.storage}</p>
        <p>Display: ${datas.data.mainFeatures.displaySize}</p>
        <p>ChipSet: ${datas.data.mainFeatures.chipSet}</p>
        <p>Memory: ${datas.data.mainFeatures.memory}</p>
        <p>ReleaseDate: ${datas.data.releaseDate}</p>
        <button onclick="closeModal()" class="btn btn-error">close</button>
        </div>
  `;
  modalContainer.appendChild(modal);
  let modalBox = document.querySelector(".closeModal");
  modalBox.classList.remove("hidden");
};

const closeModal = () => {
  const modalBox = document.querySelector(".closeModal");
  modalBox.classList.add("hidden");
};
