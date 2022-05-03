import { Multiselect } from 'multiselect-react-dropdown'
import {
  selectStyle,
  multiselectStyle,
  selectOptions,
  multiselectOptions
} from '../constants'

const styles = {
  container: `grid grid-cols-1 lg:grid-cols-2 gap-12`,
  selectContainer: `bg-zinc-800 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer border-b-2 border-purple-700 w-full `,
  labelText: `text-2xl italic font-semibold`
}

const Select = () => {
  return (
    <>
      <section className={styles.container}>
        <div>
          <label htmlFor='rovers' className={styles.labelText}>
            Select a Rover:
          </label>
          <Multiselect
            singleSelect
            options={selectOptions}
            displayValue='key'
            style={selectStyle}
            closeIcon='circle'
          />
        </div>

        <div>
          <label htmlFor='rovers' className={styles.labelText}>
            Select a Camera:
          </label>
          <Multiselect
            options={multiselectOptions}
            isObject={false}
            closeIcon='none'
            style={multiselectStyle}
          />
        </div>
      </section>
    </>
  )
}

export default Select
