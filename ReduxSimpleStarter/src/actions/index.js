import axios from 'axios';

const API_KEY = '77090a97b819fdb9d18d5e54d1c87b1d';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    //console.log('Request:', request);

    //payload가 promise이면 리덕스 프로미스는 액션 전체를 멈춘다.
    //그리고 리퀘스트가 끝나면 새 액션으로 같은 타입의 액션이 디스패치 된다.
    //이 액션을 리듀서에게 페이로드로 보낼 것이라고 통지한다.
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}