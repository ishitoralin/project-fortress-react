export const mainContentStyle = {
  width: '100%',
  backdropFilter: 'blur(50px)',
  color: 'white',
  bgcolor: 'rgba(85, 85, 85, .8)',
  boxShadow: '0 -5px 15px #333',
  backgroundImage: `url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='30' height='30' patternTransform='scale(4) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(25, 0%, 100%, 0)'/><path d='M0 22.5h30v15H0zm15-15h30v15H15m-30-15h30v15h-30zm15-15h30v15H0z'  stroke-width='1.5' stroke='hsla(38, 0%, 40%, 1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,-14)' fill='url(%23a)'/></svg>")`,
  backgroundAttachment: 'fixed',
};

export const flexRowSpaceBetween = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
};

export const containerStyle = {
  p: '2rem',
};

export const filterStyle = {
  width: '27%',
  maxHeight: '650px',
  overflowY: 'auto',
  position: 'sticky',
  top: '2rem',
  bgcolor: '#eee',
};
