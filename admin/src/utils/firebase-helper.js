// eslint-disable-next-line import/prefer-default-export
export const parseSnapshotToArray = (snapshot) => {
  const result = [];
  const snapVal = snapshot.val();
  console.log(snapVal);
  const fields = Object.keys(snapVal);

  fields.forEach((id) => {
    result.push(snapVal[id]);
  });

  return result;
};
