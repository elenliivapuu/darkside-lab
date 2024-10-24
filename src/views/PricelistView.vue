<template>
    <main class="pricelist">
            <div class="container">
                <h2 class="page-title">Hinnakiri</h2>
                <table class="price-table">
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
                </table>
            </div>
    </main>
</template>

<style scoped>
.pricelist {
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
}
</style>