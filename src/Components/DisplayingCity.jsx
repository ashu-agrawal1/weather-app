export default function DisplayingCity({data}){
    return(
        <>
            <p className="header">Today</p>
            <h1>{data.city.name}</h1>
            <p>Temperature&nbsp;:&nbsp;{data.list[0].main.temp}&nbsp;°C</p>
            <p>{data.list[0].weather[0].description}</p>
        </>
    );
}