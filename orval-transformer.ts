/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable @typescript-eslint/no-explicit-any */
export default (operation: any) => {
  console.log(operation);

  return {
    ...operation,
    operationName: operation.operationName.replace(/V\d+$/, ""),
  };
};
