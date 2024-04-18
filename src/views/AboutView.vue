<template>
  <div class="about">
    <h1 class="title"></h1>
        <p class="title2" >Med en positiv personlighed bringer 
      jeg en åben tilgang til kreativt arbejde, 
      dybt engageret i hver opgave. Jeg lægger 
      stor ære i at udføre arbejde af høj kvalitet, 
      og min vedvarende entusiasme bidrager til et 
      dynamisk og produktivt arbejdsmiljø.</p>

  </div>
  <div class="image-container">
      <a href="#link1" class="image-link"><img src="../assets/christian.png" alt="Billede 1"></a>
      <a href="#link2" class="image-link"><img src="../assets/søskende .png" alt="Billede 2"></a>
      <a href="#link3" class="image-link"><img src="../assets/træning.png" alt="Billede 3"></a>
    </div>
</template>

<script setup>

</script>

<style>
.title2 {
  font-size: 80px; /* Ændre størrelsen til det ønskede */
}
.about {
  text-align: center;
  color: #020203;
  margin: 20px, 20px, 50px, 20px;
  padding-bottom: 50px;
  background-color: #fcf7c3;
  max-width: 600px ;
  height: 300px;
  display: flex;
}
.image-container {
  display: flex;
}

.image-link {
  margin-right: 10px; /* Juster margen efter behov */
}

.image-link img {
  width: 200px; /* Juster bredden efter behov */
  height: auto; /* Bevar aspect ratio */
}

/* Tilføj hover effekt her */
.image-link:hover img {
  filter: black-and-white; /* Gør billedet sort/hvidt */
  /* filter: brightness(70%);  Gør billedet mørkere */
}

.image-link1:hover::after {
  content: "Mit privatliv"; /* Tilføj tekst */
  position: absolute;
  top: 50%; /* Juster placering efter behov */
  left: 50%; /* Juster placering efter behov */
  transform: translate(-50%, -50%);
  color: white;
}

.image-link2:hover::after {
  content: "Min familie"; /* Tilføj tekst */
  position: absolute;
  top: 50%; /* Juster placering efter behov */
  left: 50%; /* Juster placering efter behov */
  transform: translate(-50%, -50%);
  color: white;
}

.image-link3:hover::after {
  content: "Mine Hobbier"; /* Tilføj tekst */
  position: absolute;
  top: 50%; /* Juster placering efter behov */
  left: 50%; /* Juster placering efter behov */
  transform: translate(-50%, -50%);
  color: white;
}

@media (max-width: 700px) {
  .col {
    flex: 0 0 100%;
  }

}
</style>

