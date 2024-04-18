<template>

    <div class="Mig">
        <img class="Christian" src="../assets/familie.png" alt="Billede 1">
    
        <h1>
            Jeg er opvokset i en lille by ved navn Oksbøl
            , hvor jeg har boet sammen med mine fire 
            søskende. Mine to brødre, Viktor og Buster, 
            og mine to søstre, Agnes og Freja, udgjorde 
            vores livlige lille familie og vores forældre, Brian og Karina.
            Idag er vi ved at være en stor familie, da vi alle er 
            blevet voksne og har fået vores egne partnere ud over 
            vores yngste lillebror, som kun er 10 år.
        </h1>
    
      </div>
    
      <div class="explore">
          <div class="container">
            <div class="row">
              <div class="col">
                <div class="box">
                  <img src="../assets/hej.png" alt="Billede 1">
                  <div class="overlay"></div>
                  <div class="content">
                    <h2>Studenter dag</h2>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="box">
                  <img src="../assets/ferie.png" alt="Billede 2">
                  <div class="overlay"></div>
                  <div class="content">
                    <h2>Ferie med familien</h2>
    
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="box">
                  <img src="../assets/student.png" alt="Træning">
                  <div class="overlay"></div>
                  <div class="content">
                    <h2>Circus Torment</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
    .Mig {
      font-size: 17px;
    }
    
    .Mig .Christian {
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
      .Mig {
    margin-left: 20px;
    margin-right: 20px;
    padding: 20px;
  }

  .Mig h1 {
    font-size: 12px;
  }

  .Mig .Christian {
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
