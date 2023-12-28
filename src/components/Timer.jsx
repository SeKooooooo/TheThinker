import React,{useEffect, useState} from "react";
import useNow from "../hooks/useNow";
import {changeTime} from "../hooks/changeTime";

const Timer = ({changeEndTime}) =>{
    const genTime = Number(localStorage.getItem('genTime'))*1000
    const [startAt, setStartAt] = useState();
    const now = useNow(1000, startAt);
    const timeFromStart = now - (startAt ?? now);
    const countDown = Math.max(0,genTime - timeFromStart);
    
    const toggleTimer = () => {
        if (startAt) {
        setStartAt();
        } else {
        setStartAt(Date.now());
        }
    };
    


    const isCountEnd = countDown === 0;
    useEffect(() => {
        if (isCountEnd) {
            changeEndTime()
        }
    }, [isCountEnd]);
          
    useEffect(() =>{
        toggleTimer()
    },[])

    const curTime=Math.ceil(countDown/1000)
    const changeCurTime=changeTime(curTime)
    const curChangeTime=`${changeCurTime.minute}:${changeCurTime.second}`
    localStorage.setItem('curTime',curTime)
    return(
        <div className="timer">
            У вас осталось {curChangeTime}
        </div>
    )
}

export default Timer