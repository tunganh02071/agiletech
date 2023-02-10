/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/button-has-type */
/* eslint-disable no-empty-pattern */

// libarary
import bind from "classnames/bind";
import { memo } from "react";

// types

// component

// styles
import Slider from "react-slick";
import styles from "./Testimonials.module.scss";

const cx = bind.bind(styles);

const Testimonials = memo(({ dataTestimonials }: any) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={cx("slider-track")}>
      <Slider {...settings}>
        {dataTestimonials.map((data: any) => {
          return (
            <div className={cx("slider-item")} key={data.id}>
              <div className={cx("slider-item__image")}>
                <img className={cx("image")} src={data.imageUrl} alt="slider" />
              </div>
              <div className={cx("slider-item__text")}>
                <div className={cx("slider-item__text--header")}>
                  <h3>John Fang</h3>
                  <span>wordfaang.com</span>
                </div>
                <div className={cx("slider-item__text--body")}>
                  <span>{data.desctiption}</span>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
});

export default Testimonials;
