import DisplayingCity from "./DisplayingCity";

export default function DisplayWeather({ data }) {
  console.log(data, "dataaa");
  return (
    <div className='container'>
     {data && <img src={`https://openweathermap.org/img/wn/${data?.list[0]?.weather[0]?.icon || ''}@2x.png`} />}
      <div className='temp-desplay'>
        {data && <DisplayingCity data={data} />}
      </div>
    </div>
  );
}