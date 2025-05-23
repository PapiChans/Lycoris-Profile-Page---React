import React, {useContext, useState} from 'react';
import { ThemeContext } from './theme';
import Home from '../components/home';
import imageMap from './imagepath';
import Loadingscreen from './loadingscreen';

const Switchcharacter = () => {
  const [isSwitchOpen, setIsSwitchOpen] = useState(false);

  const { theme, setTheme } = useContext(ThemeContext);

  const [isLoading, setIsLoading ] = useState(false);

  // Handler for Loading
  const handleCharacterSelect = (newTheme) => {
    setIsLoading(true);
    setIsSwitchOpen(false);
    setTimeout(() => {
      setTheme(newTheme);
    }, 700);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
    <Loadingscreen visible={isLoading}/>
      <div className={`bg-slate-900 ${isSwitchOpen ? 'bg-opacity-80 visible' : 'bg-opacity-0 invisible' } h-full w-full z-40 fixed transition-all duration-500 ease-in-out`}>
        <div className={`z-40 w-100 h-full block px-4 pt-8 transition-all duration-500 ease-in-out ${isSwitchOpen ? 'opacity-100 visible' : 'opacity-0 invisible' } overflow-y-hidden`}>
          <div className={`w-100 flex justify-end px-4`}>
            <i className={`fa-solid fa-close text-2xl cursor-pointer transition-all ease-in-out duration-300 text-slate-50 hover-text-${theme}`} onClick={() => setIsSwitchOpen(false)}></i>
          </div>
          <div className='w-100'>
              <h2 className='ff-goldman text-center text-5xl text-slate-50 overflow-y-hidden'>SELECT CHARACTER</h2>
          </div>
          <div className='w-100 grid md:flex items-start pb-40 justify-center h-full px-0 md:px-8 overflow-y-scroll md:overflow-y-hidden'>
            <div onClick={() => {handleCharacterSelect('chisato')}} className={`${isSwitchOpen ? 'translate-y-0 duration-700' : 'translate-y-96 duration-1000'} w-auto h-96 m-12 flex justify-center transition-transform ease-in-out grayscale hover:grayscale-0 cursor-pointer brightness-110 contrast-100 saturate-150 scale-100 hover:scale-110 border-4 border-slate-100 rounded-sm`}>
              <img className='w-full' src={imageMap.cardchisato} alt='photocard'></img>
            </div>
            <div onClick={() => {handleCharacterSelect('takina')}} className={`${isSwitchOpen ? 'translate-y-0 duration-700' : 'translate-y-96 duration-1000'} w-auto h-96 m-12 flex justify-center transition-transform ease-in-out grayscale hover:grayscale-0 cursor-pointer brightness-110 contrast-100 saturate-150 scale-100 hover:scale-110 border-4 border-slate-100 rounded-sm`}>
              <img className='w-full' src={imageMap.cardtakina} alt='photocard'></img>
            </div>
            <div onClick={() => {handleCharacterSelect('kurumi')}} className={`${isSwitchOpen ? 'translate-y-0 duration-700' : 'translate-y-96 duration-1000'} w-auto h-96 m-12 flex justify-center transition-transform ease-in-out grayscale hover:grayscale-0 cursor-pointer brightness-110 contrast-100 saturate-150 scale-100 hover:scale-110 border-4 border-slate-100 rounded-sm`}>
              <img className='w-full' src={imageMap.cardkurumi} alt='photocard'></img>
            </div>
          </div>
        </div>        
      </div>
      <Home openSwitch = {() => setIsSwitchOpen(true)} />
    </>
  )
}

export default Switchcharacter;
