import nextPWA from "next-pwa";

const pwa = nextPWA({
    dest : "public",
    register : true,
    skipWaiting : true,
    disable: process.env.NODE_ENV === "production" ? false : true,
})

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default pwa(nextConfig);
