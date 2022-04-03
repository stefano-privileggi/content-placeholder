const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profileImage = document.getElementById("profile-image");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-background");
const animated_bgs_texts = document.querySelectorAll(
  ".animated-background-text"
);

setTimeout(getData, 2500);  

function getData() {
  header.innerHTML = `
        <img
            src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
        />
  `;

  title.innerHTML = `
        Lorem ipsum dolor sit amet.  
  `;

  excerpt.innerHTML = `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, quos.  
  `;

  profileImage.innerHTML = `
    <img src="https://randomuser.me/api/portraits/men/45.jpg"/>
  `;

  name.innerHTML = `
    John Doe
  `;

  date.innerHTML = `
    Apr 02, 2022
  `;

  animated_bgs.forEach(background => {
      background.classList.remove('animated-background')
  })

  animated_bgs_texts.forEach(background_text => {
    background_text.classList.remove('animated-background-text')
  })
}
