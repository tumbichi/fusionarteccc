export const parseSnapshotToArray = (snapshot) => {
  const result = [];
  const snapVal = snapshot.val();
  const fields = Object.keys(snapVal);

  fields.forEach((id) => {
    result.push(snapVal[id]);
  });

  return result;
};
