<template>
  <div class="hak">
    <div class="container-fluid">

     <div class="row ">
        <div class="col-sm-2">
          
        </div>
        <div class="col-sm-4 page">
          
         
           <h2>Hakkımızda</h2>
          Demsa inşaat sanayi limited şirketi 1992 yılında kurulmuş Türkiye'nin en eski çelikkapı
          imalatı hizmeti veren kuruluşlarından biridir. Şirketin ilk yerleşkesi İstanbul-Fatih 
          ilçesinde iken günümüzde Zeytinburnu ilçesindedir. Demirciler sitesi gibi bir sanayi
          kuruluşunun merkezinde butik kapıcılık anlayışıyla hizmet vermektedir.
          Çelikkapı imal edilirken sırasıyla kesim, delim, büküm, punta, gaz altı kaynağı, 
          taşlama(tasviye), boya, toplama, montaj gibi işlemlerden geçer. Şirket bu işlemlerin 
          hepsini kendi bünyesinde yapıyor olup çelikkapı sektörünün gelişiminde öncü
          olduğu bir çok konu olmuştur.
        </div>
         <div class="col-sm-4" style="margin-top:2%">
          <img src="../assets/imageAdvertisement/Ref1.png" alt="Product" class="img-fluid">
        </div>
        <div class="col-sm-2">
         
        </div>
     </div>
</div>
 
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'Hakkimizda',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hak{
  background-color: rgb(212, 212, 211);
  margin-top:5%;
  font-style: Verdana, sans-serif;
}
h2{
  padding-bottom: 15px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.page{
  text-align: center;
  margin-top:50px;
  font-size: 20px;
  text-decoration: none;
  color: rgb(5, 5, 5);

}
.img-fluid{
  padding: 20px;
  width:500px;
  height:400px;
}
@media(max-width:720px){
.page{
  text-align: center;
  margin-top:50px;
  font-size: 15px;
  text-decoration: none;
  color: rgb(5, 5, 5);

}
}
</style>
