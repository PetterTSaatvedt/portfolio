import React, {useEffect} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
  Spinner,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const LandingSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();

  const {
    values,
    errors,
    touched,
    getFieldProps,
    handleBlur,
    handleSubmit,
    handleChange,
  } = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "",
      comment: "",
    },
    onSubmit: (values, actions) => {
      submit("", values);
      actions.resetForm();
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('First name required.'),
      email: Yup.string().email('Invalid email').required("Email is required."),
      type: Yup.string(),
      comment: Yup.string().required('Please provide a message for your inquiry.'),
    }),
  });

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#2f3e46"
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section" color="#cad2c5">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={errors.firstName && touched.firstName ? true : false}>
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder="First name"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.firstName && touched.firstName && <FormErrorMessage>{errors.firstName}</FormErrorMessage>}
              </FormControl>
              <FormControl isInvalid={errors.email && touched.email ? true : false}>
                <Input
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="email"
                />
                {errors.email && touched.email && <FormErrorMessage>{errors.email}</FormErrorMessage>}
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select 
                id="type"
                name="type"
                value={values.type}
                onChange={handleChange}
                onBlur={handleBlur}
                >
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl isInvalid={errors.comment && touched.comment ? true : false}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  value={values.comment}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.comment && touched.comment && <FormErrorMessage>{errors.comment}</FormErrorMessage>}
              </FormControl>
              <Button type="submit" colorScheme="blackAlpha" width="full">
                {isLoading ? <Spinner size="md" /> : "Submit"}
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;