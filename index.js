var driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  const newObject = {...driver};
  
  newObject[key] = value;
  
  return newObject;
  
  Object.assign({}, driver, {[key]: value});
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  
}

function deleteFromDriverByKey(driver, key) {
  
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  
}