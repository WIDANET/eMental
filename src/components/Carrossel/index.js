import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet, FlatList, Image, Dimensions } from "react-native";

const IMAGES = [
  { id: "1", url: "https://executivosdasaude.com.br/wp-content/uploads/2023/01/Cartaz-Ilustrado-Janeiro-Branco-Saude-Mental-1200-%C3%97-675-px.png" },
  { id: "2", url: "https://www.cnj.jus.br/wp-content/uploads/2021/03/campanha-amor-nao-causa-dor.jpg" },
  { id: "3", url: "https://s3.amazonaws.com/blog.dentrodahistoria.com.br/wp-content/uploads/2020/03/31171727/lp-ebook-autismo-principal.png" },
];

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % IMAGES.length;
        flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
        return nextIndex;
      });
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={{ uri: item.url }} style={styles.image} />
    </View>
  );

  return (
    <FlatList
      data={IMAGES}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      ref={flatListRef}
      onMomentumScrollEnd={(e) => {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const index = Math.floor(contentOffsetX / SCREEN_WIDTH); 
        setActiveIndex(index);
      }}
      snapToInterval={SCREEN_WIDTH}
      decelerationRate={0.1}
      contentContainerStyle={styles.flatlistContent}
      style={styles.carousel}
    />
  );
}

const styles = StyleSheet.create({
  carousel: {
    marginTop: 0,
    alignSelf: "center",
  },
  item: {
    justifyContent: "center",
    alignItems: "center",
    width: SCREEN_WIDTH, 
  },
  image: {
    width: "85%", 
    height: 200,
    borderRadius: 10,
  },
  flatlistContent: {
    alignItems: "flex-start", 
  },
  separator: {
    width: 10,
  },
});
