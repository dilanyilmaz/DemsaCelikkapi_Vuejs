<template>
  <div id="app" class="app_body">
<!--justify-content-end sağa yaslama komutu-->
 

      <!-- _____________________________________________________________ -->
      <nav class="navbar  navbar-expand-lg navbar-dark bg-dark ">
      
          <a class="navbar-brand"><img src="./assets/imageProduct/logoY.png" class="logo"></a>
  
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
         <div class="collapse navbar-collapse " id="navbarNavDropdown">
            <ul class="navbar-nav  ml-auto">
               <li class="nav-item active ">
                   <a class="nav-link " ><router-link to="/">Anasayfa</router-link></a>
               </li>
              <li class="nav-item">
                  <a class="nav-link" ><router-link to="/Hakkimizda">Hakkımızda</router-link></a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" ><router-link to="/Urunler">Ürünler</router-link></a>
              </li>
                <li class="nav-item">
                  <a class="nav-link" ><router-link to="/iletisim">İletişim</router-link></a>
              </li>
            </ul>
          </div>
         
       </nav>
      <!-- _____________________________________________________________ -->

    
      <!--  <router-link to="/hello">HelloWorld</router-link>
       <router-link to="/hak">Hakkimizda</router-link>
       <router-view></router-view>
       -->
       <router-link to="/"></router-link>
       <router-view></router-view>

      <footer class="footer">
      <p style="font:bold">Demsa İnşaat Sanayi Limited Şirketi</p>
      <p>
        <a href="#">Başa dönmek için tıklayınız..</a>
      </p>
      </footer>

  </div>
</template>

<script >

//import HelloWorld from './components/HelloWorld.vue'
//import Hakkimizda from './components/Hakkimizda.vue'
//import MainSlider from './components/MainSlider.vue'

//slider çalışması için bunu yüklü olması lazım bootstrap.min.js
import 'bootstrap/dist/js/bootstrap.min.js'
//import Anasayfa from './components/Anasayfa.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'App',
  components: {
   // HelloWorld,
  //  Hakkimizda,
  // MainSlider,
  //Anasayfa

  }
}



</script>

<style>
.ml-auto .dropdown-menu {
    left: auto !important;
    right: 0px;
}

li a{
    font-size: 20px;
    padding-left: 35px;
    padding-right: 35px;
    text-align: center;
}
a.nav-link{
 text-decoration: none;
 list-style: none;
}

a:hover{
  color:rgb(236, 47, 47);
  text-shadow: 3px 2px 1px #000;
  text-decoration: none;
    font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;

  }
a{
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 1em;
  text-decoration: none;
  color: rgb(250, 250, 250);
}
img.logo{
  width:450px;
  height:120px;
}
@media(max-width:720px){
    img.logo{
    width: 200px;
    height: 50px;
    padding-left:15px;
  }
    li a{
    font-size: 15px;
    padding-left: 35px;
    text-align: center;
}
}
/*
 * Footer
 */
 .footer {

   position: fixed;
   left: 0;
   bottom: 0;
   width: 100%;
   background-color: rgba(30, 39, 87, 0.3);
   color: white;
   text-align: center;
}

.footer p:last-child {
  margin-bottom: 0;
}

</style>