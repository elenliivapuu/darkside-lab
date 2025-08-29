<script setup>
import { RouterLink } from 'vue-router'
</script>

<!-- Template structure: header with logo and navigation -->
<template>
  <header>
        <div class="container">
            <nav>
                <div class="logo-container">
                    <!-- Logo image and site name linking to homepage -->
                    <a href="./">
                        <img src="../assets/img/darkside_logo.jpg" alt="Logo">
                    </a>
                    <a href="./">
                        <h1>Darkside-Lab</h1>
                    </a>
                </div>
                <!-- Navigation bar using Vue Router -->
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
    background-color: var(--color-black);
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
    background-color: var(--color-black);
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
     color: var(--color-yellow);
     font-size: 1.2em;
 }

 ul {
    padding-inline-start: 0;
 }

 ul.nav-links {
     list-style: none;
     display: flex;
 }

 ul.nav-links li a {
     text-decoration: none;
     color: var(--color-white);
     font-size: 20px;
     padding: 10px 12px;
     transition: background-color 0.1s, color 0.1s;
 }

 ul.nav-links li a:hover {
     background-color: gray;
     border-radius: 5px;
 }
 .active {
  background-color: var(--color-yellow);
  color: black!important;
  border-radius: 5px;
}

/* Responsive adjustments */
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
