//Testimonial Data
const testimonials = [
  {
    name: "Eva Sawyer",
    job: "CEO, Fashworks",
    image:
      "https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    testimonial:
      "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque itaque ullam cumque eius enim animi commodi dolorum quod doloremque, libero id, deserunt dolorem debitis necessitatibus nesciunt, asperiores aliquid ipsa harum? Ipsam voluptatum sint quam. Ipsam reprehenderit odit autem. ",
  },
  {
    name: "Katey Topaz",
    job: "Developer, TechCrew",
    image:
      "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    testimonial:
      "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque itaque ullam cumque eius enim animi commodi dolorum quod doloremque, libero id, deserunt dolorem debitis necessitatibus nesciunt, asperiores aliquid ipsa harum? Ipsam voluptatum sint quam. Ipsam reprehenderit odit autem. ",
  },
  {
    name: "Jae Robin",
    job: "UI Designer, Affinity Agency",
    image:
      "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    testimonial:
      "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque itaque ullam cumque eius enim animi commodi dolorum quod doloremque, libero id, deserunt dolorem debitis necessitatibus nesciunt, asperiores aliquid ipsa harum? Ipsam voluptatum sint quam. Ipsam reprehenderit odit autem. ",
  },
  {
    name: "Nicola Blakely",
    job: "CEO,Zeal Wheels",
    image:
      "https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    testimonial:
      "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque itaque ullam cumque eius enim animi commodi dolorum quod doloremque, libero id, deserunt dolorem debitis necessitatibus nesciunt, asperiores aliquid ipsa harum? Ipsam voluptatum sint quam. Ipsam reprehenderit odit autem. ",
  },
];

//Current Slide
let i = 0;
//Total Slides
let j = testimonials.length;

let testimonialContainer = document.getElementById("testimonial-container");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

nextBtn.addEventListener("click", () => {
  i = (j + i + 1) % j;
  displayTestimonial();
});
prevBtn.addEventListener("click", () => {
  i = (j + i - 1) % j;
  displayTestimonial();
});

let displayTestimonial = () => {
  testimonialContainer.innerHTML = `
      <p>${testimonials[i].testimonial}</p>
      <img src=${testimonials[i].image}>
      <h3>${testimonials[i].name}</h3>
      <h6>${testimonials[i].job}</h6>
    `;
};
window.onload = displayTestimonial;
