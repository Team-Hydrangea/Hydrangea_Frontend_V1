import styled from '@emotion/styled';

export const InfoWindowWrapper = styled.div`
    width: 150px;
    height: 80px;
    min-height: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const InfoWindowHeader = styled.div`
    width: 100%;
    height: 25px;
    background-color: #7184D6;
    font-size: 15px;
    font-weight: bold;
    color: white;
    border-radius: 8px 8px 0px 0px;
    align-items: center;
    justify-content: center;
    display: flex;
    svg{
        position: absolute;
        left: 100%;
        transform: translateX(-120%);
    }
`

export const InfoWindowBody = styled.div`
    width: 100%;
    min-height: 55px;
    background-color: white;
    text-align: center;
    font-size: 14px;
    height: 19px;
    border-radius: 0px 0px 8px 8px;
    p{
        :nth-last-of-type(1){
            font-size: 16px;
            text-align: center;
        }
    }
`