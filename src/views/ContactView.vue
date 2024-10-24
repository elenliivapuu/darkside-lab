<template>
  <main>
        <section class="contact-section">
            <div class="container">
                <h2>Võta meiega ühendust</h2>
                <div class="contact-container">
                    <div class="contact-form">
                        <form action="#" method="post">
                            <label for="name">Nimi:</label>
                            <input type="text" id="name" name="name" required>

                            <label for="email">E-post:</label>
                            <input type="email" id="email" name="email" required>

                            <label for="message">Sõnum:</label>
                            <textarea id="message" name="message" rows="5" required></textarea>

                            <button type="submit">Saada</button>
                        </form>
                    </div>

                    <div class="contact-map">
                        <!-- Replace the src URL with your own Google Maps Embed API URL -->
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2114.387776044056!2d24.689541515889403!3d59.365829881668385!2m3!1f0!2f0!3f0!3m2
                        !1i1024!2i768!4f13.1!3m3!1m2!1s0x4692e8a184d890ab%3A0x28a1e2e8bde1efc0!2sLepatriinu%20tee%208%2C%207646%
                        2C%20J%C3%A4lgim%C3%A4e%2C%20Harju%20maakond%2C%2076470%20Harju%20maakond%2C%20Estonia!5e0!3m2!1sen!2sus!4v1609458996801!5m2!1sen!2sus"
                            width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen=""
                            aria-hidden="false" tabindex="0">
                        </iframe>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<style scoped>
.contact-section {
    padding: 40px 20px;
    background-color: #222;
    color: white;
    text-align: center;
}

.contact-section h2 {
    font-size: 2.5em;
    margin-bottom: 30px;
    color: yellow;
}

.contact-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 4em;
    row-gap: 2em;
    padding: 2em;
}

.contact-form form {
    display: flex;
    flex-direction: column;
}

.contact-form label {
    text-align: left;
    margin-bottom: 5px;
    font-weight: bold;
}

.contact-form input,
.contact-form textarea {
    padding: 10px;
    margin-bottom: 15px;
    border: none;
    border-radius: 5px;
    font-size: 1em;
    color: #000;
}

.contact-form button {
    padding: 15px;
    background-color: yellow;
    color: #000;
    border: none;
    border-radius: 5px;
    font-size: 1.2em;
    cursor: pointer;
    font-weight: bold;
}

.contact-form button:hover {
    background-color: #000;
    color: #fff;
}

.contact-map {
    /* max-width: 500px; */
    width: 100%;
}

.contact-map iframe {
    border-radius: 5px;
}


@media (max-width: 768px) {
    .contact-container {
        flex-direction: column;
        align-items: center;
    }

    .contact-form,
    .contact-map {
        max-width: 100%;
    }
}
</style>