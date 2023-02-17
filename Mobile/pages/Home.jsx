import React, { useState } from 'react'
import { Dimensions, Animated, ImageBackground, SafeAreaView, ScrollView } from 'react-native'
import Cards from '../components/Cards'
import Map from '../components/Map'
import data from "../data.json"

const OFFSET = 40
const ITEM_WIDTH = Dimensions.get("window").width - (OFFSET * 2)
const ITEM_HEIGHT = 200

function Home() {
    const [moto, setMoto] = useState({})

    const scrollX = React.useRef(new Animated.Value(0)).current

    return (
        <>

            <SafeAreaView style={{ flex: 1 }}>
                <Map moto={moto} />

                <ScrollView
                    horizontal={true}
                    decelerationRate={"normal"}
                    snapToInterval={ITEM_WIDTH}
                    style={{ paddingHorizontal: 0, backgroundColor: "#111214ad", position: "absolute", padding: 10, bottom: 20 }}
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    disableIntervalMomentum
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        { useNativeDriver: false }
                    )}
                    scrollEventThrottle={12}
                >
                    {data.map((item, idx) => {
                        const inputRange = [
                            (idx - 1) * ITEM_WIDTH,
                            idx * ITEM_WIDTH,
                            (idx + 1) * ITEM_WIDTH,
                        ]

                        const translate = scrollX.interpolate({
                            inputRange,
                            outputRange: [0.85, 1, 0.85],
                        })

                        const opacity = scrollX.interpolate({
                            inputRange,
                            outputRange: [0.5, 1, 0.5],
                        })

                        return (
                            <Animated.View
                                style={{
                                    width: ITEM_WIDTH,
                                    height: ITEM_HEIGHT,
                                    marginLeft: idx === 0 ? OFFSET : undefined,
                                    marginRight: idx === data.length - 1 ? OFFSET : undefined,
                                    opacity: opacity,
                                    transform: [{ scale: translate }],
                                }}
                            >
                                <Cards item={item} setMoto={setMoto} />
                            </Animated.View>
                        )
                    })}
                </ScrollView>
            </SafeAreaView>

        </>
    )
}

export default Home