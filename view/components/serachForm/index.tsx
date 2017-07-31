import React, { Component } from 'react'
import { Form, Input, Select, Row, Col, Button } from 'antd'
import { chunk } from 'lodash'
import { WrappedFormUtils } from 'antd/lib/form/Form'
import './index.css'

const Option = Select.Option
const FormItem = Form.Item

interface SearhFormownProps {
  searchList: Array<SearchListValue>
  formValue: any,
  formColsNum?: number,
  onSubmit?: Function,
  clear: Function,
  cacheSearch: Function,
}

export interface SearchFormProps {
  form: WrappedFormUtils
}

export interface SearchListValue {
    key: string,
    type: string,
    label: string,
    onChange?: Function,
    options?: Array<any>,
    value?: string,
    text?: string,
    allowClear?: boolean,
}

class SearchForm extends Component<SearchFormProps & SearhFormownProps, any> {

  getSearchItem(item: SearchListValue) {
    switch (item.type) {
    case 'select': return this.getSelect(item)
    case 'text': return this.getText(item)
    default: this.getText(item); break;
    }
    return [];
  }

  getText(item: SearchListValue) {
    const { getFieldDecorator } = this.props.form
    return getFieldDecorator(item.key)(<Input />)
  }

  getSelect(item: SearchListValue) {
    const { getFieldDecorator } = this.props.form
    return getFieldDecorator(item.key)(
      <Select
        onChange={(value) => { item.onChange && item.onChange(value) }} allowClear={item.allowClear}
      >
        {item.options && item.options.map((option, index) =>
          <Option key={index}
            value={item.value && option[item.value].toString()}
          >{item.text && option[item.text]}</Option>)}
      </Select>)
  }

  renderRow(arr: Array<SearchListValue>, index: number) {
    const { formColsNum } = this.props
    const cols = formColsNum || 4
    const formItemLayout = {
      labelCol: { span: 10 },
      wrapperCol: { span: 14 },
    };
    return (
      <div key={index.toString()} className="clearfix"
        style={{ zIndex: 100 - index, position: 'relative' }}
      >
        {
          arr.map((item, key) => (
            <Col md={24 / cols} key={key}>
              <FormItem {...formItemLayout} label={item.label}>
                {this.getSearchItem(item)}
              </FormItem>
            </Col>
          ))
        }
      </div>
    )
  }

  onSubmit = () => {
    this.props.onSubmit && this.props.onSubmit()
  }

  clear = () => {
    this.props.clear()
  }


  render() {
    const { searchList, formColsNum } = this.props
    const cols = formColsNum || 4
    return (
      <Form className="mb20 search-form">
        <Row gutter={16}>
          {
            chunk(searchList, cols).map((row, index) => this.renderRow(row, index))
          }
        </Row>
        <Row>
          <Col span={12} offset={12} style={{ textAlign: 'right' }}>
            <Button className="mr10" type="primary" onClick={this.onSubmit}>搜索</Button>
            <Button onClick={this.clear}>重置</Button>
          </Col>
        </Row>
      </Form>
    )
  }
}

export default Form.create<SearhFormownProps>({
  onFieldsChange(props, item) {
    const key = Object.keys(item)[0]
    props.cacheSearch({ [key]: item[key].value });
  },
  mapPropsToFields(props) {
    const fields = {}
    props.searchList.map((item: any) => {
      if (typeof (item.key) !== 'string') {
        for (let i = 0; i < item.key.length; i++) {
          fields[item.key[i]] = { value: props.formValue[item.key[i]] }
        }
      } else {
        fields[item.key] = { value: props.formValue[item.key] }
      }
    })
    return fields;
  },
})(SearchForm)
