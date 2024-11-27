<template>
    <main class="pricelist">
            <div class="container">
                <h2 class="page-title">Hinnakiri</h2>
                <!-- <table class="price-table">
                    <thead>
                        <tr>
                            <th>Teenused</th>
                            <th>Hind</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Käsipesu</td>
                            <td>€20</td>
                        </tr>
                        <tr>
                            <td>Vahatamine</td>
                            <td>€50</td>
                        </tr>
                        <tr>
                            <td>Salongi puhastus</td>
                            <td>€30</td>
                        </tr>
                        <tr>
                            <td>Auto poleerimine</td>
                            <td>€100</td>
                        </tr>
                        <tr>
                            <td>Nahkistmete hooldus</td>
                            <td>€40</td>
                        </tr>
                    </tbody>
                </table> -->
                <div class="grid-container">
                    <div class="hinnakiri1"><img src="../assets/img/hinnakiri1.jpg" alt=""></div>
                    <div class="hinnakiri2"><img src="../assets/img/hinnakiri2.jpg" alt=""></div>
                </div>
                   
                <div style="text-align: center; color: white;">
                    <p>Huvitatud? <RouterLink class="link-button" to="/broneeri">Broneeri kohe</RouterLink> voi <RouterLink class="link-button" to="/kontakt">Vota uhendust</RouterLink>!</p>
                     
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
}
.link-button {
    color: yellow;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
    font-size: 1.1em;
    padding: 0 0.3em;
}

.link-button:hover{
    color: #fff;
}


@media (max-width: 768px) {
    .grid-container {
        grid-template-columns: 1fr;
    }
}
/* .pricelist {
    background-color: #333;
    color: white;
    text-align: center;
    min-height: 50vh;
}

.price-table {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    border-collapse: collapse;
}

.price-table th, .price-table td {
    padding: 15px;
    border: 1px solid #555;
}

.price-table th {
    background-color: #444;
    color: #fff;
}

.price-table td {
    background-color: #222;
    color: #fff;
}

.price-table tbody tr:hover {
    background-color: #555;
} */
</style>