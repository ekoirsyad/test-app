import React from 'react';
import { View, Text, StyleSheet, Image, PixelRatio } from 'react-native';

import Comment from '@/assets/Comment';
import Down from '@/assets/Down';
import Report from '@/assets/Report';
import Up from '@/assets/Up';
import Share from '@/assets/share';
import { Color } from '@/styles/color';
import { Font } from '@/styles/fonts';

const CardHeader = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: PixelRatio.roundToNearestPixel(24),
      }}>
      <Image source={require('src/assets/acc.png')} />
      <View style={{ marginLeft: 13 }}>
        <Text
          style={{
            fontSize: 14,
            fontFamily: Font.semi,
          }}>
          UsupSuparma
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontFamily: Font.regular,
          }}>
          Mar 24, 2023
        </Text>
      </View>
    </View>
  );
};

const CardImage = ({ description }: { description: string }) => {
  const isMore = description.length > 200;
  const truncate = (str: string) => {
    if (isMore) {
      return str.substring(0, 200) + '...';
    }
    return str;
  };
  return (
    <View>
      <Text
        style={{
          fontSize: 16,
          fontFamily: Font.regular,
          marginVertical: PixelRatio.roundToNearestPixel(24),
          paddingHorizontal: PixelRatio.roundToNearestPixel(24),
        }}>
        {truncate(description)}
        {isMore && (
          <Text
            style={{
              color: Color.primary,
            }}>
            More
          </Text>
        )}
      </Text>
      <Image
        source={require('src/assets/Image.png')}
        style={{
          width: '100%',
          height: PixelRatio.roundToNearestPixel(300),
        }}
        resizeMode="cover"
      />
    </View>
  );
};

const CardFooter = () => {
  return (
    <View
      style={{
        marginTop: PixelRatio.roundToNearestPixel(24),
        paddingHorizontal: PixelRatio.roundToNearestPixel(24),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Share />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: PixelRatio.roundToNearestPixel(10),
          }}>
          <Comment />
          <Text
            style={{
              color: Color.grey,
              fontFamily: Font.regular,
              marginLeft: PixelRatio.roundToNearestPixel(5),
            }}>
            10
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginLeft: PixelRatio.roundToNearestPixel(10),
        }}>
        <Report
          style={{
            marginRight: PixelRatio.roundToNearestPixel(10),
          }}
        />
        <Down />
        <Text
          style={{
            color: Color.primary,
            fontFamily: Font.regular,
            marginHorizontal: PixelRatio.roundToNearestPixel(5),
          }}>
          276
        </Text>
        <Up />
      </View>
    </View>
  );
};

const Card = ({ description }: { description: string }) => {
  return (
    <View style={styles.container}>
      <CardHeader />
      <CardImage description={description} />
      <CardFooter />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.white,
    paddingVertical: PixelRatio.roundToNearestPixel(24),
    marginBottom: PixelRatio.roundToNearestPixel(14),
  },
});

export default Card;
