import logo from './logo.svg';
import './App.scss';
import { Checkbox, IconButton, IconChevronDown, IconUser, IconUserAdd, IconUserNumberThree, IconUsers } from "@mirohq/design-system";
import { Button } from "@mirohq/design-system";
import { Flex } from "@mirohq/design-system";
import { Paragraph } from '@mirohq/design-system';
import { IconEnvelope, IconSocialInstagram, IconSocialTwitter, IconBoard, IconMoon } from '@mirohq/design-system';
import { Heading } from '@mirohq/design-system';

import React, { useEffect, useState } from 'react';



function App() {

  const [isActive, setIsActive] = useState(() => {
    const storedState = localStorage.getItem('isActive');
    return storedState ? JSON.parse(storedState) : false;
  }

  );

  const handleButtonClick = () => {
    const updatedState = !isActive;
    setIsActive(updatedState);
    localStorage.setItem('isActive', JSON.stringify(updatedState));
  };

  useEffect(() => {
    localStorage.setItem('isActive', JSON.stringify(isActive));
  }, [isActive]);

  return (
    <div className={isActive ? 'SettingsApp dark' : 'SettingsApp'}>
      <header>
        <Button type='primary' variant="ghost-subtle" size={'large'}>  <Button.IconSlot>
          <IconBoard />
        </Button.IconSlot>Go to boards</Button>
        <div className='ButtonGroup'>
          <label>Testing Alias tokens and components npm i @mirohq/design-system</label>
          <Button onClick={handleButtonClick} id="myDIV" type='primary' size={'large'}><Button.IconSlot>
            <IconMoon />
          </Button.IconSlot>Dark mode</Button>
        </div>
      </header>

      <div className='page'>
        <div className='sidebar'>
          <div className='row SidebarHeader'>
            <svg id="logo" viewBox="0 0 48 48" display="block" fill="none" xmlns="http://www.w3.org/2000/svg" class="Box-sc-g760pt-0 IconBase-sc-1liaym9-0 iwIVym"><rect width="48" height="48" rx="10.4" fill="#FFD02F"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M33.3415 6H28.0732L32.4634 13.7143L22.8049 6H17.5366L22.3659 15.4286L12.2683 6H7L12.2683 18L7 42H12.2683L22.3659 16.2857L17.5366 42H22.8049L32.4634 14.5714L28.0732 42H33.3415L43 12L33.3415 6Z" fill="#050038"></path></svg>
            <IconButton label='Random Icon Button'><IconChevronDown/></IconButton>
          </div>
          <Button type='primary' variant="ghost-prominent" size={'large'} fluid><Button.IconSlot>
            <IconUser />
          </Button.IconSlot>Profile settings</Button>
          <Paragraph weight="bold">User & Team Management</Paragraph>
          <Button type='primary' variant="ghost-subtle" size={'large'} fluid><Button.IconSlot>
            <IconUserAdd />
          </Button.IconSlot>Active users</Button>
          <Button type='primary' variant="ghost-subtle" size={'large'} fluid><Button.IconSlot>
            <IconUsers />
          </Button.IconSlot>Groups</Button>
          <Button type='primary' variant="ghost-subtle" size={'large'} fluid><Button.IconSlot>
            <IconUsers />
          </Button.IconSlot>Teams</Button>
        </div>
        <div className='content'>

          <section className='components'>
            <div className='row'>
              <div className='column icons'>
                <IconEnvelope />
                <IconSocialInstagram />
                <IconSocialTwitter />
              </div>
              <div className='column'>
                <Heading level={2}>Notification for email, mobile push & Slack</Heading>
              </div>

            </div>
          </section>
          <section>
            <Paragraph
              size='normal'
              weight='bold'
            >
              Board activity & conversation
            </Paragraph>
          </section>
          <section className='components'>
            <div className='row'>

              <Flex gap={200}>
                <Checkbox
                  id='true-solid-prominent'
                  variant='solid-prominent'
                  checked
                />
                <Checkbox
                  id='true-solid-prominent'
                  variant='solid-prominent'
                  checked
                />
                <Checkbox
                  id='true-solid-prominent'
                  variant='solid-prominent'
                  checked disabled
                />

              </Flex>

              <div className='column'>
                <label className='subtle'>When a board is shared with me</label>
              </div>
            </div>

            <div className='row'>

              <Flex gap={200}>
                <Checkbox
                  id='true-solid-prominent'
                  variant='solid-prominent'
                />
                <Checkbox
                  id='true-solid-prominent'
                  variant='solid-prominent'
                  checked
                />
                <Checkbox
                  id='true-solid-prominent'
                  variant='solid-prominent'

                />
              </Flex>

              <div className='column'>
                <label className='subtle'>When a board is shared with a team</label>
              </div>
            </div>

            <div className='row'>

              <Flex gap={200}>
                <Checkbox
                  id='true-solid-prominent'
                  variant='solid-prominent'
                  checked
                />
                <Checkbox
                  id='true-solid-prominent'
                  variant='solid-prominent'
                  checked
                />
                <Checkbox
                  id='true-solid-prominent'
                  variant='solid-prominent'

                />
              </Flex>

              <div className='column'>
                <label className='subtle'>When someone requests access to my board</label>
              </div>
            </div>

            <div className='row'>

              <Flex gap={200}>
                <Checkbox
                  id='true-solid-prominent'
                  variant='solid-prominent'
                  checked
                />
                <Checkbox
                  id='true-solid-prominent'
                  variant='solid-prominent'
                  checked
                />
                <Checkbox
                  id='true-solid-prominent'
                  variant='solid-prominent'
                  disabled
                />
              </Flex>

              <div className='column'>
                <label className='subtle'>When someone comments in threads I’m following</label>
              </div>
            </div>
          </section>

          <section>
            <Paragraph
              size='normal'
              weight='bold'
            >
              Project activity
            </Paragraph>
          </section>

          <section className='components'>
            <div className='row'>

              <Flex gap={200}>
                <Checkbox
                  id='true-solid-prominent'
                  variant='solid-prominent'
                  checked
                />
                <div className='CheckboxFiller'>-</div>
                <Checkbox
                  id='true-solid-prominent'
                  variant='solid-prominent'
                  checked disabled
                />

              </Flex>

              <div className='column'>
                <label className='subtle'>When someone adds me to a project</label>
              </div>
            </div>
          </section>

          <section>
            <Heading level={3}>Other email updates</Heading>
          </section>

          <section className='components'>
            <div className='row'>

              <Flex gap={200}>
                <Checkbox
                  id='true-solid-prominent'
                  variant='solid-prominent'
                />
                <Paragraph>Tips & how-tos on using Miro</Paragraph>
              </Flex>
            </div>
            <div className='row subtle'>
              <Paragraph size='small'
                weight='normal'>Get educational content, articles and case studies, videos, webinars, community insights, and best practices to make the most of Miro.</Paragraph>
            </div>
          </section>

          <section className='components'>
            <div className='row'>

              <Flex gap={200}>
                <Checkbox
                  id='true-solid-prominent'
                  variant='solid-prominent'
                />
                <Paragraph>Product & feature updates</Paragraph>
              </Flex>
            </div>
            <div className='row subtle'>
              <Paragraph size='small'
                weight='normal'>Learn about early access betas, new product releases, and feature improvements.</Paragraph>
            </div>
          </section>

          <section className='components'>
            <div className='row'>

              <Flex gap={200}>
                <Checkbox
                  id='true-solid-prominent'
                  variant='solid-prominent'
                />
                <Paragraph>Events & promotions</Paragraph>
              </Flex>
            </div>
            <div className='row subtle'>
              <Paragraph size='small'
                weight='normal'>Learn about special promotions, offers, and exciting upcoming events.</Paragraph>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
