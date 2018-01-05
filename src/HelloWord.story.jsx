import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import HelloWord from './HelloWord';

storiesOf('HelloWord', module)
    .add('example', () => (
        <HelloWord onClick={action('clicked')}>Hello Button</HelloWord>
    ));