<script setup>
import { RouterLink } from 'vue-router'

</script>

<template>
<main>
        <section class="hero-section">
            <div class="hero-content">
                <h2 class="big-title">Otsite oma autole parimat võimalikku puhastust?</h2>
                <p>Siis olete õiges kohas! Darkside-Lab pakub professionaalset auto käsipesu teenust, mis tagab teie
                    auto särava ja puhta välimuse.</p>
                <br>
                <RouterLink class="hero-link-button" to="/broneeri">Broneeri</RouterLink>
            </div>
        </section>

        <section class="services-section">
            <div class="container">
                <h2>Mis meid eristab?</h2>
                <div class="services-details">
                    <div class="services-image">
                        <!-- <img src="../img/mis_eristab.jpg" alt=""> -->
                    </div>

                    <div class="services-points">
                        <div>
                            <h4><strong>Põhjalik puhastus</strong></h4>
                            <p>Meie kogenud pesula töötajad pööravad teie autole individuaalset tähelepanu, et eemaldada
                                ka kõige kangekaelnemad mustused ja saasteained.</p>
                        </div>
                        <hr>
                        <div>
                            <h4><strong>Õrn pesu</strong></h4>
                            <p>Kasutame ainult ohutuid ja õrnu puhastusvahendeid, mis ei kahjusta teie auto värvi ega
                                viimistlust.</p>
                        </div>
                        <hr>
                        <div>
                            <h4><strong>Lai valik teenuseid</strong></h4>
                            <p>Pakume lisaks käsipesule ka vahatamist, poleerimist, salongi puhastamist, müügieelne
                                ettevalmistus. </p>
                        </div>
                        <hr>
                        <div>
                            <h4><strong>Sõbralik teenindus</strong></h4>
                            <p>Meie meeskond on alati valmis teid aitama ja vastama teie küsimustele.</p>
                        </div>
                        <hr>
                        <div>
                            <h4><strong>Mõistlikud hinnad</strong></h4>
                            <p>Pakume konkurentsivõimelisi hindu, mis sobivad igasse eelarvesse.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="handwash-section">
            <div class="container">
                <h2>Miks valida auto käsipesu?</h2>
                <h4 class="title-white">Auto käsipesul on mitmeid eeliseid masinpesula ees:</h4>
                <div class="grid-container">
                    <div class="grid-item">
                        <h4><strong>Põhjalikum puhastus</strong></h4>
                        <p>Käsipesu võimaldab eemaldada mustust ka raskesti
                            ligipääsetavates kohtades, mida masinpesulast ei pruugi puhastada</p>
                    </div>
                    <div class="grid-item">
                        <h4><strong>Õrnem pesu</strong></h4>
                        <p>Käsipesu on õrnem auto viimistlusele kui masinpesu, mis võib kriimustada või kahjustada värvi
                        </p>
                    </div>
                    <div class="grid-item">
                        <h4><strong>Isiklikum lähenemine</strong></h4>
                        <p>Auto käsipesu puhul pöörab pesula töötaja teie autole
                            individuaalset tähelepanu, et tagada parim võimalik tulemus</p>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<style scoped>
main strong {
     color: yellow;
 }

 .title-white {
    color: rgb(230, 230, 230); 
 }
 
.hero-section {
    background-image: url('../assets/img/hero-img-dark.jpg');
    background-position: center center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    padding: 4em 1em;
    opacity: 1.0;
    min-height: 50vh;
    margin-bottom: 2.5em;
}

.hero-content {
    max-width: 900px;
}

.hero-section a {
    transition: background-color 0.1s, color 0.1s;
 }


.hero-section h2 {
    font-size: 2em;
    margin-bottom: 0.5em;
    margin-top: -80px;
}

.hero-section p {
    font-size: 1.3em;
    margin-bottom: 1em;
}

.hero-button, .hero-link-button {
    background-color: yellow;
    color: black;
    padding: 0.5em 1em;
    text-decoration: none;
    font-weight: bold;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    font-size: 1.2em;
    text-transform: uppercase;
}

.hero-link-button:hover{
    background-color: black;
    color: #fff;
}

.services-details {
    display: grid;
    /* grid-template-columns: 40% 60%; */
    grid-template-columns: 40%  minmax(0, 60%);
    column-gap: 3em;
    margin: auto;
    color: rgb(0,0,0);
    max-width: 100vw;
}


.services-image {
    display: block;
    min-width: 100%;
    min-height: 100%;
    background-image: url('../assets/img/mis_eristab.jpg');
    background-position: center center;
    background-size: cover;
    border-radius: 5px;
}

.services-image img {
    object-fit: cover;
    max-width: 100%;
}

.services-details h2 {
    margin-top: 0;
    margin-bottom: 20px;
}

.services-points {
    background: rgb(228, 228, 228);
    padding: 0.5em 2em;
    border-radius: 5px;
}

.services-points div {
    margin-top: 1.5em;
    margin-bottom: 1.5em;
}

.services-points strong {
     color: #000;
 }

.handwash-section {
    text-align: center;
}
.handwash-section .grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2em;
    padding: 20px;
}

.handwash-section .grid-container .grid-item {
    padding: 20px;
    text-align: center;
    background: rgba(228, 228, 228, 0.226);
    border-radius: 5px;
}

.grid-item p {
    color: white;
}

 @media (max-width: 768px) {
   .services-details {
        grid-template-columns: 0% 100%;
        column-gap: 0;
        max-width: 100%;
        text-align: left;
        margin-bottom: 20px;
    }

    .handwash-section .grid-container {
        grid-template-columns: 1fr;
    }
 }
</style>