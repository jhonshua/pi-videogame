import React from 'react';
import  './Carousel.css'







const Carousel = () => {


  return (

 





<div class="contenedorcarrusel">
    <div class="ef-carousel">
    
      <input type="radio" name="unique-name" id="unique-name-1" checked class="ef-carousel__state"/>
      <input type="radio" name="unique-name" id="unique-name-2" class="ef-carousel__state"/>
      <input type="radio" name="unique-name" id="unique-name-3" class="ef-carousel__state"/>
      <input type="radio" name="unique-name" id="unique-name-4" class="ef-carousel__state"/>


      <div class="ef-carousel__items">
        <img src="https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg" alt="" class="ef-carousel__item"/>
        <img src="https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg" alt=" " class="ef-carousel__item" />
        <img src="https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg" alt="" class="ef-carousel__item" />
        <img src="https://media.rawg.io/media/games/21c/21cc15d233117c6809ec86870559e105.jpg" alt="" class="ef-carousel__item" />


      </div>



      <div class="ef-carousel__next-group">
        <label for="unique-name-4" class="ef-carousel__next"></label>
        <label for="unique-name-3" class="ef-carousel__next"></label>
        <label for="unique-name-2" class="ef-carousel__next"></label>
        <label for="unique-name-1" class="ef-carousel__next"></label>
      </div>

      <div class="ef-carousel__prev-group">
        
        <label for="unique-name-4" class="ef-carousel__prev"></label>
        <label for="unique-name-3" class="ef-carousel__prev"></label>
        <label for="unique-name-2" class="ef-carousel__prev"></label>
        <label for="unique-name-1" class="ef-carousel__prev"></label>
      </div>


      <div class="ef-carousel__dots">
        <label for="unique-name-1" class="ef-carousel__dot"></label>
        <label for="unique-name-2" class="ef-carousel__dot"></label>
        <label for="unique-name-3" class="ef-carousel__dot"></label>
        <label for="unique-name-4" class="ef-carousel__dot"></label>
      </div>
    </div>
</div>




    
 




    
 
  )
}

export default Carousel