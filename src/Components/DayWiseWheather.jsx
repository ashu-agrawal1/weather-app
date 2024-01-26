export default function DayWiseWheather({ DayList }) {
  return (
    <div className='days'>
      {DayList?.map((day) => <div className='day-container' key={day?.dt}>
        <h3>{new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' })}</h3>
        <img src={`https://openweathermap.org/img/wn/${day?.weather[0]?.icon}@2x.png`} />
        <p className="card-p">{day?.weather[0]?.description}</p>
        <h2>{day?.main?.temp} °C</h2>
      </div>)}
    </div>
  );
}