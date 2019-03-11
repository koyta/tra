import React, { Component } from "react";
import { withFormik, FastField, ErrorMessage } from "formik";
import { AsYouType, isValidNumber } from "libphonenumber-js";
import * as Yup from "yup";

import H2 from "../../components/common/H2";
import Input from "../../components/common/Input";
import Textarea from "../../components/common/Textarea";
import Button from "../../components/common/Button";
import Select from "../../components/common/Select";
import Form from "./Form";
import FormInputContainer from "./FormInputContainer";
import FormFileInputContainer from "./FormFileInputContainer";
import FormSelectContainer from "./FormSelectContainer";
import FormTextareaContainer from "./FormTextareaContainer";

// ======== Start of mocks ========
const positionData = [
  {
    value: "Senior C++ Developer",
  },
  {
    value: "Computer Vision Lead",
  },
  {
    value: "Java/Scala Developer",
  },
  {
    value: "Recruiter",
  },
];

function positionToString(option) {
  return option.value;
}

// ======== End mocks ========

class Careers extends Component {
  handlePositionSelect = position => {
    this.props.setFieldValue("position", position);
  };

  handlePhoneChange = e => {
    const { value } = e.target;
    const f = new AsYouType().input(value);
    this.props.setFieldValue("phone", f);
    this.handlePhoneValidate(f); //bug there, validation doenst set error on errors.phone
  };

  handlePhoneValidate = value => {
    let error;

    if (!isValidNumber(value)) {
      error = "Invalid phone number";
    }

    this.props.setFieldError("phone", error);
  };

  handleFileInputChange = e => {
    const file = e.currentTarget.files[0];
    this.props.setFieldValue("file", file);
  };

  render() {
    return (
      <React.Fragment>
        <H2 style={{ marginTop: 110, marginBottom: 0 }}>
          Careers. Send us your CV
        </H2>

        <Form onSubmit={this.props.handleSubmit}>
          <FormSelectContainer style={{ marginTop: 40, marginBottom: 36 }}>
            <Select
              options={positionData}
              optionToString={positionToString}
              optionToKey={positionToString}
              onSelect={this.handlePositionSelect}
              selected={this.props.values.position}
              placeholder="Select position"
            />
          </FormSelectContainer>
          <FormInputContainer>
            <FastField
              name="name"
              render={({ field }) => (
                <Input type="text" placeholder="Name" {...field} />
              )}
            />
          </FormInputContainer>
          <FormInputContainer>
            <FastField
              name="lastname"
              render={({ field }) => (
                <Input type="text" placeholder="Last name" {...field} />
              )}
            />
          </FormInputContainer>
          <FormInputContainer>
            <Input
              name="phone"
              onChange={this.handlePhoneChange}
              type="tel"
              placeholder="Mobile Phone"
              value={this.props.values.phone}
            />
          </FormInputContainer>
          <FormTextareaContainer style={{ marginTop: 36 }}>
            <FastField
              name="comment"
              render={({ field }) => (
                <Textarea placeholder="Comments" {...field} />
              )}
            />
          </FormTextareaContainer>
          <FormInputContainer style={{ marginTop: 32 }}>
            <FastField
              name="link"
              render={({ field }) => (
                <Input
                  type="text"
                  placeholder="Link to your CV, ex. http://"
                  {...field}
                />
              )}
            />
          </FormInputContainer>
          <FormFileInputContainer style={{ marginTop: 32 }}>
            <Input
              type="file"
              onChange={this.handleFileInputChange}
              label={
                this.props.values.file
                  ? this.props.values.file.name
                  : "Upload CV file"
              }
            />
          </FormFileInputContainer>
          <FormInputContainer style={{ marginTop: 32 }}>
            <Button type="submit" label="Send" />
          </FormInputContainer>
          <ul>
            {Object.keys(this.props.errors).map(key => (
              <li key={key}>
                <ErrorMessage name={key} />
              </li>
            ))}
          </ul>
        </Form>
      </React.Fragment>
    );
  }
}

const CVForm = {
  mapPropsToValues: () => ({
    name: "",
    lastname: "",
    phone: "",
    position: null,
    link: "",
    comment: "",
    file: "",
  }),
  validateOnBlur: false,
  validateOnChange: false,
  validationSchema: Yup.object().shape({
    name: Yup.string().required(),
    lastname: Yup.string().required(),
    comment: Yup.string().notRequired(),
    position: Yup.object().required(),
    link: Yup.string()
      .nullable()
      .url("Must be a valid URL")
      .required("Link to CV is required"),
    file: Yup.mixed()
      .nullable()
      .required(),
  }),
  handleSubmit: (values, formikBag) => {
    const formData = new FormData();
    Object.keys(values).forEach(key => {
      formData.append(key, values[key]);
      console.log(key, values[key]);
    });
    console.group("Form Data");
    for (let pair of formData.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`);
    }
    console.groupEnd("Form Data");
  },
};

export default withFormik(CVForm)(Careers);
