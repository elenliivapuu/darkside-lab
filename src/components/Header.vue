<script setup>
import { RouterLink } from 'vue-router'

</script>

<template>
  <header>
        <div class="container">
            <nav>
                <div class="logo-container">
                    <a href="./">
                        <img src="../assets/img/darkside_logo.jpg" alt="Logo">
                    </a>
                    <a href="./">
                        <h1>Darkside-Lab</h1>
                    </a>
                </div>
                <ul class="nav-links">
                    <li><RouterLink to="/">Avaleht</RouterLink></li>
                    <li><RouterLink to="/galerii">Galerii</RouterLink></li>
                    <li><RouterLink to="/hinnakiri">Hinnakiri</RouterLink></li>
                    <li><RouterLink to="/broneeri">Broneeri</RouterLink></li>
                    <li><RouterLink to="/kontakt">Kontakt</RouterLink></li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<style scoped>
header {
    background-color: #000;
    padding: 0.5em 0.5em;
    text-align: center;
    position: sticky;
    top: 0;
    z-index: 1000;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #000;
}

.logo-container {
    display: flex;
    align-items: center;
}

.logo-container a {
    text-decoration: none;
    display: inline-block;
}

 header img {
    width: 60px;
    margin-right: 15px;
    border-radius: 10px;
 }

 header h1 {
     color: yellow;
     font-size: 1.2em;
 }

 ul {
    padding-inline-start: 0;
 }

 ul.nav-links {
     list-style: none;
     display: flex;
     /* gap: 20px;s */
 }

 ul.nav-links li a {
     text-decoration: none;
     color: white;
     font-size: 18px;
     padding: 10px 12px;
     transition: background-color 0.1s, color 0.1s;
 }

 ul.nav-links li a:hover {
     background-color: gray;
     /* color: yellow; */
     border-radius: 5px;
 }
 .active {
  background-color: yellow;
  color: black!important;
  border-radius: 5px;
}

 @media (max-width: 768px) {
   .logo-container {
        scale: 0.8;
        margin-bottom: -10px;
    }
    header {
        height: auto;
    }
    nav {
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }
    ul.nav-links li a {
        font-size: 16px;
    }
 }
</style>
