import { ISvg } from '@interface';
export const IconRight = (props: ISvg) => (
  <svg
    width={props.size || '24'}
    height={props.size || '24'}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11 17L6 12L11 7"
      stroke={props.color || 'black'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18 17L13 12L18 7"
      stroke={props.color || 'black'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);