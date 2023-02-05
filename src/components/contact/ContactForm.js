import React, { useState } from 'react';

import {
  Box,
  Card,
  NativeSelect,
  TextInput,
  Textarea,
  Stack,
  Button
} from '@mantine/core';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [natureOfMessage, setNatureOfMessage] = useState('General Enquiry');
  const [message, setMessage] = useState('');

  const isDisabled =
    !name || !email || !message || (message && message?.length < 5);

  return (
    <Card shadow="md">
      <Stack>
        <TextInput
          placeholder="Full name"
          label="Full name"
          radius="md"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
          withAsterisk
        />
        <TextInput
          placeholder="Email address"
          label="Email address"
          radius="md"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
          withAsterisk
        />
        <NativeSelect
          data={['General Enquiry', 'Job Opportunity', 'Question', 'Other']}
          label="Reason of contact"
          placeholder="Select an option"
          value={natureOfMessage}
          onChange={(e) => setNatureOfMessage(e.currentTarget.value)}
          withAsterisk
        />
        <Textarea
          placeholder="Message"
          label="Message"
          radius="md"
          value={message}
          onChange={(e) => setMessage(e.currentTarget.value)}
          withAsterisk
        />
        <Box>
          <Button
            variant="gradient"
            gradient={{ from: 'orange', to: 'grape', deg: 45 }}
            disabled={isDisabled}
          >
            Submit
          </Button>
        </Box>
      </Stack>
    </Card>
  );
};

export default ContactForm;
