<template>
  <article class="home-info-banner">
    <div class="home-info-banner-container">
      <div>
        <h2 class="text-h3">My Games List is...</h2>
      </div>
      <div class="home-info-banner-list">
        <ul class="home-info-banner-list-row-1">
          <li>You can Lorem ipsum dolor sit amet consectetur adipisicing elit</li>
          <li>You can Lorem ipsum dolor sit amet consectetur adipisicing elit</li>
          <li>You can Maxime mollitia, molestiae quas vel sint commodi repudiandae</li>
          <li>You can Lorem ipsum dolor sit amet consectetur adipisicing elit</li>
        </ul>
        <ul class="home-info-banner-list-row-2">
          <li>You can Maxime mollitia, molestiae quas vel sint commodi repudiandae</li>
          <li>You can Lorem ipsum dolor sit amet consectetur adipisicing elit</li>
          <li>You can Maxime mollitia, molestiae quas vel sint commodi repudiandae</li>
        </ul>
      </div>
    </div>
  </article>
</template>

<style scoped>
.home-info-banner {
  height: 40rem;
  background: #635985;
}

.home-info-banner-container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.home-info-banner-list {
  width: 100%;
  margin: 2rem auto 0;
}

.home-info-banner-list > ul {
  margin: 0rem 1rem;
}

.home-info-banner-list > ul > li {
  margin: 0.5rem 1rem;
}

.home-info-banner-list > .home-info-banner-list-row-1 {
  display: flex;
  flex-direction: column;
}

.home-info-banner-list > .home-info-banner-list-row-2 {
  display: flex;
  flex-direction: column;
}

/* SM breakpoint */
@media only screen and (min-width: 600px) {
  .home-info-banner {
    height: 35rem;
  }

  .home-info-banner-container {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .home-info-banner-list {
    padding: 0 20%;
  }

  .home-info-banner-list > ul {
    margin: 0rem 0rem;
  }

  .home-info-banner-list > .home-info-banner-list-row-1 {
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto 2rem;
  }

  .home-info-banner-list > .home-info-banner-list-row-2 {
    flex-direction: row;
    justify-content: space-around;
  }
}

/* MD breakpoint */
@media only screen and (min-width: 960px) {
  .home-info-banner {
    height: 30vh;
  }
}
</style>
