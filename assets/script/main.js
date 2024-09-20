const img = document.querySelector("img");

const heroImages = ["./assets/images/hero.png", "./assets/images/file.png"];

async function hero() {
  img.src = heroImages[0];
  await new Promise((r) => setTimeout(r, 2000));
  img.src = heroImages[1];
    await new Promise((r) => setTimeout(r, 3000));
    hero();
}

hero();
