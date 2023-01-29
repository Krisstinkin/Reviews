let reviews = [
  {
    id: 1,
    name: 'Susan Smith',
    job: 'WEB DEVELOPER',
    image:
      'https://wmpics.space/di-QD4K.png',
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'Anna Johnson',
    job: 'WEB DESIGNER',
    image:
      'https://wmpics.space/di-0W0H.png',
    text:
      'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'Peter Jones',
    job: 'INTERN',
    image:
      'https://wmpics.space/di-AHDW.png',
    text:
      'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'Bill Anderson',
    job: 'THE BOSS',
    image:
      'https://wmpics.space/di-R0LI.png',
    text:
      'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

const content = document.getElementById("container")

let currentIndex = 0
let buttonNext = document.getElementById("next-btn")
let buttonPrev = document.getElementById("prev-btn")

buttonNext.addEventListener("click", reviewNext)
buttonPrev.addEventListener("click", reviewBack)

function renderReview() {
  let review = reviews[currentIndex]

  content.innerHTML = ` 
    
    <div class='w-1/3 flex justify-center m-auto'>
      <img src=${review.image} alt='фото' />
    </div>
    
    <h4 class='text-lg font-semibold'>${review.name}</h4>
    <p class='text-sky-700 mb-2'>${review.job}</p>
    <p class='text-base text-sky-900'>${review.text}</p>
      
  `
}

function reviewNext() {
  if (currentIndex + 1 >= reviews.length) {
    currentIndex = 0
  } else {
    currentIndex = currentIndex + 1
  }

  renderReview()
}

function reviewBack() {
  if (currentIndex + 1 <= 0) {
    currentIndex = reviews.length
  } else {
    currentIndex = currentIndex - 1
  }

  renderReview()
}

//Ссылки на отзывы хранятся в массиве. Генерируемое случайное число (индекс (айди) отзыва) умножается на длину массива (полученную с использованием его свойства length). 
//Полученное число округляется с помощью функции Math.floor() 

let randomButton = document.getElementById("random")
randomButton.addEventListener("click", renderRandom)

function renderRandom() {
  let randomIndex = Math.floor(Math.random() * reviews.length);

  if (currentIndex === randomIndex) {
    renderRandom(); 
  } else {
    currentIndex = randomIndex;
    renderReview();
  }
  
}

renderReview()

//Math.random() дает вам случайное десятичное число от 0 до 1, включая 0, но не включая 1. Таким образом, это может дать вам что-то вроде 0.38548569372.
//Math.random() * num выдает случайное десятичное число от 0 до num, включая 0, но не включая num . Итак, если число равно 10, это может дать вам 3.8548569372.
//Math.floor(Math.random() * num)) выдает случайное целое число от 0 до num, включая 0, но не включая num . Итак, это может дать вам 3.
//Math.floor() усекает десятичное число только до целочисленной части. Случайное целое число часто используется для получения случайного значения из массива (которое должно быть целым числом).
