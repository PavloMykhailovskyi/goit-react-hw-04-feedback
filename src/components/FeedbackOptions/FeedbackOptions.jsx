import PropTypes from 'prop-types'
import css from './FeedbackOptions.module.css'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <ul className={css.counter__list}>
          {options.map((option, index) => {
            return (
              <li key={index}>
                <button type="button" onClick={onLeaveFeedback} name={option}>
                  {option}
                </button>
              </li>
            );
          })}
        </ul>
    );
}

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
} 