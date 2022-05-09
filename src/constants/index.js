// -------------------- SELECT OPTIONS --------------------
export const optionsRovers = [
  { value: 'curiosity', label: 'Curiosity' },
  { value: 'opportunity', label: 'Opportunity' },
  { value: 'spirit', label: 'Spirit' }
]

export const optionCameras = [
  { value: 'fhaz', label: 'FHAZ' },
  { value: 'rhaz', label: 'RHAZ' },
  { value: 'mast', label: 'MAST' },
  { value: 'chemcam', label: 'CHEMCAM' },
  { value: 'mahli', label: 'MAHLI' },
  { value: 'mardi', label: 'MAST' },
  { value: 'navcam', label: 'NAVCAM' },
  { value: 'pancam', label: 'PANCAM' },
  { value: 'minites', label: 'MINITES' },
  { value: 'entry', label: 'ENTRY' }
]

// -------------------- STYLES --------------------
export const styles = {
  formContainer: `grid grid-cols-1 lg:grid-cols-4 gap-6`,
  selectContainer: `bg-zinc-800 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer border-b-2 border-purple-700 w-full `,
  labelTextSol: `text-2xl italic font-semibold mr-3`,
  labelTextDay: `text-xl italic font-semibold`,
  btnSubmit: `bg-[#7e22ced1] text-white py-2 px-4 rounded cursor-pointer hover:bg-purple-600/95 w-full`,
  column_1: `space-y-8`,
  column_2: `col-span-3 flex justify-evenly items-center px-4`,
  inputSol: `bg-transparent border-b border-white w-full focus:outline-none text-center text-xl`
}

export const cardStyles = {
  btnPag: `bg-[#7e22ced1] text-white py-1 px-4 rounded cursor-pointer hover:bg-purple-600/95`
}

export const customStyles = {
  option: provided => ({
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
