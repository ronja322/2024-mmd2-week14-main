<template>
    <div class="Mig">
        <img class="Christian" src="../assets/grøn.png" alt="Billede 1">
    
        <h1>
            Vi havde en bæredygtighedsuge, der var 
            dedikeret til bæredygtighed med særlig 
            fokus på løsninger, der kunne gøre EASV 
            til et grønnere sted. Vi var en gruppe 
            på seks personer, der arbejdede sammen 
            om at udvikle projektet SUSTENIA.
        </h1>
    
      </div>
      <div class="Mig2">
    
        <h1>
            Min gruppe og jeg, iværksat en ambitiøs indsats 
            for at berige biodiversiteten på vores skole 
            ved at introducere en mangfoldighed af vilde 
            blomster på vores græsarealer. Denne initiativrige 
            tilgang sigter ikke blot mod at forbedre det 
            æstetiske aspekt af skolens omgivelser, men 
            også at skabe et varigt habitat for lokale 
            insekter, sommerfugle og bier. Ved at 
            integrere disse naturlige elementer i skolemiljøet 
            håber vi at stimulere et sundt og bæredygtigt økosystem, 
            der vil gavne både den lokale flora, fauna og 
            elevernes forståelse af naturens kompleksitet.

        </h1>
        <img class="Christian" src="../assets/blå.png" alt="Billede 1">

    
      </div>

      <div class="Mig">
        <img class="Christian" src="../assets/vinder.png" alt="Billede 1">
    
        <h1>
            Ugen blev afsluttede med en kåringen 
            af de 3 bedste idéer til at forbedre bæredygtigheden 
            på EASV. Der var vi en af de 3 vindere, som dommerpernelet
            mente kom frem med det best mulige løsning for skolen, som 
            præmie modtog vi bæredygtige tasker af upcyclede redningsbådsmaterialer
        </h1>
    
      </div>





    </template>

<style>
.Mig {
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
.Mig2 {
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
.Mig {
  font-size: 17px;
}

.Mig .Christian {
  width: 50%;
  height: auto;
}
.Mig2 .Christian {
  width: 50%;
  height: auto;
}

.Christian img {
  width: 20px; /* Ændr denne værdi til den ønskede bredde */
  height: auto; /* Dette sikrer, at højden justeres proportionalt */
}
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
    h1 {
      font-size: 70px;
    }
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

  /* Tilpasning til mindre skærme */
@media (max-width: 700px) {
  .col {
    flex: 0 0 100%;
  }
  .Mig,
  .Mig2 {
    margin-left: 20px;
    margin-right: 20px;
    padding: 20px;
  }

  .Mig h1,
  .Mig2 h1 {
    font-size: 12px;
  }

  .Mig .Christian,
  .Mig2 .Christian {
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