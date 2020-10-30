<template>
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../assets/imageAdvertisement/0.png" style="width:500px;height: 400px"  class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="../assets/imageAdvertisement/hırsız1.png" style="width:500px;height: 400px"  class="d-block w-100" alt="...">
    </div>
    
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</template>


<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/js/bootstrap.min.js'

export default {
  name: 'MainSlider'

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