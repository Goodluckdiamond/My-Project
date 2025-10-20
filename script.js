const btn  = document.getElementById("ham-btn")
const menu = document.getElementById("menu-ham")
btn.addEventListener("click", () => {
    menu.classList.toggle("hidden")
});
//ANIMATION
const parallaxElements = document.querySelectorAll('.parallax');
console.log("found elements:", parallaxElements.length);

window.addEventListener('scroll', ()=> {
    console.log("scrolling....");
    let scrollY = window.scrollY;
    console.log(scrollY)
    parallaxElements.forEach((el, index) => {
        const direction = index === 0 ? 1 : -1;
        const speed = index === 0 ? 0.3 : 0.5;
        el.style.transform = `translateY(${scrollY * speed * direction * 0.4}px)`;
    })

})


document.querySelectorAll('.cursor-pointer').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.querySelector('p.mt-4');
        const icon = item.querySelector('svg');
        answer.classList.toggle('hidden');
        icon.classList.toggle('rotate-180');
    });
});

const faqButtons = document.querySelectorAll(".faq-btn");
faqButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const content = btn.nextElementSibling;
        const sign = btn.querySelector("span:last-child");
        //close all others
        document.querySelectorAll(".faq-content") .forEach((faq) => {
            if (faq !== content)faq.classList.add("hidden");
        });
        document.querySelectorAll(".faq-btn span:last-child").forEach((icon) => {
            if(icon !== sign) icon.textContent = "+"
        });
        //Toggle current
        if (content.classList.contains("hidden")) {
            content.classList.remove("hidden");
            sign.textContent = "-"
        }else {
            content.classList.add("hidden")
            sign.textContent ="+"
        }
    })
})

//New Contact

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        alert('✅ Thank you for contacting us! We’ll reach out soon.');
        form.reset();
      } else {
        alert('❌ Oops! Something went wrong. Please try again.');
      }
    } catch (error) {
      alert('❌ Network error. Please check your connection.');
      console.error(error);
    }
  });
});

    