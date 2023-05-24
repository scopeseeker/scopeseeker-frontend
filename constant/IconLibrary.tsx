export type IconNameType =
  | 'job'
  | 'person-circle'
  | 'file'
  | 'menu'
  | 'whatsapp'
  | 'facebook'
  | 'linkedin'
  | 'instagram'
  | 'twitter'
  | 'createAccount'
  | 'search'
  | 'darkMode'
  | 'company'
  | 'pages'
  | 'arrow-down'
  | 'gmail'
  | 'arrow'
  | 'quotes-left'
  | 'quotes-right'
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
  | 'verify'
  | 'heart';

type IconData = {
  [K in IconNameType]: JSX.Element;
};

export const IconData: IconData = {
  file: (
    <>
      <path d="M14 3v4a1 1 0 0 0 1 1h4" />
      <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
      <path d="M9 17h6" />
      <path d="M9 13h6" />
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
  menu: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 6l16 0" />
      <path d="M4 12l16 0" />
      <path d="M4 18l16 0" />
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
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
      <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
      <path d="M16.5 7.5l0 .01"></path>
    </>
  ),
  twitter: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z"></path>
    </>
  ),
  createAccount: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
      <path d="M16 19h6"></path>
      <path d="M19 16v6"></path>
      <path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path>
    </>
  ),
  search: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
      <path d="M21 21l-6 -6"></path>
    </>
  ),
  verify: (
    <>
      <path
        d="M12.01 2.011a3.2 3.2 0 0 1 2.113 .797l.154 .145l.698 .698a1.2 1.2 0 0 0 .71 .341l.135 .008h1a3.2 3.2 0 0 1 3.195 3.018l.005 .182v1c0 .27 .092 .533 .258 .743l.09 .1l.697 .698a3.2 3.2 0 0 1 .147 4.382l-.145 .154l-.698 .698a1.2 1.2 0 0 0 -.341 .71l-.008 .135v1a3.2 3.2 0 0 1 -3.018 3.195l-.182 .005h-1a1.2 1.2 0 0 0 -.743 .258l-.1 .09l-.698 .697a3.2 3.2 0 0 1 -4.382 .147l-.154 -.145l-.698 -.698a1.2 1.2 0 0 0 -.71 -.341l-.135 -.008h-1a3.2 3.2 0 0 1 -3.195 -3.018l-.005 -.182v-1a1.2 1.2 0 0 0 -.258 -.743l-.09 -.1l-.697 -.698a3.2 3.2 0 0 1 -.147 -4.382l.145 -.154l.698 -.698a1.2 1.2 0 0 0 .341 -.71l.008 -.135v-1l.005 -.182a3.2 3.2 0 0 1 3.013 -3.013l.182 -.005h1a1.2 1.2 0 0 0 .743 -.258l.1 -.09l.698 -.697a3.2 3.2 0 0 1 2.269 -.944zm3.697 7.282a1 1 0 0 0 -1.414 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
        stroke-width="0"
        fill="currentColor"
      />
    </>
  ),
  heart: (
    <>
      <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
    </>
  ),
  'person-circle': (
    <>
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
      <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
      <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855"></path>
    </>
  ),

  // Place icon it's dummy

  pages: (
    <>
      <path d="M14 3v4a1 1 0 0 0 1 1h4" />
      <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
      <path d="M9 17h6" />
      <path d="M9 13h6" />
    </>
  ),
  'arrow-down': (
    <>
      <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
      <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
      <path d="M12 12l0 .01" />
      <path d="M3 13a20 20 0 0 0 18 0" />
    </>
  ),
  gmail: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 6l16 0" />
      <path d="M4 12l16 0" />
      <path d="M4 18l16 0" />
    </>
  ),
  arrow: (
    <>
      <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path>
      <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"></path>
    </>
  ),
  'quotes-left': (
    <>
      <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
    </>
  ),
  'quotes-right': (
    <>
      <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
      <path d="M8 11l0 5"></path>
      <path d="M8 8l0 .01"></path>
      <path d="M12 16l0 -5"></path>
      <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
    </>
  ),
  user: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
      <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
      <path d="M16.5 7.5l0 .01"></path>
    </>
  ),
  case: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z"></path>
    </>
  ),
  company: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
      <path d="M16 19h6"></path>
      <path d="M19 16v6"></path>
      <path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path>
    </>
  ),
  darkMode: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
      <path d="M21 21l-6 -6"></path>
    </>
  ),

  form: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
      <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
      <path d="M16.5 7.5l0 .01"></path>
    </>
  ),
  phone: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z"></path>
    </>
  ),
  fresher: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
      <path d="M16 19h6"></path>
      <path d="M19 16v6"></path>
      <path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path>
    </>
  ),
  global: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
      <path d="M21 21l-6 -6"></path>
    </>
  ),
  college: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
      <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
      <path d="M16.5 7.5l0 .01"></path>
    </>
  ),
  add: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z"></path>
    </>
  ),
  github: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
      <path d="M16 19h6"></path>
      <path d="M19 16v6"></path>
      <path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path>
    </>
  ),
  check: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
      <path d="M21 21l-6 -6"></path>
    </>
  ),

  searchicon: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
      <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
      <path d="M16.5 7.5l0 .01"></path>
    </>
  ),
  save: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z"></path>
    </>
  ),
  share: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
      <path d="M16 19h6"></path>
      <path d="M19 16v6"></path>
      <path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path>
    </>
  ),
  location: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
      <path d="M21 21l-6 -6"></path>
    </>
  ),
  time: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
      <path d="M21 21l-6 -6"></path>
    </>
  ),
};
