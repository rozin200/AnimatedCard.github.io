//movement Animation to happen

const card = document.querySelector('.card');
const container = document.querySelector('.container');


//items


const sneakers = document.querySelector('.sneakers img');



//moving animation Event

container.addEventListener('mousemove', (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY ) / 25;

  card.style.transform = `rotateY(${-xAxis}deg) rotateX(${yAxis}deg)`;
});


//Animation in

container.addEventListener('mouseenter', (e) =>{
  card.style.transition = "none";

  //popout
  sneakers.style.transform = `translateZ(100px)`;
})


//Animation Out

container.addEventListener('mouseleave', (e) =>{
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;

  //popin
  sneakers.style.transform = `translateZ(0px)`;
})




//theme changer
const selectTheme = document.querySelector('#selectTheme');
const first = document.querySelector('#first');
const second = document.querySelector('#second');
const third = document.querySelector('#third');
const fourth = document.querySelector('#fourth');


fourth.classList.add('active');
first.addEventListener('click',() =>{
  first.classList.add('active');
  second.classList.remove('active');
  third.classList.remove('active');
  fourth.classList.remove('active');
  
  selectTheme.setAttribute("href", "theme1.css");

})

second.addEventListener('click',() =>{
  second.classList.add('active');
  first.classList.remove('active');
  third.classList.remove('active');
  fourth.classList.remove('active');
  selectTheme.setAttribute("href", "theme2.css");
})

third.addEventListener('click',() =>{
  second.classList.remove('active');
  first.classList.remove('active');
  third.classList.add('active');
  fourth.classList.remove('active');
  selectTheme.setAttribute("href", "theme3.css");
})

fourth.addEventListener('click',() =>{
  second.classList.remove('active');
  first.classList.remove('active');
  third.classList.remove('active');
  fourth.classList.add('active');
  selectTheme.setAttribute("href", "style.css");
})
