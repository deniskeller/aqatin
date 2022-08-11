export enum OthersIcons {
  ARROW_RIGHT = 'ARROW_RIGHT',
  ARROW_DOWN = 'ARROW_DOWN',
  MASTERCARD = 'MASTERCARD',
  PCI = 'PCI',
  ARROW_TO_ACTION = 'ARROW_TO_ACTION',

  LOADING = 'LOADING',
  BURGER_OPEN = 'BURGER_OPEN',
  BURGER_CLOSE = 'BURGER_CLOSE',
  CULTURE_IMAGE = 'CULTURE_IMAGE',
}

export const othersIcons = {
  [OthersIcons.ARROW_DOWN]: (
    <>
      <path d="M1 2L56.6522 44L113 2" stroke="#E8E268" strokeWidth="3" />
    </>
  ),
  [OthersIcons.ARROW_RIGHT]: (
    <>
      <path
        d="M30.0607 13.0607C30.6464 12.4749 30.6464 11.5251 30.0607 10.9393L20.5147 1.3934C19.9289 0.807612 18.9792 0.807612 18.3934 1.3934C17.8076 1.97918 17.8076 2.92893 18.3934 3.51472L26.8787 12L18.3934 20.4853C17.8076 21.0711 17.8076 22.0208 18.3934 22.6066C18.9792 23.1924 19.9289 23.1924 20.5147 22.6066L30.0607 13.0607ZM0 13.5H29V10.5H0V13.5Z"
        fill="#1F1F1F"
      />
    </>
  ),
  [OthersIcons.MASTERCARD]: (
    <>
      <path
        d="M43.1329 32.119V32.2027H43.215C43.2304 32.203 43.2456 32.1993 43.259 32.1921C43.2643 32.1885 43.2686 32.1837 43.2715 32.1781C43.2744 32.1725 43.2757 32.1663 43.2755 32.1601C43.2757 32.154 43.2744 32.1479 43.2715 32.1424C43.2686 32.137 43.2643 32.1323 43.259 32.1289C43.2457 32.1213 43.2304 32.1176 43.215 32.1182L43.1329 32.119ZM43.2158 32.0598C43.251 32.0578 43.2858 32.0674 43.3144 32.087C43.3258 32.0959 43.3349 32.1073 43.3409 32.1202C43.3469 32.133 43.3497 32.147 43.3489 32.1611C43.3495 32.1732 43.3473 32.1853 43.3425 32.1965C43.3377 32.2077 43.3305 32.2178 43.3212 32.2262C43.2992 32.2444 43.2716 32.2553 43.2425 32.2574L43.3525 32.3767H43.2678L43.1666 32.2582H43.1338V32.3767H43.0629V32.06H43.2169L43.2158 32.0598ZM43.1938 32.4859C43.231 32.4862 43.2678 32.4791 43.3019 32.465C43.3347 32.4515 43.3646 32.4323 43.3899 32.4083C43.4152 32.3843 43.4355 32.3558 43.4495 32.3245C43.4783 32.2582 43.4783 32.1837 43.4495 32.1174C43.4352 32.0862 43.415 32.0578 43.3899 32.0337C43.3645 32.0096 43.3347 31.9904 43.3019 31.9769C43.2676 31.9636 43.2309 31.9569 43.1938 31.9573C43.1562 31.9569 43.1188 31.9636 43.0838 31.9769C43.0503 31.9901 43.0197 32.0094 42.9939 32.0337C42.9549 32.0716 42.9286 32.1197 42.9182 32.1717C42.9077 32.2238 42.9136 32.2777 42.9351 32.3266C42.9485 32.358 42.9685 32.3865 42.9939 32.4103C43.0197 32.4346 43.0503 32.4539 43.0838 32.4671C43.1186 32.4812 43.1561 32.4883 43.1938 32.488V32.4859ZM43.1938 31.8811C43.2905 31.881 43.3834 31.9171 43.4523 31.9815C43.4856 32.0125 43.5121 32.0494 43.5302 32.0902C43.549 32.132 43.5587 32.177 43.5587 32.2225C43.5587 32.268 43.549 32.3131 43.5302 32.3549C43.5116 32.3954 43.4852 32.4323 43.4523 32.4635C43.4186 32.4943 43.3793 32.5191 43.3364 32.5368C43.2913 32.555 43.2428 32.5642 43.1938 32.564C43.1443 32.5643 43.0952 32.555 43.0495 32.5368C43.0061 32.5195 42.9665 32.4947 42.9327 32.4635C42.8998 32.4311 42.8738 32.393 42.8559 32.3513C42.8371 32.3095 42.8274 32.2645 42.8274 32.219C42.8274 32.1735 42.8371 32.1284 42.8559 32.0866C42.8741 32.0459 42.9006 32.0089 42.9338 31.978C42.9671 31.9463 43.0069 31.9214 43.0506 31.9047C43.0963 31.8865 43.1454 31.8772 43.1949 31.8775L43.1938 31.8811ZM9.50751 30.6583C9.50751 30.0545 9.92331 29.5586 10.6029 29.5586C11.2523 29.5586 11.6906 30.0332 11.6906 30.6583C11.6906 31.2834 11.2523 31.758 10.6029 31.758C9.92331 31.758 9.50751 31.2621 9.50751 30.6583ZM12.4309 28.9402H11.6457V29.3587C11.3966 29.0494 11.0189 28.8554 10.5052 28.8554C9.49321 28.8554 8.69901 29.6105 8.69901 30.6591C8.69901 31.7078 9.49277 32.4629 10.5052 32.4629C11.0187 32.4629 11.3966 32.2687 11.6457 31.9596V32.3767H12.43L12.4309 28.9402ZM38.961 30.6583C38.961 30.0545 39.3768 29.5586 40.0566 29.5586C40.7067 29.5586 41.1443 30.0332 41.1443 30.6583C41.1443 31.2834 40.7067 31.758 40.0566 31.758C39.3771 31.758 38.961 31.2621 38.961 30.6583ZM41.8853 27.561H41.0994V29.3587C40.8504 29.0494 40.4727 28.8554 39.959 28.8554C38.947 28.8554 38.1528 29.6105 38.1528 30.6591C38.1528 31.7078 38.9465 32.4629 39.959 32.4629C40.4727 32.4629 40.8504 32.2687 41.0994 31.9596V32.3767H41.8853V27.561ZM22.176 29.5232C22.682 29.5232 23.0069 29.825 23.0898 30.3563H21.2163C21.3001 29.8603 21.6165 29.5232 22.176 29.5232ZM22.1918 28.8535C21.1336 28.8535 20.3933 29.586 20.3933 30.6573C20.3933 31.7495 21.1633 32.461 22.2444 32.461C22.7882 32.461 23.2863 32.3319 23.7245 31.9797L23.3398 31.4261C23.037 31.6563 22.6516 31.7855 22.2893 31.7855C21.7833 31.7855 21.3226 31.5626 21.2093 30.9442H23.8904C23.8981 30.8513 23.906 30.7575 23.906 30.657C23.8981 29.5862 23.2025 28.8535 22.1918 28.8535ZM31.6711 30.657C31.6711 30.0533 32.0869 29.5573 32.7665 29.5573C33.416 29.5573 33.8542 30.0319 33.8542 30.657C33.8542 31.2821 33.416 31.7568 32.7665 31.7568C32.0869 31.7568 31.6711 31.2608 31.6711 30.657ZM34.5943 30.657V28.9402H33.8095V29.3587C33.5596 29.0494 33.1828 28.8554 32.6691 28.8554C31.6571 28.8554 30.8629 29.6105 30.8629 30.6591C30.8629 31.7078 31.6566 32.4629 32.6691 32.4629C33.1828 32.4629 33.5596 32.2687 33.8095 31.9596V32.3767H34.5945V30.6583L34.5943 30.657ZM27.2371 30.657C27.2371 31.699 27.9996 32.4608 29.1634 32.4608C29.7072 32.4608 30.0695 32.3457 30.4614 32.0512L30.0843 31.4475C29.7895 31.649 29.4799 31.7568 29.1383 31.7568C28.5115 31.7495 28.0506 31.3184 28.0506 30.657C28.0506 29.9957 28.5115 29.5648 29.1383 29.5573C29.4791 29.5573 29.7886 29.6651 30.0843 29.8666L30.4614 29.2629C30.0689 28.9684 29.7065 28.8533 29.1634 28.8533C27.9996 28.8533 27.2371 29.6149 27.2371 30.657ZM37.3592 28.8533C36.9063 28.8533 36.6112 29.0548 36.4073 29.3566V28.9402H35.6292V32.3748H36.4152V30.4494C36.4152 29.8811 36.672 29.5653 37.1852 29.5653C37.3533 29.563 37.5202 29.5923 37.6763 29.6517L37.9183 28.9477C37.7444 28.8826 37.5183 28.8533 37.3592 28.8533ZM16.3128 29.2133C15.935 28.9764 15.4145 28.8539 14.8403 28.8539C13.9255 28.8539 13.3366 29.271 13.3366 29.9535C13.3366 30.5135 13.7751 30.859 14.5825 30.9668L14.9534 31.017C15.3839 31.0745 15.5872 31.1823 15.5872 31.3763C15.5872 31.6419 15.3012 31.7934 14.7642 31.7934C14.2203 31.7934 13.8279 31.6281 13.5632 31.4341L13.1943 32.0165C13.6248 32.3183 14.1686 32.4622 14.7576 32.4622C15.8004 32.4622 16.4047 31.9951 16.4047 31.3412C16.4047 30.7374 15.9291 30.4216 15.1432 30.3138L14.7732 30.2628C14.4333 30.2209 14.1609 30.1558 14.1609 29.9256C14.1609 29.6745 14.4177 29.5234 14.8484 29.5234C15.3093 29.5234 15.7555 29.6887 15.9742 29.8179L16.3141 29.2141L16.3128 29.2133ZM26.444 28.8546C25.991 28.8546 25.696 29.0561 25.4929 29.3579V28.9402H24.7148V32.3748H25.4999V30.4494C25.4999 29.8811 25.7567 29.5653 26.2699 29.5653C26.438 29.563 26.6049 29.5923 26.761 29.6517L27.003 28.9477C26.8292 28.8826 26.603 28.8546 26.444 28.8546ZM19.7436 28.9402H18.4597V27.8982H17.666V28.9402H16.9336V29.6228H17.666V31.1896C17.666 31.9866 17.9911 32.4612 18.92 32.4612C19.2607 32.4612 19.6532 32.3608 19.9023 32.1956L19.6754 31.5561C19.4411 31.6852 19.1844 31.7503 18.9802 31.7503C18.5878 31.7503 18.4597 31.5201 18.4597 31.1754V29.6234H19.7436V28.9402ZM8.00469 32.3756V30.2201C8.00469 29.4083 7.46085 28.8621 6.58415 28.8548C6.12325 28.8474 5.64783 28.9839 5.31497 29.4659C5.06593 29.085 4.67346 28.8548 4.1217 28.8548C3.73604 28.8548 3.35918 28.9625 3.06416 29.3648V28.9402H2.27832V32.3748H3.07032V30.4704C3.07032 29.8741 3.41792 29.5573 3.95472 29.5573C4.47612 29.5573 4.7399 29.8806 4.7399 30.4628V32.3744H5.53365V30.47C5.53365 29.8737 5.89599 29.5569 6.41717 29.5569C6.95331 29.5569 7.20917 29.8802 7.20917 30.4624V32.3739L8.00469 32.3756Z"
        fill="white"
      />
      <path
        d="M43.5805 20.9512V20.4492H43.443L43.2839 20.7937L43.1258 20.4492H42.9878V20.9512H43.0855V20.573L43.2342 20.8993H43.3354L43.4841 20.5722V20.9512H43.5805ZM42.7082 20.9512V20.5352H42.8842V20.4505H42.4346V20.5352H42.6106V20.9512H42.7082Z"
        fill="#777777"
      />
      <path
        d="M27.9526 23.1055H16.0537V2.76514H27.9528L27.9526 23.1055Z"
        fill="#777777"
      />
      <path
        d="M16.808 12.9358C16.808 8.80983 18.839 5.1344 22.0017 2.76579C19.6077 0.970238 16.6467 -0.00427071 13.598 1.40695e-05C6.08783 1.40695e-05 0 5.79147 0 12.9358C0 20.0801 6.08783 25.8716 13.598 25.8716C16.6468 25.8759 19.6079 24.9014 22.002 23.1058C18.8395 20.7376 16.808 17.062 16.808 12.9358Z"
        fill="#626262"
      />
      <path
        d="M44.0056 12.9358C44.0056 20.0801 37.9177 25.8716 30.4076 25.8716C27.3584 25.8758 24.3965 24.9013 22.002 23.1058C25.1656 20.7372 27.1971 17.062 27.1971 12.9358C27.1971 8.80962 25.1653 5.1344 22.0017 2.76579C24.3962 0.970293 27.3583 -0.00419561 30.4073 1.35787e-05C37.9175 1.35787e-05 44.0056 5.79147 44.0056 12.9358Z"
        fill="#9F9F9F"
      />
    </>
  ),
  [OthersIcons.PCI]: (
    <>
      <path
        d="M44.6059 13.5514C44.8484 13.72 45.1974 13.8504 45.5721 13.8504C46.1311 13.8504 46.4535 13.5375 46.4535 13.0705C46.4535 12.6495 46.2299 12.3991 45.6617 12.1686C44.9728 11.8973 44.5483 11.5051 44.5483 10.8675C44.5483 10.1565 45.0931 9.62695 45.9096 9.62695C46.3364 9.62695 46.6534 9.73455 46.8364 9.85007L46.6855 10.332C46.5556 10.2433 46.2747 10.1163 45.8946 10.1163C45.3177 10.1163 45.0986 10.4877 45.0986 10.7991C45.0986 11.226 45.3552 11.4372 45.9376 11.6817C46.6493 11.9871 47.0048 12.3505 47.0048 13.0234C47.0048 13.7269 46.5313 14.3442 45.5359 14.3442C45.1293 14.3442 44.6855 14.2079 44.4609 14.0477L44.6059 13.5514Z"
        fill="white"
      />
      <path
        d="M49.6929 12.305C49.6993 11.9321 49.5501 11.3346 48.9394 11.3346C48.3749 11.3346 48.1347 11.8909 48.0945 12.305H49.6929ZM48.0867 12.7319C48.0995 13.5381 48.5666 13.8693 49.1169 13.8693C49.5117 13.8693 49.7555 13.7969 49.9586 13.7067L50.0556 14.1276C49.863 14.2223 49.5254 14.3389 49.0437 14.3389C48.1187 14.3389 47.5547 13.6675 47.5547 12.6843C47.5547 11.6891 48.0995 10.9082 48.982 10.9082C49.9687 10.9082 50.2272 11.8503 50.2272 12.4537C50.2272 12.5762 50.2194 12.6709 50.208 12.7378L48.0867 12.7319Z"
        fill="white"
      />
      <path
        d="M53.0649 14.1543C52.9194 14.2267 52.6001 14.3433 52.1952 14.3433C51.2813 14.3433 50.6875 13.6719 50.6875 12.6629C50.6875 11.6519 51.3261 10.9141 52.3146 10.9141C52.639 10.9141 52.9267 11.0013 53.0745 11.0906L52.951 11.5448C52.8201 11.4689 52.6161 11.3881 52.3146 11.3881C51.6198 11.3881 51.2428 11.9499 51.2428 12.6351C51.2428 13.3942 51.6953 13.8638 52.2963 13.8638C52.6065 13.8638 52.8137 13.7805 52.9702 13.7056L53.0649 14.1543Z"
        fill="white"
      />
      <path
        d="M56.2388 13.3738C56.2388 13.713 56.247 14.012 56.2644 14.2694H55.7745L55.747 13.7338H55.7333C55.596 13.9981 55.269 14.3442 54.7314 14.3442C54.257 14.3442 53.6875 14.0522 53.6875 12.9058V10.9883H54.2378V12.7982C54.2378 13.4224 54.4199 13.8489 54.9135 13.8489C55.2827 13.8489 55.5393 13.5712 55.6404 13.299C55.6711 13.2191 55.6903 13.111 55.6903 12.9945V10.9883H56.2388V13.3738Z"
        fill="white"
      />
      <path
        d="M57.1628 12.0109C57.1628 11.6246 57.1573 11.2934 57.1367 10.9879H57.618L57.6436 11.634H57.6628C57.8 11.1932 58.1376 10.9141 58.5045 10.9141C58.5622 10.9141 58.607 10.9205 58.6569 10.9334V11.4907C58.5942 11.4838 58.5379 11.4754 58.4629 11.4754C58.0736 11.4754 57.8 11.7952 57.7255 12.236C57.7117 12.3238 57.7053 12.4195 57.7053 12.5211V14.269H57.1573L57.1628 12.0109Z"
        fill="white"
      />
      <path
        d="M59.7719 14.2705H59.2234V10.9906H59.7719V14.2705ZM59.4851 10.3872C59.2788 10.3872 59.1406 10.2106 59.1406 9.99941C59.1406 9.78968 59.2852 9.62109 59.4979 9.62109C59.7097 9.62109 59.8483 9.78968 59.8483 9.99941C59.8483 10.2106 59.7097 10.3872 59.4938 10.3872H59.4851Z"
        fill="white"
      />
      <path
        d="M61.3493 10.2031V10.9896H62.1371V11.4428H61.3493V13.2131C61.3493 13.6188 61.4577 13.8498 61.7633 13.8498C61.9115 13.8498 62.0008 13.836 62.0826 13.8082L62.106 14.2629C62.0008 14.3031 61.8315 14.3447 61.6188 14.3447C61.3621 14.3447 61.1567 14.249 61.0268 14.0933C60.8749 13.9098 60.8122 13.6188 60.8122 13.2315V11.4428H60.3438V10.9896H60.8122V10.3851L61.3493 10.2031Z"
        fill="white"
      />
      <path
        d="M63.0108 10.9883L63.6673 12.9272C63.7442 13.1444 63.8164 13.4027 63.8672 13.5986H63.8805C63.9354 13.4027 63.9994 13.1513 64.0731 12.9148L64.6742 10.9883H65.2566L64.4295 13.3269C64.0356 14.4525 63.7666 15.0297 63.3919 15.3872C63.1183 15.6386 62.8544 15.7403 62.7167 15.7676L62.5799 15.2662C62.7167 15.2266 62.8992 15.1299 63.0607 14.9742C63.2107 14.8447 63.3919 14.6152 63.5237 14.3097C63.5484 14.2487 63.5662 14.208 63.5662 14.1679C63.5662 14.1327 63.5557 14.0846 63.5237 14.0191L62.4102 10.9883H63.0108Z"
        fill="white"
      />
      <path
        d="M44.6059 20.3278C44.8484 20.4983 45.1974 20.6263 45.5721 20.6263C46.1311 20.6263 46.4535 20.3139 46.4535 19.8453C46.4535 19.4264 46.2299 19.1765 45.6617 18.9454C44.9728 18.6757 44.5483 18.281 44.5483 17.6434C44.5483 16.9324 45.0931 16.4043 45.9096 16.4043C46.3364 16.4043 46.6534 16.5124 46.8364 16.6279L46.6855 17.1094C46.5556 17.0216 46.2747 16.8932 45.8946 16.8932C45.3177 16.8932 45.0986 17.2651 45.0986 17.5759C45.0986 18.0028 45.3552 18.2131 45.9376 18.4565C46.6493 18.7634 47.0048 19.1289 47.0048 19.8002C47.0048 20.5053 46.5313 21.1211 45.5359 21.1211C45.1293 21.1211 44.6855 20.9862 44.4609 20.8221L44.6059 20.3278Z"
        fill="white"
      />
      <path
        d="M48.374 16.9805V17.7659H49.1622V18.2205H48.374V19.9891C48.374 20.3962 48.482 20.6268 48.7871 20.6268C48.9385 20.6268 49.0268 20.6129 49.1064 20.5856L49.132 21.0403C49.0268 21.0829 48.8567 21.1216 48.6435 21.1216C48.3868 21.1216 48.1815 21.0274 48.0497 20.8717C47.9006 20.6892 47.8356 20.3962 47.8356 20.0109V18.2205H47.3672V17.7659H47.8356V17.1639L48.374 16.9805Z"
        fill="white"
      />
      <path
        d="M51.3795 19.3762C50.7779 19.3613 50.0968 19.4774 50.0968 20.113C50.0968 20.5077 50.3342 20.6818 50.6087 20.6818C51.009 20.6818 51.2665 20.412 51.3539 20.1339C51.3731 20.0729 51.3795 20.0059 51.3795 19.9439V19.3762ZM51.9161 20.2633C51.9161 20.5484 51.9299 20.8251 51.9596 21.0487H51.4669L51.4157 20.6381H51.3974C51.2359 20.892 50.906 21.1226 50.4714 21.1226C49.8593 21.1226 49.5469 20.6555 49.5469 20.1815C49.5469 19.3886 50.196 18.9547 51.3658 18.9607V18.8928C51.3658 18.624 51.2963 18.1277 50.6782 18.1351C50.3909 18.1351 50.0968 18.2224 49.8831 18.3781L49.7582 17.9769C50.0098 17.8084 50.3781 17.6953 50.7601 17.6953C51.6924 17.6953 51.9161 18.3781 51.9161 19.0356V20.2633Z"
        fill="white"
      />
      <path
        d="M52.7991 18.6553C52.7991 18.3102 52.7949 18.0414 52.7734 17.7682H53.262L53.2949 18.3042H53.3059C53.456 17.9988 53.8059 17.6953 54.3059 17.6953C54.7263 17.6953 55.375 17.9651 55.375 19.0902V21.0488H54.8265V19.1581C54.8265 18.63 54.6422 18.1822 54.1243 18.1822C53.7689 18.1822 53.488 18.4589 53.3864 18.7912C53.3631 18.8675 53.3503 18.9761 53.3503 19.0703V21.0488H52.7991V18.6553Z"
        fill="white"
      />
      <path
        d="M58.3297 19.1016C58.3297 19.0198 58.3246 18.9266 58.304 18.8448C58.2235 18.473 57.9244 18.1596 57.5103 18.1596C56.9399 18.1596 56.6027 18.7025 56.6027 19.4224C56.6027 20.0918 56.9102 20.6406 57.4994 20.6406C57.8667 20.6406 58.2043 20.3694 58.304 19.9301C58.3246 19.8469 58.3297 19.7675 58.3297 19.6718V19.1016ZM58.8814 16.2344V20.2014C58.8814 20.4929 58.8855 20.8231 58.9033 21.0467H58.4106L58.3855 20.478H58.3713C58.2043 20.8449 57.8415 21.1216 57.3475 21.1216C56.616 21.1216 56.0469 20.4512 56.0469 19.4537C56.0405 18.3569 56.6727 17.6935 57.4038 17.6935C57.8713 17.6935 58.1851 17.9291 58.3159 18.1884H58.3297V16.2344H58.8814Z"
        fill="white"
      />
      <path
        d="M61.3895 19.3762C60.7884 19.3613 60.105 19.4774 60.105 20.113C60.105 20.5077 60.3433 20.6818 60.6192 20.6818C61.0185 20.6818 61.2738 20.412 61.363 20.1339C61.3804 20.0729 61.3895 20.0059 61.3895 19.9439V19.3762ZM61.9261 20.2633C61.9261 20.5484 61.938 20.8251 61.9709 21.0487H61.4769L61.4257 20.6381H61.4078C61.2436 20.892 60.9119 21.1226 60.4819 21.1226C59.8676 21.1226 59.5547 20.6555 59.5547 20.1815C59.5547 19.3886 60.2052 18.9547 61.3749 18.9607V18.8928C61.3749 18.624 61.3054 18.1277 60.6873 18.1351C60.4001 18.1351 60.105 18.2224 59.8946 18.3781L59.7674 17.9769C60.019 17.8084 60.3895 17.6953 60.7678 17.6953C61.7015 17.6953 61.9261 18.3781 61.9261 19.0356V20.2633Z"
        fill="white"
      />
      <path
        d="M62.8172 18.7912C62.8172 18.4049 62.809 18.0727 62.793 17.7667H63.2747L63.2976 18.4128H63.3177C63.455 17.971 63.7921 17.6953 64.1627 17.6953C64.2171 17.6953 64.262 17.6998 64.3127 17.7127V18.27C64.2492 18.2631 64.1956 18.2561 64.1169 18.2561C63.7317 18.2561 63.455 18.5755 63.3804 19.0148C63.3676 19.1026 63.3612 19.1988 63.3612 19.2999V21.0488H62.809L62.8172 18.7912Z"
        fill="white"
      />
      <path
        d="M66.8826 19.1016C66.8826 19.0198 66.8771 18.9266 66.8588 18.8448C66.7751 18.473 66.4759 18.1596 66.0642 18.1596C65.4928 18.1596 65.1579 18.7025 65.1579 19.4224C65.1579 20.0918 65.4617 20.6406 66.05 20.6406C66.4205 20.6406 66.7581 20.3694 66.8588 19.9301C66.8771 19.8469 66.8826 19.7675 66.8826 19.6718V19.1016ZM67.4315 16.2344V20.2014C67.4315 20.4929 67.4379 20.8231 67.4572 21.0467H66.9631L66.9379 20.478H66.9269C66.7581 20.8449 66.394 21.1216 65.899 21.1216C65.1675 21.1216 64.6016 20.4512 64.6016 19.4537C64.5943 18.3569 65.2256 17.6935 65.9553 17.6935C66.4246 17.6935 66.7398 17.9291 66.8707 18.1884H66.8826V16.2344H67.4315Z"
        fill="white"
      />
      <path
        d="M68.2708 20.4448C68.4391 20.5538 68.7264 20.6753 69.0008 20.6753C69.3956 20.6753 69.5809 20.4641 69.5809 20.1874C69.5809 19.9023 69.4263 19.7456 69.0265 19.584C68.4771 19.3673 68.2195 19.0475 68.2195 18.6543C68.2195 18.1267 68.6221 17.6934 69.2625 17.6934C69.5704 17.6934 69.8384 17.7796 70.0031 17.8962L69.8714 18.3241C69.751 18.2482 69.5338 18.1327 69.2506 18.1327C68.9272 18.1327 68.7506 18.337 68.7506 18.5804C68.7506 18.8571 68.9272 18.9806 69.3192 19.1422C69.8384 19.3519 70.1143 19.638 70.1143 20.1319C70.1143 20.7145 69.6971 21.1216 68.9903 21.1216C68.6582 21.1216 68.3503 21.0274 68.1367 20.891L68.2708 20.4448Z"
        fill="white"
      />
      <path
        d="M75.1031 20.9054C74.9091 21.014 74.5038 21.1211 73.991 21.1211C72.802 21.1211 71.9141 20.3079 71.9141 18.8036C71.9141 17.3662 72.8084 16.4043 74.1154 16.4043C74.6337 16.4043 74.9699 16.5253 75.1145 16.6086L74.9773 17.0895C74.7773 16.9809 74.4837 16.8981 74.1355 16.8981C73.146 16.8981 72.49 17.5834 72.49 18.7833C72.49 19.9088 73.082 20.6208 74.1012 20.6208C74.4411 20.6208 74.7773 20.5459 74.9997 20.4304L75.1031 20.9054Z"
        fill="white"
      />
      <path
        d="M76.9425 20.6767C77.4686 20.6767 77.862 20.1411 77.862 19.3948C77.862 18.8399 77.6058 18.1416 76.9544 18.1416C76.3094 18.1416 76.028 18.7913 76.028 19.4156C76.028 20.1347 76.4054 20.6767 76.9361 20.6767H76.9425ZM76.9247 21.1235C76.1104 21.1235 75.4727 20.4724 75.4727 19.4365C75.4727 18.338 76.1415 17.6953 76.9736 17.6953C77.8423 17.6953 78.4283 18.3782 78.4283 19.3764C78.4283 20.5959 77.6484 21.1235 76.9301 21.1235H76.9247Z"
        fill="white"
      />
      <path
        d="M81.6577 20.1533C81.6577 20.4924 81.6627 20.7904 81.681 21.0462H81.1957L81.1627 20.5108H81.1522C81.0136 20.775 80.6883 21.1211 80.1485 21.1211C79.6759 21.1211 79.1055 20.8306 79.1055 19.6838V17.7656H79.6567V19.5757C79.6567 20.2009 79.8365 20.6263 80.3329 20.6263C80.6998 20.6263 80.9564 20.3497 81.0575 20.0785C81.0904 19.9957 81.1064 19.8881 81.1064 19.774V17.7656H81.6577V20.1533Z"
        fill="white"
      />
      <path
        d="M82.5702 18.6553C82.5702 18.3102 82.5647 18.0414 82.5469 17.7682H83.0318L83.0652 18.3042H83.078C83.2276 17.9988 83.578 17.6953 84.0785 17.6953C84.4976 17.6953 85.1467 17.9651 85.1467 19.0902V21.0488H84.5987V19.1581C84.5987 18.63 84.4157 18.1822 83.8955 18.1822C83.5419 18.1822 83.2578 18.4589 83.1567 18.7912C83.1343 18.8675 83.1215 18.9761 83.1215 19.0703V21.0488H82.5702V18.6553Z"
        fill="white"
      />
      <path
        d="M88.2008 20.9351C88.0571 21.009 87.7401 21.124 87.3325 21.124C86.4194 21.124 85.8242 20.4541 85.8242 19.4434C85.8242 18.4352 86.4606 17.6953 87.4537 17.6953C87.7749 17.6953 88.0644 17.7806 88.2126 17.8684L88.0891 18.3266C87.956 18.2502 87.7497 18.1684 87.4537 18.1684C86.7556 18.1684 86.381 18.7318 86.381 19.4166C86.381 20.1749 86.8311 20.643 87.4322 20.643C87.7442 20.643 87.9519 20.5617 88.107 20.4873L88.2008 20.9351Z"
        fill="white"
      />
      <path
        d="M89.3917 21.0464H88.8413V17.7655H89.3917V21.0464ZM89.1053 17.1635C88.8981 17.1635 88.7617 16.987 88.7617 16.7773C88.7617 16.5656 88.9054 16.3965 89.1172 16.3965C89.3291 16.3965 89.4663 16.5656 89.4663 16.7773C89.4663 16.987 89.3291 17.1635 89.1094 17.1635H89.1053Z"
        fill="white"
      />
      <path d="M90.3086 21.0469H90.859V16.2344H90.3086V21.0469Z" fill="white" />
      <path
        d="M41.8092 18.8668L9.44164 29.896L0 2.0681L33.9797 0L41.8092 18.8668Z"
        fill="white"
      />
      <path
        d="M13.2949 13.3398C13.2949 12.3025 12.5858 11.7834 11.1695 11.7834H10.6544V14.9859H11.1288C11.8292 14.9859 12.3658 14.853 12.7382 14.5877C13.1101 14.3205 13.2949 13.906 13.2949 13.3398ZM17.3352 13.2892C17.3352 13.9937 17.1925 14.612 16.9006 15.151C16.6142 15.6885 16.2089 16.1347 15.6865 16.4912C15.1636 16.8511 14.536 17.1189 13.7995 17.2979C13.0639 17.4764 12.2496 17.5651 11.3548 17.5651H10.6969V21.1494H6.48828V9.20312H11.4175C13.2597 9.20312 14.7084 9.54127 15.7574 10.2156C16.8105 10.8904 17.3352 11.9163 17.3352 13.2892Z"
        fill="black"
      />
      <path
        d="M27.737 21.1395C27.0897 21.2734 26.3577 21.3403 25.537 21.3403C24.3737 21.3403 23.3357 21.196 22.4203 20.9065C21.5095 20.6194 20.7368 20.2099 20.1033 19.6778C19.4701 19.1448 18.9893 18.5003 18.659 17.7402C18.3292 16.9751 18.1641 16.1273 18.1641 15.1931C18.1641 14.2689 18.3397 13.427 18.6911 12.6645C19.0433 11.9019 19.5392 11.2514 20.1792 10.708C20.8174 10.1655 21.5804 9.74705 22.4665 9.45154C23.3485 9.15851 24.3234 9.00977 25.3856 9.00977C26.2054 9.00977 26.9652 9.03654 27.6304 9.19223C28.2987 9.35039 28.3125 9.37221 28.8436 9.57996L28.8363 12.7854C28.4213 12.5316 27.952 12.3218 27.4355 12.1533C26.9195 11.9872 26.3646 11.9019 25.7763 11.9019C24.8257 11.9019 24.0544 12.1855 23.456 12.7497C22.8599 13.3175 22.5621 14.1247 22.5621 15.1748C22.5621 15.7192 22.6559 16.1942 22.8407 16.6038C23.0292 17.0143 23.2817 17.3549 23.5965 17.6256C23.9139 17.8983 24.2831 18.1036 24.7076 18.2395C25.1326 18.3793 25.5878 18.4482 26.0777 18.4482C26.58 18.4482 27.0737 18.3907 27.5549 18.2757C28.0357 18.1601 28.549 17.9926 29.0961 17.7724L29.1021 20.7657C28.4369 20.9769 28.3829 21.0066 27.737 21.1395Z"
        fill="black"
      />
      <path
        d="M30.8242 21.1494H35.0521V9.20312H30.8242V21.1494Z"
        fill="black"
      />
      <path
        d="M35.5065 5.45773C35.5065 6.26148 35.2599 6.89418 34.769 7.35184C34.2768 7.80999 33.6684 8.03857 32.9446 8.03857C32.2209 8.03857 31.612 7.80999 31.1203 7.35184C30.6276 6.89418 30.3828 6.26148 30.3828 5.45773C30.3828 4.63662 30.6276 3.995 31.1203 3.53833C31.612 3.07918 32.2209 2.84961 32.9446 2.84961C33.6684 2.84961 34.2768 3.07918 34.769 3.53833C35.2599 3.995 35.5065 4.63662 35.5065 5.45773Z"
        fill="black"
      />
      <path
        d="M87.9201 10.099H87.4297V9.72656H88.8273V10.099H88.33V11.6973H87.9201"
        fill="white"
      />
      <path
        d="M90.5716 10.9388C90.5629 10.7038 90.5542 10.4202 90.5542 10.1297H90.551C90.4915 10.381 90.4161 10.6621 90.347 10.8927L90.1233 11.6611H89.804L89.6091 10.9021C89.5505 10.6681 89.4911 10.3899 89.4453 10.1297H89.4421C89.4307 10.3959 89.4197 10.7013 89.4101 10.9462L89.3753 11.6948H88.9961L89.11 9.72461H89.658L89.8369 10.3845C89.8955 10.6106 89.9499 10.856 89.9902 11.0855H89.9998C90.0487 10.8584 90.1096 10.6011 90.1745 10.3785L90.3639 9.72461H90.9046L91.0002 11.6948H90.6013L90.5716 10.9388Z"
        fill="white"
      />
    </>
  ),
  [OthersIcons.ARROW_TO_ACTION]: (
    <>
      <path
        d="M68.961 8.91737C63.688 21.0936 54.657 32.9954 42.8583 42.329C32.1795 50.7759 19.756 56.7789 7.51018 59.5977C6.82203 59.7425 6.64001 60.5698 7.00208 60.807C9.14609 62.169 10.8806 63.869 12.2878 65.858C12.6139 65.476 12.94 65.094 13.266 64.7121C8.73653 64.5383 4.80106 63.3853 1.54303 61.2971C1.49247 61.6397 1.4419 61.9824 1.39134 62.325C5.3156 58.5784 9.46545 55.1815 13.8952 52.0709C14.7704 51.4708 14.0134 50.6097 13.166 51.2245C8.73626 54.3351 4.55924 57.7638 0.717123 61.4615C0.308266 61.846 0.231159 62.2669 0.56543 62.4895C3.8797 64.6536 7.95356 65.8334 12.5936 66.0193C13.2565 66.0459 13.9371 65.3431 13.5719 64.8734C12.1078 62.7621 10.2627 61.05 8.00749 59.6293C7.8198 60.0381 7.68708 60.4297 7.49939 60.8386C34.2747 54.6515 60.3201 33.3056 69.5961 8.92925C69.7294 8.58409 69.0944 8.57221 68.961 8.91737Z"
        fill="#E8E268"
      />
      <path
        d="M6.96389 58.9264C18.9727 57.8198 31.3053 50.0408 40.9691 41.1307C46.5378 35.9779 51.575 30.3597 56.2522 24.6901C60.5757 19.435 65.1105 13.4591 66.6898 7.63426C66.8739 6.94538 65.7122 6.88713 65.418 7.61039C63.0098 13.4602 59.5987 18.7345 55.1943 24.1318C50.7082 29.6248 45.8621 35.0664 40.5395 40.0255C30.9314 48.9649 19.2289 56.3367 7.14864 58.2841C6.67978 58.3603 6.52223 58.9708 6.96389 58.9264Z"
        fill="#E8E268"
      />
    </>
  ),

  [OthersIcons.LOADING]: (
    <>
      <path
        d="M36.5 19C36.5 22.4612 35.4736 25.8446 33.5507 28.7225C31.6278 31.6003 28.8947 33.8434 25.697 35.1679C22.4993 36.4924 18.9806 36.839 15.5859 36.1637C12.1913 35.4885 9.07305 33.8218 6.62563 31.3744C4.17821 28.9269 2.5115 25.8087 1.83626 22.4141C1.16102 19.0194 1.50757 15.5007 2.83211 12.303C4.15664 9.10533 6.39966 6.37221 9.27752 4.44928C12.1554 2.52636 15.5388 1.5 19 1.5"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  [OthersIcons.BURGER_OPEN]: (
    <>
      <path
        d="M6.14314 5.75056H14.7146C14.7931 5.75056 14.8574 5.68627 14.8574 5.6077V4.6077C14.8574 4.52913 14.7931 4.46484 14.7146 4.46484H6.14314C6.06456 4.46484 6.00028 4.52913 6.00028 4.6077V5.6077C6.00028 5.68627 6.06456 5.75056 6.14314 5.75056ZM6.00028 9.39341C6.00028 9.47199 6.06456 9.53627 6.14314 9.53627H14.7146C14.7931 9.53627 14.8574 9.47199 14.8574 9.39341V8.39341C14.8574 8.31484 14.7931 8.25056 14.7146 8.25056H6.14314C6.06456 8.25056 6.00028 8.31484 6.00028 8.39341V9.39341ZM15.0003 0.714844H1.00028C0.921708 0.714844 0.857422 0.779129 0.857422 0.857701V1.8577C0.857422 1.93627 0.921708 2.00056 1.00028 2.00056H15.0003C15.0788 2.00056 15.1431 1.93627 15.1431 1.8577V0.857701C15.1431 0.779129 15.0788 0.714844 15.0003 0.714844ZM15.0003 12.0006H1.00028C0.921708 12.0006 0.857422 12.0648 0.857422 12.1434V13.1434C0.857422 13.222 0.921708 13.2863 1.00028 13.2863H15.0003C15.0788 13.2863 15.1431 13.222 15.1431 13.1434V12.1434C15.1431 12.0648 15.0788 12.0006 15.0003 12.0006ZM1.40028 9.32377L4.19135 7.12556C4.21014 7.11079 4.22533 7.09194 4.23578 7.07044C4.24623 7.04894 4.25166 7.02535 4.25166 7.00145C4.25166 6.97755 4.24623 6.95396 4.23578 6.93246C4.22533 6.91096 4.21014 6.89211 4.19135 6.87734L1.40028 4.67734C1.29671 4.5952 1.14314 4.66841 1.14314 4.80056V9.19877C1.14313 9.2286 1.15151 9.25782 1.16733 9.28311C1.18314 9.30839 1.20576 9.32872 1.23258 9.34176C1.25941 9.3548 1.28936 9.36003 1.31901 9.35684C1.34867 9.35366 1.37683 9.3422 1.40028 9.32377Z"
        fill="black"
      />
    </>
  ),
  [OthersIcons.BURGER_CLOSE]: (
    <>
      <path
        d="M6.14314 5.75056H14.7146C14.7931 5.75056 14.8574 5.68627 14.8574 5.6077V4.6077C14.8574 4.52913 14.7931 4.46484 14.7146 4.46484H6.14314C6.06456 4.46484 6.00028 4.52913 6.00028 4.6077V5.6077C6.00028 5.68627 6.06456 5.75056 6.14314 5.75056ZM6.00028 9.39341C6.00028 9.47199 6.06456 9.53627 6.14314 9.53627H14.7146C14.7931 9.53627 14.8574 9.47199 14.8574 9.39341V8.39341C14.8574 8.31484 14.7931 8.25056 14.7146 8.25056H6.14314C6.06456 8.25056 6.00028 8.31484 6.00028 8.39341V9.39341ZM15.0003 0.714844H1.00028C0.921708 0.714844 0.857422 0.779129 0.857422 0.857701V1.8577C0.857422 1.93627 0.921708 2.00056 1.00028 2.00056H15.0003C15.0788 2.00056 15.1431 1.93627 15.1431 1.8577V0.857701C15.1431 0.779129 15.0788 0.714844 15.0003 0.714844ZM15.0003 12.0006H1.00028C0.921708 12.0006 0.857422 12.0648 0.857422 12.1434V13.1434C0.857422 13.222 0.921708 13.2863 1.00028 13.2863H15.0003C15.0788 13.2863 15.1431 13.222 15.1431 13.1434V12.1434C15.1431 12.0648 15.0788 12.0006 15.0003 12.0006ZM0.918136 7.12377L3.70921 9.32199C3.81278 9.40413 3.96635 9.33091 3.96635 9.19877V4.80234C3.96635 4.6702 3.81456 4.59699 3.70921 4.67913L0.918136 6.87734C0.899369 6.89193 0.884182 6.91062 0.873736 6.93197C0.863289 6.95333 0.857859 6.97679 0.857859 7.00056C0.857859 7.02433 0.863289 7.04779 0.873736 7.06914C0.884182 7.0905 0.899369 7.10918 0.918136 7.12377Z"
        fill="black"
      />
    </>
  ),

  [OthersIcons.CULTURE_IMAGE]: (
    <>
      <g filter="url(#filter0_d_201_3)">
        <g filter="url(#filter1_d_201_3)">
          <path
            d="M75 0H402V461.48C402 461.48 79.5161 483.225 77.3417 245.376C75.1673 7.52686 75 0 75 0Z"
            fill="#E8E268"
          />
        </g>
        <path
          d="M116.601 151.663H109.877L104.261 194.141L98.6445 151.663H91.9209L94.2939 169.514L99.5146 202.604H109.06L113.252 173.521L117.471 202.604H127.016L132.21 169.566L134.583 151.663H127.833L122.217 194.141L116.601 151.663ZM122.217 188.129L127.147 150.872H135.479L133.001 169.672L127.701 203.396H116.785L113.252 179.059L109.745 203.396H98.8291L93.5029 169.619L91.0244 150.872H99.3301L104.261 188.129L109.191 150.872H117.286L122.217 188.129ZM140.753 202.604H159.315V196.039H147.424V180.43H157.654V173.838H147.424V158.229H159.315V151.663H140.753V202.604ZM139.962 150.872H160.106V159.02H148.215V173.047H158.445V181.221H148.215V195.248H160.106V203.396H139.962V150.872ZM194.7 151.663H185.155L179.935 184.78L177.562 202.604H184.285L185.762 191.636H194.067L195.518 202.604H202.268L199.895 184.701L194.7 151.663ZM192.301 184.253L189.901 166.139L187.502 184.253H192.301ZM200.686 184.596L203.164 203.396H194.832L193.382 192.427H186.447L184.971 203.396H176.665L179.144 184.675L184.47 150.872H195.386L200.686 184.596ZM186.605 185.044L189.901 160.127L193.197 185.044H186.605ZM208.464 202.604H215.135V180.034L216.77 179.797L223.493 202.604H230.823L222.491 178.689C226.481 177.23 228.477 174.312 228.477 169.936V162.157C228.477 155.179 225.295 151.689 218.932 151.689L208.464 151.663V202.604ZM215.926 159.02V173.047H217.244C218.229 173.047 218.896 172.985 219.248 172.862C220.426 172.388 221.015 171.412 221.015 169.936V162.157C221.015 160.065 220.065 159.02 218.167 159.02H215.926ZM207.673 150.872L218.932 150.898C225.822 150.898 229.268 154.651 229.268 162.157V169.936C229.268 174.664 227.343 177.74 223.493 179.164L231.931 203.396H222.913L216.189 180.693L215.926 180.72V203.396H207.673V150.872ZM218.167 158.229C220.593 158.229 221.806 159.538 221.806 162.157V169.936C221.806 171.764 221.041 172.985 219.512 173.601C219.09 173.759 218.334 173.838 217.244 173.838H215.135V158.229H218.167ZM236.94 202.604H255.503V196.039H243.611V180.43H253.842V173.838H243.611V158.229H255.503V151.663H236.94V202.604ZM236.149 150.872H256.294V159.02H244.402V173.047H254.633V181.221H244.402V195.248H256.294V203.396H236.149V150.872ZM273.907 151.663V158.229H280.895V202.604H287.565V158.229H294.553V151.663H273.907ZM295.344 150.872V159.02H288.356V203.396H280.104V159.02H273.116V150.872H295.344ZM300.907 202.604H319.47V196.039H307.578V180.43H317.809V173.838H307.578V158.229H319.47V151.663H300.907V202.604ZM300.116 150.872H320.261V159.02H308.369V173.047H318.6V181.221H308.369V195.248H320.261V203.396H300.116V150.872ZM341.46 151.663H331.915L326.694 184.78L324.321 202.604H331.045L332.521 191.636H340.827L342.277 202.604H349.027L346.654 184.701L341.46 151.663ZM339.061 184.253L336.661 166.139L334.262 184.253H339.061ZM347.445 184.596L349.924 203.396H341.592L340.142 192.427H333.207L331.73 203.396H323.425L325.903 184.675L331.229 150.872H342.146L347.445 184.596ZM333.365 185.044L336.661 160.127L339.957 185.044H333.365ZM361.974 151.663H355.224V202.604H361.657V170.437L368.935 202.604H373.364L380.457 170.331V202.604H386.812V151.663H380.062L371.07 188.366L361.974 151.663ZM371.07 185.044L379.429 150.872H387.603V203.396H379.666V177.608L373.997 203.396H368.302L362.448 177.503V203.396H354.433V150.872H362.606L371.07 185.044ZM149.322 284.604H155.993V262.43H157.602C159.746 262.43 161.363 262.254 162.453 261.902C167.041 260.408 169.335 257.086 169.335 251.936V244.157C169.335 237.179 166.153 233.689 159.79 233.689L149.322 233.663V284.604ZM156.784 241.02V255.047H158.103C159.087 255.047 159.755 254.985 160.106 254.862C161.284 254.388 161.873 253.412 161.873 251.936V244.157C161.873 242.065 160.924 241.02 159.025 241.02H156.784ZM148.531 232.872L159.79 232.898C166.681 232.898 170.126 236.651 170.126 244.157V251.936C170.126 257.473 167.656 261.041 162.717 262.641C161.521 263.027 159.816 263.221 157.602 263.221H156.784V285.396H148.531V232.872ZM159.025 240.229C161.451 240.229 162.664 241.538 162.664 244.157V251.936C162.664 253.764 161.899 254.985 160.37 255.601C159.948 255.759 159.192 255.838 158.103 255.838H155.993V240.229H159.025ZM195.043 284.604V278.039H183.151V233.663H176.48V284.604H195.043ZM175.689 285.396V232.872H183.942V277.248H195.834V285.396H175.689ZM215.979 233.663H206.434L201.213 266.78L198.84 284.604H205.563L207.04 273.636H215.346L216.796 284.604H223.546L221.173 266.701L215.979 233.663ZM213.579 266.253L211.18 248.139L208.78 266.253H213.579ZM221.964 266.596L224.442 285.396H216.11L214.66 274.427H207.726L206.249 285.396H197.943L200.422 266.675L205.748 232.872H216.664L221.964 266.596ZM207.884 267.044L211.18 242.127L214.476 267.044H207.884ZM226.578 233.663L235.464 262.482L235.728 263.168V284.604H242.398V263.194L242.636 262.482L251.521 233.663H244.455L239.05 255.047L233.645 233.663H226.578ZM234.277 232.872L239.05 251.83L243.822 232.872H252.576L243.374 262.746L243.189 263.3V285.396H234.937V263.326L234.726 262.746L225.523 232.872H234.277ZM257.902 284.604H276.465V278.039H264.573V262.43H274.804V255.838H264.573V240.229H276.465V233.663H257.902V284.604ZM257.111 232.872H277.256V241.02H265.364V255.047H275.595V263.221H265.364V277.248H277.256V285.396H257.111V232.872ZM283.584 284.604H290.255V262.034L291.89 261.797L298.613 284.604H305.943L297.611 260.689C301.602 259.23 303.597 256.312 303.597 251.936V244.157C303.597 237.179 300.415 233.689 294.052 233.689L283.584 233.663V284.604ZM291.046 241.02V255.047H292.364C293.349 255.047 294.017 254.985 294.368 254.862C295.546 254.388 296.135 253.412 296.135 251.936V244.157C296.135 242.065 295.186 241.02 293.287 241.02H291.046ZM282.793 232.872L294.052 232.898C300.942 232.898 304.388 236.651 304.388 244.157V251.936C304.388 256.664 302.463 259.74 298.613 261.164L307.051 285.396H298.033L291.31 262.693L291.046 262.72V285.396H282.793V232.872ZM293.287 240.229C295.713 240.229 296.926 241.538 296.926 244.157V251.936C296.926 253.764 296.161 254.985 294.632 255.601C294.21 255.759 293.454 255.838 292.364 255.838H290.255V240.229H293.287ZM311.533 248.165C311.533 252.788 313.81 256.726 318.362 259.978C323.126 263.388 325.508 266.411 325.508 269.048V274.954C325.508 277.556 324.295 278.856 321.869 278.856C319.426 278.856 318.204 277.556 318.204 274.954V268.389H311.533V274.954C311.533 281.933 314.979 285.431 321.869 285.448C328.742 285.448 332.179 281.95 332.179 274.954V268.415C332.179 263.915 329.902 260.039 325.35 256.787C320.586 253.377 318.204 250.45 318.204 248.007V243.313C318.204 240.712 319.408 239.411 321.816 239.411H321.869C324.295 239.429 325.508 240.729 325.508 243.313V249.879H332.179V243.313C332.179 236.335 328.733 232.846 321.843 232.846C314.97 232.846 311.533 236.335 311.533 243.313V248.165ZM310.742 243.313C310.742 235.808 314.442 232.055 321.843 232.055C329.261 232.055 332.97 235.808 332.97 243.313V250.67H324.717V243.313C324.717 241.257 323.768 240.22 321.869 240.202H321.816C319.936 240.202 318.995 241.239 318.995 243.313V248.007C318.995 250.169 321.271 252.885 325.824 256.154C330.588 259.547 332.97 263.634 332.97 268.415V274.954C332.97 282.478 329.27 286.239 321.869 286.239C314.451 286.222 310.742 282.46 310.742 274.954V267.598H318.995V274.954C318.995 277.028 319.953 278.065 321.869 278.065C323.768 278.065 324.717 277.028 324.717 274.954V269.048C324.717 266.692 322.44 263.88 317.888 260.61C313.124 257.218 310.742 253.069 310.742 248.165V243.313Z"
          fill="black"
        />
        <path
          d="M87.233 317C46.686 326.086 -25.3487 347.942 10.8878 362.681C56.1835 381.105 427.316 367.476 455.443 379.59C483.57 391.705 436.083 418.962 403.572 423"
          stroke="#1B692C"
          strokeWidth="2"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_201_3"
          x="0"
          y="0"
          width="500"
          height="497"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="20" dy="20" />
          <feGaussianBlur stdDeviation="7.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_201_3"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_201_3"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_201_3"
          x="71"
          y="0"
          width="335"
          height="470"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_201_3"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_201_3"
            result="shape"
          />
        </filter>
      </defs>
    </>
  ),
};
