export const findArrayByKeyValue = function(options){
  const { array, keyName, keyValue } = options;
  return array.find(o => o[keyName] === keyValue);
}