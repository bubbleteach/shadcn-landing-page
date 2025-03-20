"use client";
import React from 'react';
import Image from "next/image";

export const Computer = () => {
    const [isPowerOn, setIsPowerOn] = React.useState(false);
    const [showGlitch, setShowGlitch] = React.useState(false);
    const [glitchText, setGlitchText] = React.useState('');

    const intervalRef = React.useRef<number | null>(null);

    React.useEffect(() => {
        if (isPowerOn) {

            setTimeout(() => {

                // 显示叠加层
                setShowGlitch(true);    

                // 每次点击时，先清空旧的interval
                if (intervalRef.current) {
                    clearInterval(intervalRef.current);
                    intervalRef.current = null;
                }

                let updateCount = 0;
                // 立即生成一次随机字符
                setGlitchText(generateRandomChars());
                // 每100ms更新一次随机字符，最多更新 x 次
                intervalRef.current = window.setInterval(() => {
                    updateCount++;

                    if (updateCount >= 10){
                        window.location.href = 'https://dev.grimo.ai/playground';
                    }

                    if (updateCount >= 54) {
                        if (intervalRef.current) {
                            clearInterval(intervalRef.current);
                            intervalRef.current = null;
                        }

                        setShowGlitch(false);
                        return;
                    }
                    
                    setGlitchText(generateRandomChars());
                }, 100);

                
                
                document.body.classList.add('invert-bg');
            }, 1000);

        }

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
            document.body.classList.remove('invert-bg');
        };
    }, [isPowerOn]);

    const handleComputerClick = () => {
        
        setIsPowerOn(true);        
        
    };

    const generateRandomChars = () => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?/\\';
        let result = '';
        
        // 创建多行随机字符
        for (let i = 0; i < 125; i++) {
          let line = '';
          for (let j = 0; j < 180; j++) {
            line += chars.charAt(Math.floor(Math.random() * chars.length));
          }
          result += line + '\n';
        }
        
        return result;
      }
      

    return (
            <div className="absolute right-16 top-1/2 shadow-xl">

                {showGlitch && (
                    <div className="glitch-overlay visible">
                    {glitchText}
                    </div>
                )}

                {/* <div className="distortion-overlay pointer-events-none" /> */}

                
                <div className={` ${showGlitch?' hidden':'visible'} relative flex items-center justify-center cursor-pointer`} onClick={handleComputerClick}>
                    {/* Computer Base */}
                    <div>
                        <Image
                            src="/computer/computer_main.svg"
                            alt="Pencil Icon"
                            width={124}
                            height={24}
                            priority
                        />
                    </div>
                    {/* Computer Screen */}
                    <div className={` absolute overflow-hidden flex items-center justify-center top-3 bg-cover bg-no-repeat w-[110px] h-[82px]`}>
                        {/* Screen */}
                        <Image
                            src={isPowerOn ? "/computer/computer_screen_on.svg" : "/computer/computer_screen_off.svg"}
                            alt="Computer Screen"
                            width={130}
                            height={110 * 0.75} // 假设宽高比为4:3
                            priority
                        />
                        {/* Screen Content */}
                        <div className={`overflow-hidden absolute top-[6%] h-[88%] w-[91%] ${isPowerOn?'opacity-100':'opacity-0'}`}>
                            <Image
                                className={`relative transition-transform duration-1000 ease-linear ${isPowerOn?'-translate-y-[400px]':'translate-y-0'}`}
                                src="/computer/computer_content.svg"
                                alt="Pencil Icon"
                                width={110}
                                height={570}
                                priority
                            />
                        </div>
                    </div>
                </div>      
            </div>
    );
};