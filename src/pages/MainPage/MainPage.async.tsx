import {lazy} from "react";

export const MainPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    // Сделано для теста лейзи
    setTimeout(() => resolve(import('./MainPage')), 1500)
}));
