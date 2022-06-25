import React, {useState} from 'react';
import './Slider.css'

const Slider = () => {
    const slides = [
        {image: "https://sun1-99.userapi.com/s/v1/ig2/HwGcv-Bjdxn_4adsUXwSgMuNBNx-QtPBU7dxM9NTgOID4prFayEQ-yyvdIdXiTWLTeAAkKpGscBfgmqzD_xtfD5P.jpg?size=200x200&quality=96&crop=0,5,899,899&ava=1"},
        {image: "https://sun9-1.userapi.com/s/v1/ig1/Mv3r2C93SpULx5oH0J2YSe_8NJyEkRRcD62sfCss87JmRjC1ik2a3eJxgZG1ZtT63Xj1uP-T.jpg?size=200x200&quality=96&crop=361,2,1197,1197&ava=1"},
        {image: "https://sun9-12.userapi.com/s/v1/if1/iakzvkyFEkPCFdD7UqaTyS-PviPfVmhi-M2MxvKZY8fX5tfaw5P8Ecbm533vzaitJbj5OZ80.jpg?size=200x200&quality=96&crop=130,0,447,447&ava=1"}
    ]

    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length -1 ? 0 : current +1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length -1 : current -1)
    }
    console.log(current)

    return (
        <div className="slider">
            {slides.map((elem, index) => {
               return (
                   <div key={index}>
                       {index === current && <img src={elem.image} alt="img"/>}
                   </div>
                   )
            })}
            <div className="btn">
                <button onClick={prevSlide}>&lt;</button>
                <button onClick={nextSlide}>&gt;</button>
            </div>
        </div>
    );
};

export default Slider;