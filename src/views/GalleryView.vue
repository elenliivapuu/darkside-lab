<template>
    <main>
        <div class="container">
            <h2 class="page-title">Galerii</h2>

            <section class="main-grid">
                <div><img src="../assets/img/hero-img.jpg" alt=""></div>
                <div><img src="../assets/img/gallery-img1.jpg" alt=""></div>
                <div><img src="../assets/img/gallery-img2.jpg" alt=""></div>
                <div><img src="../assets/img/gallery-img3.jpg" alt=""></div>
                <div><img src="../assets/img/gallery-img4.jpg" alt=""></div>
                <div><img src="../assets/img/hero-img2.jpg" alt=""></div>
            </section>
        </div>

    </main>
</template>

<style scoped>
.main-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 2em;
    row-gap: 2em;
}

.main-grid div img {
    object-fit: contain;
    width: 100%;
    border-radius: 5px;
}

.main-grid div img:hover {
    cursor: pointer;
}

@media (max-width: 768px) {
    .main-grid {
        grid-template-columns: 1fr 1fr;
    }
}
</style>