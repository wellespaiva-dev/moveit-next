import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";

interface CountdownnContextData{
    minutos: number;
    seconds: number;
    active: boolean;
    hasFinished: boolean;
    startCountdown: () => void;
    resetCountdown: () => void;
}

interface CountdownProviderProps {
    children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownnContextData)

let countdownTimeOut : NodeJS.Timeout

export function CountdownProvider({children}: CountdownProviderProps) {
    
    const { startNewChallenge } = useContext(ChallengesContext)

    const [time, setTime] = useState(0.1 * 60)
    const [active, setActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false)

    const minutos  = Math.floor(time / 60)
    const seconds = time % 60;

    function startCountdown(){
        setActive(true)
    }

    function resetCountdown(){
        clearTimeout(countdownTimeOut);
        setActive(false)
        setHasFinished(false)
        setTime(0.1 * 60)
    }

    useEffect(()=>{
        if(active && time > 0){
            countdownTimeOut = setTimeout(()=> {
                setTime(time-1)
            }, 1000)
        }else if (active && time === 0){
            setHasFinished(true)
            setActive(false)
            startNewChallenge()
        }
    }, [active, time])
    
    return(
        <CountdownContext.Provider 
        value={{
            minutos,
            seconds,
            active,
            hasFinished,
            startCountdown,
            resetCountdown
        }}>
            {children}
        </CountdownContext.Provider>
    )
}