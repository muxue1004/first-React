import React from 'react';
import 'antd/dist/antd.min.css';
import './index.css';
import { message, Form, Select } from 'antd';
const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const Demo = () => {
  const [form] = Form.useForm();

  const onGenderChange = (value) => {
    switch (value) {
      case value:
        message.info(value)
        break;
    
      default:
        break;
    }
  };
  return (
    <Form {...layout} form={form} name="control-hooks">
      <Form.Item
        name="gender"
        label="Gender"
      >
        <Select
          placeholder="Select a option and change input text above"
          onChange={onGenderChange}
          allowClear
        >
          <Option value="cattail">香蒲</Option>
          <Option value="mulberry">桑葚</Option>
          <Option value="banana">香蕉</Option>
        </Select>
      </Form.Item>
    </Form>
  );
};

export default Demo;