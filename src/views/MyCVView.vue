
<template>
  <div class="why">
    <h1>
      Mit CV både i skriftlig 
      form og som video. Jeg har valgt at præsentere 
      min erfaring og mine kvalifikationer på to måder 
      for at give jer et omfattende indtryk af mine 
      kompetencer og personlighed. Ved at kombinere 
      tekst og video håber jeg at kunne give jer et 
      mere nuanceret billede af, hvad jeg kan bidrage med
      og hvem jeg er som person
    </h1>
  </div>

<div class="on-line">
  <div class="video-container">
    <iframe width="560" height="315" :src="embedURL" frameborder="0" allowfullscreen></iframe>
  </div>
  <div class="pdf-container">
    <embed :src="pdfURL" type="application/pdf" width="100%" height="600px" />
  </div>
</div>
</template>

<script setup>
import { ref, computed } from 'vue';

const youtubeURL = ref('https://www.youtube.com/watch?v=ju7_szZHZFo');
const pdfURL = 'https://firebasestorage.googleapis.com/v0/b/ronja-portfolio-2024.appspot.com/o/cv3-kopi.pdf?alt=media&token=0d52ad87-97ba-44d4-a2db-d5cd450e9751';

const embedURL = computed(() => {
  return youtubeURL.value.replace('watch?v=', 'embed/');
});
</script>


<style>
.video-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;

}

.pdf-container {
  text-align: center;
  max-width: 400px;
  padding-left: 40px;
}

.on-line {
  display: flex;
  justify-content: center;

}
.why {
  text-align: center;
  color: #000000;
  margin-left: 100px;
  margin-right: 100px;
  margin-top: 70px;
  margin-bottom: 70px;
  padding-bottom: 50px;
  padding-right: 50px;
  padding-left: 50px;
  padding-top: 50px;
  background-color: #fcf7c3;
}
h1 {
  font-size: 17px;
}
@media (max-width: 700px) {
  .on-line {

    display: block;
  justify-content: center;
  }

  }


</style>


