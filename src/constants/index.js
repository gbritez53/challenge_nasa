// -------------------- SELECT OPTIONS --------------------
export const optionsRovers = [
  { value: 'curiosity', label: 'Curiosity' },
  { value: 'opportunity', label: 'Opportunity' },
  { value: 'spirit', label: 'Spirit' }
]

export const multiselectOptions = [
  'FHAZ',
  'RHAZ',
  'MAST',
  'CHEMCAM',
  'MAHLI',
  'MARDI',
  'NAVCAM',
  'PANCAM',
  'MINITES'
]

// -------------------- STYLES --------------------
export const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: 'black',
    padding: 8
  }),
  control: () => ({
    color: 'white',
    background: '#27272a',
    borderBottom: '2px solid rgb(126 34 206)',
    borderRadius: '0.25rem',
    display: 'flex',
    cursor: 'pointer'
  }),
  menu: () => ({
    background: '#27272a',
    borderRadius: '0.25rem',
    marginTop: 5,
    overflow: 'hidden'
  }),
  menuList: () => ({
    background: '#27272a'
  })
}
