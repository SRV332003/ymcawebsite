import {useScroll} from "framer-motion";
import {useEffect, useState} from "react";
import Image from "next/image";
import {useRouter} from "next/router";
import Carousel from "react-multi-carousel";
import NavBar from "./NavBar/NavBar";
import {getSilder} from "../../http";



const Landing = () => {
    const router = useRouter();
    const {scrollY, scrollYProgress} = useScroll();
    const [isShow, setIsShow] = useState(false);
    const [bgImage, setBgImage] = useState(1);
    const [sliderImages, setSliderImages] = useState([]);

    useEffect(() => {
        let i = 1;
        setInterval(() => {
            if(i===7)
                i=1;
            setBgImage(i);
            i++;
           // console.log(i);
        }, 5000)
    }, [])

    scrollY.onChange(() => {
        scrollYProgress.get() >= 0.331 ? setIsShow(true) : setIsShow(false);

    })

    useEffect(() => {
        getSilder().then((resp) => {
            setSliderImages(resp.data);
            //console.log(resp.data);
        });
    }, []);
     
    return (
        <div className={`bg-no-repeat duration-200 bg-cover bg-center flex flex-col ${isShow ? "bg-[#EBEBEB] sticky -top-[33rem] text-black" : `text-white`}`}
             style={{
            zIndex: 9999
        }}>
            <div className={`py-1 bg-no-repeat duration-200 bg-cover bg-center flex flex-col ${isShow ? "bg-transparent" : "bg-opacity-50 bg-black"}`}>
                <div className={'h-[80%]'}>
                <Carousel
                    additionalTransfrom={0}
                    autoPlay
                    autoPlaySpeed={3000}
                    centerMode={false}
                    className=""
                    containerClass="container-with-dots"
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={{
                        desktop: {
                            breakpoint: {
                                max: 3000,
                                min: 1024
                            },
                            items: 1,
                            partialVisibilityGutter: 40
                        },
                        mobile: {
                            breakpoint: {
                                max: 464,
                                min: 0
                            },
                            items: 1,
                            partialVisibilityGutter: 30
                        },
                        tablet: {
                            breakpoint: {
                                max: 1024,
                                min: 464
                            },
                            items: 1,
                            partialVisibilityGutter: 30
                            }
                    }}
                    showDots={false}
                    sliderClass=""
                    slidesToSlide={1}
                    swipeable
                    arrows={false}
                >
                    <div className={'w-full h-[68vh]'}>
                        <Image src={'/assets/images/slider/1.jpg'} alt={'Achievement'} layout={'fill'} />
                    </div>
                    <div  >
                        <Image src={'/assets/images/slider/2.jpg'} alt={'Achievement'} layout={'fill'} />
                    </div>
                    <div >
                        <Image src={'/assets/images/slider/3.jpg'} alt={'Achievement'} layout={'fill'}/>
                    </div>
                    <div>
                        <Image src={'/assets/images/slider/4.jpg'} alt={'Achievement'} layout={'fill'} />
                    </div>   
                    {console.log(sliderImages)}                
                    {/* {sliderImages && sliderImages.map((files_url, i) => (
                        <div key={i} className={'w-full h-[68vh]'}>
                            <Image src={files_url} alt={'Achievement'} layout={'fill'} />
                        </div>
                    ))}                 */}
                     {/* {sliderImages.map(item => (
                          // Your map logic here
                            <div key={item.slider_id} className={'w-full h-[68vh]'}>
                                <Image src={item.files_url} alt={'Achievement'} layout={'fill'} />  
                            </div>
                           ))} */}
                </Carousel>
               
                </div>
                <div className={`fixed top-0 bg-[#EBEBEB] p-2 pb-0   w-full ${isShow ? 'visible' : 'invisible'}`}>
                  
                    <div className={` margin auto`}>
                        <NavBar/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing;