export async function fetchData() {
    try {
        const response = await fetch('https://api.openweathermap.org/data/2.5/forecast?q=Delhi&APPID=407141f6d99e830681e770ad7e16c024&units=metric');
        const resData = await response.json();
        return resData;
    }
    catch (e) {
        console.log("err", e);
        return {}
    }
}