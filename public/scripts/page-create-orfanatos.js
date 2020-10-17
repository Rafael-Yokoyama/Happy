
// create map

const map = L.map("mapid").setView([-27.2109325, -49.6448719], 15);
//create and  add tilelayer

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// create icon

const icon = L.icon({
  iconUrl: ".//images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
 
});

let marker ;



//create and  add markers
map.on('click',(event) => {
  
   const lat = event.latlng.lat;
   const lng = event.latlng.lng;

   document.querySelector('[name=lat]').value = lat;
   document.querySelector('[name=lng]').value = lng;

// remove icon
 marker && map.removeLayer(marker)

// add icon layer

   marker =L.marker([lat,lng],{icon})
   .addTo(map)




})



// adicionar o cmapo de fotos
function addPhotoField(){

  // pegar o container de fotos #images
  const container = document.querySelector('#images')

  // pegar o container para duplicar .new-images
  const fildsContainer = document.querySelectorAll('.new-uploads')

  // realizar o clone da última imagem add 
  const newFildContainer = fildsContainer[fildsContainer.length -1].cloneNode(true)

  // verificar se o campo está vazio,se sim não adicionar ao container d eimagens
  const input =  newFildContainer.children[0]
  if (input.value=="")
{
  return s
}
  //limpar o campo antes de add ao container de imagens
  input.value =""

  // adicionar o clone ao container de images

  container.appendChild(newFildContainer)


 
}

function deleteField(event){
  const span = event.currentTarget
  const fildsContainer = document.querySelectorAll('.new-uploads')
  if( fildsContainer.length <= 1){
    //limpar o valor do cmapo
    span.parentNode.children[0].value = ""

    return
  }
  // deletar o campo
  span.parentNode.remove()

}

// Selecionar  sim e não

function toggleSelecty(event){

  //retirar a classe active (dos botões)
  
  document.querySelectorAll( ".button-select button" )
  .forEach(button =>  button.classList.remove('active') )


  // colocar a clsasse active
  const button = event.currentTarget;
  button.classList.add("active");


  //atualizar o input hidden com o valor selecionado

  const input = document.querySelector('[name ="open_on_weekends"]');

  input.value = button.dataset.value ;
  

 
}

