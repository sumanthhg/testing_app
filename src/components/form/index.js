import React, { useState } from "react";
import { Alert, Button, Checkbox, Form, Input } from "antd";

const DemoForm = () => {
  const [fields, setFields] = useState([]);
  const [status, setStatus] = useState("");
  const onFinish = (values) => {
    setStatus("");
    setTimeout(() => {
      if (values.username === "Sumanth_HG" && values.password === "Sumanth_HG@321") {
        setStatus("SUCCESS");
      } else if (values.username === "Test_User" && values.password === "Test_User@321") {
        setStatus("SUCCESS");
      } else {
        setStatus("FAILURE");
      }
    }, 1500);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onFieldsChange = (newFields) => {
    setFields(newFields);
  };

  const enableBtn = fields.length > 2 && fields[0].value && fields[1].value ? false : true;

  return (
    <>
      <Form
        name='basic'
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        fields={fields}
        onFieldsChange={(_, allFields) => {
          onFieldsChange(allFields);
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
      >
        <Form.Item
          label='Username'
          name='username'
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Password'
          name='password'
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name='remember'
          valuePropName='checked'
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button disabled={enableBtn} type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
      {status !== "" && <Alert message={status} type={status === "SUCCESS" ? "success" : "error"} showIcon />}
      {/* <pre className='language-bash'>{JSON.stringify(fields, null, 2)}</pre> */}
    </>
  );
};

export default DemoForm;
