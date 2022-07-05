const Nosotros = () => {

    return (
        <div >
            <section className="nosotros equipo">
                <h2 className="titulo__seccion">Equipo</h2>
                <img src="https://t3.ftcdn.net/jpg/02/59/35/80/360_F_259358085_1sZV10pebJlkQq1laGKfFuvGgzb7MiAD.jpg" alt="img Equipo" />
            </section>
            <section className="nosotros ubicacion">
                <h2 className="titulo__seccion">Ubicación</h2>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3272.8029685056063!2d-56.05801888500491!3d-34.88629368038723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f8668dfd4c3e5%3A0xf64b5bbe4c9e19d7!2sDr.%20Alejandro%20Schroeder%206616%2C%2011500%20Montevideo%2C%20Departamento%20de%20Montevideo!5e0!3m2!1ses-419!2suy!4v1635776515826!5m2!1ses-419!2suy"
                    style={{ border: 0 }}>
                </iframe>
            </section>
        </div>
    );
}

export default Nosotros;