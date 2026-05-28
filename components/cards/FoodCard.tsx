import { Image, Text, View } from "react-native";

type Props = { meal: { idMeal: string; strMeal: string; strCategory:any ; strMealThumb: string; dateModified: string  }; };

export const FoodCard = ({ meal }: Props) => {

    return (
        <View>
            <Text>{meal.strMeal  || 'Unknown Meal'}</Text>
            <Text>{meal.strCategory || 'Unknown Category'}</Text>
            <Image testID="meal-image" source={{ uri: meal.strMealThumb }} />
            <Text>{meal.dateModified || 'Unknown Date'}</Text>
        </View>

    )
}