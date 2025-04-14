import './App.css';
import styled from 'styled-components';
import Home from './Component/Home';
import { useState } from 'react';
import { foodData } from './Component/FoodData';
import { filterBtns } from './Component/FoodData';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState(''); 
  const [activeButton, setActiveButton] = useState(null);

  const searchFood = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredFood = foodData.filter((food) => {
    const matchesSearch = food.name.toLowerCase().includes(searchTerm);
    const matchesType = filterType === '' || food.type.toLowerCase().includes(filterType.toLowerCase());
    return matchesSearch && matchesType;
  });

  const handleButtonClick = (foodType) => {
    if (foodType === 'all') {
      setFilterType('');
    } else {
      setFilterType(foodType);
    }
    setActiveButton(foodType);
  };

  return (
    <>
      <Container>
        <TopContainer>
          <div className="logo">
            <img src="/logo.svg" alt="logo" />
          </div>
          <div className="search">
            <input
              onChange={searchFood}
              value={searchTerm}
              type="text"
              placeholder="Search Food..."
            />
          </div>
        </TopContainer>

        <FilterContainer>
          <Button
            onClick={() => handleButtonClick('all')}
            active={activeButton === 'all'}
          >
            All
          </Button>

          {filterBtns.map((food, index) => (
            <Button
              key={index}
              onClick={() => handleButtonClick(food.type)}
              active={activeButton === food.type}
            >
              {food.name}
            </Button>
          ))}
        </FilterContainer>
      </Container>

      <Home filteredFood={filteredFood} />
    </>
  );
}

export default App;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const TopContainer = styled.section`
  min-height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px 0;
  }

  .search {
    input {
      background-color: transparent;
      border: 1px solid red;
      border-radius: 5px;
      padding: 0 10px;
      height: 40px;
      font-size: 16px;
      color: white;
      @media (max-width: 768px) {
        margin-top: 10px;
      }
    }
  }
`;

const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding-bottom: 40px;
`;

export const Button = styled.button`
  background-color: ${(props) => (props.active ? 'red' : '#ff4343')};
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #f22f2f;
    transition: all 0.3s ease;
  }
`;
