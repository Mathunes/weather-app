import styled from 'styled-components';

export const WeatherNowContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.25);
    padding: 10px 20px 20px;
    margin: 0 auto;
    background-color: rgba(0, 0, 0, 0.05);
    width: 400px;
    max-width: 400px;

    @media(max-width: 600px) {
        width: 90%;
    }
`

export const HeaderWeather = styled.div`
    display: flex;
    align-items: center;
    * {
        margin: 0 5px;
    }

    h2 {
        font-size: 22px;
    }

    span::first-letter {
        text-transform: uppercase;
    }
`

export const MainWeather = styled.div`
    display: flex;
    justify-content: space-between;

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0 10px;

        &:nth-child(2), &:nth-child(3) {
            font-size: 14px;

            span {
                margin: 2px 0;
            }
        }
    }
    
`

export const Temp = styled.span`
    font-size: 38px;
    font-weight: 600;
`

export const Now = styled.span`
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 10px;
`

export const LoadingContainer = styled.div`
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.25);
    width: 400px;
    height: 160px;
    max-width: 400px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    background-color: rgba(0, 0, 0, 0.05);

    img {
        width: 50px;
    }
`