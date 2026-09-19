import Icon from './Icon';
import './Mail.css';

const Mail = () => {

  const openMail = () => {
    window.location.href = `mailto:ruben.jervinge@gmail.com`;
    //window.location.href = `mailto:ruben.jervinge@gmail.com?subject=Hello!&body=Lorem ipsum dolor sit amet`;
  };

  return (
    <div className="mail"
      onClick={openMail}
      data-tooltip-id="tooltip"
      data-tooltip-content="Send me a mail"
    >
      <Icon src="mail" className="mailIcon" />
      <div className='link'>
        ruben.jervinge@gmail.com
      </div>
    </div>
  )
}

export default Mail;