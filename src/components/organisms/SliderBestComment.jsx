'use client';

import React from 'react';

import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Navigation, Pagination} from 'swiper/modules';

const Avatar = "/22.png"

const comments = [{
    text: 'من این کارو دیدم و برام خیلی سواله که چطور یک همچین مغز متفکری پشت این پروژه‌ست. کار های این پروژه رو انجام میده تیمی که داره به اسم Asrez ولی چند تا طراح پشت اینکار بودن ؟',
    name: 'ماری بلنکا',
    title: 'موسس فیس بوک',
    img: Avatar,
}, {
    text: 'من این کارو دیدم و برام خیلی سواله که چطور یک همچین مغز متفکری پشت این پروژه‌ست. کار های این پروژه رو انجام میده تیمی که داره به اسم Asrez ولی چند تا طراح پشت اینکار بودن ؟',
    name: 'جان دو',
    title: 'مدیر عامل گوگل',
    img: Avatar,
}, {
    text: 'من این کارو دیدم و برام خیلی سواله که چطور یک همچین مغز متفکری پشت این پروژه‌ست. کار های این پروژه رو انجام میده تیمی که داره به اسم Asrez ولی چند تا طراح پشت اینکار بودن ؟',
    name: 'جین اسمیت',
    title: 'مدیر مایکروسافت',
    img: Avatar,
},];

function SliderBestComment() {
    return (
        <div className={"overflow-hidden w-full"}>
            <Swiper
            slidesPerView={1}
            centeredSlides={true}
            className={"!max-w-[672px] w-full"}
            pagination={true}
            navigation={true}

            modules={[Pagination, Navigation]}
            >
                {comments.map((item) => (
                    <SwiperSlide key={item.id} className={"min-h-[300px] py-5 px-9 rounded-[23px] bg-[#F6FDA6]"}>
                        <p className={"font-Estedad-Medium text-black leading-10"}>{ item.text }</p>
                        <div className={"flex flex-col items-center mb-5"}>
                            <img src={ item.img } alt="" className={"w-[118px] mt-10 h-[118px]"}/>
                            <h3 className={"font-Estedad-Bold text-[20px] mt-4"}>ماری بلنکا</h3>
                            <p className={"text-[#577C07] font-Estedad-Regular"}>موسس فیس بوک</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default SliderBestComment;
