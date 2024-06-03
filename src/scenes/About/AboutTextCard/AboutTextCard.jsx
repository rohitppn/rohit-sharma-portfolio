import s from './AboutTextCard.module.scss';
import { ImPointRight } from 'react-icons/im';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Hi Everyone, I am{' '}
        <span className={s.purple}>Rohit Sharma </span>
        from <span className={s.purple}> Patna, Bihar.</span>
        <br />
        Mern stack Dev with expertise in Front---end development{' '}
        <br />
        using React.
        <br />
        <br />
        I have a Diploma degree in UI/UX Designing and
        <br />
        Bachelor's degree in in Computer Application from CU.
        <br />
        <br />
        Apart from coding, some other activities that I love to do!
      </p>

      <ul>
        <li className={s.aboutActivity}>
          <ImPointRight /> Playing Games
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Reading
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Travelling
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Quantum computer
        </li>
      </ul>
    </div>
  );
};

export default AboutTextCard;
