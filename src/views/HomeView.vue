<template>
  <div class="hi">
    <h1>
      Med en positiv indstilling og en 
      åbenhed over for kreativt arbejde, 
      engagerer jeg mig dybt i hver eneste 
      opgave, hvilket bidrager til et dybtgående 
      og meningsfyldt resultater. Jeg sætter en 
      ære i at levere arbejde af højeste kvalitet 
      og stræber altid efter at overgå forventningerne. 
      Min vedvarende entusiasme skaber et dynamisk 
      og produktivt arbejdsmiljø, hvor idéer blomstrer, 
      og succes opnås gennem samarbejde og dedikation.
    </h1>
    <img class="protræt" src="../assets/POTRÆT.png" alt="Billede 1">
  </div>
  <div class="explore">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="box">
            <RouterLink to="/about2">
              <img src="../assets/christian.png" alt="Billede 1">
              <div class="overlay"></div>
              <div class="content">
                <h2>Om mig</h2>
                <p>Mig og min hverdag</p>
              </div>
            </RouterLink>
        
          </div>
        </div>
        <div class="col">
          <div class="box">
            <RouterLink to="/box1">
              <img src="../assets/søskende .png" alt="Billede 2">
              <div class="overlay"></div>
              <div class="content">
                <h2>Min opvækst</h2>
                <p>Lidt om hvor jeg kommer fra</p>
              </div>
            </RouterLink>
          </div>
        </div>
        <div class="col">
          <div class="box">
            <RouterLink to="/box2">
              <img src="../assets/træning2.png" alt="Træning">
              <div class="overlay"></div>
              <div class="content">
                <h2>Hobby</h2>
                <p>Min trænings hobby</p>
              </div>
            </RouterLink>
          </div>
        </div>
        <div class="col">
          <div class="box">
            <RouterLink to="/box3">
              <img src="../assets/kvinde.png" alt="Your Image 1">
              <div class="overlay"></div>
              <div class="content">
                <h2>Malerier</h2>
                <p>En lille bid af mine malerier</p>
              </div>
            </RouterLink>
          </div>
        </div>
        <div class="col">
          <div class="box">
            <RouterLink to="/box4">
              <img src="../assets/ler.png" alt="Your Image 2">
              <div class="overlay"></div>
              <div class="content">
                <h2>Ler værkstedet</h2>
                <p>Små figur, skåle og vaser</p>
              </div>
            </RouterLink>
          </div>
        </div>
        <div class="col">
          <div class="box">
            <RouterLink to="/box5">
              <img src="../assets/tegninger.png" alt="Your Image 3">
              <div class="overlay"></div>
              <div class="content">
                <h2>Tegninger</h2>
                <p>Lavet både til plakater og skole brug</p>
              </div>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1400px;
  margin: 0 auto;
  padding-top: 50px;
}

.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #2c2d2d;
}

.col {
  flex: 0 0 calc(33.33% - 20px);
  margin-bottom: 40px;
}

.box {
  position: relative;
}

.box img {
  width: 100%;
  height: auto;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.box:hover .overlay {
  opacity: 0.7;
}

.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  text-align: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.box:hover .content {
  opacity: 1;
}

.hi {
  text-align: center;
  color: #000000;
  margin-left: 200px;
  margin-right: 200px;
  margin-top: 70px;
  margin-bottom: 70px;
  padding-bottom: 50px;
  padding-right: 50px;
  padding-left: 50px;
  padding-top: 50px;
  background-color: #fcf7c3;
  display: flex;
  align-items: center;
}
h1 {
  font-size: 17px;
}

.hi .protræt {
  width: 50%;
  height: auto;
}

.protræt img {
  width: 20px; /* Ændr denne værdi til den ønskede bredde */
  height: auto; /* Dette sikrer, at højden justeres proportionalt */
}

/* Tilpasning til mindre skærm */
@media (max-width: 700px) {
  .col {
    flex: 0 0 100%;
  }
  
  .hi {
    margin-left: 20px;
    margin-right: 20px;
    padding: 20px;
  }

  .hi h1 {
    font-size: 12px;
  }

  .hi .protræt {
    width: 50%;
  }


  
}

.box {
  position: relative;
}

.box img {
  width: 100%;
  height: auto;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.box:hover .overlay {
  opacity: 0.7;
}

.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  text-align: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.box:hover .content {
  opacity: 1;
}
</style>

