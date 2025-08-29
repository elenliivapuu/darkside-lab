<!-- Template section: layout for site footer -->
<template>
  <footer>
        <div class="container">
            <h2>Darkside-Lab - Teie auto väärib parimat!</h2>
            <hr>
            <h4><strong>Lisainfo</strong></h4>
            <p>Asukoht: Lepatriinu tee 8, Jälgimäe, Estonia</p>
            <p>Telefon: +372 5357 7076</p>
            <p>Facebook: <a href="https://www.facebook.com/profile.php?id=100091384596970"
                    target="_blank">Darkside-Lab</a></p>
        </div>
    </footer>
</template>

<style scoped>
footer {
    background-color: var(--color-black);
    color: var(--color-white);
    text-align: top;
    padding: 1em 0em;
}

footer h2 {
    color: var(--color-yellow);
    text-align: center;
    padding: 20px;
}

footer p, footer h4 {
    margin-bottom: 0em;
    opacity: 0.8;
}

footer a {
    color: var(--color-yellow);
    text-decoration: none;
}

footer a:hover {
    text-decoration: underline;
}
</style>