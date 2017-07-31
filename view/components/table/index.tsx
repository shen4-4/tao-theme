import React, { Component } from 'react'
import { Table } from 'antd'
import { chunk } from 'lodash'
import { TableProps } from 'antd/lib/table/Table'

interface DTableProps extends TableProps<any> {
  dataSource: Array<any>,
  columns: Array<any>,
  rowKey?: string | ((record: any, index: number) => string);
}

export default class DTable extends Component<DTableProps, any> {

  shouldComponentUpdate(nextProps: DTableProps, nextState: any) {
    if (nextProps.dataSource === this.props.dataSource && nextProps.columns !== this.props.columns) {
      return false
    }
    return true
  }

  render() {
    const { columns, dataSource, rowKey } = this.props
    return (
      <Table
        dataSource={dataSource}
        columns={columns}
        rowKey={rowKey}
        {...this.props}
      />
    )
  }
}
