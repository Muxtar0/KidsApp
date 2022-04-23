import React , {useEffect, useRef, useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel  } from 'swiper';
import 'swiper/css';
import 'swiper/css/mousewheel';
import Categories from './Categories';
import Descriprion from './Descriprion';
import Controls from './Controls';
import data from '../data.json'
function Slider() {
    const [isMuteVideo,setIsMuteVideo] = useState(false)
    const [isStopVideo,setIsStopVideo] = useState(false)
    const [likes,setLikes] = useState(0)
    const [datas,setDatas] = useState([])
    const [isDataFetching,setIsDataFetching] = useState(false)
    const [WindowHeight,setWindowHeight] = useState(0)
    const getViewports = () => (
      {
      viewport: {
        width: Math.max(
          document.documentElement.clientWidth || 0,
          window.innerWidth || 0
        ),
        height: Math.max(
          document.documentElement.clientHeight || 0,
          window.innerHeight || 0
        )
      },
      visualViewport: {
        width: window.visualViewport.width,
        height: window.visualViewport.height
      }
    })
    const useVisualViewport = () => {
      const [state, setState] = useState(getViewports)
      useEffect(() => {
        const handleResize = () => setState(getViewports)
        window.visualViewport.addEventListener('resize', handleResize)
        return () =>
          window.visualViewport.removeEventListener('resize', handleResize)
      }, [])
      return state.visualViewport.height
    }

    
    useEffect(() => {
      // { mode: 'no-cors'}
      // fetch(data,)
      //   .then(res => res.json())
      //   .then(
      //     (result) => {
      //       console.log(result)
      //       setDatas(result)
      //       setIsDataFetching(true)
      //     },
      //     (error) => {
      //       console.log(error)
      //       setIsDataFetching(false)
      //     }
      //   )
      setDatas(data.datas)
      setIsDataFetching(true)
        
    },[])
  return (
    <div style={{height:useVisualViewport(),position:"relative"}}>
      <div className="HeightDiv">
      <Swiper
      modules={[Mousewheel]}
      spaceBetween={0}
      slidesPerView={1}
      mousewheel
      direction="vertical"
      onSlideChange={() => {
        // console.log(document.querySelector("video"))
      }}
      onSwiper={(swiper) => {
        // document.querySelector("video").play()
      }}
      className="Swiper"
    >
      {isDataFetching && (
        datas.map((data) =>(
          <SwiperSlide key={data.id} className="SwiperSlide">
          <div className="MainDiv">
          <video  autoPlay muted name="media">
            <source src={data.video_path} type="video/mp4" />
              Your browser does not support the video tag.
            </video> 
            <Controls/>
            <Descriprion description={data.title}/>
            <Categories/>
          </div>
        </SwiperSlide>
        ))  
      )}
    </Swiper>
      </div>
    </div>
  )
}

export default Slider