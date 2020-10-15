const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false,
}

const map = L.map('mapid', options).setView([-27.2109325,-49.6448719], 15);
//create and  add tilelayer

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// create icon

const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

// create popup overley


//create and add marker
L.marker([-27.2109325, -49.6448719], { icon }).addTo(map)
// galeria de imagem

function selecimage(event){
const button =  event.currentTarget

//remover  todas as classes .active
const buttons = document.querySelectorAll(".images button")
buttons.forEach( removeActiveClass)
 
function removeActiveClass(button){
  button.classList.remove("active")

}

//selecionar imagem clicada
const image = button.children[0]
const imageContainer = document.querySelector(".orfanato-detalhes > img")

// atualizar o container de imagem
imageContainer.src = image.src


// add a classe ..active para esse botão
button.classList.add("active")

}
        