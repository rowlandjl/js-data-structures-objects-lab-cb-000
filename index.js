var driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign( {}, driver, { [key]: value } );
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  return driver[key] = value;
}

function deleteFromDriverByKey(driver, key) {
  
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  
}