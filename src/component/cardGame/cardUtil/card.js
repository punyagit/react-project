import Utils from '../../../utility/util';

const arrayOfCard = ['C1C.png', 'D1D.png', 'H1H.png', 'S1S.png', 'C2C.png', 'D2D.png', 'H2H.png', 'S2S.png', 'C3C.png', 'D3D.png', 'H3H.png',
  'S3S.png', 'C4C.png', 'D4D.png', 'H4H.png', 'S4S.png', 'C5C.png', 'D5D.png', 'H5H.png', 'S5S.png', 'C6C.png', 'D6D.png', 'H6H.png',
  'S6S.png', 'C7C.png', 'D7D.png', 'H7H.png', 'S7S.png', 'C8C.png', 'D8D.png', 'H8H.png', 'S8S.png', 'C9C.png', 'D9D.png', 'H9H.png',
  'S9S.png', 'CIC.png', 'DID.png', 'HIH.png', 'SIS.png', 'CJC.png', 'DJD.png', 'HJH.png', 'SJS.png', 'CQC.png', 'DQD.png', 'HQH.png',
  'SQS.png', 'CRC.png', 'DRD.png', 'HRH.png', 'SRS.png'];

let arrayOfShuffleCard = Utils.shuffleArray(arrayOfCard)

const loadImage = () => {
  let player1 = [];
  let player2 = [];
  let player3 = [];
  let player4 = [];
  for (let i = 0; i < arrayOfShuffleCard.length; i++) {
    let distCard = i % 4;
    if (distCard === 0) player1.push(arrayOfShuffleCard[i]);
    if (distCard === 1) player2.push(arrayOfShuffleCard[i]);
    if (distCard === 3) player3.push(arrayOfShuffleCard[i]);
    if (distCard === 3) player4.push(arrayOfShuffleCard[i]);
  }
  player1.sort();
  player2.sort();
  player3.sort();
  player4.sort();
  let arrays = [player1, player2, player3, player4];
  return arrays
  // this.setState({ arrays });
};

export default loadImage;
// export default arrayOfShuffleCard;