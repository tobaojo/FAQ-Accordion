import Plus from '../assets/icon-plus.svg';
import Minus from '../assets/icon-minus.svg';

interface AccordionBtnProps {
  toggle: boolean;
  onToggle: () => void;
}
const AccordionBtn = ({ toggle, onToggle }: AccordionBtnProps) => {
  return (
    <button onClick={onToggle}>
      <img src={toggle ? Minus : Plus} alt="plus-icon" />
    </button>
  );
};

export default AccordionBtn;
