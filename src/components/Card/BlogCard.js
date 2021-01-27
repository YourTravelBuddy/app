import React from "react";
import { View } from "react-native";
import {
  Text,
  Card,
  Button,
  Avatar,
  IconButton,
  useTheme,
} from "react-native-paper";

import styles from "./styles";
import CardTitle from "../Typography/CardTitle";
import Paragraph from "../Typography/Paragraph";
import useScreenDimensions from "../../hooks/useScreenDimensions";

const BlogCard = ({ id, title, content, profilePic, likes, style }) => {
  const { width } = useScreenDimensions();
  const theme = useTheme();
  return (
    <Card style={[{ width: width * 0.6 }, style]}>
      <View style={styles.CardContainer}>
        <View style={styles.CardTitleContainer}>
          <Avatar.Image
            size={24}
            source={{ uri: profilePic }}
            style={styles.CardTitleIcon}
          />
          <CardTitle style={styles.CardTitleText}>{title}</CardTitle>
        </View>
        <View style={styles.CardContent}>
          <Paragraph numberOfLines={2}>{content}</Paragraph>
          <View style={styles.CardActionsContainer}>
            <IconButton
              size={18}
              color={theme.colors.textSecondary}
              style={styles.CardActionsIcon}
              icon="heart-outline"
              onPress={() => {}}
            />
            <Text
              style={[
                { color: theme.colors.textSecondary },
                styles.CardActionsText,
              ]}
            >
              {likes}
            </Text>
            <View style={styles.CardActionsSpacer} />
            <Button compact onPress={() => {}}>
              READ MORE
            </Button>
          </View>
        </View>
      </View>
    </Card>
  );
};

export default BlogCard;