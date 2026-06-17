import React, { useEffect, useRef, useState } from "react";

// TTS Nigeria — partner-facing landing page
// Brand: deep green #004931 / brand green #00B75B / lemon #8FC14E / yellow #FDC00D / cream #FFF5CC
// Display: Bricolage Grotesque · Body: Inter

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,700;12..96,800&family=Inter:wght@400;500;600;700&display=swap');

:root{
  --green-900:#003726; --green-800:#004931; --green:#00B75B; --green-600:#009a4c;
  --lemon:#8FC14E; --yellow:#FDC00D; --cream:#FFF5CC;
  --ink:#16241d; --muted:#5b6b62; --line:#e4ebe6; --white:#ffffff;
  --r-sm:14px; --r:18px; --r-lg:24px;
  --max:1180px; --read:660px;
  --disp:'Bricolage Grotesque',system-ui,sans-serif;
  --body:'Inter',system-ui,sans-serif;
}
*{box-sizing:border-box}
.tts{font-family:var(--body);color:var(--ink);background:var(--white);line-height:1.65;-webkit-font-smoothing:antialiased;overflow-x:hidden}
.tts h1,.tts h2,.tts h3,.tts h4{font-family:var(--disp);letter-spacing:-0.03em;line-height:1.05;margin:0;font-weight:700}
.tts p{margin:0}
.tts a{color:inherit;text-decoration:none}
.tts img{max-width:100%;display:block}
.wrap{max-width:var(--max);margin:0 auto;padding:0 24px}
.eyebrow{font-size:.78rem;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:var(--green-600)}

/* nav */
.nav{position:sticky;top:0;z-index:50;background:rgba(255,255,255,.86);backdrop-filter:saturate(140%) blur(10px);border-bottom:1px solid var(--line)}
.nav-in{display:flex;align-items:center;justify-content:space-between;height:68px}
.logo{display:flex;align-items:center;gap:10px;font-family:var(--disp);font-weight:800;font-size:1.05rem;letter-spacing:-.02em}
.logo .mk{width:34px;height:34px;display:grid;place-items:center;flex:0 0 auto}
.logo .mk svg{display:block}
.logo small{display:block;font-size:.6rem;font-weight:600;letter-spacing:.18em;color:var(--green);text-transform:uppercase;line-height:1;margin-top:1px}
.nav-links{display:flex;align-items:center;gap:30px}
.nav-links a{font-size:.92rem;font-weight:500;color:var(--muted)}
.nav-links a:hover{color:var(--ink)}
.btn{display:inline-flex;align-items:center;gap:8px;font-weight:600;font-size:.92rem;border-radius:999px;padding:11px 20px;border:1px solid transparent;cursor:pointer;transition:transform .15s ease,background .15s ease,box-shadow .15s ease}
.btn-primary{background:var(--green);color:#062f1d}
.btn-primary:hover{background:var(--green-600);color:#fff;transform:translateY(-1px)}
.btn-ghost{background:transparent;color:var(--ink);border-color:var(--line)}
.btn-ghost:hover{border-color:var(--green);color:var(--green-600)}
.btn-light{background:rgba(255,255,255,.12);color:#fff;border-color:rgba(255,255,255,.25)}
.btn-light:hover{background:rgba(255,255,255,.2)}
.menu-toggle{display:none;background:none;border:0;cursor:pointer;padding:8px}
.menu-toggle span{display:block;width:22px;height:2px;background:var(--ink);margin:4px 0;border-radius:2px;transition:.2s}

/* hero */
.hero{padding:76px 0 84px;background:
  radial-gradient(900px 420px at 88% -8%, rgba(143,193,78,.18), transparent 60%),
  linear-gradient(180deg,#fbfdf9,#ffffff)}
.hero-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:56px;align-items:center}
.hero h1{font-size:clamp(2.4rem,5.2vw,4rem);font-weight:800}
.hero h1 em{font-style:normal;color:var(--green-600)}
.hero .lead{font-size:1.18rem;color:var(--muted);margin:22px 0 30px;max-width:520px}
.hero-cta{display:flex;gap:12px;flex-wrap:wrap}
.hero-stats{display:flex;gap:34px;margin-top:38px;flex-wrap:wrap}
.hero-stats .n{font-family:var(--disp);font-weight:800;font-size:1.85rem;color:var(--green-800);letter-spacing:-.03em}
.hero-stats .l{font-size:.82rem;color:var(--muted);max-width:120px;line-height:1.35}

/* mosaic */
.mosaic{display:grid;grid-template-columns:repeat(3,1fr);grid-auto-rows:1fr;gap:12px;aspect-ratio:1/1.02}
.tile{border-radius:var(--r);position:relative;overflow:hidden;display:grid;place-items:center;text-align:center}
.tile.photo{background:linear-gradient(150deg,var(--green-800),var(--green-900));color:rgba(255,255,255,.55)}
.tile.photo::after{content:"";position:absolute;inset:0;background:radial-gradient(120% 90% at 30% 20%,rgba(0,183,91,.32),transparent 60%);mix-blend-mode:screen}
.tile .ph{font-size:.66rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;z-index:1;opacity:.8}
.tile.word{font-family:var(--disp);font-weight:800;font-size:clamp(.95rem,1.5vw,1.3rem);letter-spacing:-.02em;line-height:1.04;padding:14px}
.tile.w-green{background:var(--green);color:#062f1d}
.tile.w-lemon{background:var(--lemon);color:#1f3b0b}
.tile.w-yellow{background:var(--yellow);color:#5a4500}
.tile.w-cream{background:var(--cream);color:var(--green-800)}
.span2{grid-column:span 2}

/* section base */
.section{padding:86px 0;scroll-margin-top:84px}
.hero{scroll-margin-top:0}
.section.cream{background:var(--cream)}
.section.dark{background:var(--green-800);color:#eaf3ee}
.section.dark h2,.section.dark h3{color:#fff}
.head{max-width:var(--read);margin-bottom:44px}
.head h2{font-size:clamp(1.9rem,3.6vw,2.7rem);font-weight:700;margin:12px 0 0}
.head p{color:var(--muted);font-size:1.06rem;margin-top:16px}
.section.dark .head p{color:rgba(255,255,255,.78)}

/* problem */
.two{display:grid;grid-template-columns:1fr 1fr;gap:24px}
.pcard{background:var(--white);border:1px solid var(--line);border-radius:var(--r-lg);padding:32px}
.pcard .big{font-family:var(--disp);font-weight:800;font-size:2.6rem;color:var(--green-600);letter-spacing:-.03em;line-height:1}
.pcard h3{font-size:1.2rem;margin:6px 0 12px}
.pcard p{color:var(--muted);font-size:.97rem}

/* stat band */
.band{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:rgba(255,255,255,.14);border-radius:var(--r-lg);overflow:hidden}
.band .cell{background:var(--green-800);padding:30px 26px}
.band .n{font-family:var(--disp);font-weight:800;font-size:2.3rem;color:var(--yellow);letter-spacing:-.03em;line-height:1}
.band .l{color:rgba(255,255,255,.82);font-size:.9rem;margin-top:10px;line-height:1.4}
.assets{margin-top:34px;color:rgba(255,255,255,.82);max-width:var(--read);font-size:1.02rem}
.chips{display:flex;flex-wrap:wrap;gap:10px;margin-top:18px}
.chip{font-size:.82rem;font-weight:600;padding:7px 14px;border-radius:999px;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.18);color:#fff}

/* glance */
.glance{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.gcard{border-radius:var(--r-lg);padding:30px;background:var(--white);border:1px solid var(--line)}
.gcard .n{font-family:var(--disp);font-weight:800;font-size:3rem;color:var(--green-800);letter-spacing:-.04em;line-height:.95}
.gcard .l{color:var(--muted);margin-top:8px;font-size:.98rem}
.gcard.accent{background:var(--green-800)}
.gcard.accent .n{color:var(--yellow)}
.gcard.accent .l{color:rgba(255,255,255,.82)}
.parts{display:flex;flex-wrap:wrap;gap:12px;margin-top:24px}
.part{flex:1;min-width:180px;border-radius:var(--r);padding:20px 22px;background:var(--cream)}
.part .n{font-family:var(--disp);font-weight:800;font-size:1.7rem;color:var(--green-800)}
.part .l{color:var(--muted);font-size:.9rem;margin-top:2px}

/* pillars */
.pillars{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}
.pillar{background:var(--white);border:1px solid var(--line);border-radius:var(--r-lg);padding:30px;transition:transform .18s ease,box-shadow .18s ease}
.pillar:hover{transform:translateY(-4px);box-shadow:0 14px 30px rgba(0,73,49,.1)}
.pillar .ico{width:46px;height:46px;border-radius:13px;background:var(--green);display:grid;place-items:center;margin-bottom:18px}
.pillar .ico svg{width:24px;height:24px;color:#062f1d}
.pillar h3{font-size:1.22rem}
.pillar .goal{display:inline-block;font-size:.8rem;font-weight:600;color:var(--green-600);background:#eafaf0;padding:5px 11px;border-radius:999px;margin:12px 0 14px}
.pillar ul{list-style:none;padding:0;margin:0;display:grid;gap:9px}
.pillar li{position:relative;padding-left:22px;color:var(--muted);font-size:.94rem}
.pillar li::before{content:"";position:absolute;left:0;top:8px;width:8px;height:8px;border-radius:50%;background:var(--lemon)}

/* support grid */
.support{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:20px}
.scard{border-radius:var(--r-lg);padding:26px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.14)}
.section.light-support .scard{background:var(--white);border-color:var(--line)}
.scard .ix{font-family:var(--disp);font-weight:700;font-size:.85rem;color:var(--yellow);letter-spacing:.04em}
.section.light-support .scard .ix{color:var(--green-600)}
.scard h4{font-size:1.05rem;margin:10px 0 8px}
.scard p{font-size:.92rem;color:rgba(255,255,255,.78)}
.section.light-support .scard p{color:var(--muted)}
.subnote{font-size:.92rem;color:rgba(255,255,255,.7);margin-top:30px;max-width:var(--read)}

/* CTA / contacts */
.cta-wrap{display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:center}
.cta-wrap h2{font-size:clamp(2rem,4vw,2.9rem);color:#fff}
.cta-wrap p{color:rgba(255,255,255,.82);margin-top:18px;font-size:1.08rem}
.contacts{display:grid;gap:14px}
.contact{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.16);border-radius:var(--r);padding:18px 20px}
.contact .role{font-size:.75rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--yellow)}
.contact .nm{font-family:var(--disp);font-weight:700;font-size:1.12rem;color:#fff;margin-top:3px}
.contact .det{display:flex;flex-wrap:wrap;gap:6px 18px;margin-top:8px;font-size:.9rem;color:rgba(255,255,255,.82)}
.contact a:hover{color:var(--yellow)}

/* footer */
.foot{background:var(--green-900);color:rgba(255,255,255,.7);padding:46px 0}
.foot-in{display:flex;justify-content:space-between;gap:24px;flex-wrap:wrap;align-items:center}
.foot .tag{font-family:var(--disp);font-weight:700;color:#fff;font-size:1.05rem;letter-spacing:-.02em}
.foot small{font-size:.82rem;line-height:1.6}

/* reveal */
.reveal{opacity:0;transform:translateY(22px);transition:opacity .6s ease,transform .6s ease}
.reveal.in{opacity:1;transform:none}

:focus-visible{outline:3px solid var(--green);outline-offset:3px;border-radius:6px}

@media (max-width:900px){
  .hero-grid,.two,.cta-wrap{grid-template-columns:1fr}
  .pillars,.glance{grid-template-columns:1fr}
  .band{grid-template-columns:1fr 1fr}
  .mosaic{max-width:440px;margin:0 auto;width:100%}
  .nav-links{position:absolute;top:68px;left:0;right:0;flex-direction:column;align-items:stretch;gap:0;background:#fff;border-bottom:1px solid var(--line);padding:8px 24px 18px;display:none}
  .nav-links.open{display:flex}
  .nav-links a{padding:12px 0;border-bottom:1px solid var(--line)}
  .nav-links .btn{margin-top:12px;justify-content:center}
  .menu-toggle{display:block}
}
@media (max-width:560px){ .band{grid-template-columns:1fr} }
@media (prefers-reduced-motion:reduce){ .reveal{transition:none;opacity:1;transform:none} .btn,.pillar{transition:none} }
`;

const IC/* icons */ = {
  case: "M3 7h18M3 7l1 13a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2l1-13M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2",
  grad: "M22 10L12 5 2 10l10 5 10-5zM6 12v5c0 1 3 3 6 3s6-2 6-3v-5",
  mega: "M3 11l14-5v12L3 13v-2zM7 12v6M17 6v0M21 9a3 3 0 0 1 0 6",
};
const Icon = ({ d }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
       strokeLinecap="round" strokeLinejoin="round"><path d={d} /></svg>
);

// Official TTS Nigeria mark — white plate removed, viewBox cropped to the roundel
const TtsMark = ({ size = 34 }) => (
  <svg width={size} height={size} viewBox="412 412 256 256" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="TTS Nigeria">
    <path d="M654.012 540.405C654.012 634.004 633.618 654.406 540.01 654.406C446.402 654.406 426 634.013 426 540.405C426 446.797 446.394 426.437 540.01 426.437C633.626 426.437 654.012 446.805 654.012 540.405Z" fill="#00B75B"/>
    <path d="M534.661 505.775C535.02 507.068 536.205 507.978 537.548 507.978H542.463C543.807 507.978 545 507.068 545.35 505.775L553.119 477.512C553.344 476.695 553.211 475.81 552.752 475.101L549.831 470.553C549.105 469.427 547.754 468.918 546.469 469.293C545.183 469.669 544.316 470.829 544.316 472.172V475.468C544.316 476.044 544.483 476.611 544.791 477.095L545.058 477.512L540.01 495.895L534.953 477.504L535.204 477.112C535.521 476.628 535.679 476.06 535.679 475.485V472.197C535.679 470.854 534.811 469.702 533.526 469.318C532.241 468.934 530.881 469.443 530.155 470.578L527.251 475.101C526.792 475.818 526.659 476.695 526.884 477.512L534.653 505.775H534.661Z" fill="white"/>
    <path d="M517.689 513.193C518.264 513.76 519.024 514.052 519.8 514.052C520.309 514.052 520.826 513.919 521.293 513.652L525.541 511.198C526.709 510.531 527.285 509.154 526.943 507.844L519.541 479.49C519.324 478.663 518.765 477.971 518.014 477.587L513.208 475.1C512.014 474.483 510.596 474.725 509.661 475.693C508.735 476.661 508.56 478.096 509.236 479.264L510.888 482.118C511.18 482.627 511.614 483.028 512.115 483.278L512.557 483.503L517.372 501.953L503.795 488.552L503.82 488.076C503.845 487.5 503.712 486.941 503.42 486.432L501.776 483.578C501.1 482.418 499.773 481.843 498.471 482.168C497.17 482.485 496.252 483.603 496.185 484.939L495.935 490.304C495.893 491.147 496.218 491.981 496.819 492.574L517.672 513.168L517.689 513.193Z" fill="white"/>
    <path d="M476.434 519.177C476.826 519.928 477.519 520.478 478.336 520.695L506.699 528.105C506.949 528.172 507.2 528.197 507.45 528.197C508.501 528.197 509.511 527.638 510.053 526.695L512.515 522.439C513.183 521.28 512.991 519.794 512.048 518.843L491.454 497.99C490.853 497.381 490.027 497.047 489.184 497.106L483.777 497.356C482.433 497.423 481.324 498.341 481.007 499.642C480.689 500.944 481.257 502.271 482.417 502.947L485.287 504.607C485.788 504.891 486.355 505.025 486.923 505L487.423 504.974L500.816 518.543L482.358 513.728L482.141 513.302C481.874 512.793 481.465 512.368 480.981 512.084L478.128 510.432C476.968 509.764 475.533 509.939 474.556 510.866C473.588 511.792 473.346 513.219 473.964 514.404L476.434 519.185V519.177Z" fill="white"/>
    <path d="M475.574 554.381C475.841 554.381 476.108 554.348 476.367 554.273L504.621 546.504C505.923 546.145 506.824 544.96 506.824 543.617V538.71C506.824 537.367 505.915 536.174 504.621 535.823L476.359 528.054C475.541 527.829 474.656 527.963 473.955 528.422L469.399 531.342C468.273 532.068 467.764 533.42 468.148 534.705C468.523 535.99 469.683 536.858 471.027 536.858H474.323C474.898 536.858 475.449 536.691 475.95 536.382L476.367 536.115L494.75 541.164L476.359 546.22L475.95 545.962C475.466 545.653 474.907 545.494 474.339 545.494H471.052C469.708 545.494 468.548 546.362 468.173 547.647C467.797 548.941 468.298 550.292 469.433 551.01L473.947 553.905C474.431 554.223 474.999 554.381 475.574 554.381Z" fill="white"/>
    <path d="M512.498 559.88L510.045 555.633C509.378 554.465 507.992 553.889 506.691 554.231L478.336 561.633C477.519 561.85 476.826 562.4 476.434 563.16L473.956 567.966C473.338 569.159 473.58 570.586 474.548 571.512C475.524 572.439 476.951 572.606 478.119 571.938L480.957 570.303C481.466 570.01 481.883 569.577 482.141 569.068L482.367 568.625L500.816 563.802L487.415 577.379L486.956 577.362C486.38 577.329 485.813 577.47 485.304 577.762L482.458 579.406C481.299 580.074 480.731 581.409 481.048 582.711C481.365 584.012 482.475 584.93 483.819 584.997L489.176 585.247C489.226 585.247 489.276 585.247 489.326 585.247C490.119 585.247 490.886 584.93 491.454 584.355L512.048 563.502C512.991 562.542 513.183 561.065 512.507 559.897L512.498 559.88Z" fill="white"/>
    <path d="M603.586 563.151C603.194 562.4 602.501 561.85 601.684 561.633L573.321 554.223C572.019 553.889 570.642 554.465 569.975 555.625L567.522 559.88C566.854 561.049 567.038 562.526 567.989 563.485L588.583 584.338C589.15 584.914 589.918 585.231 590.702 585.231C590.752 585.231 590.802 585.231 590.853 585.231L596.26 584.98C597.603 584.914 598.713 583.996 599.03 582.694C599.347 581.392 598.78 580.066 597.62 579.39L594.774 577.746C594.274 577.454 593.69 577.312 593.122 577.345L592.622 577.37L579.22 563.802L597.678 568.617L597.895 569.043C598.154 569.543 598.554 569.969 599.055 570.261L601.901 571.905C603.06 572.572 604.496 572.405 605.472 571.479C606.44 570.553 606.682 569.126 606.064 567.933L603.594 563.151H603.586Z" fill="white"/>
    <path d="M611.881 547.622C611.505 546.329 610.345 545.469 609.002 545.469H605.706C605.13 545.469 604.579 545.636 604.079 545.945L603.661 546.212L585.278 541.164L603.67 536.107L604.079 536.366C604.562 536.674 605.122 536.833 605.689 536.833H608.977C610.32 536.833 611.48 535.965 611.855 534.68C612.231 533.387 611.73 532.035 610.596 531.317L606.081 528.422C605.372 527.963 604.496 527.821 603.661 528.046L575.407 535.815C574.105 536.174 573.204 537.358 573.204 538.702V543.608C573.204 544.952 574.114 546.145 575.407 546.496L603.67 554.264C603.928 554.339 604.195 554.373 604.454 554.373C605.021 554.373 605.589 554.206 606.073 553.897L610.621 550.977C611.755 550.251 612.256 548.899 611.881 547.614V547.622Z" fill="white"/>
    <path d="M567.521 522.447L569.975 526.695C570.517 527.638 571.527 528.197 572.578 528.197C572.828 528.197 573.079 528.163 573.329 528.096L601.684 520.695C602.501 520.478 603.202 519.919 603.586 519.168L606.073 514.362C606.69 513.168 606.448 511.741 605.48 510.815C604.512 509.889 603.077 509.714 601.917 510.39L599.055 512.042C598.554 512.334 598.154 512.759 597.895 513.268L597.67 513.711L579.22 518.525L592.621 504.949L593.08 504.966C593.656 504.991 594.224 504.857 594.733 504.565L597.578 502.921C598.738 502.254 599.305 500.919 598.988 499.617C598.671 498.315 597.561 497.397 596.218 497.331L590.861 497.08C590.018 497.039 589.184 497.364 588.583 497.965L567.989 518.817C567.046 519.777 566.854 521.254 567.521 522.422V522.447Z" fill="white"/>
    <path d="M554.479 511.199L558.735 513.652C559.202 513.919 559.711 514.053 560.229 514.053C560.996 514.053 561.764 513.761 562.34 513.193L583.193 492.599C583.793 491.999 584.119 491.172 584.077 490.33L583.827 484.931C583.768 483.587 582.842 482.478 581.54 482.16C580.23 481.835 578.904 482.411 578.236 483.571L576.592 486.416C576.3 486.917 576.167 487.484 576.192 488.068L576.217 488.569L562.649 501.97L567.463 483.512L567.897 483.287C568.406 483.02 568.823 482.619 569.107 482.127L570.751 479.282C571.419 478.122 571.252 476.686 570.325 475.71C569.399 474.734 567.972 474.5 566.779 475.118L562.006 477.588C561.255 477.98 560.696 478.672 560.479 479.499L553.069 507.861C552.735 509.163 553.311 510.54 554.471 511.207L554.479 511.199Z" fill="white"/>
    <path d="M555.038 576.035C556.907 576.035 558.585 576.728 559.903 578.046L574.573 592.716C564.459 599.967 552.552 603.781 540.018 603.781C527.485 603.781 515.586 599.967 505.464 592.716L520.133 578.046C521.444 576.736 523.129 576.035 524.998 576.035H555.055M555.038 568.142H524.982C521.035 568.142 517.321 569.677 514.543 572.464L493.748 593.258C495.467 594.902 497.286 596.438 499.172 597.873C510.496 606.526 524.656 611.666 540.018 611.666C555.38 611.666 569.541 606.526 580.864 597.873C582.75 596.438 584.569 594.902 586.288 593.258L565.494 572.464C562.707 569.677 559.002 568.142 555.055 568.142H555.038Z" fill="white"/>
    <path d="M542.013 561.766H538.016C533.802 561.766 529.838 560.122 526.859 557.143L524.03 554.314C521.051 551.335 519.408 547.372 519.408 543.158V539.161C519.408 534.947 521.051 530.983 524.03 528.004L526.859 525.176C529.838 522.197 533.802 520.553 538.016 520.553H542.013C546.227 520.553 550.19 522.197 553.169 525.176L555.998 528.004C558.977 530.983 560.621 534.947 560.621 539.161V543.158C560.621 547.372 558.977 551.335 555.998 554.314L553.169 557.143C550.19 560.122 546.227 561.766 542.013 561.766ZM538.007 528.146C535.821 528.146 533.76 528.997 532.216 530.541L529.388 533.37C527.844 534.913 526.993 536.975 526.993 539.161V543.158C526.993 545.344 527.844 547.405 529.388 548.949L532.216 551.778C533.76 553.321 535.821 554.172 538.007 554.172H542.004C544.191 554.172 546.252 553.321 547.795 551.778L550.624 548.949C552.168 547.405 553.019 545.344 553.019 543.158V539.161C553.019 536.975 552.168 534.913 550.624 533.37L547.795 530.541C546.252 528.997 544.191 528.146 542.004 528.146H538.007Z" fill="white"/>
  </svg>
);

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) { els.forEach(e => e.classList.add("in")); return; }
    const io = new IntersectionObserver((ent) => {
      ent.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    els.forEach(e => io.observe(e));
    return () => io.disconnect();
  }, []);
}

const MAIL = "mailto:partnership@ttsnigeria.org";

export default function App() {
  const [open, setOpen] = useState(false);
  useReveal();

  const nav = (e, id) => {
    e.preventDefault(); setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="tts">
      <style>{CSS}</style>

      {/* NAV */}
      <header className="nav">
        <div className="wrap nav-in">
          <a className="logo" href="#top" onClick={(e) => nav(e, "top")}>
            <span className="mk"><TtsMark size={34} /></span>
            <span>TTS Nigeria<small>Initiative</small></span>
          </a>
          <nav className={`nav-links ${open ? "open" : ""}`}>
            <a href="#opportunity" onClick={(e) => nav(e, "opportunity")}>The opportunity</a>
            <a href="#operators" onClick={(e) => nav(e, "operators")}>For operators</a>
            <a href="#government" onClick={(e) => nav(e, "government")}>For government</a>
            <a href="#pillars" onClick={(e) => nav(e, "pillars")}>Pillars</a>
            <a className="btn btn-primary" href={MAIL}>Partner with us</a>
          </nav>
          <button className="menu-toggle" aria-label="Menu" onClick={() => setOpen(o => !o)}>
            <span /><span /><span />
          </button>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="hero">
        <div className="wrap hero-grid">
          <div className="reveal">
            <span className="eyebrow">Technology Talent Services · Nigeria</span>
            <h1 style={{ marginTop: 16 }}>Industry-ready BPO talent, sourced for <em>inclusion and impact</em>.</h1>
            <p className="lead">
              TTS Nigeria connects marginalised young women to dignified work in the BPO sector — and connects
              operators and governments to a quality, inclusive talent pipeline built around real hiring demand.
            </p>
            <div className="hero-cta">
              <a className="btn btn-primary" href={MAIL}>Partner with us →</a>
              <a className="btn btn-ghost" href="#operators" onClick={(e) => nav(e, "operators")}>How we help</a>
            </div>
            <div className="hero-stats">
              <div><div className="n">30,000</div><div className="l">young women skilled to BPO-ready standards</div></div>
              <div><div className="n">25,000</div><div className="l">placed in formal, contractual BPO jobs</div></div>
              <div><div className="n">18 mo</div><div className="l">programme duration</div></div>
            </div>
          </div>

          <div className="reveal mosaic" aria-hidden="true">
            <div className="tile word w-green span2">Inclusive opportunities</div>
            <div className="tile photo"><span className="ph">Photo</span></div>
            <div className="tile photo"><span className="ph">Photo</span></div>
            <div className="tile word w-yellow">Local impact</div>
            <div className="tile word w-cream">Global relevance</div>
            <div className="tile photo span2"><span className="ph">Brand photography</span></div>
            <div className="tile word w-lemon">Dignified work</div>
          </div>
        </div>
      </section>

      {/* PROBLEM / OPPORTUNITY */}
      <section id="opportunity" className="section">
        <div className="wrap">
          <div className="head reveal">
            <span className="eyebrow">The problem we solve</span>
            <h2>A talent gap on one side, an opportunity gap on the other.</h2>
            <p>Nigeria has Africa's largest, youngest population and a fast-growing BPO sector — but the two are not yet connected at scale. TTS Nigeria closes that gap.</p>
          </div>
          <div className="two">
            <div className="pcard reveal">
              <div className="big">53.4%</div>
              <h3>Young women, locked out</h3>
              <p>Youth unemployment sits at 53.4%, and young women face it at nearly 1.7× the rate of men — compounded for persons with disabilities and internally displaced persons through gender bias, geography, and unequal digital access.</p>
            </div>
            <div className="pcard reveal">
              <div className="big">5</div>
              <h3>Operators, underserved</h3>
              <p>Nigeria's BPO sector faces limited access to industry-ready talent, infrastructure gaps, trust concerns that weaken client confidence, and thin policy incentives. We address all five through structured support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY BPO / WHY NOW */}
      <section className="section dark">
        <div className="wrap">
          <div className="head reveal">
            <span className="eyebrow" style={{ color: "var(--lemon)" }}>Why BPOs · why now</span>
            <h2>A global industry actively looking for new, scalable talent markets.</h2>
          </div>
          <div className="band reveal">
            <div className="cell"><div className="n">70%</div><div className="l">of Fortune 500 companies already outsource key business functions</div></div>
            <div className="cell"><div className="n">60%+</div><div className="l">of BPO providers now integrate AI and automation into delivery</div></div>
            <div className="cell"><div className="n">⅓+</div><div className="l">of global BPO activity is customer care — multilingual demand rising</div></div>
            <div className="cell"><div className="n">#1</div><div className="l">Africa's largest population, ready to compete for the work</div></div>
          </div>
          <p className="assets reveal">
            As traditional hubs face rising labour costs and talent shortages, Nigeria is positioned to compete — backed
            by expanding digital infrastructure and political will.
          </p>
          <div className="chips reveal">
            <span className="chip">National Outsourcing Strategy</span>
            <span className="chip">EIBIC Programme</span>
            <span className="chip">iSTEP Programme</span>
          </div>
        </div>
      </section>

      {/* AT A GLANCE */}
      <section className="section cream">
        <div className="wrap">
          <div className="head reveal">
            <span className="eyebrow">The programme at a glance</span>
            <h2>Impact sourcing, measured by employment — not completion.</h2>
            <p>An ethical talent supply chain delivering living wages, defined contracts, and structured career pathways.</p>
          </div>
          <div className="glance">
            <div className="gcard reveal"><div className="n">30,000</div><div className="l">young women trained across high-demand BPO tracks</div></div>
            <div className="gcard accent reveal"><div className="n">25,000</div><div className="l">placed in formal, contractual BPO employment</div></div>
            <div className="gcard reveal"><div className="n">18,000</div><div className="l">trained in year one · 3,000 placed</div></div>
          </div>
          <div className="parts reveal">
            <div className="part"><div className="n">100%</div><div className="l">young women, age 18–35</div></div>
            <div className="part"><div className="n">10%</div><div className="l">persons with disabilities</div></div>
            <div className="part"><div className="n">5%</div><div className="l">internally displaced persons</div></div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section id="pillars" className="section">
        <div className="wrap">
          <div className="head reveal">
            <span className="eyebrow">Three project pillars</span>
            <h2>Demand, skills, and the enabling environment — built together.</h2>
          </div>
          <div className="pillars">
            <div className="pillar reveal">
              <div className="ico"><Icon d={IC.case} /></div>
              <h3>Transitioning youth to work</h3>
              <span className="goal">25,000 women matched</span>
              <ul>
                <li>Partner with operators to anchor the programme in real hiring demand</li>
                <li>Map operator-defined roles and the skills required to fill them</li>
                <li>Match qualified women by role, competency, and location</li>
                <li>Convene operators and buyers to grow demand for impact-sourced talent</li>
              </ul>
            </div>
            <div className="pillar reveal">
              <div className="ico"><Icon d={IC.grad} /></div>
              <h3>Technology talent development</h3>
              <span className="goal">30,000 women skilled</span>
              <ul>
                <li>Translate operator requirements into curriculum and assessments</li>
                <li>Build candidate profiles and pathways matched to competency needs</li>
                <li>Deliver job-relevant training through endorsed providers and BPO academies</li>
              </ul>
            </div>
            <div className="pillar reveal">
              <div className="ico"><Icon d={IC.mega} /></div>
              <h3>Policy and ecosystem advocacy</h3>
              <span className="goal">Infrastructure unlocked</span>
              <ul>
                <li>Co-create policy frameworks that incentivise BPO sector growth</li>
                <li>Unlock and link infrastructure to impact-sourcing terms</li>
                <li>Build capacity for regulators and operators to drive inclusion</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FOR OPERATORS */}
      <section id="operators" className="section dark">
        <div className="wrap">
          <div className="head reveal">
            <span className="eyebrow" style={{ color: "var(--lemon)" }}>For BPO operators</span>
            <h2>Five touchpoints that cut the cost and complexity of building an inclusive workforce.</h2>
          </div>
          <div className="support">
            {[
              ["01", "Talent pipeline", "Candidates identified, assessed, and trained against your specified requirements — you receive job-ready participants."],
              ["02", "Curriculum alignment", "We translate your role requirements into curricula delivered by endorsed providers. What is taught maps to what is hired."],
              ["03", "Placement and matching", "Our team pairs certified participants by specialisation, competency, and location — reducing sourcing time and cost."],
              ["04", "Inclusion infrastructure", "Access infrastructure and policy incentives tied to inclusive hiring, making peri-urban and underserved sourcing viable."],
              ["05", "Post-placement tracking", "Verified retention and performance data — and a partner that stands behind its placements."],
            ].map(([ix, t, d]) => (
              <div className="scard reveal" key={ix}>
                <div className="ix">{ix}</div><h4>{t}</h4><p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOR GOVERNMENT */}
      <section id="government" className="section cream light-support">
        <div className="wrap">
          <div className="head reveal">
            <span className="eyebrow">For regulators and public sector</span>
            <h2>Turning state-level ambition into measurable employment outcomes.</h2>
          </div>
          <div className="support">
            {[
              ["01", "BPO-enabling policy", "Technical support to co-develop frameworks that signal readiness to private investors."],
              ["02", "Institutional capacity", "Stakeholder mapping, readiness diagnostics, and targeted training for state coordination teams."],
              ["03", "Partnership convening", "Operator and investor convenings alongside government to secure capacity and stimulate investment."],
              ["04", "Youth employability", "Connecting BPOs with talent so young people progress from skilling into verified, dignified jobs."],
              ["05", "Compliance and safeguards", "Ready-made toolkits aligning operations with state growth, inclusion goals, and international best practice."],
            ].map(([ix, t, d]) => (
              <div className="scard reveal" key={ix}>
                <div className="ix">{ix}</div><h4>{t}</h4><p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + CONTACTS */}
      <section id="partner" className="section dark" style={{ background: "var(--green-900)" }}>
        <div className="wrap cta-wrap">
          <div className="reveal">
            <span className="eyebrow" style={{ color: "var(--yellow)" }}>How you come in</span>
            <h2 style={{ marginTop: 12 }}>Let's translate digital economy ambition into jobs.</h2>
            <p>
              We partner with government, BPO operators, private-sector leaders, development organisations, training
              institutions, and infrastructure providers to strengthen BPO readiness and expand youth employment.
            </p>
            <div className="hero-cta" style={{ marginTop: 28 }}>
              <a className="btn btn-primary" href={MAIL}>Start a partnership conversation</a>
              <a className="btn btn-light" href="mailto:projectdelivery@ttsnigeria.org">Project delivery team</a>
            </div>
          </div>
          <div className="contacts reveal">
            <div className="contact">
              <div className="role">Government lead</div>
              <div className="nm">Janet Olisa</div>
              <div className="det">
                <a href="mailto:Janet.Olisa@ttsnigeria.org">Janet.Olisa@ttsnigeria.org</a>
                <a href="tel:+2348165677400">+234 816 567 7400</a>
              </div>
            </div>
            <div className="contact">
              <div className="role">Partnership lead</div>
              <div className="nm">Kenneth Etiake</div>
              <div className="det">
                <a href="mailto:Kenneth.Etiaka@ttsnigeria.org">Kenneth.Etiaka@ttsnigeria.org</a>
                <a href="tel:+2348036964338">+234 803 696 4338</a>
              </div>
            </div>
            <div className="contact">
              <div className="role">Partnership team</div>
              <div className="nm">General enquiries</div>
              <div className="det"><a href={MAIL}>partnership@ttsnigeria.org</a></div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="foot">
        <div className="wrap foot-in">
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <TtsMark size={40} />
            <div>
              <div className="tag">TTS Nigeria Initiative</div>
              <small>Inclusive opportunities · Local impact · Global relevance</small>
            </div>
          </div>
          <small>A consortium programme advancing inclusive, impact-sourced BPO employment in Nigeria.</small>
        </div>
      </footer>
    </div>
  );
}
