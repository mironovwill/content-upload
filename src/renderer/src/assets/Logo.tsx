export default function Logo(props: React.ComponentPropsWithoutRef<'svg'>): JSX.Element {
  return (
    <svg {...props} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M256 506C394.071 506 506 394.071 506 256C506 117.929 394.071 6 256 6C117.929 6 6 117.929 6 256C6 394.071 117.929 506 256 506Z"
        fill="black"
      />
      <path
        d="M331.509 369.613C339.257 354.984 345.116 339.488 348.958 323.477C353.112 307.283 355.535 290.719 356.185 274.047L305.297 273.618C304.865 281.988 304.071 290.009 302.913 297.676C301.906 304.776 300.215 311.77 297.866 318.568L238.697 214.927C232.527 203.894 227.12 192.478 222.508 180.754C218.78 171.912 216.746 162.488 216.509 152.942C216.58 145.273 218.592 137.737 222.371 130.994C224.446 127.49 227.538 124.651 231.262 122.824C234.987 120.997 239.182 120.262 243.332 120.712C250.082 120.733 256.672 122.707 262.251 126.38C268.505 130.758 273.178 136.926 275.61 144.011L324.011 120.945C317.579 105.029 305.915 91.5964 290.813 82.7176C275.177 74.7076 257.684 70.6821 239.991 71.0196C229.088 70.7912 218.265 72.848 208.262 77.0496C198.904 80.9612 190.529 86.7827 183.719 94.1179C176.817 101.658 171.494 110.424 168.041 119.923C164.27 130.243 162.346 141.108 162.349 152.053C162.191 165.467 164.264 178.817 168.486 191.596C172.223 203.266 177 214.604 182.766 225.475L192.377 242.312C177.151 255.773 164.22 271.479 154.066 288.844C144.631 305.965 139.803 325.104 140.023 344.502C139.764 357.81 141.662 371.075 145.649 383.816C149.063 394.92 154.665 405.282 162.146 414.332C169.056 422.599 177.775 429.284 187.675 433.906C197.887 438.598 209.055 441.02 220.361 440.992C233.178 441.127 245.954 439.562 258.331 436.344C271.889 432.382 284.103 424.987 293.709 414.925L307.581 438.586L372 439.146L331.509 369.613ZM251.208 386.09C244.643 389.28 237.386 390.916 230.039 390.867C224.68 390.983 219.388 389.718 214.703 387.199C210.018 384.679 206.11 380.996 203.386 376.532C196.989 366.439 193.799 354.752 194.216 342.921C194.234 333.172 196.457 323.544 200.727 314.712C205.514 305.182 211.504 296.261 218.556 288.152L268.691 373.403C263.785 378.719 257.827 383.032 251.171 386.09H251.208Z"
        fill="white"
      />
    </svg>
  )
}