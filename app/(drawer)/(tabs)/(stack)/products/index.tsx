import { View, FlatList, Text } from "react-native";
import React from "react";
import { products } from "@/store/products.store";
import { Link } from "expo-router";

const ProductsScreen = () => {
  return (
    <View className="flex flex-1">
      <FlatList
        className="m-5"
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="mt-10">
            <Text className="text-2xl font-work-black">{item.title}</Text>
            <Text className="">{item.description}</Text>
            <View className="flex flex-row justify-between">
              <Text className="font-work-black">{item.price}</Text>
              <Link
                href={{
                  pathname: "/products/[id]",
                  params: { id: `${item.id}` },
                }}
                className="text-primary"
              >
                Ver detalles
              </Link>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default ProductsScreen;
