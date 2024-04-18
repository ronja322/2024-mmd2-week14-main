<template>
    <div class="Mig">
        <img class="Christian" src="../assets/logo22.png" alt="Billede 1">
    
        <h1>
            Vi skulle forstille os at vi skulle 
            lave en ny hjemmeside til Trapholt. 
            Vi skulle skabe en tiltalende hjemmeside, 
            der giver information om aktuelle udstillinger 
            og Trapholt generelt. Den guidede tur, vi 
            var på handlede om Arne Jakobsen, vil blive 
            en permanent del af Trapholts udstillinger 
            i fremtiden. Deres ønske, var at den pågældende 
            kunstner skulle være inspirationen til den nye 
            visuelle identitet, som vi skulle skabe.
        </h1>
    
      </div>
      <div class="Mig2">
    
        <h1>
            Som et af de grafiske elementer, valgte vi at lave
            2 “forskellige” flyers. En flyer ville specielt give
            mening for denne målgruppe, da det vil give et
            lille indblik, i hvad de vil kunne finde på udstillin-
            gen, samt er den veludført med et sirligt design, så
            brugeren vil opnå den afslappet følelse de søger, når
            opsøger kunsten, det vil de kunne opnå da brugeren
            ikke skal bruge for mange kræfter på at udforske
            designet eller tænke over hvor det er henne.    
        </h1>
        <img class="Christian" src="../assets/2.png" alt="Billede 1">

    
      </div>

      <div class="Mig">
        <img class="Christian" src="../assets/folder.png" alt="Billede 1">
    
        <h1>
            Vores inspiration til vores flyers var selvfølgelig
Kubeflex, samt andre tidligere plakater og designs
af Arne Jacobsen. Formålet med udseendet på vores
flyers skulle være, at selv uden logo, ville man være
klar over, hvem udstillingen handler om.
        </h1>
    
      </div>

      <div class="Mig2">
    
    <h1>
        Min tilgang til design af plakaten er blevet kærnet
ud af en dyb respekt for Arne Jacobsens æstetik,
især hans historiske plakatkunst, der emmer af en
karakteristisk nostalgi. Jeg ønsker at indfange denne
nostalgiske stemning for at appellere til den ældre
målgruppe, og samtidig give den yngre generation
en følelse af ro gennem de klassiske designelemen-
ter.
    </h1>
    <img class="Christian" src="../assets/væg.png" alt="Billede 1">
  </div>
  <div class="Mig3">
  <a href="https://eksamentrapholt.dk/?fbclid=IwAR0r9bq_zVS-_zHHXAbboFrNj9B39yigPDyzzOcwe4smjq2lgfWMcuPvsEg">
    <img class="Christian" src="../assets/hjemmeside.png" alt="Billede 1">
  </a>

  <h1>
    Ved at klikke på billedet ville du blive ført til
    hjemmesiden.
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
.Mig3 {
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
.Mig3 .Christian {
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