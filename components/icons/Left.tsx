import { ISvg } from '@interface';
export const IconLeft = (props: ISvg) => (
  <svg
    width={props.size || '24'}
    height={props.size || '24'}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13 17L18 12L13 7"
      stroke={props.color || 'black'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 17L11 12L6 7"
      stroke={props.color || 'black'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
