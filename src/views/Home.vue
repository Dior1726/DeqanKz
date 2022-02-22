<template>
  <div>
    <navbar/>
    
    <section class="h-auto lg:h-screen w-full py-28 hero-bg">
      <div class="container px-6 h-full w-full flex items-center justify-center ">
        <div class="flex flex-col lg:flex-row items-stretch">
          <div class="w-full lg:w-1/2 flex flex-col justify-end text-white">
            <h1 class="title relative mb-10 font-title font-bold line-white">DIQAN GROUP</h1>
            <p class="text-base md:text-xl">
              Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. За языком назад о подпоясал власти имеет великий продолжил домах предупредила строчка, парадигматическая, прямо дорогу ты всемогущая города имени встретил!
            </p>
          </div>
          <div class="w-full lg:w-1/2 xl:w-2/5 mt-10 lg:mt-0 flex items-center lg:justify-end gap-5 flex-wrap">
            <div 
              class="bg-white rounded-2xl p-5 w-28 h-28 md:w-40 md:h-40 lg:w-200 lg:h-200 text-center flex items-center flex-col transition-all justify-center transform hover:scale-105" 
              v-for="item, n in 4" :key="n"
            >
              <img :src="require(`../assets/img/hero${n+1}.png`)" class="rounded-2xl mx-auto mb-4 w-8 md:w-16 lg:w-20" alt="">
              <div class="text-sm md:text-base">Lorem, ipsum.</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="min-h-screen w-full pt-28 pb-10 flex items-center">
      <div class="container px-6">

        <div class="flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between mb-10 md:mb-20">
          <div class="md:w-full lg:w-1/2">
            <h1 class="title text-green-light mb-10 line-green">About Us</h1>
            <p class="text-base lg:text-2xl">
              «Diqan Group» - был основан в 2012 году и на данный момент мы современная постоянно развивающаяся компания в Республике Казахстан. Мы предлагаем широкий ассортимент средств защиты растений, а также семян сельскохозяйственных культур, вы можете  заказать или купить семена различных культур. У нас большой выбор семян овощей, цветов, ягод, зелени, мировые селекций, саженцы и посадочный материал плодовых и декоративных растений. Быстрая доставка по всему Казахстану, курьерская доставка, удобный способ оплаты, а так же помощь консультанта при выборе товара. Оперативное выполнение заказов, надежная транспортировка и низкие цены.
            </p>
          </div>
          <div class="md:w-full lg:w-1/2 flex items-center justify-center lg:justify-end mb-10 lg:mb-0">
            <div class="text-6xl font-black text-grey-text uppercase text-rotate mr-10 opacity-50 hidden lg:block">
              Diqan Group
            </div>
            <div class="w-1/2 lg:w-2/3">
              <img src="../assets/img/aboutLogo.png" alt="">
            </div>
          </div>
        </div>

        <div class="flex flex-col lg:flex-row items-center mb-10 md:mb-20">
          <div class="w-full lg:w-1/2 lg:mr-5 mb-5 lg:mb-20">
            <div class="title text-green-light mb-5 line-green">Lorem, ipsum dolor.</div>
            <div class="text-black text-2xl font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, molestiae!
            </div>
          </div>
          <div class="w-full lg:w-1/2 lg:mt-20">
            <div class=" mb-5 md:mb-10">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores rem exercitationem laudantium tempore aspernatur architecto explicabo nisi amet placeat eos animi aperiam voluptates, illum, omnis voluptatem quia quaerat? Explicabo, ex!
            </div>
            <button class="px-5 py-2 bg-green-dark text-white rounded-md">Lorem, ipsum.</button>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-10 lg:px-10">
          <div
            v-for="item in 3" :key="item"
          >
            <div class="flex items-center mb-5 md:mb-10">
              <img src="../assets/img/list.png" alt="">
              <h3 class="ml-5 text-xl lg:text-3xl font-bold font-title">125 Lorem</h3>
            </div>
            <div class="text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dolorum minus incidunt enim architecto optio eaque quod qui a, exercitationem 
            </div>
          </div>
        </div>

      </div>
    </section>

    <section class="w-full py-10 px-6 min-h-screen overflow-hidden">
      <div class="container flex items-center justify-between relative lg:h-70">
        <div class="w-full lg:w-1/2 pl-5 lg:pr-20">
          <h2 class="title text-green-light mb-10 line-green">Lorem, ipsum dolor.</h2>
          <h2 class="title text-black mb-10 leading-none">Lorem, ipsum dolor Lorem ipsum dolor sit amet.</h2>
          <p class="md:text-xl mb-10">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed ab consequuntur error odit facere consectetur quam natus eius deserunt nam exercit
          </p>
          <button class="px-5 py-2 bg-green-dark text-white rounded-md">Lorem, ipsum.</button>
        </div>

        <div class="about1"></div>
      </div>

      <div class="container flex items-center justify-end relative py-14 lg:py-0 lg:h-70">
        <div class="about2"></div>
        <div class="w-full lg:w-1/2 pl-5 lg:pl-20">
          <h2 class="title text-green-light mb-10 line-green">Lorem, ipsum dolor.</h2>
          <h2 class="title text-black mb-10 leading-none">Lorem, ipsum dolor Lorem ipsum dolor sit amet.</h2>
          <p class="md:text-xl mb-10">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed ab consequuntur error odit facere consectetur quam natus eius deserunt nam exerc
          </p>
          <button class="px-5 py-2 bg-green-dark text-white rounded-md">Lorem, ipsum.</button>
        </div>
      </div>

      <div class="container flex items-center justify-between relative lg:h-70">
        <div class="w-full lg:w-1/2 pl-5 lg:pr-20">
          <h2 class="title text-green-light mb-1 line-green">Lorem, ipsum dolor.</h2>
          <h2 class="title text-black mb-10 leading-none">Lorem, ipsum dolor Lorem ipsum dolor sit amet.</h2>
          <p class="md:text-xl mb-10">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed ab consequuntur error odit facere consectetur quam natus eius deserunt nam
          </p>
          <button class="px-5 py-2 bg-green-dark text-white rounded-md">Lorem, ipsum.</button>
        </div>

        <div class="about3"></div>
      </div>
    </section>

    <section class="w-full py-24 px-6">
      <div class="container">
        <h2 class="title text-center mb-10">
          Lorem ipsum dolor sit amet consectetur.
        </h2>

        <div class="flex flex-col lg:flex-row justify-between items-center">
          
          <div class="w-full lg:w-1/4 mb-10 lg:mb-0 lg:mr-10 relative line-green">
            Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Своего родного языкового ipsum речью злых за сих над заманивший там о они запятых если, осталось единственное рыбными продолжил на берегу.
          </div>

          <div class="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            <div
              class="w-full"
              v-for="item, n in 4" :key="n"
            >
              <div class="mb-3 flex items-center justify-start">
                <span class="text-green-dark font-semibold text-3xl w-1/4"> 0{{n+1}} </span>
                <span class="w-3/4 h-0.5 bg-green-dark mr-10" v-show="n != 3"></span>
              </div>
              <h4 class="mb-3 text-xl md:text-2xl font-semibold">Lorem ipsum dolor sit amet consectetur!</h4>
              <p> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ducimus quaerat, voluptas laudantium non necessitatibus labore suscipit iusto? 
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>

    <section class="w-full py-24 px-6">
      <div class="container">
        <h2 class="title text-green-light mb-10 text-center">Наши партнеры</h2>
        <p class="mb-10 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <div
          class="w-full flex justify-center flex-wrap"
        >
          <div 
            v-for="item, n in 6" :key="item"
            class="mx-5 mb-5"
            style="width: 200px"
          >
            <img :src="`https://picsum.photos/200/150?random=${n}`">
          </div>
        </div>
      </div>
    </section>

    <section class="w-full px-6 py-24">
      <div class="container flex items-center justify-center">
        <div class="w-1/2 mr-10 hidden md:block">
          <img src="../assets/img/form.png" alt="">
        </div>
        <form-component class="w-full sm:w-3/4 md:w-1/2" />
      </div>
    </section>

    <footer class="h-auto lg:min-h-screen bg-footer w-full py-24 px-6">
      <div class="container flex flex-col md:flex-row items-start justify-bertween ">
        <div class="w-full md:w-1/4 md:mr-10 lg:mr-32">
          <h2 class="title text-green-light mb-10 text-center">Contact Us</h2>  
          <p>
            Далеко-далеко за, словесными горами в стране гласных и согласных живут рыбные тексты. Буквенных, злых великий речью безопасную алфавит составитель.
          </p>
        </div>
        <div class="w-full md:w-3/4 flex justify-between mt-10 items-start flex-col sm:flex-row md:flex-col">
          <ul class="md:mt-8 flex flex-col md:flex-row md:text-xl uppercase font-medium md:items-start justify-between md:w-full">
            <li class="mb-5 md:mb-0"><a href="#">О компании</a></li>
            <li class="mb-5 md:mb-0"><a href="#">Поставщикам</a></li>
            <li class="mb-5 md:mb-0"><a href="#">прайс-лист</a></li>
            <li class="mb-5 md:mb-0"><a href="#">новости</a></li>
          </ul>

          <div class="flex gap-10 md:mt-12 flex-col md:flex-row md:items-start md:justify-between md:w-full">
            <div> 
              <p class="mb-5">
                <i class="ri-phone-line text-green-light text-2xl mr-2"></i>
                <a href="tel:+77773330022">8 777 333 00 22</a>
              </p>
              <p>
                <i class="ri-mail-line text-green-light text-2xl mr-2"></i>
                <a href="mailto:test@support.ru">teddy@gmail.com</a> 
              </p>
            </div>
            <div class="flex">
              <i class="ri-map-pin-line text-green-light text-2xl mr-2"></i>
              <p class="mb-0 mt-2">г. Шымкент, Тюлькубаский р-н</p>
            </div>
            <div>
              <button class="px-6 py-3 border rounded-xl border-green-light text-black">
                Заказать звонок
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>

  </div>
</template>

<script>
import FormComponent from '../components/FormComponent.vue'
import Navbar from '../components/Navbar.vue'

export default {
  components: {Navbar, FormComponent}  
}
</script>
