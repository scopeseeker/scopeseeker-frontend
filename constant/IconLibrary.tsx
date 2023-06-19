export type IconNameType =
  | 'job'
  | 'personCircle'
  | 'file'
  | 'menu'
  | 'whatsapp'
  | 'facebook'
  | 'linkedin'
  | 'instagram'
  | 'twitter'
  | 'telegram'
  | 'createAccount'
  | 'search'
  | 'moon'
  | 'company'
  | 'pages'
  | 'arrowDown'
  | 'gmail'
  | 'arrowRight'
  | 'arrowLeft'
  | 'quotesLeft'
  | 'quotesRight'
  | 'user'
  | 'case'
  | 'form'
  | 'phone'
  | 'fresher'
  | 'global'
  | 'college'
  | 'add'
  | 'github'
  | 'check'
  | 'searchicon'
  | 'save'
  | 'share'
  | 'location'
  | 'time'
  | 'verifyFill'
  | 'verifyOutline'
  | 'heart'
  | 'email'
  | 'password'
  | 'confirmation'
  | 'dribble'
  | 'forget'
  | 'home'
  | 'health'
  | 'cafeteria'
  | 'beach'
  | 'borderCircle'
  | 'hamburgerMenu'
  | 'chevronDown'
  | 'chevronRight'
  | 'chevronLeft'
  | 'userVerification'
  | 'circleCheck'
  | 'userEdit'
  | 'settings'
  | 'questionMark'
  | 'dashboard'
  | 'logout'
  | 'bellOutline'
  | 'bellFilled'
  | 'sun'
  | 'checklist'
  | 'delete'
  | 'edit'
  | 'upload'
  | 'behance'
  | 'figma'
  | 'sheild'
  | 'statistics'
  | 'users'
  | 'target'
  | 'point'
  | 'cross'
  | 'calenderTime'
  | 'bookmark'
  | 'like'
  | 'leetcode'
  | 'building'
  | 'profile'
  | 'bookmarks'
  | 'tools'
  | string;

type IconData = {
  [K in IconNameType]: JSX.Element;
};

export const IconData: IconData = {
  profile: (
    <>
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
      <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
      <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855"></path>
    </>
  ),
  tools: (
    <>
      <path d="M4 3h8l-1 9h-6z"></path>
      <path d="M7 18h2v3h-2z"></path>
      <path d="M20 3v12h-5c-.023 -3.681 .184 -7.406 5 -12z"></path>
      <path d="M20 15v6h-1v-3"></path>
      <path d="M8 12l0 6"></path>
    </>
  ),
  bookmarks: (
    <>
      <path d="M13 7a2 2 0 0 1 2 2v12l-5 -3l-5 3v-12a2 2 0 0 1 2 -2h6z"></path>
      <path d="M9.265 4a2 2 0 0 1 1.735 -1h6a2 2 0 0 1 2 2v12l-1 -.6"></path>
    </>
  ),
  file: (
    <>
      <path d="M14 3v4a1 1 0 0 0 1 1h4" />
      <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
      <path d="M9 17h6" />
      <path d="M9 13h6" />
    </>
  ),
  chevronDown: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M6 9l6 6l6 -6"></path>
    </>
  ),
  chevronLeft: (
    <>
      <path d="M15 6l-6 6l6 6"></path>
    </>
  ),

  like: (
    <>
      <path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3"></path>
    </>
  ),
  bookmark: (
    <>
      <path d="M12.357 17.214l-.357 -.214l-5 3v-14a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v6.5"></path>
      <path d="M16 19h6"></path>
      <path d="M19 16v6"></path>
    </>
  ),
  date: (
    <>
      <path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
      <path d="M16 3l0 4"></path>
      <path d="M8 3l0 4"></path>
      <path d="M4 11l16 0"></path>
      <path d="M8 15h2v2h-2z"></path>
    </>
  ),
  calenderTime: (
    <>
      <path d="M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4"></path>
      <path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
      <path d="M15 3v4"></path>
      <path d="M7 3v4"></path>
      <path d="M3 11h16"></path>
      <path d="M18 16.496v1.504l1 1"></path>
    </>
  ),
  target: (
    <>
      <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
      <path d="M12 7a5 5 0 1 0 5 5"></path>
      <path d="M13 3.055a9 9 0 1 0 7.941 7.945"></path>
      <path d="M15 6v3h3l3 -3h-3v-3z"></path>
      <path d="M15 9l-3 3"></path>
    </>
  ),
  edit: (
    <>
      <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path>
      <path d="M13.5 6.5l4 4"></path>
    </>
  ),
  users: (
    <>
      <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
      <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>
    </>
  ),
  point: (
    <>
      <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
    </>
  ),
  statistics: (
    <>
      <path d="M3 12m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
      <path d="M9 8m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
      <path d="M15 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
      <path d="M4 20l14 0"></path>
    </>
  ),
  sheild: (
    <>
      <path
        d="M11.998 2l.118 .007l.059 .008l.061 .013l.111 .034a.993 .993 0 0 1 .217 .112l.104 .082l.255 .218a11 11 0 0 0 7.189 2.537l.342 -.01a1 1 0 0 1 1.005 .717a13 13 0 0 1 -9.208 16.25a1 1 0 0 1 -.502 0a13 13 0 0 1 -9.209 -16.25a1 1 0 0 1 1.005 -.717a11 11 0 0 0 7.531 -2.527l.263 -.225l.096 -.075a.993 .993 0 0 1 .217 -.112l.112 -.034a.97 .97 0 0 1 .119 -.021l.115 -.007zm.002 7a2 2 0 0 0 -1.995 1.85l-.005 .15l.005 .15a2 2 0 0 0 .995 1.581v1.769l.007 .117a1 1 0 0 0 1.993 -.117l.001 -1.768a2 2 0 0 0 -1.001 -3.732z"
        strokeWidth="0"
        fill="currentColor"
      ></path>
    </>
  ),
  figma: (
    <>
      <path d="M15 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
      <path d="M6 3m0 3a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v0a3 3 0 0 1 -3 3h-6a3 3 0 0 1 -3 -3z"></path>
      <path d="M9 9a3 3 0 0 0 0 6h3m-3 0a3 3 0 1 0 3 3v-15"></path>
    </>
  ),
  behance: (
    <>
      <path d="M3 18v-12h4.5a3 3 0 0 1 0 6a3 3 0 0 1 0 6h-4.5"></path>
      <path d="M3 12l4.5 0"></path>
      <path d="M14 13h7a3.5 3.5 0 0 0 -7 0v2a3.5 3.5 0 0 0 6.64 1"></path>
      <path d="M16 6l3 0"></path>
    </>
  ),
  dribble: (
    <>
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
      <path d="M12 12a8 8 0 0 0 8 4"></path>
      <path d="M7.5 13.5a12 12 0 0 0 8.5 6.5"></path>
      <path d="M12 12a8 8 0 0 0 -7.464 4.928"></path>
      <path d="M12.951 7.353a12 12 0 0 0 -9.88 4.111"></path>
      <path d="M12 12a8 8 0 0 0 -.536 -8.928"></path>
      <path d="M15.549 15.147a12 12 0 0 0 1.38 -10.611"></path>
    </>
  ),
  upload: (
    <>
      <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path>
      <path d="M7 9l5 -5l5 5"></path>
      <path d="M12 4l0 12"></path>
    </>
  ),
  delete: (
    <>
      <path d="M4 7l16 0"></path>
      <path d="M10 11l0 6"></path>
      <path d="M14 11l0 6"></path>
      <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
      <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
    </>
  ),
  chevronRight: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M9 6l6 6l-6 6"></path>
    </>
  ),
  job: (
    <>
      <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
      <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
      <path d="M12 12l0 .01" />
      <path d="M3 13a20 20 0 0 0 18 0" />
    </>
  ),
  userVerification: (
    <>
      <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
      <path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path>
      <path d="M15 19l2 2l4 -4"></path>
    </>
  ),
  circleCheck: (
    <>
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
      <path d="M9 12l2 2l4 -4"></path>
    </>
  ),
  userEdit: (
    <>
      <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
      <path d="M6 21v-2a4 4 0 0 1 4 -4h3.5"></path>
      <path d="M18.42 15.61a2.1 2.1 0 0 1 2.97 2.97l-3.39 3.42h-3v-3l3.42 -3.39z"></path>
    </>
  ),
  email: (
    <>
      <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
      <path d="M3 7l9 6l9 -6"></path>
    </>
  ),
  password: (
    <>
      <path d="M5 11m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z"></path>
      <path d="M12 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
      <path d="M8 11v-5a4 4 0 0 1 8 0"></path>
    </>
  ),
  confirmation: (
    <>
      <path d="M5 12l5 5l10 -10"></path>
    </>
  ),
  forget: (
    <>
      <path d="M15 11h2a2 2 0 0 1 2 2v2m0 4a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2h4"></path>
      <path d="M12 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
      <path d="M8 11v-3m.347 -3.631a4 4 0 0 1 7.653 1.631"></path>
      <path d="M3 3l18 18"></path>
    </>
  ),
  borderCircle: <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>,

  menu: (
    <>
      <path d="M4 6l16 0" />
      <path d="M4 12l16 0" />
      <path d="M4 18l16 0" />
    </>
  ),
  telegram: (
    <>
      <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4"></path>
    </>
  ),
  whatsapp: (
    <>
      <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path>
      <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"></path>
    </>
  ),
  facebook: (
    <>
      <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
    </>
  ),
  linkedin: (
    <>
      <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
      <path d="M8 11l0 5"></path>
      <path d="M8 8l0 .01"></path>
      <path d="M12 16l0 -5"></path>
      <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
    </>
  ),
  instagram: (
    <>
      <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
      <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
      <path d="M16.5 7.5l0 .01"></path>
    </>
  ),
  twitter: (
    <>
      <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z"></path>
    </>
  ),
  createAccount: (
    <>
      <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
      <path d="M16 19h6"></path>
      <path d="M19 16v6"></path>
      <path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path>
    </>
  ),
  search: (
    <>
      <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
      <path d="M21 21l-6 -6"></path>
    </>
  ),
  verifyFill: (
    <>
      <path
        d="M12.01 2.011a3.2 3.2 0 0 1 2.113 .797l.154 .145l.698 .698a1.2 1.2 0 0 0 .71 .341l.135 .008h1a3.2 3.2 0 0 1 3.195 3.018l.005 .182v1c0 .27 .092 .533 .258 .743l.09 .1l.697 .698a3.2 3.2 0 0 1 .147 4.382l-.145 .154l-.698 .698a1.2 1.2 0 0 0 -.341 .71l-.008 .135v1a3.2 3.2 0 0 1 -3.018 3.195l-.182 .005h-1a1.2 1.2 0 0 0 -.743 .258l-.1 .09l-.698 .697a3.2 3.2 0 0 1 -4.382 .147l-.154 -.145l-.698 -.698a1.2 1.2 0 0 0 -.71 -.341l-.135 -.008h-1a3.2 3.2 0 0 1 -3.195 -3.018l-.005 -.182v-1a1.2 1.2 0 0 0 -.258 -.743l-.09 -.1l-.697 -.698a3.2 3.2 0 0 1 -.147 -4.382l.145 -.154l.698 -.698a1.2 1.2 0 0 0 .341 -.71l.008 -.135v-1l.005 -.182a3.2 3.2 0 0 1 3.013 -3.013l.182 -.005h1a1.2 1.2 0 0 0 .743 -.258l.1 -.09l.698 -.697a3.2 3.2 0 0 1 2.269 -.944zm3.697 7.282a1 1 0 0 0 -1.414 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
        strokeWidth="0"
        fill="currentColor"
      />
    </>
  ),
  verifyOutline: (
    <>
      <path d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7c.412 .41 .97 .64 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1c0 .58 .23 1.138 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55v-1"></path>
      <path d="M9 12l2 2l4 -4"></path>
    </>
  ),
  phone: (
    <>
      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
    </>
  ),
  heart: (
    <>
      <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
    </>
  ),
  personCircle: (
    <>
      <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
      <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
    </>
  ),
  home: (
    <>
      <path d="M15 22v-2"></path>
      <path d="M18 22v-4"></path>
      <path d="M21 22v-6"></path>
      <path d="M19 12.494v-.494h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h4"></path>
      <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v.5"></path>
    </>
  ),
  health: (
    <>
      <path d="M8 8v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"></path>
      <path d="M4 8m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
      <path d="M10 14h4"></path>
      <path d="M12 12v4"></path>
    </>
  ),
  cafeteria: (
    <>
      <path d="M3 14c.83 .642 2.077 1.017 3.5 1c1.423 .017 2.67 -.358 3.5 -1c.83 -.642 2.077 -1.017 3.5 -1c1.423 -.017 2.67 .358 3.5 1"></path>
      <path d="M8 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2"></path>
      <path d="M12 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2"></path>
      <path d="M3 10h14v5a6 6 0 0 1 -6 6h-2a6 6 0 0 1 -6 -6v-5z"></path>
      <path d="M16.746 16.726a3 3 0 1 0 .252 -5.555"></path>
    </>
  ),
  beach: (
    <>
      <path d="M17.553 16.75a7.5 7.5 0 0 0 -10.606 0"></path>
      <path d="M18 3.804a6 6 0 0 0 -8.196 2.196l10.392 6a6 6 0 0 0 -2.196 -8.196z"></path>
      <path d="M16.732 10c1.658 -2.87 2.225 -5.644 1.268 -6.196c-.957 -.552 -3.075 1.326 -4.732 4.196"></path>
      <path d="M15 9l-3 5.196"></path>
      <path d="M3 19.25a2.4 2.4 0 0 1 1 -.25a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 1 .25"></path>
    </>
  ),

  pages: (
    <>
      <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0"></path>
      <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"></path>
      <path d="M3 6l0 13"></path>
      <path d="M12 6l0 13"></path>
      <path d="M21 6l0 13"></path>
    </>
  ),
  arrowDown: (
    <>
      <path d="M12 5l0 14"></path>
      <path d="M18 13l-6 6"></path>
      <path d="M6 13l6 6"></path>
    </>
  ),
  gmail: (
    <>
      <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
      <path d="M3 7l9 6l9 -6"></path>
    </>
  ),
  arrowLeft: (
    <>
      <path d="M5 12l14 0"></path>
      <path d="M5 12l6 6"></path>
      <path d="M5 12l6 -6"></path>
    </>
  ),
  arrowRight: (
    <>
      <path d="M5 12l14 0"></path>
      <path d="M13 18l6 -6"></path>
      <path d="M13 6l6 6"></path>
    </>
  ),
  quotesLeft: (
    <>
      <path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
      <path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
    </>
  ),
  quotesRight: (
    <>
      <path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
      <path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
    </>
  ),
  user: (
    <>
      <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
      <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
    </>
  ),
  case: (
    <>
      <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
      <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"></path>
      <path d="M12 12l0 .01"></path>
      <path d="M3 13a20 20 0 0 0 18 0"></path>
    </>
  ),
  company: (
    <>
      <path d="M3 21l18 0"></path>
      <path d="M5 21v-14l8 -4v18"></path>
      <path d="M19 21v-10l-6 -4"></path>
      <path d="M9 9l0 .01"></path>
      <path d="M9 12l0 .01"></path>
      <path d="M9 15l0 .01"></path>
      <path d="M9 18l0 .01"></path>
    </>
  ),
  moon: (
    <>
      <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
    </>
  ),

  form: (
    <>
      <path d="M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
      <path d="M7 8h10"></path>
      <path d="M7 12h10"></path>
      <path d="M7 16h10"></path>
    </>
  ),
  fresher: (
    <>
      <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
      <path d="M6 21v-2a4 4 0 0 1 4 -4h1.5"></path>
      <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
      <path d="M20.2 20.2l1.8 1.8"></path>
    </>
  ),
  global: (
    <>
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
      <path d="M3.6 9h16.8"></path>
      <path d="M3.6 15h16.8"></path>
      <path d="M11.5 3a17 17 0 0 0 0 18"></path>
      <path d="M12.5 3a17 17 0 0 1 0 18"></path>
    </>
  ),
  college: (
    <>
      <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6"></path>
      <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4"></path>
    </>
  ),
  add: (
    <>
      <path d="M12 5l0 14"></path>
      <path d="M5 12l14 0"></path>
    </>
  ),
  github: (
    <>
      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
    </>
  ),
  check: (
    <>
      <path d="M5 12l5 5l10 -10"></path>
    </>
  ),

  searchicon: (
    <>
      <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
      <path d="M21 21l-6 -6"></path>
    </>
  ),
  save: (
    <>
      <path d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2"></path>
    </>
  ),
  share: (
    <>
      <path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
      <path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
      <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
      <path d="M8.7 10.7l6.6 -3.4"></path>
      <path d="M8.7 13.3l6.6 3.4"></path>
    </>
  ),
  location: (
    <>
      <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
      <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
    </>
  ),
  time: (
    <>
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
      <path d="M12 12h3.5"></path>
      <path d="M12 7v5"></path>
    </>
  ),
  hamburgerMenu: (
    <>
      <path d="M4 6l16 0" />
      <path d="M4 12l16 0" />
      <path d="M4 18l16 0" />
    </>
  ),
  settings: (
    <>
      <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"></path>
      <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
    </>
  ),
  questionMark: (
    <>
      <path d="M19.875 6.27c.7 .398 1.13 1.143 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z"></path>
      <path d="M12 16v.01"></path>
      <path d="M12 13a2 2 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483"></path>
    </>
  ),
  dashboard: (
    <>
      <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
      <path d="M4 9h8"></path>
      <path d="M12 15h8"></path>
      <path d="M12 4v16"></path>
    </>
  ),
  logout: (
    <>
      <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path>
      <path d="M9 12h12l-3 -3"></path>
      <path d="M18 15l3 -3"></path>
    </>
  ),
  bellOutline: (
    <>
      <path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"></path>
      <path d="M9 17v1a3 3 0 0 0 6 0v-1"></path>
    </>
  ),
  bellFilled: (
    <>
      <path
        d="M14.235 19c.865 0 1.322 1.024 .745 1.668a3.992 3.992 0 0 1 -2.98 1.332a3.992 3.992 0 0 1 -2.98 -1.332c-.552 -.616 -.158 -1.579 .634 -1.661l.11 -.006h4.471z"
        strokeWidth="0"
        fill="currentColor"
      ></path>
      <path
        d="M12 2c1.358 0 2.506 .903 2.875 2.141l.046 .171l.008 .043a8.013 8.013 0 0 1 4.024 6.069l.028 .287l.019 .289v2.931l.021 .136a3 3 0 0 0 1.143 1.847l.167 .117l.162 .099c.86 .487 .56 1.766 -.377 1.864l-.116 .006h-16c-1.028 0 -1.387 -1.364 -.493 -1.87a3 3 0 0 0 1.472 -2.063l.021 -.143l.001 -2.97a8 8 0 0 1 3.821 -6.454l.248 -.146l.01 -.043a3.003 3.003 0 0 1 2.562 -2.29l.182 -.017l.176 -.004z"
        strokeWidth="0"
        fill="currentColor"
      ></path>
    </>
  ),
  checklist: (
    <>
      <path d="M9.615 20h-2.615a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8"></path>
      <path d="M14 19l2 2l4 -4"></path>
      <path d="M9 8h4"></path>
      <path d="M9 12h2"></path>
    </>
  ),
  sun: (
    <>
      <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
      <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path>
    </>
  ),
  cross: (
    <>
      <path d="M18 6l-12 12"></path>
      <path d="M6 6l12 12"></path>
    </>
  ),
  leetcode: (
    <>
      <path d="M12 13h7.5"></path>
      <path d="M9.424 7.268l4.999 -4.999"></path>
      <path d="M16.633 16.644l-2.402 2.415a3.189 3.189 0 0 1 -4.524 0l-3.77 -3.787a3.223 3.223 0 0 1 0 -4.544l3.77 -3.787a3.189 3.189 0 0 1 4.524 0l2.302 2.313"></path>
    </>
  ),
  building: (
    <>
      <path d="M3 21h18"></path>
      <path d="M19 21v-4"></path>
      <path d="M19 17a2 2 0 0 0 2 -2v-2a2 2 0 1 0 -4 0v2a2 2 0 0 0 2 2z"></path>
      <path d="M14 21v-14a3 3 0 0 0 -3 -3h-4a3 3 0 0 0 -3 3v14"></path>
      <path d="M9 17v4"></path>
      <path d="M8 13h2"></path>
      <path d="M8 9h2"></path>
    </>
  ),
};
