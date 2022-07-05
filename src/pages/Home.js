import CardListContainer from "../Components/CardListContainer/CardListContainer"
import { useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Home.css'



const Home = () => {


    return (
        <>
            <Swiper className="mySwiper"
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide className="imageSize"><img src="/rogel.jpg" /></SwiperSlide>
                <SwiperSlide className="imageSize"><img src="/torta choco2.jpg" /></SwiperSlide>
                <SwiperSlide className="imageSize"><img src="/masitas.jpg" /></SwiperSlide>
                <SwiperSlide className="imageSize"><img src="/alfajores.jpg" /></SwiperSlide>
            </Swiper>
            <div className="info">
                <p>Somos una empresa de pastelería que inició su actividad en el año 2008 vendiendo magdalenas a conocidos. La
                    empresa fue creciendo así como también la gama de productos ofrecidos. En la actualidad, vendemos tortas,
                    masitas, bizcochos y panes entre otras cosas. También realizamos eventos, como mesa dulce en casamientos,
                    cumpleaños y eventos varios, así como desayunos o promos especiales. Nuestro fuerte son las tortas
                    temáticas.</p>
                <p className="parrafoDos">La Pasteleria comenzó como hobby en la cocina de Lucía y luego de unos meses se incorporó Verónica, amiga de la infancia
                    que siempre ayudaba cuando había pedidos que preparar. Pasaron de trabajar en las cocinas de sus padres a
                    tener su propia cocina en el fondo de la casa de los padres de Verónica. A su vez, los clientes ya no eran
                    únicamente familiares y conocidos, sino que se había corrido el boca a boca y tenían todo tipo de clientes,
                    incluso pedidos para eventos de empresas. Hoy cuentan con un local propio hace poco más de 5 años y en donde
                    los esperamos de puertas abiertas.</p>
            </div>
        </>
    );
}

export default Home