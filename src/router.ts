import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '@/views/Home.vue';
import Spreadsheet from '@/views/Spreadsheet.vue';
import About from '@/views/About.vue';
import Barcode from '@/views/Scanner/Barcode.vue';
import QrCode from '@/views/Scanner/QrCode.vue';
import AppBar from '@/components/layout/AppBar.vue';
import Footer from '@/components/layout/Footer.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
    {
        path: '*',
        redirect: '/',
    },
    {
        path: '/',
        name: 'home',
        components: {
            default: Home,
            appbar: AppBar,
        },
        meta: {
            title: 'Trang chủ',
        },
    },
    {
        path: '/spreadsheet',
        name: 'spreadsheet',
        components: {
            default: Spreadsheet,
            appbar: AppBar,
        },
        meta: {
            title: 'Bảng tính',
        },
    },
    {
        path: '/qrcode-scanner',
        name: 'qrcode-scanner',
        components: {
            default: QrCode,
            appbar: AppBar,
        },
        meta: {
            title: 'QRCode',
        },
    },
    {
        path: '/barcode-scanner',
        name: 'barcode-scanner',
        components: {
            default: Barcode,
            appbar: AppBar,
        },
        meta: {
            title: 'Barcode',
        },
    },
    {
        path: '/about',
        name: 'about',
        components: {
            default: About,
            appbar: AppBar,
            footer: Footer,
        },
        meta: {
            title: 'Thông tin',
        },
    },
];

const router = new VueRouter({
    routes,
    mode: 'history',
});

export default router;
