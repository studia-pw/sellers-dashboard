import { combineReducers, configureStore, createSlice } from "@reduxjs/toolkit";
import { ColorSchemes } from "@/app/lib/models/color-schemes";
import { Languages } from "@/app/lib/models/languages";

const colorSchemeSlice = createSlice({
  name: "colorScheme",
  initialState: {
    usedColorScheme: ColorSchemes.LIGHT, // ColorSchemes.Light
  },
  reducers: {
    changeColorScheme: (state, action) => {
      state.usedColorScheme = action.payload;
    },
  },
});
export const { changeColorScheme } = colorSchemeSlice.actions;

const languageSlice = createSlice({
  name: "language",
  initialState: {
    usedLanguage: Languages.POLISH,
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.usedLanguage = action.payload;
    },
  },
});
export const { changeLanguage } = languageSlice.actions;

const orderSlice = createSlice({
  name: "order",
  initialState: {
    orderCategory: null,
    chosenOrder: null,
    orders: [],
  },
  reducers: {
    changeOrderCategory: (state, action) => {
      state.orderCategory = action.payload;
    },
    changeSelectedOrder: (state, action) => {
      state.selectedOrder = action.payload;
    },
    changeOrders: (state, action) => {
      state.orders = action.payload;
    },
  },
});
export const { changeOrderCategory, changeSelectedOrder, changeOrders } =
  orderSlice.actions;

const reviewSlice = createSlice({
  name: "review",
  initialState: {
    latestReviews: [],
    reviewType: null,
  },
  reducers: {
    changeLatestReviews: (state, action) => {
      state.latestReviews = action.payload;
    },
    changeReviewType: (state, action) => {
      state.reviewType = action.payload;
    },
  },
});
export const { changeLatestReviews, changeReviewType } = reviewSlice.actions;

const offerSlice = createSlice({
  name: "offer",
  initialState: {
    sortCriteria: null,
    offers: [],
    chosenOffer: null,
  },
  reducers: {
    changeOfferSortCriteria: (state, action) => {
      state.sortCriteria = action.payload;
    },
    changeOffers: (state, action) => {
      state.offers = action.payload;
    },
    changeChosenOffer: (state, action) => {
      state.chosenOffer = action.payload;
    },
  },
});
export const { changeOfferSortCriteria, changeOffers, changeChosenOffer } =
  offerSlice.actions;

const salesChartSlice = createSlice({
  name: "salesChart",
  initialState: {
    doShowAdditionalDataSeries: null,
    chartType: null,
    salesChart: null,
  },
  reducers: {
    changeShowAdditionalDataSeries: (state, action) => {
      state.doShowAdditionalDataSeries = action.payload;
    },
    changeChartType: (state, action) => {
      state.chartType = action.payload;
    },
    changeSalesChart: (state, action) => {
      state.salesChart = action.payload;
    },
  },
});
export const {
  changeShowAdditionalDataSeries,
  changeChartType,
  changeSalesChart,
} = salesChartSlice.actions;

const salesPerformanceSlice = createSlice({
  name: "salesPerformance",
  initialState: {
    worstAspectsOfPerformance: null,
    salesPerformanceEvaluation: null,
  },
  reducers: {
    changeWorstAspectsOfPerformance: (state, action) => {
      state.worstAspectsOfPerformance = action.payload;
    },
    changeSalesPerformanceEvaluation: (state, action) => {
      state.salesPerformanceEvaluation = action.payload;
    },
  },
});
export const {
  changeWorstAspectsOfPerformance,
  changeSalesPerformanceEvaluation,
} = salesPerformanceSlice.actions;

const salesCategoryInterpretationSlice = createSlice({
  name: "salesCategoryInterpretation",
  initialState: {
    categories: [],
    maxAssessment: null,
  },
  reducers: {
    changeSalesCategories: (state, action) => {
      state.categories = action.payload;
    },
    changeSalesMaxAssessment: (state, action) => {
      state.maxAssessment = action.payload;
    },
  },
});
export const { changeSalesCategories, changeSalesMaxAssessment } =
  salesCategoryInterpretationSlice.actions;

const accountSlice = createSlice({
  name: "account",
  initialState: {
    mainAccount: null,
    chosenFunctionalAccount: null,
  },
  reducers: {
    changeMainAccount: (state, action) => {
      state.mainAccount = action.payload;
    },
    changeChosenFunctionalAccount: (state, action) => {
      state.chosenFunctionalAccount = action.payload;
    },
  },
});
export const { changeMainAccount, changeChosenFunctionalAccount } =
  accountSlice.actions;

const rootReducer = combineReducers({
  colorSchemeState: colorSchemeSlice.reducer,
  languageState: languageSlice.reducer,
  orderState: orderSlice.reducer,
  reviewState: reviewSlice.reducer,
  offerState: offerSlice.reducer,
  salesChartState: salesChartSlice.reducer,
  salesPerformanceState: salesPerformanceSlice.reducer,
  salesCategoryInterpretationState: salesCategoryInterpretationSlice.reducer,
  accountState: accountSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
