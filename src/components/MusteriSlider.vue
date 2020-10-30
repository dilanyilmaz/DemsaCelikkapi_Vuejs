<template>
     <div >
             <div id="dem1" class="carousel slide" data-ride="carousel" >

            <!-- Indicators -->
            <ul class="carousel-indicators">
            <li data-target="#dem1" data-slide-to="14" class="active"></li>
            <li data-target="#dem1" data-slide-to="15"></li>
            <li data-target="#dem1" data-slide-to="17"></li>
            <li data-target="#dem1" data-slide-to="18"></li>
            <li data-target="#dem1" data-slide-to="19"></li>
            <li data-target="#dem1" data-slide-to="20"></li>
            <li data-target="#dem1" data-slide-to="21"></li>
            </ul>
  
          
              <!-- The slideshow -->
            <div class="carousel-inner">
                <div class="carousel-item active" >
                    <img src="../assets/imageCustomer/m2.png"   class="img-thumbnail">
                </div>
                <div class="carousel-item">
                    <img src="../assets/imageCustomer/m6.png"  class="img-thumbnail">
                </div>
                <div class="carousel-item">
                    <img src="../assets/imageCustomer/m7.png"  class="img-thumbnail">
                </div>
                   <div class="carousel-item">
                    <img src="../assets/imageCustomer/m18.png"  class="img-thumbnail">
                </div>
                  <div class="carousel-item">
                    <img src="../assets/imageCustomer/m19.png"   class="img-thumbnail">
                </div>
                  <div class="carousel-item">
                    <img src="../assets/imageCustomer/m20.png"  class="img-thumbnail">
                </div>
                 <div class="carousel-item">
                    <img src="../assets/imageCustomer/m25.png"   class="img-thumbnail">
                </div>
            </div>
                
             <!-- Left and right controls -->
            <a class="carousel-control-prev" href="#dem1" data-slide="prev">
             <span class="carousel-control-prev-icon"></span>
            </a>
            <a class="carousel-control-next" href="#dem1" data-slide="next">
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
  name: 'MusteriSlider'

}
</script>

<style>
.carousel slide{
    width: 100%;
    height: 100%;
   
}
/*
.maindiv1{
    margin-top:500px;
    width: 100%;
    height: 100%;
    margin: auto;
    }*/



</style>