export const getCurDate = () => {
  return new Date(+new Date() + 3240 * 10000).toISOString().split('T')[0];
};

export const nullCheck = (value: any) => {
  if (value !== null && value !== undefined) return value;
};

interface SentimentsType {
  fear: string;
  surprised: string;
  anger: string;
  sadness: string;
  happiness: string;
  aversion: string;
}
// string이라는 것을 증명해야함
export const selectMaxSentiment = (sentiments: SentimentsType) => {
  if (!sentiments) {
    throw new Error('sentiments이 없습니다.');
  }
  const sorted = Object.entries(sentiments)?.sort((a, b) => b[1] - a[1]);
  return sorted[0][0];
};