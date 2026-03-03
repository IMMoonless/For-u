document.addEventListener('DOMContentLoaded', function() {
    const boton = document.getElementById('revelarMensaje');
    const contenedorMensaje = document.getElementById('mensajeUnico');

    // Array de mensajes personalizados, únicos y cósmicos
    const mensajesDeLosAstros = [
        "Las Pléyades susurran que tu luz es tan antigua como ellas.",
        "Venus está en tu casa: hoy, tu sonrisa alinea todos mis planetas.",
        "No necesitas un eclipse para brillar; hasta tu sombra tiene luz propia.",
        "Marte tiñe de rojo tu nombre en mi corazón. Eres mi guerra y mi paz.",
        "Júpiter, el gigante, se inclina ante la inmensidad de lo que provocas.",
        "El universo no se expande más rápido de lo que late mi pecho cuando pienso en ti.",
        "Tu risa es el ruido de fondo de mi big bang particular.",
        "Hay una estrella enana blanca dentro de ti; pequeña, pero con la masa de un sol entero. ¿Lo sabías?",
        "Hoy, la luna está en Sagitario, pero tú siempre estás en mi constelación favorita: la de tus brazos.",
        "Olvida el horóscopo. Tu única predicción es que hoy, mañana y siempre, alguien te recordará que eres el centro de su universo."
    ];

    // Función para generar el efecto de "consulta a las estrellas"
    function mostrarMensaje() {
        // Animación de "cargando" cósmico
        contenedorMensaje.style.opacity = '0.5';
        contenedorMensaje.textContent = 'Conectando con las estrellas... ✨';

        setTimeout(() => {
            // Elegir un mensaje aleatorio
            const indiceAleatorio = Math.floor(Math.random() * mensajesDeLosAstros.length);
            const mensajeElegido = mensajesDeLosAstros[indiceAleatorio];

            // Cambiar el mensaje y hacerlo aparecer
            contenedorMensaje.textContent = '🔮 ' + mensajeElegido + ' 🔮';
            contenedorMensaje.style.opacity = '1';

            // Efecto adicional: crear una "estrella fugaz" de consola (para el toque geek)
            console.log('✨ Una estrella fugaz ha llevado tu mensaje: "Sigue brillando" ✨');

            // Pequeño detalle: cambiar el color del mensaje por un momento
            contenedorMensaje.style.transition = 'color 1s';
            contenedorMensaje.style.color = '#fbd38d';
            setTimeout(() => {
                contenedorMensaje.style.color = '#fadfad'; // Vuelve al color original
            }, 1500);

        }, 1500); // La pausa hace que parezca que los astros están "pensando"
    }

    // Asignar el evento al botón
    boton.addEventListener('click', mostrarMisaludo);

    // Bonus: crear pequeñas estrellas fugaces al mover el ratón (detalle interactivo sutil)
    document.body.addEventListener('mousemove', function(e) {
        if (Math.random() > 0.99) { // Baja probabilidad para no saturar
            const estrellaFugaz = document.createElement('div');
            estrellaFugaz.style.position = 'fixed';
            estrellaFugaz.style.left = e.clientX + 'px';
            estrellaFugaz.style.top = e.clientY + 'px';
            estrellaFugaz.style.width = '4px';
            estrellaFugaz.style.height = '4px';
            estrellaFugaz.style.background = 'white';
            estrellaFugaz.style.boxShadow = '0 0 20px 5px gold';
            estrellaFugaz.style.borderRadius = '50%';
            estrellaFugaz.style.pointerEvents = 'none';
            estrellaFugaz.style.zIndex = '9999';
            estrellaFugaz.style.transition = 'transform 1s linear, opacity 1s';
            document.body.appendChild(estrellaFugaz);

            setTimeout(() => {
                estrellaFugaz.style.transform = 'translate(50px, 50px)';
                estrellaFugaz.style.opacity = '0';
            }, 10);

            setTimeout(() => {
                estrellaFugaz.remove();
            }, 1000);
        }
    });
});
