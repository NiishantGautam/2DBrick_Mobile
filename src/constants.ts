import { Dimensions } from 'react-native';
const width = Dimensions.get('window').width;

export const ballRadius = 50;
export const ballSpeed = 5000;
export const boardHeight = 500;
export const blocksPerRow = 7;
export const blockW = width / blocksPerRow - 10;
