import { RouterReducerState } from "@ngrx/router-store";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { RouterStateUrl } from "../routerSerializer";

export const routerSelector = createFeatureSelector
<RouterReducerState<RouterStateUrl>>('router');

export const getCurrentRoute = createSelector(
    routerSelector,
    ((router) => router.state)
);