<template>
    <main class="pricelist">
            <div class="container">
                <h2 class="page-title">Hinnakiri</h2>
                <div class="grid-container">
                    <div class="hinnakiri1"><img src="../assets/img/hinnakiri1.jpg" alt=""></div>
                    <div class="hinnakiri2"><img src="../assets/img/hinnakiri2.jpg" alt=""></div>
                </div>
                   
                <div style="text-align: center; color: white;">
                    <p>Huvitatud? <RouterLink class="link-button" to="/broneeri">Broneeri kohe</RouterLink> või <RouterLink class="link-button" to="/kontakt">Võta ühendust</RouterLink>!</p>
                     
                </div>

                <br>
                <br>
                
            </div>
    </main>
</template>

<style scoped>
.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 4em;
    row-gap: 2em;
    padding: 2em;
}

.grid-container div img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
}
.link-button {
    color: var(--color-yellow);
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
    font-size: 1.1em;
    padding: 0 0.3em;
}

.link-button:hover{
    color: var(--color-white);
}


@media (max-width: 768px) {
    .grid-container {
        grid-template-columns: 1fr;
    }
}
</style>