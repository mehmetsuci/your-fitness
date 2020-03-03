import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'status',
  initialState: {
    login: false,
    currentUser: {},
    currentActivities: [],
    currentPage: 'You.Fit',
    goals: [
      {
        kind: 'walking',
        amount: 8000,
      },
      {
        kind: 'running',
        amount: 10,
      },
      {
        kind: 'cycling',
        amount: 50,
      },
      {
        kind: 'exercise',
        amount: 60,
      },
      {
        kind: 'swimming',
        amount: 1000,
      },
    ],
  },
  reducers: {
    sigIn: state => {
      state.login = true;
    },
    sigOut: state => {
      state.login = false;
    },
    setCurrentPage: (state, action) => {
      const { payload } = action;
      state.currentPage = payload;
    },
    setCurrentUser: (state, action) => {
      const { payload } = action;
      state.currentUser = payload;
    },

    setCurrentActivities: (state, action) => {
      const { payload } = action;
      state.currentActivities = payload;
    },
    setGoal: (state, action) => {
      const { kind, amount } = action.payload;

      const findGoal = state.goals.find(goal => goal.kind === kind);

      if (findGoal) {
        findGoal.amount = amount;
      } else {
        state.goals.push({
          kind, amount,
        });
      }
    },
  },
});


export const {
  sigIn,
  sigOut,
  setCurrentPage,
  setCurrentUser,
  setCurrentActivities,
  setGoal,
} = slice.actions;

export default slice.reducer;
