import css from './LoadMoreBtn.module.css'
const LoadMoreBtn = ({onClick}) => {
    return (
        <div className={css.container}>
            <button type="submit" className={css.btnLoad} onClick={onClick} >Load more</button>
        </div>
    )
}

export default LoadMoreBtn;