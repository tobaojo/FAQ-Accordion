import { useState, useEffect } from 'react';
import { useAnimate } from 'motion/react';
import AccordionBtn from './AccordionBtn';

interface AccordionItemProps {
  title: string;
  body: string;
}

const AccordionItem = ({ title, body }: AccordionItemProps) => {
  const [toggle, setToggle] = useState(false);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const element = scope.current?.querySelector('.text-item') as HTMLElement;

    if (!element) return;

    if (toggle) {
      element.style.display = 'block';
      const height = element.scrollHeight;
      animate(element, { opacity: [0, 1], height: `${height}px` }, { duration: 0.2, ease: 'easeOut' });
    } else {
      const height = element.scrollHeight;
      element.style.height = `${height}px`;
      animate(element, { opacity: [1, 0], height: [height, 0] }, { duration: 0.2, ease: 'easeOut' });
    }
  }, [animate, scope, toggle]);

  const onToggle = () => setToggle(!toggle);

  const handleClick = () => setToggle(!toggle);

  return (
    <div ref={scope} className="my-5 h-auto">
      <div className="header-item flex flex-row justify-between text-lg font-semibold items-center my-2">
        <h2 className="hover:text-purple-500 hover:cursor-pointer text-purple-950" onClick={handleClick}>
          {title}
        </h2>
        <AccordionBtn toggle={toggle} onToggle={onToggle} />
      </div>
      <p className="text-item text-item overflow-hidden opacity-0 h-0 text-purple-600 text-[0.875rem] ">{body}</p>
      <div className="w-full bg-purple-100 h-[0.063rem] my-[1.2rem]"></div>
    </div>
  );
};

export default AccordionItem;
