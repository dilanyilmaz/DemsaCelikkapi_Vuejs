<template>
     <div class="maindiv">
         <div id="demo1" class="carousel slide" >

            <!-- Indicators -->
            <ul class="carousel-indicators">
            <li data-target="#demo1" data-slide-to="0" class="active"></li>
            <li data-target="#demo1" data-slide-to="1"></li>
            <li data-target="#demo1" data-slide-to="2"></li>
            <li data-target="#demo1" data-slide-to="4"></li>            
            </ul>
  
          
              <!-- The slideshow -->
            <div class="carousel-inner">
                <div class="carousel-item active" >
                    <img src="../assets/imageAdvertisement/slider_antre1.jpg"   class="img-slider">
                </div>
                <div class="carousel-item">
                    <img src="../assets/imageAdvertisement/slider_antre2.jpg"  class="img-slider">
                </div>
                <div class="carousel-item">
                    <img src="../assets/imageAdvertisement/slider_antre3.jpg"  class="img-slider">
                </div>
                <div class="carousel-item">
                    <img src="../assets/imageAdvertisement/slider_antre4.jpg"  class="img-slider">
                </div>                
            </div>
                
             <!-- Left and right controls -->
            <a class="carousel-control-prev" href="#demo1" data-slide="prev">
             <span class="carousel-control-prev-icon"></span>
            </a>
            <a class="carousel-control-next" href="#demo1" data-slide="next">
            <span class="carousel-control-next-icon"></span>
            </a>
         </div>
    </div>
</template>


<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/js/bootstrap.min.js'

export default {
  name: 'KapiSlider'

}
</script>

<style>
.maindiv.img{
    width: 100%;
}
div.carousel-inner .img{
    width: 100%;
}
.img-slider{
    width:100%;
    height: 900px;
    margin: 0px;
 }
@media(max-width:720px){
.img-slider{
    width:100%;
    height: 10%;
    }

}
</style>