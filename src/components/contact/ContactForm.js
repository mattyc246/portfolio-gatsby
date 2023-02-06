import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

import {
  Box,
  Card,
  NativeSelect,
  TextInput,
  Textarea,
  Stack,
  Button
} from '@mantine/core';
import { showNotification } from '@mantine/notifications';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [natureOfMessage, setNatureOfMessage] = useState('General Enquiry');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const resetForm = () => {
    setName('');
    setEmail('');
    setNatureOfMessage('General Enquiry');
    setMessage('');
  };

  const handleSubmit = () => {
    setIsSubmitting(true);

    const emailParams = {
      sender_name: name,
      sender_email: email,
      sender_nature: natureOfMessage,
      message
    };

    emailjs
      .send(
        process.env.GATSBY_EMAIL_SERVICE_ID,
        process.env.GATSBY_EMAIL_TEMPLATE_ID,
        emailParams,
        process.env.GATSBY_EMAIL_PUBLIC_ID
      )
      .then(() => {
        resetForm();
        setIsSubmitting(false);
        showNotification({
          title: 'Success',
          color: 'green',
          message: 'Message sent, please allow 72 hours for a response.'
        });
      })
      .catch((err) => {
        console.log('Error: ', err);
        setIsSubmitting(false);
        showNotification({
          title: 'Error',
          color: 'red',
          message: 'Something went wrong, please try again!'
        });
      });
  };

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
            onClick={handleSubmit}
            loading={isSubmitting}
          >
            Submit
          </Button>
        </Box>
      </Stack>
    </Card>
  );
};

export default ContactForm;
