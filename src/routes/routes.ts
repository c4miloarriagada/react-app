import { lazy, LazyExoticComponent } from 'react';
//import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyloads/pages';
import { NoLazy } from '../01-lazyloads/pages/NoLazy';
//import { LazyLayout } from '../01-lazyloads/layout/LazyLayout';

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    name: string;
    Component: React.LazyExoticComponent<() => JSX.Element> | JSXComponent;
}

const LazyLayout = lazy(()=> import(/*webpackChunkName: "LazyLayout"*/'../01-lazyloads/layout/LazyLayout'))


export const routes : Route[] = [
    {
        to: '/lazyload/',
        path: '/lazyload/*',
        Component: LazyLayout,
        name: 'LazyLayout Dashboard'
    },
    {
        to: '/nolazy',
        path: 'nolazy',
        Component: NoLazy,
        name: 'No Lazy'
    }
]