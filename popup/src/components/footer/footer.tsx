import React, { ChangeEvent } from 'react';
import { Settings } from '../../store/reducers';
import Checkbox from '../shared/checkbox';

type Props = {
  settings: Settings,
  settingsUpdated: any,
}

const Footer: React.FC<Props> = ({
  settings, settingsUpdated,
}) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const name = e.target.value;
    console.log('e.target', e.target.checked);
    settingsUpdated({
      [name]: e.target.checked
    })
  };

  return (
    <footer className="footer">
      <div>
        <Checkbox
          id="record"
          onChange={onChange}
          icon={settings.record ? 'ico-pause-record' : 'ico-record'}
          value="record"
          checked={settings.record}
        />
        <Checkbox
          id="logOnHost"
          onChange={onChange}
          icon="ico-log-on-host"
          value="logOnHost"
          checked={settings.logOnHost}
        />
      </div>
    </footer>
  );
};

export default Footer;
