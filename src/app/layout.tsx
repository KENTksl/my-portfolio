import type { Metadata } from "next";
import { Press_Start_2P, VT323 } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

const pressStart = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start",
});

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
});

export const metadata: Metadata = {
  title: "CV | Nguyen Huynh Quang Minh",
  description: "Curriculum Vitae",
  metadataBase: new URL(siteUrl),
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo192.png",
  },
  openGraph: {
    title: "CV | Nguyen Huynh Quang Minh",
    description: "Curriculum Vitae",
    type: "website",
    locale: "vi_VN",
    images: [{ url: "/opengraph-image" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CV | Nguyen Huynh Quang Minh",
    description: "Curriculum Vitae",
    images: ["/twitter-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${pressStart.variable} ${vt323.variable}`}
      suppressHydrationWarning
    >
      <body>
        <Script
          id="world-theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var mode=null;try{mode=window.localStorage?window.localStorage.getItem('timeThemeMode'):null;}catch(e2){}var d=new Date();if(mode==='day'){d.setHours(12,0,0,0);}if(mode==='night'){d.setHours(0,0,0,0);}var m=d.getHours()*60+d.getMinutes();var t=m/1440;var a=2*Math.PI*t-Math.PI/2;var sunAlt=Math.sin(a);function c01(v){return Math.min(1,Math.max(0,v));}function ss(e0,e1,x){var tt=c01((x-e0)/(e1-e0));return tt*tt*(3-2*tt);}function lerp(x,y,p){return x+(y-x)*p;}function hex(h){h=(h||'').replace('#','').trim();if(h.length===3)h=h[0]+h[0]+h[1]+h[1]+h[2]+h[2];var n=parseInt(h,16)||0;return{r:(n>>16)&255,g:(n>>8)&255,b:n&255};}function mix(a1,b1,p){var A=hex(a1),B=hex(b1);var r=Math.round(lerp(A.r,B.r,p));var g=Math.round(lerp(A.g,B.g,p));var bb=Math.round(lerp(A.b,B.b,p));return 'rgb('+r+' '+g+' '+bb+')';}var night=ss(0.06,0.32,-sunAlt);var twi=ss(0.0,0.22,1-Math.abs(sunAlt));var isNight=night>0.55;document.documentElement.dataset.timeTheme=isNight?'night':'day';var day={sky0:'#00a3ff',sky1:'#35b5ff',sky2:'#6fd6ff',sky3:'#bff3ff',s0:'#fff0b3',s1:'#ffe06b'};var ngt={sky0:'#020617',sky1:'#0b1026',sky2:'#0f1b3a',sky3:'#132a52',s0:'#1b2e5e',s1:'#2b4aa3'};var twb=Math.max(0,twi-0.2)/0.8;var warm0='#ffedd5',warm1='#fb7185';var root=document.documentElement;root.style.setProperty('--sky-0',mix(day.sky0,ngt.sky0,night));root.style.setProperty('--sky-1',mix(day.sky1,ngt.sky1,night));root.style.setProperty('--sky-2',mix(day.sky2,ngt.sky2,night));root.style.setProperty('--sky-3',mix(day.sky3,ngt.sky3,night));var s0=mix(day.s0,ngt.s0,night);var s1=mix(day.s1,ngt.s1,night);if(twb>0){s0=mix(s0,warm0,twb);s1=mix(s1,warm1,twb);}root.style.setProperty('--sunset-0',s0);root.style.setProperty('--sunset-1',s1);var sunO=ss(-0.05,0.12,sunAlt);var moonO=1-sunO;var x=50-40*Math.cos(a);var celAlt=sunO*sunAlt+moonO*-sunAlt;var y=70-58*celAlt;root.style.setProperty('--celestial-x',x.toFixed(2)+'%');root.style.setProperty('--celestial-y',y.toFixed(2)+'%');root.style.setProperty('--celestial-size',Math.round(lerp(170,140,moonO))+'px');var sunA=0.98*sunO;var moonA=0.95*moonO;var col=sunA>=moonA?'rgba(253, 224, 71, '+sunA.toFixed(3)+')':'rgba(226, 232, 240, '+moonA.toFixed(3)+')';root.style.setProperty('--celestial-color',col);var stars=c01(ss(0.0,0.75,night)*(0.25+0.75*moonO));root.style.setProperty('--stars-opacity',stars.toFixed(3));root.style.setProperty('--decor-opacity',lerp(0.62,0.25,night).toFixed(3));}catch(e){}})();",
          }}
        />
        {children}
      </body>
    </html>
  );
}
