import { View, Text } from "react-native";

type Props = { meal: { idMeal: string; strMeal: string; }; };

export const FoodCard = ({ meal }: Props) => {

    return (
        <View>
            <Text>{meal.strMeal}</Text>
        </View>

    )
}