const initialState = {
  usersProfile: [
    {
      id: 1,
      name: "John",
      position: "web developer",
      salary: "20000",
    },
    {
      id: 2,
      name: "mamun",
      position: "full stack developer",
      salary: "50000",
    },
    {
      id: 3,
      name: "joy",
      position: "web designer",
      salary: "30000",
    },
  ],
};

export function Reducer(state = initialState, action) {
  switch (action.type) {
    case "Create_Data":
      const newState = [...state.usersProfile, action.data.value];
      return { usersProfile: newState };
    case "Read_Data":
      // const readData = state.usersProfile.find(
      //   (id) => id.id === Number(action.id.id)
      // );
      // console.log(readData)
      return state;
    case "Update_Data":
      // console.log(action.id.id)
      const updateNewArrayData = [...state.usersProfile];
      const updatedValue = updateNewArrayData.map((data) =>
        data.id === Number(action.data.data.id)
          ? { ...data, ...action.data.data }
          : data
      );
      return { usersProfile: updatedValue };
    case "Delete_Data":
      const singleDeleteData = state.usersProfile.filter(
        (data) => data.id !== Number(action.id.id)
      );
      return { usersProfile: singleDeleteData };
    default:
      return state;
  }
}
