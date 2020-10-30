<template>
  <div id="app" class="anasayfa">
       <!--  <router-link to="/hello">HelloWorld</router-link>
       <router-link to="/hak">Hakkimizda</router-link>
       <router-view></router-view>-->
       
    <div class="container-fluid">
        
          <!-- _____________________________****_____________________________ -->
         <div class="row ">
             <div class="col pink">
             
                 <MainSlider/>
             </div>
         </div>
         <div class="row ">
             <div class="col-1 white">
             
             </div>
             <div class="col-10 white yazi">
               <h1> <p> Demsa Çelik Kapı</p></h1>
               <h5> Demsa İnşaat Sanayi Limited Şirketi 20 yılı aşkın tecrübesiyle Türkiye'nin en eski çelikkapı imalatı hizmeti veren kuruluşlarından biridir.Hızlı ve hijyenik teslimat, yeni nesil kilit sistemi ve tasarım anlayışımızla sektörün sayılı firmalarından olmaya devam ediyoruz.Çelikkapı imal edilirken sırasıyla kesim, delim, büküm, punta, gaz altı kaynağı, taşlama(tesviye), boya, toplama, montaj gibi işlemlerden geçer.Şirket bu işlemlerin hepsini kendi bünyesinde yapıyor olup çelikkapı sektörünün gelişiminde öncü olmaya devam etmektedir.
               </h5>
             </div>
             <div class="col-1 white">
             
             </div>             
         </div>
           <!-- _____________________________****_____________________________ -->
           <div class="row ">
             <div class="col-1 white">
                 
                <!-- <router-link to="/Urunler"> UrUnler</router-link>-->
             </div>
             <div class="col-10 white">
             <!-- _____________________________________________________________ -->
                   <KapiSlider/>
              
             <!-- _____________________________________________________________ -->
             </div>
             <div class="col-1 white ">
                 
             </div>
         </div>
          <!-- _____________________________****_____________________________ -->

         <div class="row ">
             <div class="col-md-2 ">

             <!-- _____________________________________________________________ -->
             </div>
             <div class="col-md-4">
             <!-- _____________________________________________________________ -->
             <div class="card" >
             <!-- _____________________Müşteriden gelen gönderiler slider ı _____________________ -->
                     <a> <MusteriSlider/></a>
                      <div class="card-body">
                        <p class="card-text">Müşterilerimizden gelenler...</p>
                      </div>
                  </div>  
             <!-- _____________________________________________________________ -->
             </div>
            
             <div class="col-md-4 " style="">
                  
                  <div class="card">
                    <a><img class="card-img-top" src="../assets/imageProduct/b1.png" style="height:450px;" alt="Card image cap"></a>
                      <div class="card-body">
                        <p class="card-text">Bizi İnstagram hesabımızdan takip edebilirsiniz..❤💜🧡</p>
                      </div>
                  </div>
                  <div class="card" style="margin-right:2%;float:left; width:48%">
                    <a href="https://www.instagram.com/demsacelikkapi/"><img class="card-img-top" src="../assets/imageAdvertisement/instagram.jpg" alt="Card image cap"></a>
                      <div class="card-body">
                        <p class="card-text">Bizi İnstagram hesabımızdan takip edebilirsiniz..❤💜🧡</p>
                      </div>
                  </div>
                     <div class="card" style="width:50%">
                    <a><img class="card-img-top" src="../assets/imageAdvertisement/wp.jpg"></a>
                      <div class="card-body">
                        <p class="card-text">Bizimle iletişime geçebilirsiniz..<a><img class="card-img-top" src="../assets/imageAdvertisement/phone.png" style="height:30px; width:30px" alt="Card image cap"></a></p>
                      </div>
                  </div>
             </div>
               <div class="col-md-2">
                 
                <!-- <router-link to="/Urunler"> UrUnler</router-link>-->
             </div>
         </div>
   </div>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import Hakkimizda from './components/Hakkimizda.vue'
import MainSlider from '../components/KapiSlider'
import KapiSlider from '../components/MainSlider'
import MusteriSlider from '../components/MusteriSlider'

export default {
  name: 'App',
  components: {
  //  HelloWorld,
  //  Hakkimizda//,
    MainSlider,
    KapiSlider,
    MusteriSlider
      }
}
</script>

<style>
.yazi{
  height: 10%;
  text-align: center;
  font-style: Verdana, sans-serif;
}
.row{
  padding-bottom:3% ;
}
.white{
  background-color: white;
}
div.col.pink
{

  background-color: rgb(255, 145, 145); 
  width: 100%;
  margin:0; 
  padding: 0;
}

.anasayfa{
  background-color:rgb(255, 255, 255);
}
.ground{
    background-color: rgb(255, 255, 255);/* arka plan rengi*/
}
.b{
   background-color: rgb(255, 210, 210);
}
.card-body{
   background-color:#343a40;
   color:white;
   border-radius: 0px 0px 10px 10px;
}


</style>