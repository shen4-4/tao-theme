import React, { Component } from 'react'
import { Form, Input, Select, Row, Col, Button, Modal } from 'antd'
import {observer, inject} from 'mobx-react';
import { chunk } from 'lodash'
import { WrappedFormUtils } from 'antd/lib/form/Form'
import { FormValue, AuthStore } from '../store'

const Option = Select.Option
const FormItem = Form.Item
const addEditFormField = {}

interface SearhFormownProps {
  cacheInstance: Function,
  formValue: any,
  cacheConfig?: Function,
  type: string,
  query?: Function,
}

export interface SearchFormProps {
  form: WrappedFormUtils,
  authStore: AuthStore,
}

const  RESTYPE = [{ code: 'FUNC', mean: 'FUNC'}, { code: 'MENU', mean: 'MENU'}]

@inject('authStore', 'commonStore')
@observer
export class AddEdit extends Component<SearchFormProps & SearhFormownProps, any> {

  public state = {
    visible: false,
  }

  componentDidMount() {
    this.props.cacheInstance(this)
  }

  private handleSave = () => {
    const { authStore, type, query } = this.props
    if (type === 'update') {
      authStore.authUpdate(authStore.addEditFormValue, () => {
        query && query()
        this.setState({ visible: false })
      })
    } else if (type === 'insert') {
      authStore.authInsert(authStore.addEditFormValue, () => {
        query && query()
        this.setState({ visible: false })
      })
    }
  }

  private handleCancel = () => {
    this.setState({ visible: false })
  }

  public show = () => {
    this.setState({ visible: true })
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { type } = this.props
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
      },
    };
    return (
      <Modal
        title={type === 'update' ? "更新" : "添加"}
        visible={this.state.visible}
        onOk={this.handleSave}
        onCancel={this.handleCancel}
        width="700px"
        okText="确认"
        cancelText="取消"
      >
        <Form className="mb20">
          <FormItem {...formItemLayout} label="parent">
            {getFieldDecorator('parent', {
              rules: [{ required: true, message: 'Please input your parent!' }],
            })(
              <Input placeholder="parent" />
            )}
          </FormItem>
          {
            type !== 'insert' &&
            <FormItem {...formItemLayout} label="id">
              {getFieldDecorator('id', {
                rules: [{ required: true, message: 'Please input your id!' }],
              })(
                <Input placeholder="id" />
              )}
            </FormItem>
          }
          <FormItem {...formItemLayout} label="name">
            {getFieldDecorator('name', {
              rules: [{ required: true, message: 'Please input your name!' }],
            })(
              <Input placeholder="name" />
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="url">
            {getFieldDecorator('url', {
              rules: [{ required: true, message: 'Please input your url!' }],
            })(
              <Input placeholder="url" />
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="restype">
            {getFieldDecorator('restype', {
              rules: [{ required: true, message: 'Please input your restype!' }],
            })(
              <Select>{
                RESTYPE.map((option, index) =>
                  <Option key={index} value={option.code} >{option.mean}</Option>)}
              </Select>
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="rescode">
            {getFieldDecorator('rescode', {
              rules: [{ required: true, message: 'Please input your rescode!' }],
            })(
              <Input placeholder="rescode" />
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="resources">
            {getFieldDecorator('resources', {
              rules: [{ required: true, message: 'Please input your resources!' }],
            })(
              <Input.TextArea autosize={{ minRows: 3, maxRows: 10 }} placeholder="resources" />
            )}
          </FormItem>
        </Form>
      </Modal>
    )
  }
}

export default Form.create<SearhFormownProps>({
  onFieldsChange(props, items) {
    const update = {}
    Object.keys(items).map(key => {
      update[key] = items[key].value
      addEditFormField[key] = items[key]
    })
    props.cacheConfig(update)
  },
  mapPropsToFields(props) {
    const fields = addEditFormField
    Object.keys(props.formValue).map(key => {
      if (fields[key] !== undefined) {
        fields[key].value = props.formValue[key]
      } else {
        fields[key] = { value: props.formValue[key] }
      }
    })
    return fields
  },
})(AddEdit)
