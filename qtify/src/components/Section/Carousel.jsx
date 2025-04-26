import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import AlbumCard from "./AlbumCard";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";

const Carousel = ({ albums, type }) => {
  return (
    <div style={{ position: "relative" }}>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={10}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Navigation]}
      >
        {albums.map((album) => (
          <SwiperSlide key={album.id} style={{ width: "200px" }}>
            <AlbumCard
              image={album.image}
              name={album.title}
              follows={album.follows}
              likes={album.likes}
              type={type} // Pass type to handle Likes vs. Follows
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Arrows */}
      <LeftArrow className="swiper-button-prev" />
      <RightArrow className="swiper-button-next" />
    </div>
  );
};

export default Carousel;
