import React from "react";
import { View } from "react-native";
import { Text, useTheme } from "react-native-paper";

const PriceSummary = ({ price, style, ...props }) => {
  const theme = useTheme();

  return (
    <View style={styles.TitleContainer}>
      <Text
        style={[styles.Title, theme.fonts.bold, style]}
        numberOfLines={1}
        {...props}
      >
        {`₹${price}`}
      </Text>
      <Text
        style={[styles.Title, theme.fonts.regular, style]}
        numberOfLines={1}
        {...props}
      >
        /night
      </Text>
    </View>
  );
};

const styles = {
  TitleContainer: {
    flexDirection: "row",
  },
  Title: {
    color: "#696969",
    fontSize: 14,
    lineHeight: 18,
  },
};

export default PriceSummary;
