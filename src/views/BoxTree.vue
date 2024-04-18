<template>
    <div class="Mig">
        <img class="Christian" src="../assets/male.png" alt="Billede 1">
    
        <h1>
            I min fritid elsker jeg at male og
            fordybe mig i opgaver. Mine malerier 
            har jeg altid givet navne, ikke efter 
            hvad de ligner, men hvorfor de er lavet. 
            Det handler ikke bare om penselstrøg 
            og farver, men om følelser og tanker, 
            der inspirerer mig til at skabe. At 
            male er min måde at udtrykke mig selv 
            på, at bearbejde mine tanker og følelser 
            gennem kunsten. Det er en form for terapi, 
            hvor jeg finder ro og glæde i skabelsesprocessen.
        </h1>
    
      </div>
      <div class="Mig2">
    
        <h1>
           Kvinden - Maleriet kvinden er 
           indspireret af en ung dame jeg mødte i Rom.
        </h1>
        <img class="Christian" src="../assets/kvinde.png" alt="Billede 1">

    
      </div>

      <div class="Mig">
        <img class="Christian" src="../assets/drage.png" alt="Billede 1">
    
        <h1>
            Dragen - Maleriet dragen er lavet med bagrund 
            af min kæreste stor forælskelse i drager.
        </h1>
    
      </div>

      <div class="Mig2">
    
    <h1>
        I min fritid elsker jeg at styrketræne 
        og gå i fitness samt lave vægtløftning. 
        Én gang om ugen træner jeg sammen med 
        min personlige træner, hvor vi fokuserer 
        på at forbedre både min koncentration og 
        udholdenhed. Når vejret er godt, nyder 
        jeg at løbe en tur for at tømme hovedet 
        og få helt ny energi. Det er en fantastisk 
        måde for mig at holde mig aktiv og sund, 
        samtidig med at det giver mig mentalt overskud.
    </h1>
    <img class="Christian" src="../assets/skinny1.png" alt="Billede 1">


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
