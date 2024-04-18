<template>
  <div class="explore">
    <div class="container">
      <div class="row">
        <div class="col">
          <RouterLink to="/box6">
            <div class="box">
              <img src="../assets/Sustenia.png" alt="Billede 1">
              <div class="overlay"></div>
              <div class="content">
                <h2>Sustenia</h2>
                <p>Et projekt om at gøre EASV mere bæredygtig</p>
              </div>
            </div>
          </RouterLink>
        </div>
        <div class="col">
          <RouterLink to="/box7">
            <div class="box">
              <img src="../assets/Jobaggent.png" alt="Billede 2">
              <div class="overlay"></div>
              <div class="content">
                <h2>Jobaggent</h2>
                <p>En Jobaggent til hjælp for studerende</p>
              </div>
            </div>
          </RouterLink>
        </div>
        <div class="col">
          <RouterLink to="/box8">
            <div class="box">
              <img src="../assets/arnejakobsen.png" alt="Træning">
              <div class="overlay"></div>
              <div class="content">
                <h2>Eksamensprojekt</h2>
                <p>Trapholt med fokus i Arne Jacobsen</p>
              </div>
            </div>
          </RouterLink>
        </div>
        <div class="col">
          <RouterLink to="/box9">
            <div class="box">
              <img src="../assets/harald.png" alt="Your Image 1">
              <div class="overlay"></div>
              <div class="content">
                <h2>Tutshskærm</h2>
                <p>En hjælp til ukende kunder i byggemarkeder</p>
              </div>
            </div>
          </RouterLink>
        </div>
        <div class="col">
          <RouterLink to="/box10">
            <div class="box">
              <img src="../assets/PlakattilGjesing.png" alt="Your Image 2">
              <div class="overlay"></div>
              <div class="content">
                <h2>Gjesing</h2>
                <p>Digital interaktiv infofolder om en bydel i Esbjerg</p>
              </div>
            </div>
          </RouterLink>
        </div>
        <div class="col">
          <RouterLink to="/box11">
            <div class="box">
              <img src="../assets/22JumpStreet.png" alt="Your Image 3">
              <div class="overlay"></div>
              <div class="content">
                <h2>Video Projekt</h2>
                <p>22 Jump Street </p>
              </div>
            </div>
          </RouterLink>
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
  