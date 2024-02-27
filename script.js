const loadPhone = async () => {
  const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
  let datas = await res.json();
  displayPhone(datas.data)
  
} 
loadPhone()

const displayPhone = (datas)=>{
  for(let data of datas){
    console.log(data)
  }

}