import { MAIN_BLACK } from '@/assets/color-code';

export default function Footer() {
  return (
    <div
      style={{
        height: 'var(--footer-height)',
        padding: '.5rem',
        width: '100%',
        position: 'absolute',
        top: '100%',
        backgroundColor: MAIN_BLACK,
        color: 'white',
        textAlign: 'center',
      }}
    >
      Footer
    </div>
  );
}
