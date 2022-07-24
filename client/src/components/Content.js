import React from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import { Button, Form, Input, Select } from 'antd';

const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 10,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 10,
  },
};

class Content extends React.Component {
  formRef = React.createRef();
  onPositionChange = (value) => {
    switch (value) {
      case 'Account':
        this.formRef.current.setFieldsValue({
        });
        return;

      case 'CS':
        this.formRef.current.setFieldsValue({
        });
        return;

      case 'Sale':
        this.formRef.current.setFieldsValue({
        });

      case 'Purchase':
        this.formRef.current.setFieldsValue({
        });
    }
  };
  onFinish = (values) => {
    console.log(values);
  };
  onReset = () => {
    this.formRef.current.resetFields();
  };
  
  handleSubmit = ()=>{
    
  }

  render() {
    return (
      <Form {...layout} ref={this.formRef} name="control-ref" onFinish={this.onFinish}>
        <Form.Item
          name="name"
          label="ชื่อผู้ติดต่อ"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="visitor"
          label="ชื่อผู้มาติดต่อ"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="position"
          label="ติดต่อแผนก"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            placeholder="Select a option and change input text above"
            onChange={this.onPositionChange}
            allowClear
          >
            <Option value="Account">Account</Option>
            <Option value="CS">CS</Option>
            <Option value="Sale">Sale</Option>
            <Option value="Purchase">Purchase</Option>
          </Select>
        </Form.Item>
        <Form.Item
          noStyle
          shouldUpdate={(prevValues, currentValues) => prevValues.position !== currentValues.position}
        >
          {({ getFieldValue }) =>
            getFieldValue('position') === 'other' ? (
              <Form.Item
                name="customizePosition"
                label="CustomizePosition"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
            ) : null
          }
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button" onClick={this.onReset}>
            Reset
          </Button>
          
        </Form.Item>
      </Form>
    );
  }
}

export default Content;