export const GuardLoader = async () => {
  console.log('Guard Loader Start');
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log('Guard Loader End');
  return true;
};
