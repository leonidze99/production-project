import {lazy} from "react";

export const AboutPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    // Сделано для теста лейзи
    setTimeout(() => resolve(import('./AboutPage')), 1500)
}));
