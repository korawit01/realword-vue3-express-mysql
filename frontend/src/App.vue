<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand navbar-green" href="#">conduit</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      </ul>
      <ul class="navbar-nav ">
        <li class="nav-item ">
          <router-link :to="{ name: 'home'}">Home</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/signup">Sign in</a>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'signup'}">Sign up</router-link>
        </li>     
      </ul>     
    </div>
  </div>
</nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
