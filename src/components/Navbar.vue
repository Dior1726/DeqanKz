<template>
  <header class="w-full absolute " ref="header">
    <nav class="container mx-auto py-5 px-6 flex items-center justify-between">
      <div class="logo 3xl:w-40 overflow-hidden " style="max-width: 150px">
        <a href="#section-1" v-smooth-scroll>
          <img src="../assets/img/logo.svg" class="w-full h-auto" alt="">
        </a>
      </div>

      <div class="nav__menu flex flex-col justify-between pb-10 lg:pb-0" :class="{'open': open}">

        <div class="text-white lg:hidden absolute right-8 top-8 text-2xl font-semibold cursor-pointer" 
          @click="open = false">
          &#x2715;
        </div>

        <ul class="flex text-lg 3xl:text-3xl">
          <li
            v-for="link,n in links" :key="n"
            class="mr-8 border-b border-transparent transition-all hover:border-white"
            :class="link.className"
            @click="open = false"  
          >
            <a 
              class="font-normal text-white uppercase text-lg" 
              :class="{'text-white': open}"
              :href="link.link" v-smooth-scroll>
              {{link.name}}
            </a>
          </li>
        </ul>
      </div>

      <div class="text-white hidden lg:block">
        <p class="mb-0">
          <i class="ri-phone-line mr-2"></i>
          <a href="tel:+77773330022" class="text-sm">8 777 333 00 22</a>
        </p>
        <p class="mb-0">
          <i class="ri-map-pin-line mr-2"></i>
          <span class="text-sm">г. Шымкент, Тюлькубаский р-н</span> 
        </p>
      </div>

      <div class="burger-menu cursor-pointer lg:hidden" @click="open = true">
        <div class="text-2xl text-white font-semibold">
          &#9776;
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      open: false,
      links: [
        {
          link: '#section-2',
          name: 'О нас',
          className: 'section-2'
        },
        {
          link: '#section-3',
          name: 'Услуги',
          className: 'section-3'
        },
        {
          link: '#section-4',
          name: 'Прайс',
          className: 'section-4'
        },
        {
          link: '#section-5',
          name: 'Контакты',
          className: 'section-5'
        }
      ]
    }
  },
  methods: {
    
  },
  mounted() {
    window.addEventListener('scroll', this.scrollHeader)
    window.addEventListener('scroll', this.activeLink)
  },
  methods: {
    scrollHeader() {
      const header = document.querySelector('header')
      // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
      if (window.scrollY >= 120) {
        header.classList.add('scroll-header')
      } else {
        header.classList.remove('scroll-header')
      }
    },
    activeLink() {
      let current = ""
      let sections = document.querySelectorAll('section')
      let navLi = document.querySelectorAll('header ul li')

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 100 ) {
          current = section.getAttribute("id"); }
      });

      navLi.forEach((li) => {
        li.classList.remove("activeId");
        if (li.classList.contains(current) && current != '') {
          li.classList.add("activeId");
        }
      });
    }
  }
}
</script>

<style lang="scss">

// mobile nav menu styles
.scroll-header {
  position: fixed !important;
  top: 0;
  background: rgba(82, 174, 50, .9);
  box-shadow: 0 0 20px rgba(0, 0, 0, .4);
  transition: .3s all ease;
  backdrop-filter: blur(10px);
  z-index: 1000;

  nav {
    padding-top: 15px;
    padding-bottom: 15px;
  }

  .logo {
    max-width: 120px !important;
    width: 100%;
    height: auto;
  }

  @media (min-width: 1664px) {
    .logo {
      max-width: 110px;
    }
  }
}

@media screen and (max-width: 1023px){
  .nav__menu{
    position: fixed;
    background-color: rgb(82, 174, 50);
    width: 50%;
    height: 100%;
    top: 0;
    right: -100%;
    box-shadow: -2px 0 4px rgba(0, 0, 0, 0.4);
    padding: 4rem 0 0 3rem;
    transition: .3s all ease;
    z-index: 1000;

    &.open {
      right: 0;

      a {
        color: white !important;
      }
    }
  }

  @media screen and (max-width: 500px) {
    .nav__menu {
      width: 80%;
    }
  }
  
  .nav__menu ul {
    display: flex;
    flex-direction: column;

    li {
      margin-bottom: 20px;
      &:hover {
        border-bottom-color: transparent;
      }
    }
  }

  .scroll-header {
    .nav__menu {
      height: 100vh;
    }
  }
}

.nav__menu .activeId {
  border-bottom: 2px solid #fff;

  @media screen and (max-width: 1023px) {
    border-bottom-color: transparent;
  }
}

.logo img {
  filter: drop-shadow(2px -2px 2px rgba(0, 0, 0, .3));
}
</style>