/*
 * Return a (shallow) copy of 'objectToBeKept' containing the
 * content of 'objectToBeMerged' in the field 'objectToBeReturnedMergeFieldName'.
 * 'objectToBeKeptIdField' and 'objectToBeMergedIdField' are the fields that should be compared.
 * If there is no match, false will be returned as the value in 'objectToBeReturnedMergeFieldName'.
 */
export default (
  objectToBeKept,
  objectToBeMerged,
  objectToBeKeptIdField,
  objectToBeMergedIdField,
  objectToBeReturnedMergeFieldName
) => {
  // Turn the objectToBeMerged into a map
  const indexedObjectToBeMerged = new Map(
    objectToBeMerged.map((entry) => [entry[objectToBeMergedIdField], entry])
  );
  const objectToBeReturned = [];

  objectToBeKept.forEach((entry) => {
    const entryToBeMerged = indexedObjectToBeMerged.get(entry[objectToBeKeptIdField]);
    const newEntry = { ...entry, [objectToBeReturnedMergeFieldName]: false };

    if (entryToBeMerged) {
      newEntry[objectToBeReturnedMergeFieldName] = entryToBeMerged;
    }

    objectToBeReturned.push(newEntry);
  });

  return objectToBeReturned;
};
