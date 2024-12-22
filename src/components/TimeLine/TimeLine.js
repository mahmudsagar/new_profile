import React, { useState, useRef, useEffect } from "react";

import {
    CarouselButton,
    CarouselButtonDot,
    CarouselButtons,
    CarouselContainer,
    CarouselItem,
    CarouselItemImg,
    CarouselItemText,
    CarouselItemTitle,
    CarouselMobileScrollNode,
} from "./TimeLineStyles";
import {
    Section,
    SectionDivider,
    SectionText,
    SectionTitle,
} from "../../styles/GlobalComponents";
import { TimeLineData } from "../../constants/constants";

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
    const [activeItem, setActiveItem] = useState(0);
    const carouselRef = useRef();

    const scroll = (node, left) => {
        return node.scrollTo({ left, behavior: "smooth" });
    };

    const handleClick = (e, i) => {
        e.preventDefault();

        if (carouselRef.current) {
            const scrollLeft = Math.floor(
                carouselRef.current.scrollWidth *
                    0.7 *
                    (i / TimeLineData.length)
            );

            scroll(carouselRef.current, scrollLeft);
        }
    };

    const handleScroll = () => {
        if (carouselRef.current) {
            const index = Math.round(
                (carouselRef.current.scrollLeft /
                    (carouselRef.current.scrollWidth * 0.7)) *
                    TimeLineData.length
            );

            setActiveItem(index);
        }
    };

    // // snap back to beginning of scroll when window is resized
    // // avoids a bug where content is covered up if coming from smaller screen
    useEffect(() => {
        const handleResize = () => {
            scroll(carouselRef.current, 0);
        };

        window.addEventListener("resize", handleResize);
    }, []);

    return (
        <Section id={`about`}>
            <SectionTitle>About me</SectionTitle>
            <SectionText>
               Hi there! 👋

I’m a passionate web developer with 3+ years of experience building dynamic and interactive web applications. My journey began with JavaScript 3.5 years ago, and since then, I’ve specialized in Node.js and React, crafting scalable backends and engaging user interfaces.

I love diving into modern tech stacks and have hands-on experience with Express.js, Tailwind CSS, Socket.IO, and even working with OpenAI APIs. I’ve also explored tools like Langchain and Docker to build smarter, more efficient systems.

When I’m not coding, I’m probably brainstorming the next cool idea or learning something new to level up my skills. Let’s create something amazing together! 🚀
            </SectionText>
            <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
                <>
                    {TimeLineData.map((item, index) => {
                        return (
                            <CarouselMobileScrollNode
                                key={index}
                                final={index === TOTAL_CAROUSEL_COUNT - 1}
                            >
                                <CarouselItem
                                    index={index}
                                    id={`carousel__item-${index}`}
                                    active={activeItem}
                                    onClick={(e) => handleClick(e, index)}
                                >
                                    <CarouselItemTitle>
                                        {item.year}
                                        <CarouselItemImg
                                            width="208"
                                            height="6"
                                            viewBox="0 0 208 6"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
                                                fill="url(#paint0_linear)"
                                                fill-opacity="0.33"
                                            />
                                            <defs>
                                                <linearGradient
                                                    id="paint0_linear"
                                                    x1="-4.30412e-10"
                                                    y1="0.5"
                                                    x2="208"
                                                    y2="0.500295"
                                                    gradientUnits="userSpaceOnUse"
                                                >
                                                    <stop stop-color="white" />
                                                    <stop
                                                        offset="0.79478"
                                                        stop-color="white"
                                                        stop-opacity="0"
                                                    />
                                                </linearGradient>
                                            </defs>
                                        </CarouselItemImg>
                                    </CarouselItemTitle>
                                    <CarouselItemText>
                                        {item.text}
                                    </CarouselItemText>
                                </CarouselItem>
                            </CarouselMobileScrollNode>
                        );
                    })}
                </>
            </CarouselContainer>
            <CarouselButtons>
                {TimeLineData.map((item, index) => {
                    return (
                        <CarouselButton
                            key={index}
                            index={index}
                            active={activeItem}
                            onClick={(e) => handleClick(e, index)}
                        >
                            <CarouselButtonDot active={activeItem} />
                        </CarouselButton>
                    );
                })}
            </CarouselButtons>
            <SectionDivider />
        </Section>
    );
};

export default Timeline;
