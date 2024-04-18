<template>
    <div class="Mig">
        <img class="Christian" src="../assets/gjesing.png" alt="Billede 1">
    
        <h1>
            Vores opgave var at udarbejde en digital 
            brochure med omfattende information om 
            en specifik bydel i Esbjerg. Kravene var 
            klare: Vi skulle selv tage billederne og 
            indsamle alle oplysningerne, og derefter 
            skulle alt præsenteres i et digitalt format. 
            Dette gav os en unik mulighed for at udforske 
            bydelen og fremhæve dens unikke karakteristika 
            og attraktioner gennem vores egne linser. 
            Samtidig skulle vi sikre, at brochuren var 
            informativ, engagerende og lettilgængelig 
            for alle, der ønskede at lære mere om denne 
            bydel. Det var en udfordrende, men spændende 
            opgave, der gav os mulighed for at kombinere 
            vores kreative og researchfærdigheder for at 
            skabe et digitalt værk, der ville give et dybtgående 
            indblik i denne Esbjerg-bydel.
        </h1>
    
      </div>
      <div class="Mig2">
    
        <h1>
           QR-koden på plakaten kan scannes og vil 
           sende dig videre til en digital interaktiv
              infofolder om Gjesing. Her kan du læse
                mere om bydelen, se billeder og video.
            
        </h1>
        <img class="Christian" src="../assets/plakat.png" alt="Billede 1">

    
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