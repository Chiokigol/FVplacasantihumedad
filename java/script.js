function mostrarModelo(modelo) {
    const modelos = {
        modelo1: {
            titulo: "Modelo serrana",
            imagen: "./imagenes/MOD SERRANA.jpeg"
        },
        modelo2: {
            titulo: "Modelo Zapala",
            imagen: "./imagenes/MOD ZAPALA.jpeg"
        },
        modelo3: {
            titulo: "Modelo Maya",
            imagen: "./imagenes/MOD MAYA.jpeg"
        },
        modelo4: {
            titulo: "Modelo Travertino",
            imagen: "./imagenes/MOD TRAVERTINO.jpeg"
        },
        modelo5: {
            titulo: "Modelo Marmol",
            imagen: "./imagenes/MOD MARMOL.jpeg"
        },
        modelo6: {
            titulo: "Modelo Mar Del Plata",
            imagen: "./imagenes/MOD MAR DEL PLATA.jpeg"
        },
        modelo7: {
            titulo: "Modelo Ondas 3D",
            imagen: "./imagenes/MOD ONDAS 3D.jpeg"
        },
        modelo7: {
            titulo: "Modelo ondas 3D",
            imagen: "./imagenes/MOD ONDAS 3D.jpeg"
        },
        modelo9: {
            titulo: "Modelo Alicante",
            imagen: "./imagenes/MOD ALICANTE.jpeg"
        },
        
    };

    const detalle = modelos[modelo];
    document.getElementById('modelo-titulo').innerText = detalle.titulo;
    document.getElementById('modelo-imagen').src = detalle.imagen;
    document.getElementById('modelo-detalle').style.display = 'block';
}
