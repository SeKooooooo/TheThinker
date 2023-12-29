export const changeTime=(time)=>{
    const second=String(time%60).padStart(2,"0")
    const minute=String(Math.floor(time/60)).padStart(2,"0")
    return {
        second,
        minute
    }
}