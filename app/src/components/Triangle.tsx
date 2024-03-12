import React from 'react';
import {View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 20,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#a455d5',
  },
  triangleDown: {
    transform: [{rotate: '180deg'}],
  },
});

interface Props {
  expanded: boolean;
}

const Triangle: React.FC<Props> = (props: Props) => {
  const {expanded} = props;
  return <View style={[styles.triangle, expanded && styles.triangleDown]} />;
};

export default Triangle;
