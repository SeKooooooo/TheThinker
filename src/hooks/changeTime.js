export const changeTime=(time)=>{
    const second=String(Math.ceil(time/1000%60)).padStart(2,"0")
    const minute=String(Math.floor(time/60000)).padStart(2,"0")
    return {
        second,
        minute
    }
}