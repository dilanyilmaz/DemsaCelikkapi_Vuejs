<template>
     <div class="maindiv">
             <div id="demo1" class="carousel slide" data-ride="carousel" >

            <!-- Indicators -->
            <ul class="carousel-indicators">
            <li data-target="#demo1" data-slide-to="0" class="active"></li>
            <li data-target="#demo1" data-slide-to="1"></li>
            <li data-target="#demo1" data-slide-to="2"></li>
            </ul>
  
          
              <!-- The slideshow -->
            <div class="carousel-inner">
                <div class="carousel-item active" >
                    <img src="../assets/imageProduct/13.png"  style=" width:500px; height:500px" class="img-thumbnail">
                </div>
                <div class="carousel-item">
                    <img src="../assets/imageProduct/14.png"  style=" width:500px; height:500px" class="img-thumbnail">
                </div>
                <div class="carousel-item">
                    <img src="../assets/imageProduct/15.png" style=" width:500px; height:500px" class="img-thumbnail">
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
  name: 'ProductSlider'

}
</script>

<style>


  .maindiv{
    width: 30%;
    height: 100%;
    }
</style>