// Tableau des objets représentant chaque image du diaporama
const slides = [
	{
		"image":"/assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"/assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"/assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"/assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
// Sélection des éléments de la page
// Bouton flèche gauche
const left = document.querySelector(".arrow_left");
// Bouton flèche droite
const right = document.querySelector(".arrow_right");
// Image de la banniere
const img = document.querySelector(".banner-img");
// Texte de la banniere
const txt = document.querySelector(".text-image");
// Conteneur des points de navigation
const dots = document.querySelector(".dots")
// Variable pour suivre la position actuelle de la banniere
let positionSlide = 0;

// Ecoute l'evenement pour le clic sur le bouton flèche droite
right.addEventListener("click",() => {
	// Incrémente la position de la diapositive
	positionSlide ++; 
	// Si la position dépasse le nombre d'images
	if (positionSlide > slides.length-1) {
	 // Revient à la première image
		positionSlide = 0;
	}
	// Appelle la fonction pour changer de image
	changeSlide();
})
// Ecoute l'evenement pour le clic sur le bouton flèche gauche
left.addEventListener("click",() => {
	 // Décrémente la position de la image
	positionSlide --;
	// Si la position est inférieure à zéro
	if (positionSlide < 0){
		// Va à la dernière diapositive
		positionSlide = slides.length -1 ;
	}
	// Appelle la fonction pour changer de image
	changeSlide()
})

// Création des dots
slides.forEach((_, index) => {
	// Crée un nouvel élément div pour le dot
    const dot = document.createElement("div"); 
	 // Ajoute la classe dot au div pour ajouter un point de navigation
    dot.classList.add("dot");
    // Si l'index du dot correspond à la position actuelle de l'image
    if (index === positionSlide) {
	// Ajoute la classe active pour indiquer que ce dot est actuellement sélectionné
        dot.classList.add("dot_selected"); 
    }

    // Ajoute un écouteur d'événements au dot pour gérer les clics
    dot.addEventListener("click", () => {
		// Met à jour la position de l'image en fonction du dot cliqué
        positionSlide = index; 
		 // Appelle la fonction pour changer l'image
        changeSlide(); 
    });

    // Ajoute le dot au conteneur des dots (élément avec la classe 'dots')
    dots.appendChild(dot);
});


// Fonction pour changer d'image, texte et dots
function changeSlide(){
	img.src = slides[positionSlide].image;
	txt.innerHTML = slides[positionSlide].tagLine;
	updateDots();
}

// Fonction pour mettre a jours les dots
function updateDots() {
	 // Sélectionne tous les éléments avec la classe 'dot'
    const allDots = document.querySelectorAll(".dot");
    // Parcourt chaque dot et met à jour la classe 'active' en fonction de la position actuelle de l'image
    allDots.forEach((dot, index) => {
	// Ajoute ou enlève la classe dot_selected selon que l'index correspond à la position actuelle de l'image
        dot.classList.toggle("dot_selected", index === positionSlide); 
    });
}

