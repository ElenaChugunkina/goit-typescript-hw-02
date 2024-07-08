import { RotatingLines } from 'react-loader-spinner'
import css from './Loader.module.css'

const Loader = () => {
    return (
        <div className={css.loader}>
             <RotatingLines
  visible={true}
  height="150"
  width="150"
  color="grey"
  strokeWidth="5"
  animationDuration="0.75"
  ariaLabel="rotating-lines-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
        </div>
    )
   
}
export default Loader;