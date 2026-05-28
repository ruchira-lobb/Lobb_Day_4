import { screen, render } from '@testing-library/react-native';
import { FoodCard } from '../components/cards/FoodCard'

describe('FoodCard Component', () => {
    const mockMeal = {
        idMeal: '1',
        strMeal: 'Pizza',
        strCategory: 'Fast Food',
        strMealThumb: 'https://image.com/pizza.jpg',
        dateModified: '2025-01-01',
    };
    test('renders meal name and category', () => {
        render(<FoodCard meal={mockMeal} />);
        expect(screen.getByText('Pizza')).toBeTruthy();
    })
})