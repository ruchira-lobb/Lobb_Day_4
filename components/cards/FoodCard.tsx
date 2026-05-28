import { View, Text, Image } from "react-native";

type Props = { meal: { idMeal: string; strMeal: string; strCategory:string ; strMealThumb: string }; };

export const FoodCard = ({ meal }: Props) => {

    return (
        <View>
            <Text>{meal.strMeal}</Text>
            <Text>{meal.strCategory}</Text>
            <Image testID="meal-image" source={{ uri: meal.strMealThumb }} />
        </View>

    )
}