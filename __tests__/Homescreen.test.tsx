import {render,screen,} from '@testing-library/react-native';
import HomeScreen from '../screens/HomeScreen';
import { useApi } from '../hooks/useApi';
jest.mock('../hooks/useApi');

const mockNavigation = {
  navigate: jest.fn(),
} as any;

const mockRoute = {} as any;

describe('HomeScreen', () => {
  test('shows loading indicator', () => {
    (useApi as jest.Mock)
      .mockReturnValue({
        loading: true,
        data: [],
        error: false,
      });
    render(
      <HomeScreen
        navigation={mockNavigation}
        route={mockRoute}
      />
    );
    expect(
      screen.getByTestId('loading-indicator')
    ).toBeTruthy();
  });

  test('renders food cards after api success', () => {
    (useApi as jest.Mock)
      .mockReturnValue({
        loading: false,
        error: false,
        data: [
          {
            idMeal: '1',
            strMeal: 'Pizza',
          },
        ],
      });

    render(
      <HomeScreen
        navigation={mockNavigation}
        route={mockRoute}
      />
    );

    expect(
      screen.getByTestId('food-list')
    ).toBeTruthy();

    expect(
      screen.getAllByTestId('food-card')
        .length
    ).toBe(1);

  });

  test('shows error message', () => {

    (useApi as jest.Mock)
      .mockReturnValue({
        loading: false,
        error: true,
        data: [],
      });

    render(
      <HomeScreen
        navigation={mockNavigation}
        route={mockRoute}
      />
    );

    expect(
      screen.getByText(
        'Something went wrong'
      )
    ).toBeTruthy();

  });

  test('shows empty state', () => {

    (useApi as jest.Mock)
      .mockReturnValue({
        loading: false,
        error: false,
        data: [],
      });

    render(
      <HomeScreen
        navigation={mockNavigation}
        route={mockRoute}
      />
    );

    expect(
      screen.getByText(
        'No food items found'
      )
    ).toBeTruthy();

  });

});

