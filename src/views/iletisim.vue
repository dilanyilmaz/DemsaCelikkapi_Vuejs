<template>
    <div class="iletisim">
        <div class="container-fluid">
          <div class="row" style="height:500px;">
              <div class="col-sm-3">

             </div>

                 <div class="col-sm-3" style="margin-top:5%">

                 <div style="font-size:20px;">
                    <b><h2>Demsa Çelik Kapı</h2></b>
                    <p><b>Adres :</b> Zeytinburnu Demirciler sitesi 2.cadde no:28, Seyitnizam Mah. Zeytinburnu istanbul</p>
                    <p><b>İletişim :</b> 0542 605 58 42</p>
                 </div> 
                 </div>

                 <div class="col-sm-3" style="margin-top:2%; border-radius:25px;">
       
                   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.938604419281!2d28.898887315413926!3d41.0047169793012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabb08cf1393ab%3A0x1bad90bd8ff2e274!2sSeyitnizam%2C%20Demirciler%20Sitesi%202.%20Cd.%20No%3A28%2C%2034015%20Zeytinburnu%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1602382484272!5m2!1str!2str" 
                    frameborder="0" style="border:0; width:100%; height:100%;" allowfullscreen="" aria-hidden="false" tabindex="0">
                   </iframe>
                 </div>
             <div class="col-sm-3">
                 
             </div> 
           
          </div>
         </div>
        <div>
         
       </div>
    </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'iletisim',
  props: {
    msg: String
  }
}
</script>

<style>
.iframe{
  width:100%;
  height:100%;
}
.iletisim{
    margin-top:5%;
    padding: 10px;
    background-color: rgb(212, 212, 211);
    font-style: Verdana, sans-serif;
}
@media(max-width:720px){
.iframe{
  width:50%;
  height:50%;
}
}


</style>