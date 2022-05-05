// -------------------- SELECT OPTIONS --------------------
export const optionsRovers = [
  { value: 'curiosity', label: 'Curiosity' },
  { value: 'opportunity', label: 'Opportunity' },
  { value: 'spirit', label: 'Spirit' }
]

export const cameras = [
  'FHAZ',
  'RHAZ',
  'MAST',
  'CHEMCAM',
  'MAHLI',
  'MARDI',
  'NAVCAM',
  'PANCAM',
  'MINITES',
  'ENTRY'
]

// -------------------- STYLES --------------------
export const styles = {
  formContainer: `grid grid-cols-1 lg:grid-cols-4 gap-10`,
  selectContainer: `bg-zinc-800 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer border-b-2 border-purple-700 w-full `,
  labelText: `text-2xl italic font-semibold`,
  btnSubmit: `bg-[#7e22ced1] text-white py-2 px-4 rounded cursor-pointer hover:bg-purple-600/95 w-full`,
  column_1: `space-y-8`,
  column_2: `col-span-3`,
  inputSol: `bg-transparent border-b border-white w-full focus:outline-none text-center text-xl`
}

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
