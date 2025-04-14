import React from 'react'
import styled from 'styled-components';
import { Button } from '../App';

function Home({ filteredFood }) {
    return (
        <FoodCardContainer>
            <FoodCard>
                {
                    filteredFood.map((food, index) => (
                        <div key={index} className='food-card'>
                            <img src={food.image} alt={food.name} />
                            <div className='food-info'>
                                <h3>{food.name}</h3>
                                <p>{food.text}</p>
                                <Button>${food.price.toFixed(2)}</Button>
                            </div>
                        </div>
                    ))
                }
            </FoodCard>
        </FoodCardContainer>
    )
}

export default Home


const FoodCardContainer = styled.button`
background-image: url('/bg.png');
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  min-height: calc(100vh - 170px);
`;
const FoodCard = styled.button`
    margin: 0 auto;
    background-color: transparent;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 30px 10px;
    .food-card {
    width: 340px;
    height: 167px;
    display: flex;
    background-color: radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 229, 255, 0.2) 0%, rgba(110, 119, 244, 0.0447917) 77.08%, rgba(78, 114, 213, 0) 100%);
    background-blend-mode: overlay, normal;
    backdrop-filter: blur(13.1842px);
    border-radius: 19.4467px;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    text-align: left;
    gap: 20px;
    img {
      width: 133px;
      height: 133px;
      border-radius: 50%;
      object-fit: cover;
    }
    .food-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: white;
    h3 {
      font-size: 18px;
      font-weight: 500;
    }
    p {
      font-size: 13px;
      margin: 12px 0;
      color: #c5bebe;
    }
    Button {
    width: fit-content;
    font-size: 13px;
    margin-left: auto;
    margin-bottom: -20px;
    }
`;