document.addEventListener('DOMContentLoaded', function() {
    const boton = document.getElementById('revelarMensaje');
    const contenedorMensaje = document.getElementById('mensajeUnico');

    // Array de mensajes personalizados, únicos y cósmicos
    const mensajesDeLosAstros = [
        "✨ Las Pléyades susurran que tu luz es tan antigua como ellas.",
        "💫 Venus está en tu casa: hoy, tu sonrisa alinea todos mis planetas.",
        "🌟 No necesitas un eclipse para brillar; hasta tu sombra tiene luz propia.",
        "❤️ Marte tiñe de rojo tu nombre en mi corazón. Eres mi guerra y mi paz.",
        "🪐 Júpiter, el gigante, se inclina ante la inmensidad de lo que provocas.",
        "🌌 El universo no se expande más rápido de lo que late mi pecho cuando pienso en ti.",
        "🎵 Tu risa es el ruido de fondo de mi big bang particular.",
        "⭐ Hay una estrella enana blanca dentro de ti; pequeña, pero con la masa de un sol entero. ¿Lo sabías?",
        "🌙 Hoy, la luna está en tu signo, pero tú siempre estás en mi constelación favorita: la de tus brazos.",
        "🔮 Olvida el horóscopo. Tu única predicción es que hoy, mañana y siempre, alguien te recordará que eres el centro de su universo.",
        "🌠 Eres la estrella fugaz que no quiero que deje de brillar nunca.",
        "🪐 Tu alma tiene la gravedad de un agujero negro: todo en mí termina orbitándote.",
        "♾️ Los astros no mienten: eres infinitamente única."
    ];

    // Función para generar el efecto de "consulta a las estrellas"
    function mostrarMensaje() {
        // Animación de "cargando" cósmico
        contenedorMensaje.style.opacity = '0.7';
        contenedorMensaje.textContent = '🔭 Conectando con las estrellas... ✨';

        setTimeout(() => {
            // Elegir un mensaje aleatorio
            const indiceAleatorio = Math.floor(Math.random() * mensajesDeLosAstros.length);
            const mensajeElegido = mensajesDeLosAstros[indiceAleatorio];

            // Cambiar el mensaje y hacerlo aparecer
            contenedorMensaje.textContent = '🔮 ' + mensajeElegido;
            contenedorMensaje.style.opacity = '1';

            // Efecto adicional: pequeña animación
            contenedorMensaje.style.transform = 'scale(1.02)';
            setTimeout(() => {
                contenedorMensaje.style.transform = 'scale(1)';
            }, 200);

            // Mensaje en consola (toque geek)
            console.log('✨ Mensaje revelado para ella: "' + mensajeElegido + '" ✨');

        }, 1500); // Pausa para efecto místico
    }

    // Asignar el evento al botón (CORREGIDO: antes decía mostrarMisaludo)
    boton.addEventListener('click', mostrarMensaje);

    // Bonus: crear pequeñas estrellas fugaces (menos intrusivo en móvil)
    let ultimaEstrella = 0;
    document.body.addEventListener('mousemove', function(e) {
        // Solo en desktop y con baja probabilidad
        if (window.innerWidth > 768 && Math.random() > 0.98) {
            crearEstrellaFugaz(e.clientX, e.clientY);
        }
    });

    // También al tocar en móvil (muy sutil)
    document.body.addEventListener('touchmove', function(e) {
        if (Math.random() > 0.99) {
            const touch = e.touches[0];
            crearEstrellaFugaz(touch.clientX, touch.clientY);
        }
    });

    function crearEstrellaFugaz(x, y) {
        const estrellaFugaz = document.createElement('div');
        estrellaFugaz.style.position = 'fixed';
        estrellaFugaz.style.left = x + 'px';
        estrellaFugaz.style.top = y + 'px';
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
            estrellaFugaz.style.transform = 'translate(30px, 30px)';
            estrellaFugaz.style.opacity = '0';
        }, 10);

        setTimeout(() => {
            estrellaFugaz.remove();
        }, 1000);
    }
});
