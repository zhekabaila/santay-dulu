const cards = [
  {
    image: './assets/images/kampung_cai_ranca_upas.webp',
    title: 'Kampung Cai Ranca Upas',
    description:
      'Kampung Cai Ranca Upas adalah salah satu tempat wisata paling menarik di Ciwidey! Selain punya area perkemahan yang cantik, Kampung Cai Ranca Upas juga punya penangkaran rusa yang menyenangkan untuk dikunjungi. Selain itu juga ada berbagai permainan outbound yang bisa kamu coba di sana bersama keluarga.',
  },
  {
    image: './assets/images/ciwidey.webp',
    title: 'Kawah Putih Ciwidey',
    description:
      'Kawah Putih Ciwidey sendiri merupakan danau kawah yang terbentuk dari letusan Gunung Patuha, salah satu gunung berapi di Jawa Barat.',
  },
  {
    image: './assets/images/dusun_bambu_lembang.webp',
    title: 'Dusun Bambu Lembang',
    description:
      'Keindahan alam yang dikemas dengan suasana tradisional ala Sunda. Kombinasi yang pas untuk menghasilkan sebuah tempat wisata di Bandung yang menyenangkan. ',
  },
  {
    image: './assets/images/the_lodge_maribaya.webp',
    title: 'The Lodge Maribaya',
    description:
      'The Lodge Maribaya adalah salah satu destinasi wisata di Lembang yang mencuat dan menjadi populer.',
  },
  {
    image: './assets/images/kampung_cai_ranca_upas.webp',
    title: 'Kampung Cai Ranca Upas',
    description:
      'Kampung Cai Ranca Upas adalah salah satu tempat wisata paling menarik di Ciwidey! Selain punya area perkemahan yang cantik, Kampung Cai Ranca Upas juga punya penangkaran rusa yang menyenangkan untuk dikunjungi. Selain itu juga ada berbagai permainan outbound yang bisa kamu coba di sana bersama keluarga.',
  },
  {
    image: './assets/images/ciwidey.webp',
    title: 'Kawah Putih Ciwidey',
    description:
      'Kawah Putih Ciwidey sendiri merupakan danau kawah yang terbentuk dari letusan Gunung Patuha, salah satu gunung berapi di Jawa Barat.',
  },
  {
    image: './assets/images/dusun_bambu_lembang.webp',
    title: 'Dusun Bambu Lembang',
    description:
      'Keindahan alam yang dikemas dengan suasana tradisional ala Sunda. Kombinasi yang pas untuk menghasilkan sebuah tempat wisata di Bandung yang menyenangkan. ',
  },
  {
    image: './assets/images/the_lodge_maribaya.webp',
    title: 'The Lodge Maribaya',
    description:
      'The Lodge Maribaya adalah salah satu destinasi wisata di Lembang yang mencuat dan menjadi populer.',
  },
]
let cardElements = ''

cards.forEach((item, index) => {
  cardElements += `
    <article class="card_container" key="${index}">
        <div class="card_image_wrapper">
            <img
                src="${item.image}"
                alt="mountain image"
                class="card_image"
                width="100%"
            />
        </div>
        <div class="card_text_wrapper">
            <h3 class="card_title">${item.title}</h3>
            <p class="card_desc line_clamp_3">${item.description}</p>
            <button type="button">
                Apply
            </button>
        </div>
    </article>
  `
})

document.querySelector('.list_container').innerHTML = cardElements

const burgerMenu = document.getElementById('burger-menu')
const closeMenu = document.getElementById('close-menu')
const mobileNavbar = document.querySelector('.mobile_navbar')
const mobileMenu = document.querySelectorAll('#mobile_navbar_menu')

burgerMenu.addEventListener('click', () => {
  mobileNavbar.classList.toggle('active')
})

closeMenu.addEventListener('click', () => {
  mobileNavbar.classList.toggle('active')
})

mobileMenu.forEach((menuItem) => {
  menuItem.addEventListener('click', () => {
    mobileNavbar.classList.remove('active') // Tutup navbar ketika elemen menu diklik
  })
})
