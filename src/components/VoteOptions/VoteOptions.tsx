import css from './VoteOptions.module.css';
import type { VoteType } from '../../types/votes';

interface VoteOptionsProps { 
  onVote: (type: VoteType) => void; // Функція оновлення конкретного типу
  onReset: () => void;             // Функція повного скидання
  canReset: boolean;               // Чи відображати кнопку Reset
};
const VoteOptions = ({ onVote, onReset, canReset }: VoteOptionsProps) => {
  return (
 <div className={css.container}>
    <button className={css.button} onClick={() => onVote('good')}>Good</button>
    <button className={css.button} onClick={() => onVote('neutral')}>Neutral</button>
    <button className={css.button} onClick={() => onVote('bad')}>Bad</button>
        {canReset && (
          <button className={`${css.button} ${css.reset}`} onClick={onReset}>Reset</button>
        )}
 </div>
);};
export default VoteOptions;