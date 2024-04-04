import s from './page.module.scss'

export default function Home() {
  return (
      <main className={s.container}>
        <h1 className={s.title}>Validators Statistics</h1>
        <div className={s.stat}>
          <div className={s.statItem}>
            100 <span className={s.subStatText}>Active</span>
          </div>
          <div className={s.statItem}>
            65.80% <span className={s.subStatText}>Onchain APY</span>
          </div>
          <div className={s.statItem}>
            10 <span className={s.subStatText}>Window</span>
          </div>
        </div>
        <div className={s.valid}>
          <h1 className={s.title}>Validators</h1>
          <div className={s.search}>
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.9144 11.74C9.70877 12.6758 8.19183 13.117 6.67236 12.9738C5.15289 12.8305 3.7451 12.1137 2.73557 10.969C1.72604 9.82442 1.19063 8.33811 1.23835 6.81265C1.28606 5.2872 1.91331 3.83725 2.9924 2.75797C4.07169 1.67887 5.52163 1.05163 7.04709 1.00391C8.57255 0.956198 10.0589 1.4916 11.2035 2.50113C12.3481 3.51067 13.065 4.91845 13.2082 6.43792C13.3514 7.95739 12.9102 9.47433 11.9744 10.68L15.0144 13.72C15.1131 13.8116 15.1853 13.9282 15.2233 14.0575C15.2613 14.1867 15.2638 14.3238 15.2304 14.4544C15.197 14.5849 15.1291 14.704 15.0337 14.7991C14.9383 14.8943 14.819 14.9619 14.6884 14.995C14.558 15.0284 14.4211 15.0261 14.2919 14.9882C14.1627 14.9504 14.0461 14.8784 13.9544 14.78L10.9144 11.74ZM11.7344 6.99997C11.7433 6.40357 11.6335 5.81136 11.4114 5.25779C11.1893 4.70421 10.8594 4.20032 10.4408 3.77542C10.0222 3.35053 9.52328 3.01311 8.97308 2.78281C8.42287 2.5525 7.83236 2.43389 7.2359 2.43389C6.63944 2.43389 6.04893 2.5525 5.49873 2.78281C4.94853 3.01311 4.44961 3.35053 4.031 3.77542C3.6124 4.20032 3.28246 4.70421 3.06038 5.25779C2.8383 5.81136 2.72851 6.40357 2.7374 6.99997C2.75502 8.18143 3.23672 9.30853 4.07843 10.1378C4.92015 10.9671 6.05431 11.4319 7.2359 11.4319C8.41749 11.4319 9.55166 10.9671 10.3934 10.1378C11.2351 9.30853 11.7168 8.18143 11.7344 6.99997Z" fill="#8B949E"/>
            </svg>
            <input type="text" placeholder='Search validator'/>
          </div>
        </div>
        <div className={s.listType}>
          <button className={`${s.listTypeBtn} ${s.active}`}>
            Active set
          </button>
          <button className={`${s.listTypeBtn}`}>
            Inactive set
          </button>
        </div>
        {/*<div className={s.list}>*/}
        {/*    <div className={s.item}>*/}
        {/*        <p className={s.id}>1</p>*/}
        {/*        <div className={s.name}>*/}
        {/*            <img src="https://s3-alpha-sig.figma.com/img/c88d/9479/c22bedcfbca01204a86ff8d0a82cd649?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CIwoVCrw0eHsjruD7n96xc1PTzjyRgiJ3PNq9FBkvMDp37MDSOL3HvGpr8iTXOnsDtqCl5EpysMILxVFxMcF6Nr1W0389CszGjraKQiKl7Sxmno-9mTWnEz2G9P9jrlO5jpjYU9ABrq7SlZeQNzD7S5-srnZ~qCCGoMgW5yI3~wpf31YIU-9McNqmfpVUOjYrRMPF-5NlwbdXuG0JuyAJv~ac4lBja59ANYVAZVfmcJvoDxlKzjAVEdjDB17-eKpPCJN1m3dLVFJ9LKc3kJUSC4mMGDSUJrQqNUcYPRJHCFS7YELDGjobOob7kHDkmO7Lw1-BplOw3fBw8RutSCtJg__" alt=""/>*/}
        {/*            <p>Haqq Association</p>*/}
        {/*        </div>*/}
        {/*        <div className={s.status}>*/}
        {/*            <img src="" alt=""/>*/}
        {/*            <p className={s.textWhite}>254 476 433</p>*/}
        {/*            <p className={s.textGray}>12.93%</p>*/}
        {/*        </div>*/}
        {/*        <div className={s.progress}>*/}
        {/*            <div className={s.line}></div>*/}
        {/*            <p className={s.textGray}>12.93%</p>*/}
        {/*        </div>*/}
        {/*        <p className={s.textWhite}>10%</p>*/}
        {/*        <p className={s.textWhite}>99.99%</p>*/}
        {/*        <p className={s.textWhite}>100.00% <span className={s.textGray}>8/9</span></p>*/}
        {/*        <div className={s.arrow}>→</div>*/}
        {/*    </div>*/}
        {/*</div>*/}
      </main>
  );
}
